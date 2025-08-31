module.exports = [
  // 1. Inisiasi perkenalan
  {
    regex: /(halo|hai|hi|selamat\s+(pagi|siang|sore|malam)|assalamualaikum)/i,
    answer: "Halo GAMADA! 🎉 Perkenalkan aku Pio-Bot, chatbot resmi PIONIR Gadjah Mada yang siap membantu kamu. Boleh kah aku tahu namamu?"
  },

  // 2. Mengenal nama pengguna
  {
    regex: /\b(nama\s+saya|panggil\s+aku|namaku|nama\s+aku|nama\s+gw|nama\s+gue|aku|saya)\s+([a-zA-Z\s]+)/i,
    answer: "Senang bertemu denganmu, $2! 👋 Semoga kamu bisa menjadi bagian dari Gadjah Mada Muda yang gemilang. Bolehkan aku mengenalmu lebih jauh?",
    hasCaptureGroup: true
  },

  // 3. Konfirmasi untuk melanjutkan
  {
    regex: /\b(iya|ya|boleh|siap|tentu|lanjut|oke|ayok)\b/i,
    answer: "Asyik! Kamu berasal dari fakultas apa? Cerita dong!",
    type: "convo-start"
  },
  {
    regex: /\b(tidak|nggak|jangan|gajadi|nanti|males)\b/i,
    answer: "Tidak apa-apa! Kalau begitu, ada yang ingin kamu tanyakan atau ceritakan tentang PIONIR UGM?",
    type: "convo-end"
  },

  // 4. Mengenal Fakultas
  {
    regex: /\b(ft|teknik)\b/i,
    answer: "Selamat datang, Engineer Muda! 🔧 Kamu adalah para perancang masa depan. Cerita dong, bagaimana perasaanmu menjadi Engineer Muda?"
  },
  {
    regex: /\b(fkt|kehutanan)\b/i,
    answer: "Halo, Rimbawan Muda! 🌳 Terima kasih sudah menjaga hutan Indonesia! Bagaimana perasaanmu menjadi bagian dari Fakultas Kehutanan?"
  },
  {
    regex: /\b(fk|fkkmk|kedokteran|kesehatan\s+masyarakat)\b/i,
    answer: "Halo, Medika Muda! 🩺 Kamu adalah calon-calon penyelamat bangsa! Rasanya pasti luar biasa bisa menjadi bagian dari FK-KMK UGM, ya?"
  },
  {
    regex: /\b(fkh|kedokteran\s+hewan)\b/i,
    answer: "Selamat datang, Veteriner Muda! 🐾 Masa depan hewan-hewan ada di tanganmu! Bagaimana perasaanmu menjadi bagian dari Fakultas Kedokteran Hewan?"
  },
  {
    regex: /\b(fkg|kedokteran\s+gigi)\b/i,
    answer: "Halo, Dental Muda! 🦷 Senyum semua orang ada di tanganmu. Bagaimana perasaanmu menjadi bagian dari Fakultas Kedokteran Gigi?"
  },
  {
    regex: /\b(fisipol|isipol|ilmu\s+sosial\s+dan\s+politik)\b/i,
    answer: "Halo, Insan Sosial dan Politik Muda! 🗳️ Dunia ada di tanganmu. Apa harapan terbesarmu saat menjadi mahasiswa FISIPOL?"
  },
  {
    regex: /\b(fib|ilmu\s+budaya)\b/i,
    answer: "Selamat datang, Sastrawan Muda! 📜 Kamu akan menjadi penjaga kekayaan budaya bangsa. Bagaimana perasaanmu menjadi bagian dari Fakultas Ilmu Budaya?"
  },
  {
    regex: /\b(fh|hukum)\b/i,
    answer: "Selamat datang, Sanksi Muda! ⚖️ Semoga kamu bisa menjadi penegak keadilan yang hebat di masa depan. Bagaimana perasaanmu menjadi bagian dari Fakultas Hukum?"
  },
  {
    regex: /\b(fmipa|mipa|matematika\s+dan\s+ilmu\s+pengetahuan\s+alam)\b/i,
    answer: "Selamat datang, Scientist Muda! 🔬 Pikiranmu adalah kunci untuk memecahkan misteri alam semesta. Cerita dong, apa yang paling kamu suka dari MIPA?"
  },
  {
    regex: /\b(faperta|pertanian)\b/i,
    answer: "Selamat datang, Agronomi Muda! 🌾 Masa depan pangan Indonesia ada di pundakmu! Cerita dong, kenapa memilih Fakultas Pertanian?"
  },
  {
    regex: /\b(fapet|peternakan)\b/i,
    answer: "Selamat datang, Peternak Muda! 🐄 Kamu akan menjadi pahlawan protein hewani. Bagaimana perasaanmu menjadi bagian dari Fakultas Peternakan?"
  },
  {
    regex: /\b(fpsi|psikologi)\b/i,
    answer: "Selamat datang, Psikolog Muda! 🧠 Kamu akan menjadi pendengar yang baik untuk banyak orang. Cerita dong, apa yang membuatmu tertarik di bidang psikologi?"
  },
  {
    regex: /\b(ftp|teknologi\s+pertanian)\b/i,
    answer: "Selamat datang, Tekno-Agro Muda! 🚜 Kamu adalah inovator di bidang pangan. Bagaimana perasaanmu menjadi bagian dari FTP UGM?"
  },
  {
    regex: /\b(pascasarjana|sekolah\s+pascasarjana)\b/i,
    answer: "Selamat datang, Cendekiawan Muda! 🎓 Kamu adalah peneliti dan akademisi masa depan. Bagaimana perasaanmu menjadi bagian dari Sekolah Pascasarjana?"
  },
  {
    regex: /\b(sv|sekolah\s+vokasi)\b/i,
    answer: "Halo, Vokasioner Muda! 🛠️ Kamu adalah pahlawan-pahlawan terampil yang akan membangun negeri. Cerita dong, kenapa memilih Sekolah Vokasi?"
  },
  {
    regex: /\b(fgeo|geografi)\b/i,
    answer: "Selamat datang, Geografer Muda! 🗺️ Kamu akan menguasai peta dunia. Cerita dong, kenapa memilih Fakultas Geografi?"
  },
  {
    regex: /\b(ffil|filsafat|fakultas\s+filsafat)\b/i,
    answer: "Halo, Pemikir Muda! 🤔 Kamu akan menjadi penjelajah kebijaksanaan. Bagaimana perasaanmu menjadi bagian dari Fakultas Filsafat?"
  },
  {
    regex: /\b(ff|farmasi)\b/i,
    answer: "Selamat datang, Apoteker Muda! 💊 Semoga kamu bisa menciptakan banyak penemuan hebat. Bagaimana perasaanmu menjadi bagian dari Fakultas Farmasi?"
  },
  {
    regex: /\b(feb|ekonomika\s+dan\s+bisnis)\b/i,
    answer: "Halo, Pebisnis Muda! 📈 Siap untuk mengguncang dunia finansial? Bagaimana perasaanmu menjadi mahasiswa FEB UGM?"
  },
  {
    regex: /\b(fbio|biologi)\b/i,
    answer: "Selamat datang, Biologis Muda! 🧬 Dunia mikro dan makro ada di hadapanmu. Cerita dong, apa yang membuatmu tertarik di Fakultas Biologi?"
  },

  // 5. Respons terhadap cerita pengguna
  {
    regex: /(.*)\b(senang|bahagia|bangga|antusias|tidak\s+sabar|excited)\b(.*)/i,
    answer: "Wah, aku ikut senang mendengarnya! Semangatmu sangat menginspirasi. Rasanya pasti luar biasa bisa menjadi bagian dari keluarga Gadjah Mada Muda. Semoga kamu bisa meraih banyak prestasi di sana! ✨",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(deg-degan|cemas|khawatir|takut|gugup|was-was)\b(.*)/i,
    answer: "Aku mengerti perasaanmu. Wajar kok kalau merasa deg-degan. Tapi jangan khawatir, PIONIR Gadjah Mada hadir untuk membantu kamu beradaptasi. Kami akan selalu ada di sini untuk mendukungmu! 💪",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(tidak\s+tahu|belum\s+tahu|bingung|meraba-raba|belum\s+ada\s+bayangan)\b(.*)/i,
    answer: "Tidak apa-apa, itu normal! PIONIR Gadjah Mada adalah tempat yang tepat untuk memulai. Kamu akan menemukan banyak hal baru dan teman-teman hebat di sana. Tetap semangat, ya! 😊",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(penasaran|ingin\s+tahu|tertarik|penasaran)\b(.*)/i,
    answer: "Rasa penasaranmu adalah kunci untuk menjadi Gadjah Mada Muda yang luar biasa! PIONIR Gadjah Mada adalah platform terbaik untuk menjelajahi semua potensi diri. Aku yakin kamu akan menemukan banyak hal menarik! 🌟",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(campur\s+aduk|campur-campur|sulit\s+dijelaskan|tidak\s+karuan|sedih)\b(.*)/i,
    answer: "Perasaanmu valid! Setiap awal perjalanan pasti ada tantangannya. Tapi percayalah, di PIONIR Gadjah Mada, kamu akan menemukan dukungan dan bimbingan untuk menjalani semua itu. Kita hadapi bersama! 🤗",
    hasCaptureGroup: true
  },

  // Kategori: Umum (General Information)
  {
    regex: /(.*)\b(kapan|tanggal|waktu|pelaksanaan)\b(.*)\b(pionir|ospek)\b(.*)/i,
    answer: "PIONIR Gadjah Mada akan dilaksanakan pada 4 - 16 Agustus 2025.",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(apa|bedanya)\b(.*)\b(universitas|fakultas|soft\s+skill)\b(.*)/i,
    answer: "PIONIR Universitas dan PIONIR Soft Skill adalah kegiatan di tingkat universitas dengan anggota dari berbagai fakultas, sedangkan PIONIR Fakultas dikhususkan untuk mahasiswa baru dari fakultas yang sama.",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(apa\s+yang\s+disiapkan|harus\s+disiapkan|sebelum\s+acara)\b(.*)\b(pionir|ospek|hari-h)\b(.*)/i,
    answer: "Anda harus membaca dan memahami ketentuan atribut dari Simaster atau laman resmi PIONIR, serta menyimak materi di eLOK.",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(kantin|makanan|konsumsi)\b(.*)\b(selama|pionir|acara)\b(.*)/i,
    answer: "Selama PIONIR Gadjah Mada, GAMADA akan mendapatkan konsumsi.",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(alur|kegiatan|agenda)\b(.*)\b(pionir)\b(.*)/i,
    answer: "Seluruh alur kegiatan dapat diakses melalui laman resmi PIONIR Gadjah Mada.",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(apa\s+itu|fungsi|gunanya)\b(.*)\b(sso)\b(.*)/i,
    answer: "SSO (Single Sign On) adalah sistem terintegrasi dengan email UGM. Digunakan untuk mengakses Simaster dan eLOK setelah Anda melakukan registrasi ulang.",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(cara|mendapatkan)\b(.*)\b(akun\s+sso)\b(.*)/i,
    answer: "Untuk mendapatkan akun SSO GAMADA, Anda harus melakukan registrasi.",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(belum\s+punya|belum\s+ada|belum\s+memiliki)\b(.*)\b(akun\s+sso|sso)\b(.*)/i,
    answer: "Hubungi DPP (Direktorat Pendidikan dan Pengajaran) melalui WA: +628112941949, Email: umugm@ugm.ac.id, Instagram: @admisiugm, atau Twitter: @admisiugm.",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(tidak\s+bisa|gagal)\b(.*)\b(login\s+sso|masuk\s+sso)\b(.*)/i,
    answer: 'Pastikan sudah klik menu "SSO UGM". Jika masih bermasalah, hubungi DPP atau DTI (Direktorat Teknologi Informasi) di +628112928282 atau dti@ugm.ac.id.',
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(gugus|kelompok|group\s+chat|group\s+wa)\b(.*)/i,
    answer: "Informasi grup chat gugus/kelompok dapat diakses melalui Simaster.",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(kapan|tanggal|waktu)\b(.*)\b(informasi|info)\b(.*)\b(gugus|kelompok)\b(.*)/i,
    answer: "Informasi terkait gugus atau kelompok akan diinformasikan melalui media sosial resmi PIONIR Gadjah Mada 2025.",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(izin|berhalangan|tidak\s+hadir)\b(.*)\b(pionir|acara|kegiatan)\b(.*)/i,
    answer: "Pantau media sosial dan laman resmi PIONIR Gadjah Mada untuk info mekanisme perizinan.",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(perbedaan|apa\s+itu|arti)\b(.*)\b(nim|niu|nif)\b(.*)/i,
    answer: "NIM (Nomor Induk Mahasiswa) adalah nomor lengkap yang terdiri dari NIU (Nomor Induk Universitas) dan NIF (Nomor Induk Fakultas). Contoh NIM: 25/123456/SV/12345 (25 = Tahun Angkatan, 123456 = NIU, SV = Kode Fakultas, 12345 = NIF).",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(bukan|tidak|no)\b(.*)\b(boleh)\b(.*)/i,
    answer: "Tidak diperbolehkan. Aturan PIONIR Gadjah Mada harus ditaati.",
    hasCaptureGroup: true
  },

  // Kategori: Perlengkapan (Equipment/Attire)
  {
    regex: /(.*)\b(wajib|harus|pakai|mengenakan)\b(.*)\b(jas\s+almamater)\b(.*)/i,
    answer: "Ya, wajib mengenakan jas almamater selama kegiatan PIONIR Gadjah Mada 2025.",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(rambut|potong\s+rambut|pendek|rapi)\b(.*)/i,
    answer: "Tidak harus dipotong pendek, tetapi harus rapi dan berwarna natural.",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(bawahan|celana|rok|jeans)\b(.*)/i,
    answer: "Disarankan menggunakan bawahan berbahan kain.",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(sepatu)\b(.*)\b(warna|berwarna)\b(.*)/i,
    answer: "Disarankan menggunakan sepatu dengan warna dominan hitam.",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(ikat\s+pinggang|sabuk)\b(.*)/i,
    answer: "Ya, wajib menggunakan ikat pinggang.",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(tidak\s+punya|tidak\s+memiliki|lupa\s+bawa)\b(.*)\b(atribut)\b(.*)/i,
    answer: "Wajib menggunakan atribut sesuai ketentuan.",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(tali|warna\s+tali)\b(.*)\b(id\s+card)\b(.*)/i,
    answer: "Tidak ada ketentuan warna khusus.",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(tas|selain\s+ransel)\b(.*)/i,
    answer: "Disarankan membawa tas ransel.",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(laptop|smartphone|hp|ponsel)\b(.*)/i,
    answer: "Boleh membawa laptop/smartphone.",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(alat\s+makan|peralatan\s+makan|alat\s+minum|tumbler|botol)\b(.*)/i,
    answer: "Wajib membawa peralatan makan dan minum pribadi.",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(plastik|sekali\s+pakai|sendok\s+plastik|botol\s+plastik)\b(.*)/i,
    answer: "Tidak disarankan menggunakan peralatan makan sekali pakai.",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(pas\s+foto|ukuran\s+foto)\b(.*)\b(id\s+card)\b(.*)/i,
    answer: "Pas foto yang digunakan berwarna ukuran 4x6.",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(warna\s+caping|cat\s+caping|caping)\b(.*)\b(kurang\s+sesuai|tidak\s+sesuai)\b(.*)/i,
    answer: "Tidak diperbolehkan, harus sesuai ketentuan.",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(pengecatan\s+caping|cara\s+cat\s+caping)\b(.*)/i,
    answer: "Caping harus dicat merata. Dapat diulang beberapa kali.",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(ukuran\s+caping|bentuk\s+caping)\b(.*)/i,
    answer: "Sesuai panduan.",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(warna\s+cat\s+caping)\b(.*)\b(tidak\s+dapat|sulit\s+dicari)\b(.*)/i,
    answer: "Diusahakan sesuai ketentuan, atau gunakan warna yang memiliki kesamaan palet dengan yang ditentukan.",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(ukuran\s+diameter\s+caping|diameter\s+caping)\b(.*)/i,
    answer: "Diusahakan sesuai ketentuan. Toleransi maksimal 1-2 cm.",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(kode\s+warna)\b(.*)\b(asturo|puspakara)\b(.*)/i,
    answer: "Harus sesuai dengan panduan.",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(gagang|gagang\s+puspakara|selain\s+stik\s+es\s+krim)\b(.*)/i,
    answer: "Tidak, wajib stik es krim. Jika tidak ada, gunakan bahan serupa.",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(lakban|tebal\s+lakban)\b(.*)\b(3.5\s+cm)\b(.*)/i,
    answer: "Sangat disarankan untuk tetap menyesuaikan ukuran lakban dengan ketentuan.",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(karton|tebal\s+karton|ukuran\s+karton)\b(.*)\b(puspakara)\b(.*)/i,
    answer: "Untuk pembuatan Puspakara, diperlukan 2 lembar karton ukuran 77x66 cm dengan ketebalan 1 mm.",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(kertas\s+asturo)\b(.*)\b(sisa|selebrasi)\b(.*)/i,
    answer: "Diusahakan kertas asturo yang dibawa berukuran 10x10 cm hingga 15x15 cm.",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(warna\s+kerudung|kerudung\s+pas\s+foto)\b(.*)/i,
    answer: "Warna kerudung di pas foto adalah hitam.",
    hasCaptureGroup: true
  },

  // Kategori: Sinkronus dan Action Plan
  {
    regex: /(.*)\b(apa\s+itu)\b(.*)\b(action\s+plan)\b(.*)/i,
    answer: "Action Plan adalah kegiatan pengenalan lingkungan kampus dan memupuk kepekaan sosial.",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(alat\s+tulis|peralatan\s+tulis|pulpen|pensil)\b(.*)/i,
    answer: "Wajib membawa alat tulis sesuai dengan Rilis Agenda dan Atribut PIONIR Gadjah Mada 2025.",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(lupa\s+bawa|tidak\s+bawa|tidak\s+ada)\b(.*)\b(peralatan)\b(.*)/i,
    answer: "Diperbolehkan meminjam ke sesama GAMADA, tapi disarankan membawa sendiri.",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(wajib|harus|pakai)\b(.*)\b(almamater)\b(.*)\b(action\s+plan)\b(.*)/i,
    answer: "Ya, wajib sesuai dengan Booklet Action Plan 2025.",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(tata\s+cara|pakaian)\b(.*)\b(action\s+plan)\b(.*)/i,
    answer: "Tata cara berpakaian tertera pada Booklet Action Plan 2025.",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(kapan|tanggal|waktu)\b(.*)\b(action\s+plan)\b(.*)/i,
    answer: "Kegiatan Action Plan akan dilaksanakan pada 10-15 Agustus 2025.",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(kendaraan|pribadi|motor|mobil)\b(.*)/i,
    answer: "Ya, boleh menggunakan kendaraan pribadi, tapi harus berhati-hati.",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(apa\s+yang\s+harus\s+dilakukan|kegiatan|aktivitas)\b(.*)\b(action\s+plan)\b(.*)/i,
    answer: "Berbaur, berinteraksi, dan berkegiatan bersama masyarakat.",
    hasCaptureGroup: true
  },

  // Kategori: Learning Management System
  {
    regex: /(.*)\b(enrollment\s+key|key\s+elok)\b(.*)/i,
    answer: "Informasi enrollment key dapat diakses melalui Simaster.",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(apa\s+itu)\b(.*)\b(elok|e-lok)\b(.*)/i,
    answer: "eLOK UGM adalah sistem e-learning yang dikembangkan oleh UGM untuk mendukung pembelajaran digital.",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(tidak\s+bisa|gagal|error)\b(.*)\b(login\s+elok)\b(.*)/i,
    answer: "Jika terjadi permasalahan login, Anda bisa membuat tiket baru atau kirim email ke pika@ugm.ac.id, sertakan screenshot.",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(materi)\b(.*)\b(elok|e-lok)\b(.*)/i,
    answer: "Semua materi hanya dapat diakses melalui eLOK.",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(elok|e-lok)\b(.*)\b(ter-reset|reset|ulang)\b(.*)/i,
    answer: "Cek koneksi, refresh halaman, bersihkan browser cache, atau logout dan login kembali.",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(course|elok|e-lok)\b(.*)\b(hilang)\b(.*)/i,
    answer: "Cek koneksi, refresh halaman, bersihkan browser cache, atau logout dan login kembali.",
    hasCaptureGroup: true
  },
  {
    regex: /(.*)\b(perbedaan)\b(.*)\b(modul|course)\b(.*)/i,
    answer: "Modul adalah bagian dari sebuah course yang berisi materi spesifik. Course adalah program pembelajaran lengkap yang terdiri dari beberapa modul.",
    hasCaptureGroup: true
  },
];