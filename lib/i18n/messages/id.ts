import type { Messages } from "../types";

export const id: Messages = {
  languageSwitcher: {
    label: "Ganti bahasa",
  },
  skip: "Lompat ke konten",
  sceneIndicator: {
    label: "Indeks babak",
    goTo: "Ke bab {chapter}: {title}",
  },
  hero: {
    cityLine: "{city} · metropolis antarmuka yang sedang hujan",
    tagline: "Membangun sistem web yang tetap bekerja setelah tengah malam.",
    role: "Full-Stack Developer",
    enterArchive: "BUKA BERKAS",
    readOn: "Lanjut —",
  },
  scenes: {
    "scene-hero": { title: "Kota Terbangun", label: "pembuka" },
    "scene-identity": { title: "Identitas Terungkap", label: "siapa" },
    "scene-about": { title: "Berkas Kasus", label: "tentang" },
    "scene-arsenal": { title: "Gudang Senjata", label: "skill" },
    "scene-nft": { title: "Studio Kreatif", label: "collectibles" },
    "scene-experience": { title: "Kereta Malam", label: "rute" },
    "scene-contact": { title: "Sinyal Kontak", label: "kontak" },
    "scene-final": { title: "Malam Turun", label: "akhir" },
  },
  identity: {
    intro: "babak 02 · perkenalan",
    titleAsk: "Kota bertanya…",
    titleWho: "siapa di balik lampu-lampu itu?",
    devProfile: "PROFIL DEV",
  },
  profile: {
    developerTitle: "Full-Stack Developer",
    positioning:
      "Saya membangun sistem web yang andal agar lampu tetap menyala setelah tengah malam.",
    shortBio:
      "Full-stack developer dengan selera pada arsitektur yang bersih, interaksi mikro sinematik, dan perangkat lunak yang bertahan dari lalu lintas dunia nyata.",
    bio: [
      "Setiap produk yang saya rilis dimulai dari satu pertanyaan: bagaimana membuat sesuatu yang berguna terasa mudah? Saya merancang dan membangun pengalaman web end-to-end — dari skema basis data hingga antarmuka responsif — dan saya sangat peduli pada performa, aksesibilitas, serta detail-detail kecil yang dirasakan pengguna tapi tak pernah terlihat.",
      "Saat layar gelap, biasanya saya sedang membuat sketsa antarmuka, membaca tentang sistem terdistribusi, atau memburu ramp tipografi yang sempurna. Saya memperlakukan kode seperti kerajinan: disengaja, terdokumentasi, dan tak pernah dikirim setengah jadi.",
    ],
    currentFocus: "Pengembangan web full-stack & pengalaman interaktif",
    location: "Indonesia · UTC+7",
    status: "TERBUKA UNTUK PROYEK",
    education: "Informatika — institusi placeholder",
    interests: [
      "UI Sinematik",
      "Tipografi",
      "Teknologi retro",
      "Sistem terdistribusi",
      "Desain game indie",
      "Soundtrack jazz noir",
    ],
    philosophy:
      "Perangkat lunak yang baik itu seperti jalan yang terang benderang di tengah malam: tenang, bisa diprediksi, dan diam-diam mengantarmu ke tujuan.",
    caseNumber: "FILE NO. RN-001",
  },
  about: {
    label: "dossier intelijen",
    title: "Berkas Kasus",
    caption:
      "Catatan yang dideklasifikasi tentang subjek development. Tangani dengan rasa ingin tahu.",
    subjectProfile: "Profil Subjek",
    caseOpen: "Kasus Dibuka",
    filePhoto: "foto berkas terlampir —",
    evidenceGradeB: "kelas bukti B",
    personalStatement: "Pernyataan pribadi",
    currentInterests: "Minat saat ini",
    doctrine: "— doktrin developer pribadi",
    meta: {
      status: "STATUS",
      location: "LOKASI",
      currentFocus: "FOKUS SAAT INI",
      education: "PENDIDIKAN",
      caseNumber: "NO. KASUS",
    },
  },
  arsenal: {
    label: "lokasi peralatan",
    title: "Gudang Senjata",
    caption:
      "Perkakas di dinding bukti. Setiap alat di sini pernah bekerja di produksi sungguhan.",
    hint: "peta sinaps — tiap rumpun pernah tayang di produksi",
    category: {
      frontend: "Frontend",
      backend: "Backend",
      database: "Database",
      styling: "Styling",
      tooling: "Tooling",
      deployment: "Deployment",
    },
    skill: {
      "frontend.Next.js":
        "App Router, server components, route handlers, optimasi gambar + font, dan deployment produksi skala menengah.",
      "frontend.React":
        "Arsitektur komponen modular, hooks, context, dan pengelolaan re-render yang sadar performa.",
      "frontend.TypeScript":
        "Typing ketat secara bawaan — model data ber-type, generics, dan interface yang membuat tim bergerak lebih cepat.",
      "backend.Laravel / PHP":
        "REST API, pemodelan Eloquent, autentikasi, dan aplikasi MVC yang mudah dipelihara dan siap produksi.",
      "backend.Node.js":
        "Layanan API, background jobs, dan skrip tooling dengan penanganan error serta observabilitas yang hati-hati.",
      "database.MySQL":
        "Desain skema, strategi index, dan optimasi query untuk beban produksi yang berat pada pembacaan.",
      "database.PostgreSQL":
        "Pemodelan relasional, kolom JSON, dan integritas transaksional untuk fitur sensitif data.",
      "styling.Tailwind CSS":
        "Sistem utility-first dengan design token, tema gelap, dan utilitas motion kustom.",
      "styling.Framer Motion / GSAP":
        "Storytelling berbasis scroll, micro-interactions, dan gerakan antarmuka yang terkoreografi.",
      "tooling.Git & GitHub":
        "Workflow branch yang bersih, conventional commits, code review, dan pipeline CI.",
      "tooling.Docker":
        "Lingkungan lokal yang reproducible dan orkestrasi layanan sederhana.",
      "deployment.Vercel":
        "Preview deployment, edge functions, dan analytics untuk aplikasi Next.js.",
      "deployment.Linux / cPanel servers":
        "Nginx reverse proxy, PHP-FPM, manajemen proses, dan pengamanan server.",
    },
    overview: {
      title: "Tinjauan Persenjataan",
      loaded: "Terpasang",
      loadedValue: "{count}/{total}",
      avg: "Kapasitas Rata-rata",
      top: "Kaliber Terbaik",
    },
  },
  status: {
    live: "LIVE",
    archived: "ARSIP",
    inProgress: "SEDANG DIBANGUN",
  },
  nft: {
    label: "sayap kreatif · dari konsep ke koleksi",
    title: "Koleksi NFT Berbantuan AI",
    caption:
      "Sayap studio eksperimental — desain karakter dan kolektibel digital dieksplorasi lewat generasi gambar berbantuan AI. Latihan belajar bagaimana alat generatif menjadi bagian dari alur kerja kreatif manusia, bukan keseluruhannya.",
    outputs: "output terpilih",
    framesHint: "kerangka berjalan menyamping di layar lebar",
    fig: "gbr {n} / {total}",
    endRunTitle: "akhir rangkaian",
    endRunText: "tiga kerangka — terus gulir untuk melihat bagaimana dibuatnya",
    workflow: "alur kerja kreatif",
    workflowHint: "lima langkah — alur kerja berjalan menyamping di layar lebar",
    endFlowTitle: "akhir alur",
    endFlowText: "dari konsep ke koleksi — dalam lima langkah",
    process: {
      "01": {
        title: "Konsep",
        short:
          "Merancang identitas karakter — siluet, suasana, dan jalan fiksi tempat ia tinggal.",
      },
      "02": {
        title: "Generasi",
        short:
          "Eksperimen prompt di ChatGPT, Gemini, DeepSeek, dan Claude untuk menemukan arah visual.",
      },
      "03": {
        title: "Iterasi",
        short:
          "Mendorong outfit, aksesori, pencahayaan, dan latar — satu identitas, banyak variasi.",
      },
      "04": {
        title: "Penyempurnaan",
        short:
          "Memilih hasil terkuat dan menyempurnakannya menjadi karya final yang layak tampil.",
      },
      "05": {
        title: "Artwork",
        short:
          "Merakit karya terpilih menjadi satu set final yang koheren — bingkai, nada, dan rangkaian selesai.",
      },
    },
    artwork: {
      "hrln-rain": {
        description:
          "Variasi outfit di bawah hujan deras khas kota — digenerasi, lalu dibersihkan dengan tangan.",
        tags: ["Outfit", "Hujan"],
      },
      "hrln-midnight": {
        description:
          "Studi pencahayaan dan palet — siluet yang sama didorong ke dalam biru larut malam.",
        tags: ["Pencahayaan", "Malam"],
      },
      "hrln-look": {
        description:
          "Variasi aksesori yang mendefinisikan perlengkapan harian sang karakter di seluruh koleksi.",
        tags: ["Aksesori", "Varian"],
      },
    },
  },
  lightbox: {
    vault: "kodecity · brankas seni",
    viewerLabel: "Penampil karya — {title}",
    openViewer: "Buka karya {title} di penampil",
    close: "Tutup penampil karya",
    prev: "Karya sebelumnya",
    next: "Karya berikutnya",
    prevShort: "maju",
    nextShort: "lanjut",
    aiLabel: "karya seni digital berbantuan AI",
    caseVisual: "visual kasus",
  },
  experience: {
    label: "kereta malam · catatan rute",
    title: "Linimasa Pengalaman",
    caption:
      "Rute yang dilalui dekade ini — setiap pemberhentian adalah stasiun tempat sesuatu dipelajari.",
    type: {
      education: "pendidikan",
      internship: "magang",
      freelance: "freelance",
      personal: "personal",
      achievement: "pencapaian",
      learning: "belajar",
    },
    items: {
      "learning-foundations": {
        title: "Mulai mendaki",
        org: "Rute otodidak",
        description:
          "Belajar fondasi — HTML, CSS, JavaScript, dan disiplin menyelesaikan proyek kecil.",
        tags: ["HTML", "CSS", "JavaScript"],
      },
      education: {
        title: "Mahasiswa Informatika",
        org: "Institusi placeholder",
        description:
          "Landsasan formal dalam algoritma, basis data, dan praktik rekayasa perangkat lunak beriringan pengembangan web otodidak.",
        tags: ["Algoritma", "Database"],
      },
      internship: {
        title: "Magang Backend",
        org: "Perusahaan placeholder",
        description:
          "Membangun layanan REST dan alat internal, belajar code review, dan merilis fitur nyata untuk pengguna nyata.",
        tags: ["PHP", "MySQL", "REST"],
      },
      freelance: {
        title: "Bangunan mandiri",
        org: "Freelance & proyek sampingan",
        description:
          "Mengirimkan pekerjaan produk full-stack untuk bisnis kecil — inventori, invoicing, dan kehadiran web.",
        tags: ["Laravel", "Node.js", "SQL"],
      },
      achievement: {
        title: "Tembus produksi",
        org: "Tonggak produksi",
        description:
          "Sistem pertama yang menangani lalu lintas sungguhan di produksi: pembayaran, data kasus, dan dashboard yang menghadap pelanggan.",
        tags: ["Produksi", "Pembayaran", "DevOps"],
      },
      present: {
        title: "Perhentian saat ini",
        org: "Full-Stack Developer",
        description:
          "Membangun pengalaman full-stack andal dan terus mengasah kriya — sinematik, aksesibel, dan cepat.",
        tags: ["Next.js", "TypeScript", "Tailwind"],
      },
    },
  },
  contact: {
    label: "titik temu",
    title: "Hubungi Saya",
    caption:
      "Punya proyek, peluang, atau sekadar mau menyapa? Kirim pesan di bawah, atau pilih kanal favoritmu.",
    emailLabel: "email",
    socialsLabel: "media sosial",
    response: "Balasan biasanya dalam 1–2 hari kerja.",
    form: {
      title: "Kirim pesan langsung",
      name: "nama",
      email: "email",
      subject: "subjek",
      message: "pesan",
      placeholderName: "Budi Santoso",
      placeholderEmail: "contoh@gmail.com",
      placeholderSubject: "re: proyek yang ingin digarap",
      placeholderMessage: "Apa yang sedang Anda bangun?",
      sending: "mengirim…",
      send: "kirim pesan",
      sentTitle: "Pesan Terkirim",
      sentText: "Pesan tercatat — balasan menyusul dalam 1–2 hari kerja.",
      again: "kirim pesan lagi",
      errFields: "Kolom kosong atau tidak valid — periksa nama dan email.",
      errRejected: "Pesan ditolak. Coba lagi nanti.",
    },
  },
  final: {
    closing: "keterangan penutup",
    title1: "Kota meredupkan lampunya.",
    title2: "Pekerjaan terus berjalan.",
    para:
      "Setiap babak di halaman ini adalah bangunan nyata, pelajaran nyata, atau luka nyata. Terima kasih telah menyusuri jalanan.",
    returnLabel: "Kembali ke awal",
    credits: {
      aria: "Kredit situs",
      builtIn: "dibangun di",
      designed: "dirancang oleh",
      poweredBy: "didukung oleh",
      designedValue: "sang hujan",
    },
    footer: "© {year} {name} — tak ada jubah yang digunakan.",
  },
  notFound: {
    kicker: "jalan buntu — tersesat di tengah hujan",
    title: "Jalan ini tidak ada.",
    body:
      "Alamat yang Anda ketik tidak mengarah ke mana pun di {city}. Kembalilah ke alun-alun sebelum kabut menutup.",
    back: "kembali ke alun-alun",
  },
  errorPage: {
    kicker: "kesalahan transmisi — rt-404",
    title: "Grid kota tersendat.",
    body:
      "Terjadi kesalahan saat merender blok ini. Coba pemutus sirkuit di bawah — tidak ada data yang hilang.",
    action: "mulai ulang blok",
  },
  audio: {
    enable: "Nyalakan suara suasana",
    disable: "Matikan suara suasana",
    ambienceOn: "suasana: nyala",
    ambienceOff: "suasana: mati",
  },
};