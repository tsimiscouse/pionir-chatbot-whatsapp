module.exports = [
  // 1. Inisiasi perkenalan
  {
    regex: /(halo|hai|hi|selamat\s+(pagi|siang|sore|malam)|assalamualaikum)/i,
    answer:
      "Halo GAMADA! 🎉 Perkenalkan aku Pio-Bot, chatbot PIONIR Gadjah Mada yang siap membantu kamu. Boleh kah Pio-Bot tahu namamu?",
  },

  // 2. Mengenal nama pengguna
  {
    regex: /^(?:nama\s+saya|namaku|nama\s+aku|nama\s+gw)\s+([a-zA-Z\s]+)/i,
    answer:
      "Senang bertemu denganmu, $1! 👋 Semoga kamu bisa menjadi bagian dari Gadjah Mada Muda yang gemilang. Ada kah yang bisa Pio-Bot bantu?",
    hasCaptureGroup: true,
  },

  {
    regex:
      /\b(ingin\s+bertanya|bertanya\s+tentang|tanya\s+terkait|ada\s+pertanyaan|mau\s+tanya|tanya)\b/i,
    answer:
      "Baik, silakan sampaikan pertanyaanmu terkait *PIONIR UGM* ataupun *Informasi Umum UGM*. Pio-Bot siap membantu! 😊",
    type: "general-inquiry",
  },

  // Kategori: Umum (General Information)
  {
    regex:
      /(.*)\b(kapan|tanggal|waktu|pelaksanaan)\b(.*)\b(pionir|ospek)\b(.*)/i,
    answer:
      "PIONIR Gadjah Mada akan dilaksanakan pada 4 - 16 Agustus 2025.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex:
      /(.*)\b(apa|bedanya)\b(.*)\b(universitas|fakultas|soft\s+skill)\b(.*)/i,
    answer:
      "PIONIR Universitas dan PIONIR Soft Skill adalah kegiatan di tingkat universitas dengan anggota dari berbagai fakultas, sedangkan PIONIR Fakultas dikhususkan untuk mahasiswa baru dari fakultas yang sama.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex:
      /(.*)\b(apa\s+yang\s+disiapkan|harus\s+disiapkan|sebelum\s+acara)\b(.*)\b(pionir|ospek|hari-h)\b(.*)/i,
    answer:
      "Anda harus membaca dan memahami ketentuan atribut dari Simaster atau laman resmi PIONIR, serta menyimak materi di eLOK.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex:
      /(.*)\b(kantin|makanan|konsumsi)\b(.*)\b(selama|pionir|acara)\b(.*)/i,
    answer:
      "Selama PIONIR Gadjah Mada, GAMADA akan mendapatkan konsumsi.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex: /(.*)\b(alur|kegiatan|agenda)\b(.*)\b(pionir)\b(.*)/i,
    answer:
      "Seluruh alur kegiatan dapat diakses melalui laman resmi PIONIR Gadjah Mada.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex: /(.*)\b(apa\s+itu|fungsi|gunanya)\b(.*)\b(sso)\b(.*)/i,
    answer:
      "SSO (Single Sign On) adalah sistem terintegrasi dengan email UGM. Digunakan untuk mengakses Simaster dan eLOK setelah Anda melakukan registrasi ulang.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex: /(.*)\b(cara|mendapatkan)\b(.*)\b(akun\s+sso)\b(.*)/i,
    answer:
      "Untuk mendapatkan akun SSO GAMADA, Anda harus melakukan registrasi.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex:
      /(.*)\b(belum\s+punya|belum\s+ada|belum\s+memiliki)\b(.*)\b(akun\s+sso|sso)\b(.*)/i,
    answer:
      "Hubungi DPP (Direktorat Pendidikan dan Pengajaran) melalui WA: +628112941949, Email: umugm@ugm.ac.id, Instagram: @admisiugm, atau Twitter: @admisiugm.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex: /(.*)\b(tidak\s+bisa|gagal)\b(.*)\b(login\s+sso|masuk\s+sso)\b(.*)/i,
    answer:
      'Pastikan sudah klik menu "SSO UGM". Jika masih bermasalah, hubungi DPP atau DTI (Direktorat Teknologi Informasi) di +628112928282 atau dti@ugm.ac.id.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?',
    hasCaptureGroup: true,
  },
  {
    regex: /(.*)\b(gugus|kelompok|group\s+chat|group\s+wa)\b(.*)/i,
    answer:
      "Informasi grup chat gugus/kelompok dapat diakses melalui Simaster.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex:
      /(.*)\b(kapan|tanggal|waktu)\b(.*)\b(informasi|info)\b(.*)\b(gugus|kelompok)\b(.*)/i,
    answer:
      "Informasi terkait gugus atau kelompok akan diinformasikan melalui media sosial resmi PIONIR Gadjah Mada 2025.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex:
      /(.*)\b(izin|berhalangan|tidak\s+hadir)\b(.*)\b(pionir|acara|kegiatan)\b(.*)/i,
    answer:
      "Pantau media sosial dan laman resmi PIONIR Gadjah Mada untuk info mekanisme perizinan.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex: /(.*)\b(perbedaan|apa\s+itu|arti)\b(.*)\b(nim|niu|nif)\b(.*)/i,
    answer:
      "NIM (Nomor Induk Mahasiswa) adalah nomor lengkap yang terdiri dari NIU (Nomor Induk Universitas) dan NIF (Nomor Induk Fakultas). Contoh NIM: 25/123456/SV/12345 (25 = Tahun Angkatan, 123456 = NIU, SV = Kode Fakultas, 12345 = NIF).\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex: /(.*)\b(bukan|tidak|no)\b(.*)\b(boleh)\b(.*)/i,
    answer:
      "Tidak diperbolehkan. Aturan PIONIR Gadjah Mada harus ditaati.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },

  // Kategori: Perlengkapan (Equipment/Attire)
  {
    regex:
      /(.*)\b(wajib|harus|pakai|mengenakan)\b(.*)\b(jas\s+almamater)\b(.*)/i,
    answer:
      "Ya, wajib mengenakan jas almamater selama kegiatan PIONIR Gadjah Mada 2025.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex: /(.*)\b(rambut|potong\s+rambut|pendek|rapi)\b(.*)/i,
    answer:
      "Tidak harus dipotong pendek, tetapi harus rapi dan berwarna natural.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex: /(.*)\b(bawahan|celana|rok|jeans)\b(.*)/i,
    answer:
      "Disarankan menggunakan bawahan berbahan kain.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex: /(.*)\b(sepatu)\b(.*)\b(warna|berwarna)\b(.*)/i,
    answer:
      "Disarankan menggunakan sepatu dengan warna dominan hitam.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex: /(.*)\b(ikat\s+pinggang|sabuk)\b(.*)/i,
    answer:
      "Ya, wajib menggunakan ikat pinggang.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex:
      /(.*)\b(tidak\s+punya|tidak\s+memiliki|lupa\s+bawa)\b(.*)\b(atribut)\b(.*)/i,
    answer:
      "Wajib menggunakan atribut sesuai ketentuan.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex: /(.*)\b(tali|warna\s+tali)\b(.*)\b(id\s+card)\b(.*)/i,
    answer:
      "Tidak ada ketentuan warna khusus.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex: /(.*)\b(tas|selain\s+ransel)\b(.*)/i,
    answer:
      "Disarankan membawa tas ransel.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex: /(.*)\b(laptop|smartphone|hp|ponsel)\b(.*)/i,
    answer:
      "Boleh membawa laptop/smartphone.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex:
      /(.*)\b(alat\s+makan|peralatan\s+makan|alat\s+minum|tumbler|botol)\b(.*)/i,
    answer:
      "Wajib membawa peralatan makan dan minum pribadi.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex:
      /(.*)\b(plastik|sekali\s+pakai|sendok\s+plastik|botol\s+plastik)\b(.*)/i,
    answer:
      "Tidak disarankan menggunakan peralatan makan sekali pakai.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex: /(.*)\b(pas\s+foto|ukuran\s+foto)\b(.*)\b(id\s+card)\b(.*)/i,
    answer:
      "Pas foto yang digunakan berwarna ukuran 4x6.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex:
      /(.*)\b(warna\s+caping|cat\s+caping|caping)\b(.*)\b(kurang\s+sesuai|tidak\s+sesuai)\b(.*)/i,
    answer:
      "Tidak diperbolehkan, harus sesuai ketentuan.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex: /(.*)\b(pengecatan\s+caping|cara\s+cat\s+caping)\b(.*)/i,
    answer:
      "Caping harus dicat merata. Dapat diulang beberapa kali.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex: /(.*)\b(ukuran\s+caping|bentuk\s+caping)\b(.*)/i,
    answer:
      "Sesuai panduan.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex:
      /(.*)\b(warna\s+cat\s+caping)\b(.*)\b(tidak\s+dapat|sulit\s+dicari)\b(.*)/i,
    answer:
      "Diusahakan sesuai ketentuan, atau gunakan warna yang memiliki kesamaan palet dengan yang ditentukan.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex: /(.*)\b(ukuran\s+diameter\s+caping|diameter\s+caping)\b(.*)/i,
    answer:
      "Diusahakan sesuai ketentuan. Toleransi maksimal 1-2 cm.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex: /(.*)\b(kode\s+warna)\b(.*)\b(asturo|puspakara)\b(.*)/i,
    answer:
      "Harus sesuai dengan panduan.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex: /(.*)\b(gagang|gagang\s+puspakara|selain\s+stik\s+es\s+krim)\b(.*)/i,
    answer:
      "Tidak, wajib stik es krim. Jika tidak ada, gunakan bahan serupa.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex: /(.*)\b(lakban|tebal\s+lakban)\b(.*)\b(3.5\s+cm)\b(.*)/i,
    answer:
      "Sangat disarankan untuk tetap menyesuaikan ukuran lakban dengan ketentuan.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex:
      /(.*)\b(karton|tebal\s+karton|ukuran\s+karton)\b(.*)\b(puspakara)\b(.*)/i,
    answer:
      "Untuk pembuatan Puspakara, diperlukan 2 lembar karton ukuran 77x66 cm dengan ketebalan 1 mm.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex: /(.*)\b(kertas\s+asturo)\b(.*)\b(sisa|selebrasi)\b(.*)/i,
    answer:
      "Diusahakan kertas asturo yang dibawa berukuran 10x10 cm hingga 15x15 cm.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex: /(.*)\b(warna\s+kerudung|kerudung\s+pas\s+foto)\b(.*)/i,
    answer:
      "Warna kerudung di pas foto adalah hitam.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },

  // Kategori: Sinkronus dan Action Plan
  {
    regex: /(.*)\b(apa\s+itu)\b(.*)\b(action\s+plan)\b(.*)/i,
    answer:
      "Action Plan adalah kegiatan pengenalan lingkungan kampus dan memupuk kepekaan sosial.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex: /(.*)\b(alat\s+tulis|peralatan\s+tulis|pulpen|pensil)\b(.*)/i,
    answer:
      "Wajib membawa alat tulis sesuai dengan Rilis Agenda dan Atribut PIONIR Gadjah Mada 2025.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex:
      /(.*)\b(lupa\s+bawa|tidak\s+bawa|tidak\s+ada)\b(.*)\b(peralatan)\b(.*)/i,
    answer:
      "Diperbolehkan meminjam ke sesama GAMADA, tapi disarankan membawa sendiri.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex:
      /(.*)\b(wajib|harus|pakai)\b(.*)\b(almamater)\b(.*)\b(action\s+plan)\b(.*)/i,
    answer:
      "Ya, wajib sesuai dengan Booklet Action Plan 2025.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex: /(.*)\b(tata\s+cara|pakaian)\b(.*)\b(action\s+plan)\b(.*)/i,
    answer:
      "Tata cara berpakaian tertera pada Booklet Action Plan 2025.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex: /(.*)\b(kapan|tanggal|waktu)\b(.*)\b(action\s+plan)\b(.*)/i,
    answer:
      "Kegiatan Action Plan akan dilaksanakan pada 10-15 Agustus 2025.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex: /(.*)\b(kendaraan|pribadi|motor|mobil)\b(.*)/i,
    answer:
      "Ya, boleh menggunakan kendaraan pribadi, tapi harus berhati-hati.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex:
      /(.*)\b(apa\s+yang\s+harus\s+dilakukan|kegiatan|aktivitas)\b(.*)\b(action\s+plan)\b(.*)/i,
    answer:
      "Berbaur, berinteraksi, dan berkegiatan bersama masyarakat.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },

  // Kategori: Learning Management System
  {
    regex: /(.*)\b(enrollment\s+key|key\s+elok)\b(.*)/i,
    answer:
      "Informasi enrollment key dapat diakses melalui Simaster.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex: /(.*)\b(apa\s+itu)\b(.*)\b(elok|e-lok)\b(.*)/i,
    answer:
      "eLOK UGM adalah sistem e-learning yang dikembangkan oleh UGM untuk mendukung pembelajaran digital.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex: /(.*)\b(tidak\s+bisa|gagal|error)\b(.*)\b(login\s+elok)\b(.*)/i,
    answer:
      "Jika terjadi permasalahan login, Anda bisa membuat tiket baru atau kirim email ke pika@ugm.ac.id, sertakan screenshot.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex: /(.*)\b(materi)\b(.*)\b(elok|e-lok)\b(.*)/i,
    answer:
      "Semua materi hanya dapat diakses melalui eLOK.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex: /(.*)\b(elok|e-lok)\b(.*)\b(ter-reset|reset|ulang)\b(.*)/i,
    answer:
      "Cek koneksi, refresh halaman, bersihkan browser cache, atau logout dan login kembali.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex: /(.*)\b(course|elok|e-lok)\b(.*)\b(hilang)\b(.*)/i,
    answer:
      "Cek koneksi, refresh halaman, bersihkan browser cache, atau logout dan login kembali.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex: /(.*)\b(perbedaan)\b(.*)\b(modul|course)\b(.*)/i,
    answer:
      "Modul adalah bagian dari sebuah course yang berisi materi spesifik. Course adalah program pembelajaran lengkap yang terdiri dari beberapa modul.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },

  // Kategori: Informasi Umum UGM
  {
    regex: /(.*)\b(lokasi|alamat)\b(.*)\b(ugm|kampus|universitas)\b(.*)/i,
    answer:
      "Universitas Gadjah Mada berlokasi di Bulaksumur, Caturtunggal, Kecamatan Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex: /(.*)\b(beasiswa|info beasiswa)\b(.*)\b(ugm)\b(.*)/i,
    answer:
      "Untuk informasi terkait beasiswa, Anda bisa mengunjungi laman resmi Direktorat Kemahasiswaan (Ditmawa) UGM atau laman masing-masing fakultas.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex: /(.*)\b(perpustakaan|perpus)\b(.*)\b(ugm)\b(.*)/i,
    answer:
      "Perpustakaan pusat UGM berlokasi di Boulevard UGM. Setiap fakultas juga memiliki perpustakaan masing-masing.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex: /(.*)\b(jam operasional|buka)\b(.*)\b(perpustakaan)\b(.*)/i,
    answer:
      "Jam operasional perpustakaan UGM bisa berubah. Silakan cek informasi terbaru di situs resmi Perpustakaan UGM.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex: /(.*)\b(akses|cara masuk)\b(.*)\b(perpustakaan)\b(.*)/i,
    answer:
      "Mahasiswa UGM dapat menggunakan kartu mahasiswa atau akun SSO untuk mengakses layanan perpustakaan.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex: /(.*)\b(klinik|puskesmas)\b(.*)\b(ugm|kampus)\b(.*)/i,
    answer:
      "UGM memiliki klinik kesehatan bagi mahasiswa dan sivitas akademika yang berlokasi di area kampus. Anda bisa menghubungi Gadjah Mada Medical Center (GMC) untuk informasi lebih lanjut.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex: /(.*)\b(biaya kuliah|ukt)\b(.*)\b(naik|turun|mahal)\b(.*)/i,
    answer:
      "Informasi mengenai UKT (Uang Kuliah Tunggal) dapat diakses melalui laman resmi Direktorat Keuangan atau portal Simaster.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex: /(.*)\b(kapan|tanggal|waktu)\b(.*)\b(pengisian krs|krs)\b(.*)/i,
    answer:
      "Jadwal pengisian Kartu Rencana Studi (KRS) dapat dilihat di kalender akademik UGM atau portal Simaster.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex:
      /(.*)\b(fakultas|jurusan)\b(.*)\b(paling populer|terkenal|banyak diminati)\b(.*)/i,
    answer:
      "UGM memiliki banyak fakultas dan jurusan unggulan. Informasi mengenai peminat setiap jurusan bisa dilihat di data statistik seleksi masuk.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex: /(.*)\b(transportasi|cara ke)\b(.*)\b(ugm)\b(.*)/i,
    answer:
      "Anda bisa menggunakan bus Trans Jogja, taksi, atau ojek online untuk menuju UGM.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
  {
    regex:
      /(.*)\b(pengambilan|ambil|dapat|beli)\b(.*)\b(atribut|peralatan|perlengkapan|almet|almamater|jaket\s+almamater)\b(.*)/i,
    answer:
      "Atribut / Jaket Almamater UGM akan didistribusikan langsung oleh panitia di lokasi yang telah ditentukan. Informasi lengkapnya akan diumumkan melalui media sosial resmi PIONIR Gadjah Mada 2025.\n\nAdakah pertanyaan lain yang ingin kamu tanyakan pada Pio-Bot?",
    hasCaptureGroup: true,
  },
];
