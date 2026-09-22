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
    cityLine: "Full-Stack Web Developer · AI-Assisted Workflow",
    tagline:
      "Membangun website dan aplikasi full-stack untuk mengubah ide, kebutuhan, dan masalah menjadi produk digital yang dapat digunakan.",
    role: "Full-Stack Developer",
    enterArchive: "Lihat Karyaku",
    readOn: "Tentang Saya",
  },
  scenes: {
    "scene-hero": { title: "Selamat Datang", label: "pembuka" },
    "scene-identity": { title: "Siapa Saya", label: "tentang" },
    "scene-about": { title: "Profil", label: "profil" },
    "scene-arsenal": { title: "Tech Stack", label: "skill" },
    "scene-nft": { title: "Studio Kreatif", label: "studio" },
    "scene-experience": { title: "Perjalanan Development", label: "perjalanan" },
    "scene-contact": { title: "Kontak", label: "kontak" },
    "scene-final": { title: "Penutup", label: "akhir" },
  },
  identity: {
    intro: "intro · halo",
    titleAsk: "Developer",
    titleWho: "yang Membangun.",
    devProfile: "Profil Dev",
  },
  profile: {
    developerTitle: "Full-Stack Developer",
    positioning: "Coding · Building · Experimenting with AI",
    shortBio:
      "Saya membangun website dan aplikasi full-stack — membawa sebuah ide dari sketsa pertama sampai produk jadi, dari antarmuka sampai database.",
    bio: [
      "Saya Renno Nur Oktaviano, seorang developer yang berfokus pada pengembangan website dan aplikasi full-stack. Saya menikmati proses membangun sesuatu dari nol — mulai dari memahami kebutuhan, merancang interface, menyusun sistem, mengembangkan fitur, sampai memastikan produk dapat digunakan dengan baik.",
      "Dalam workflow sehari-hari, saya menggunakan AI coding agents sebagai development partner untuk membantu eksplorasi ide, implementasi, debugging, dan mempercepat iterasi.",
    ],
    currentFocus: "Pengembangan full-stack & workflow berbantuan AI",
    location: "Indonesia · UTC+7",
    status: "Buka untuk kerja · Internship · Freelance · Kolaborasi",
    interests: [
      "UI Sinematik",
      "Tipografi",
      "Teknologi retro",
      "Sistem terdistribusi",
      "Desain game indie",
      "Soundtrack jazz noir",
    ],
    philosophy:
      "AI membantu saya menulis dan mengeksplorasi kode lebih cepat. Tetapi memahami masalah, menentukan solusi, menguji hasil, dan memastikan sistem bekerja tetap menjadi bagian dari pekerjaan saya sebagai developer.",
    caseNumber: "RN-001",
  },
  about: {
    label: "Profil Saya",
    title: "Tentang Saya",
    caption:
      "Sekilas tentang siapa saya, apa yang saya pedulikan, dan bagaimana saya bekerja sebagai developer.",
    subjectProfile: "Ringkasan Profil",
    caseOpen: "Profil ID",
    filePhoto: "foto developer —",
    evidenceGradeB: "status · aktif",
    personalStatement: "Pernyataan pribadi",
    currentInterests: "Minat saat ini",
    doctrine: "— prinsip pribadi developer",
    meta: {
      status: "STATUS",
      location: "LOKASI",
      currentFocus: "FOKUS SAAT INI",
      caseNumber: "PROFIL ID",
    },
  },
  arsenal: {
    label: "skill stack",
    title: "Tech Stack",
    caption:
      "Teknologi yang saya gunakan untuk merancang, membangun, dan meluncurkan produk full-stack.",
    hint: "skill map — setiap tool di sini pernah dipakai di proyek nyata",
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
        "App Router, server components, API routes, optimasi gambar & font, dan deployment produksi.",
      "frontend.React":
        "Arsitektur komponen, hooks, state management, dan rendering yang sadar performa.",
      "frontend.TypeScript":
        "Typing ketat untuk model data, props, dan API yang ramah tim.",
      "backend.Laravel / PHP":
        "REST API, model Eloquent, autentikasi, dan aplikasi MVC yang mudah dipelihara.",
      "backend.Node.js":
        "Layanan API, background jobs, dan skrip tooling dengan penanganan error yang baik.",
      "database.MySQL":
        "Desain skema, indexing, dan optimasi query untuk beban produksi.",
      "database.PostgreSQL":
        "Pemodelan relasional, kolom JSON, dan integritas transaksional.",
      "styling.Tailwind CSS":
        "Styling utility-first dengan design tokens dan utilitas motion kustom.",
      "styling.Framer Motion / GSAP":
        "UI berbasis scroll, micro-interactions, dan motion yang terkoreografi.",
      "tooling.Git & GitHub":
        "Workflow branch yang rapi, code review, dan pipeline CI.",
      "tooling.Docker":
        "Lingkungan lokal yang reprodusibel dan orkestrasi layanan sederhana.",
      "deployment.Vercel":
        "Preview deployment dan analytics bawaan untuk aplikasi Next.js.",
      "deployment.Linux / cPanel servers":
        "Nginx, PHP-FPM, manajemen proses, dan hardening server.",
    },
    overview: {
      title: "Ringkasan Skill",
      loaded: "Dimuat",
      loadedValue: "{count}/{total}",
      avg: "Rata-rata Level",
      top: "Top Skill",
    },
  },
  status: {
    live: "LIVE",
    archived: "ARSIP",
    inProgress: "SEDANG DIBANGUN",
  },
  nft: {
    label: "eksperimen kreatif · visual berbantuan AI",
    title: "Studi Visual Berbantuan AI",
    caption:
      "Ruang untuk eksperimen visual — desain karakter dan outfit yang dieksplorasi lewat pembuatan gambar berbantuan AI. Studi praktis tentang bagaimana alat generatif memperluas alur kerja kreatif manusia.",
    outputs: "output terpilih",
    framesHint: "kerangka berjalan menyamping di layar lebar",
    fig: "gbr {n} / {total}",
    endRunTitle: "akhir set ini",
    endRunText: "tiga karya — lanjut scroll untuk melihat proses pembuatannya",
    workflow: "alur kerja kreatif",
    workflowHint: "lima langkah — alur kerja berjalan menyamping di layar lebar",
    endFlowTitle: "akhir alur",
    endFlowText: "dari konsep hingga karya jadi — dalam lima langkah",
    process: {
      "01": {
        title: "Konsep",
        short:
          "Menentukan subjek, suasana, dan arah visual yang ingin dieksplorasi.",
      },
      "02": {
        title: "Generasi",
        short:
          "Eksperimen prompt di ChatGPT, Gemini, DeepSeek, dan Claude untuk menemukan arah visual.",
      },
      "03": {
        title: "Iterasi",
        short:
          "Mendorong outfit, aksesori, pencahayaan, dan latar — satu subjek, banyak variasi.",
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
      "ms-central-cee": {
        description:
          "Studi outfit bergaya streetwear — lapisan tegas dan branding berani di bawah pencahayaan moody.",
        tags: ["Outfit", "Streetwear"],
      },
      "ms-travis-scott": {
        description:
          "Interpretasi lebih gelap dari siluet yang sama — lapisan grafis dan palet yang murung.",
        tags: ["Outfit", "Gelap"],
      },
      "ms-body": {
        description:
          "Tubuh dasar yang polos — kanvas bersih sebelum setiap lapis outfit; berpose untuk koleksi ini.",
        tags: ["Dasar", "Model"],
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
    prevShort: "mundur",
    nextShort: "lanjut",
    aiLabel: "karya seni digital berbantuan AI",
    caseVisual: "visual kasus",
  },
  experience: {
    label: "perjalanan development · catatan kerja",
    title: "Perjalanan Development",
    caption:
      "Perjalanan saya dalam membangun — dari fondasi otodidak dan magang backend, sampai proyek freelance dan sistem yang berjalan di produksi.",
    type: {
      internship: "magang",
      freelance: "freelance",
      personal: "personal",
      achievement: "pencapaian",
      learning: "belajar",
    },
    items: {
      "learning-foundations": {
        title: "Belajar fondasi",
        org: "Jalur otodidak",
        description:
          "Belajar fondasi — HTML, CSS, JavaScript, dan disiplin menyelesaikan proyek kecil.",
        tags: ["HTML", "CSS", "JavaScript"],
      },
      internship: {
        title: "Magang Backend",
        org: "PT. Deswa Invisco Multitama",
        description:
          "Membangun layanan REST dan alat internal, belajar code review, dan merilis fitur nyata untuk pengguna nyata.",
        tags: ["PHP", "MySQL", "REST"],
      },
      freelance: {
        title: "Proyek mandiri",
        org: "Freelance & proyek sampingan",
        description:
          "Mengirimkan pekerjaan produk full-stack untuk bisnis kecil — inventori, pembukuan, dan kehadiran web.",
        tags: ["Laravel", "Node.js", "SQL"],
      },
      achievement: {
        title: "Menuju produksi",
        org: "Tonggak produksi",
        description:
          "Sistem pertama yang menangani lalu lintas produksi sungguhan — pembayaran, data bisnis, dan dashboard yang menghadap pelanggan.",
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
    label: "hubungi saya",
    title: "Mari Bangun.",
    caption:
      "Punya ide, proyek, atau mau ngobrol soal development? Kirim pesan di bawah, atau hubungi lewat kanal favoritmu.",
    emailLabel: "email",
    socialsLabel: "media sosial",
    response: "Balasan paling cepat melalui kanal di bawah.",
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
      sentText: "Pesan diterima — terima kasih sudah menghubungi.",
      again: "kirim pesan lagi",
      errFields: "Kolom kosong atau tidak valid — periksa nama dan email.",
      errRejected: "Pesan ditolak. Coba lagi nanti.",
      errServer: "Transmisi gagal — coba lagi atau gunakan kanal di atas.",
    },
  },
  final: {
    closing: "penutup",
    title1: "Terima kasih",
    title2: "sudah melihat portfolio saya.",
    para:
      "Website ini dibangun dengan rasa ingin tahu, kode, dan bantuan AI-assisted development — setiap bagian di sini adalah bangunan nyata, pelajaran nyata, atau produk nyata. Kalau ada yang menarik perhatianmu, mari berkolaborasi membangun sesuatu.",
    returnLabel: "Kembali ke awal",
    credits: {
      aria: "Kredit situs",
      builtIn: "dibangun dengan",
      designed: "dirancang",
      poweredBy: "didukung oleh",
      designedValue: "dalam gelap",
    },
    footer: "© {year} {name} — dibangun dengan rasa ingin tahu, kode & AI.",
  },
  notFound: {
    kicker: "404 — halaman ini tidak ada",
    title: "Halaman tidak ditemukan.",
    body:
      "Halaman yang Anda cari tidak ada di sini — mungkin sudah dipindah, atau memang tidak pernah ada. Kembalilah ke awal dan jelajahi portfolio.",
    back: "Kembali ke awal",
  },
  errorPage: {
    kicker: "terjadi kesalahan",
    title: "Kesalahan tak terduga.",
    body:
      "Terjadi kesalahan saat merender halaman ini. Coba muat ulang di bawah — tidak ada yang hilang.",
    action: "Muat ulang halaman",
  },
};