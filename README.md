# 🤖 Pio-Bot PIONIR UGM WhatsApp Bot

Pio-Bot merupakan bot WhatsApp otomatis untuk menjawab pertanyaan seputar PIONIR UGM dengan sistem percakapan interaktif dan FAQ.

## 👥 Tim Pengembang

| Nama | NIM |
|------|-----|
| Varick Zahir Sarjiman | 22/496418/TK/54384 |
| Muhammad Luthfi Attaqi | 22/496427/TK/54387 |

## ✨ Fitur Utama

- **Percakapan Interaktif**: Bot memandu pengguna melalui alur percakapan untuk mengenal mereka
- **Sistem FAQ**: Menjawab pertanyaan umum tentang PIONIR UGM secara otomatis
- **Group Protection**: Hanya merespons pesan personal, tidak di grup

## 🚀 Setup & Installation

### Prerequisites
- Node.js (v14 atau lebih baru)
- npm atau yarn
- WhatsApp di smartphone

### 1. Clone Repository
```bash
git clone <repository-url>
cd whatsapp-bot-pionir
```

### 2. Install Dependencies
```bash
npm install
# atau
yarn install
```

## 🏃‍♂️ Cara Menjalankan

### Development Mode
```bash
npm start
# atau
node index.js
```

## 📱 Setup WhatsApp Integration

### 1. Jalankan Bot
```bash
npm start
```

### 2. Scan QR Code
Setelah bot berjalan, akan muncul QR code di terminal:
```
🔄 QR Code received, please scan with your WhatsApp mobile app:

█▀▀▀▀▀█ █▄█ ▄▄▄█ █▀▀▀▀▀█
█ ███ █ ▄▀█▄▀█▄█ █ ███ █
█ ▀▀▀ █ █▀▄▄ ▀█▀ █ ▀▀▀ █
...

📱 Open WhatsApp on your phone > Settings > Linked Devices > Link a Device
```

### 3. Proses Login WhatsApp
1. Buka WhatsApp di smartphone
2. Pilih **Settings** (⚙️)
3. Pilih **Linked Devices**
4. Tap **Link a Device**
5. Scan QR code yang muncul di terminal
6. Tunggu hingga muncul pesan sukses

## 📊 Demo & Contoh Penggunaan

### Startup Process
```
✅ PIONIR UGM WhatsApp Bot is ready and connected!
🤖 Bot is now listening for incoming messages...
```

### Contoh Percakapan

#### 1. **Greeting & Name Collection**
```
User: Halo
Bot: Halo GAMADA! Aku adalah chatbot PIONIR UGM yang siap membantu menjawab pertanyaanmu. Siapa nama kamu?

User: Nama saya Budi
Bot: Senang berkenalan denganmu, Budi! 😊
```

#### 2. **General FAQ**
```
User: Apa itu PIONIR UGM?
Bot: [Jawaban FAQ tentang PIONIR UGM]

User: Kapan pendaftaran dibuka?
Bot: [Jawaban FAQ tentang jadwal pendaftaran]
```

### Log Output Example
```
📨 Received message from 6281234567890@c.us: "halo"
🔄 Current user session state: initial
✅ Match found with rule: /hai|halo|hello/i
📤 Sent response: "Halo GAMADA! Aku adalah chatbot..."

🧹 Cleaned up old session for user: 6281234567890@c.us
```

## 🛠️ Troubleshooting

### Bot tidak merespons
- Pastikan bot sudah terkoneksi dengan WhatsApp
- Cek apakah pesan dikirim ke personal chat (bukan grup)
- Periksa log di terminal untuk error

### QR Code tidak muncul
```bash
# Hapus folder .wwebjs_auth dan restart
rm -rf .wwebjs_auth
npm start
```

### Dependencies Error
```bash
# Update dependencies
npm update
# atau install ulang
rm -rf node_modules package-lock.json
npm install
```

## 🔧 Configuration

Untuk kustomisasi lebih lanjut, edit file:
- `faq_data.js` - untuk menambah/edit FAQ
- `index.js` - untuk mengubah logika percakapan
- Session timeout bisa diubah di variabel `twentyFourHoursAgo`

## 📞 Support

Jika mengalami masalah, pastikan:
1. Node.js versi terbaru terinstall
2. Koneksi internet stabil
3. WhatsApp di smartphone aktif dan terkoneksi
4. File `faq_data.js` tersedia dan valid

---
