const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const faqData = require("./faq_data.js");

// In-memory storage for user conversations and states
const userSessions = {};

const authorizedNumber = "628118491177@c.us";

// Helper function to get or create user session
function getUserSession(userId) {
  if (!userSessions[userId]) {
    userSessions[userId] = {
      userName: null,
      conversationState: "initial",
      lastMessageTime: Date.now(),
    };
  }
  return userSessions[userId];
}

// Helper function to clean old sessions (sessions older than 24 hours)
function cleanOldSessions() {
  const twentyFourHoursAgo = Date.now() - 24 * 60 * 60 * 1000;
  Object.keys(userSessions).forEach((userId) => {
    if (userSessions[userId].lastMessageTime < twentyFourHoursAgo) {
      delete userSessions[userId];
      console.log(`🧹 Cleaned up old session for user: ${userId}`);
    }
  });
}

// Clean old sessions every hour
setInterval(cleanOldSessions, 60 * 60 * 1000);

// Initialize WhatsApp client with local authentication
const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  },
});

// Event handler for QR code generation
client.on("qr", (qr) => {
  console.log(
    "🔄 QR Code received, please scan with your WhatsApp mobile app:"
  );
  console.log("");
  qrcode.generate(qr, { small: true });
  console.log("");
  console.log(
    "📱 Open WhatsApp on your phone > Settings > Linked Devices > Link a Device"
  );
});

// Event handler when client is ready and authenticated
client.on("ready", () => {
  console.log("✅ PIONIR UGM WhatsApp Bot is ready and connected!");
  console.log("🤖 Bot is now listening for incoming messages...");
});

// Event handler for authentication success
client.on("authenticated", () => {
  console.log("🔐 WhatsApp client authenticated successfully");
});

// Event handler for authentication failure
client.on("auth_failure", (msg) => {
  console.error("❌ Authentication failed:", msg);
});

// Event handler for client disconnection
client.on("disconnected", (reason) => {
  console.log("🔌 Client was disconnected:", reason);
});

// Main message processing logic with conversation state management
client.on("message", async (message) => {
  try {
    if (message.from !== authorizedNumber) {
      console.log(
        `🚫 Received message from unauthorized number: ${message.from}`
      );
      return;
    }
    // Skip messages sent by the bot itself
    if (message.fromMe) return;

    // Skip group messages
    if (message.from.includes("@g.us")) return;

    // Get user session for conversation tracking
    const userId = message.from;
    const userSession = getUserSession(userId);
    userSession.lastMessageTime = Date.now();

    // Get message text for processing
    const messageText = message.body.toLowerCase().trim();

    // Skip empty messages
    if (!messageText) return;

    console.log(`\n📨 Received message from ${userId}: "${message.body}"`);
    console.log(
      `🔄 Current user session state: ${userSession.conversationState}`
    );

    let responseSent = false;

    // --- Handle Conversation Flow Based on State ---
    if (userSession.conversationState === "initial") {
      const greetingRule = faqData.find(
        (rule) =>
          rule.regex.test(messageText) && rule.answer.includes("Halo GAMADA!")
      );
      if (greetingRule) {
        await message.reply(greetingRule.answer);
        userSession.conversationState = "waitingForName";
        responseSent = true;
      }
    } else if (userSession.conversationState === "waitingForName") {
      const nameRule = faqData.find(
        (rule) => rule.regex.test(messageText) && rule.hasCaptureGroup
      );
      if (nameRule) {
        const match = message.body.match(nameRule.regex);
        if (match && match[1]) {
          const extractedName = match[1].trim();
          userSession.userName = extractedName;
          const responseText = nameRule.answer.replace("$1", extractedName);
          await message.reply(responseText);
          userSession.conversationState = "waitingForConsent";
          responseSent = true;
        }
      } else {
        await message.reply(
          "Maaf, nama yang kamu berikan tidak terdeteksi. Tolong coba lagi dengan format seperti 'nama saya [nama kamu]'."
        );
        responseSent = true;
      }
    }

    const generalInquiryRule = faqData.find(
      (rule) => rule.regex.test(messageText) && rule.type === "general-inquiry"
    );
    if (generalInquiryRule) {
      await message.reply(generalInquiryRule.answer);
      userSession.conversationState = "general_qa";
      responseSent = true;
    }

    // --- Fallback to General FAQ and Default Response ---
    if (!responseSent) {
      let responseText = null;

      // First, try to match against all rules (general Q&A)
      for (const rule of faqData) {
        const match = messageText.match(rule.regex);
        if (match) {
          responseText = rule.answer;

          // Handle dynamic replacement for name and faculty rules
          if (rule.hasCaptureGroup && match[2]) {
            const extractedName = match[2].trim();
            responseText = responseText.replace("$2", extractedName);
          }

          await message.reply(responseText);
          console.log(`✅ Match found with rule: ${rule.regex}`);
          console.log(`📤 Sent response: "${responseText}"`);
          responseSent = true;
          break;
        }
      }
    }

    // --- Final Fallback Message ---
    if (!responseSent) {
      const fallbackMessage =
        "Maaf, Pio-Bot belum mengerti pertanyaanmu. Coba ulangi pertanyaanmu dengan pertanyaan terkait PIONIR UGM atau Inforamasi Umum UGM lainnya 😊";
      await message.reply(fallbackMessage);
      console.log(`📤 Sent fallback response: "${fallbackMessage}"`);
    }
  } catch (error) {
    console.error("❌ Error processing message:", error);
    try {
      await message.reply(
        "Maaf, terjadi kesalahan dalam memproses pesan Anda. Silakan coba lagi."
      );
    } catch (replyError) {
      console.error("❌ Error sending error message:", replyError);
    }
  }
});

client.initialize();
