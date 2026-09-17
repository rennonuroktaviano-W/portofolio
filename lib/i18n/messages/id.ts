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
    enterArchive: "MASUK ARSIP",
    readOn: "Lanjut —",
    scrollToDescend: "gulir untuk turun",
  },
  scenes: {
    "scene-hero": { title: "Kota Terbangun", label: "pembuka" },
    "scene-identity": { title: "Identitas Terungkap", label: "siapa" },
    "scene-about": { title: "Berkas Kasus", label: "tentang" },
    "scene-arsenal": { title: "Gudang Senjata", label: "skill" },
    "scene-archive": { title: "Arsip Proyek", label: "karya" },
    "scene-showcase": { title: "Sinematik Unggulan", label: "berkas" },
    "scene-nft": { title: "Studio Kreatif", label: "collectibles" },
    "scene-experience": { title: "Kereta Malam", label: "rute" },
    "scene-lab": { title: "Lab Developer", label: "lab" },
    "scene-git": { title: "Sinyal Aktivitas", label: "sinyal" },
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
    hint: "arahkan atau sentuh perangkat untuk melihat catatan produksi",
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
  },
  archive: {
    label: "ruang brankas · map kasus",
    title: "Arsip Proyek",
    caption:
      "Arsip ruang bawah tanah. Tarik satu map — setiap kasus di bawah benar-benar dirilis.",
    hint: "brankas berjalan menyamping di layar lebar — terus gulir untuk membalik map",
    openCase: "buka kasus",
    endTitle: "ujung brankas",
    endText: "dossier lebih dalam ada di sinematik berikut",
  },
  status: {
    live: "LIVE",
    archived: "ARSIP",
    inProgress: "SEDANG DIBANGUN",
  },
  showcase: {
    label: "sinematik unggulan",
    title: "Berkas Kasus — Penelusuran",
    caption: "Dua kasus dibedah: masalahnya, pembangunannya, dan yang dirilis.",
    evidenceFile: "berkas bukti {n} — {year}",
    problem: "Masalahnya",
    solution: "Solusinya",
    momentItHurt: "Saat yang Menyakitkan",
    aftermath: "Akibatnya",
    caseVisual: "visual kasus",
    artCaseCover: "seni: sampul kasus",
    liveSignal: "SINYAL LIVE",
    sourceCode: "kode sumber",
    liveDemo: "demo langsung",
    projects: {
      casebreak: {
        title: "CASEBREAK",
        oneLiner:
          "Platform manajemen kasus yang mengubah tumpukan kertas menjadi ruang bukti yang bisa dicari.",
        problem:
          "Sebuah lembaga lokal melacak kasus klien lewat spreadsheet dan folder cetak. Data ganda, tenggat terlewat, dan tak ada yang bisa dicari.",
        solution:
          "Saya merancang back office Laravel + MySQL dengan akses berbasis peran, papan status kasus, pengingat tenggat, dan brankas dokumen dengan pencarian full-text.",
        role: "Full-Stack Developer",
        features: [
          "Dashboard berbasis peran untuk petugas & admin",
          "Papan status kasus ala Kanban",
          "Email pengingat tenggat terjadwal",
          "Pencarian & pelabelan dokumen full-text",
        ],
        challenge:
          "Migrasi 4 tahun data warisan yang berantakan tanpa kehilangan data adalah pertarungan sesungguhnya — saya membangun importer bertahap dengan validasi dry-run.",
        outcome:
          "Waktu pencarian turun dari menit ke detik dan tim menyelesaikan antrean 200+ kasus basi dalam dua bulan.",
      },
      "kode-ledger": {
        title: "KODELEDGER",
        oneLiner:
          "API pembukuan double-entry minimal untuk pipeline invoicing bisnis sampingan.",
        problem:
          "Invoicing freelance tenggelam di aplikasi chat; tak ada catatan andal tentang apa yang ditagih, dibayar, atau menunggak.",
        solution:
          "Saya membangun layanan Node.js + PostgreSQL yang mengekspos REST API typed dengan pembuatan invoice idempoten, PDF, dan pengingat pembayaran.",
        role: "Backend Developer",
        features: [
          "Endpoint invoice & pembayaran idempoten",
          "Generasi PDF invoice otomatis",
          "Worker pengingat pembayaran telat",
          "Audit log untuk setiap perubahan",
        ],
        challenge:
          "Menjaga akurasi uang di bawah konkurensi — saya menambah row-level locking dan job rekonstruksi agar pembukuan tetap presisi.",
        outcome:
          "Nol invoice hilang di kuartal pertama pemakaian, dan pengingat memulihkan sekitar seminggu pekerjaan yang belum dibayar.",
      },
      kodestreet: {
        title: "KODESTREET",
        oneLiner:
          "Portofolio ini — motion-comic interaktif dengan Next.js, TypeScript, dan storytelling scroll sinematik.",
        problem:
          "Portofolio harus terasa seperti tempat, bukan PDF. Grid kartu generik gagal mengkomunikasikan keahlian atau kepribadian.",
        solution:
          "Saya membangun pengalaman sinematik satu halaman: lapisan atmosfer CSS/canvas, storytelling GSAP ScrollTrigger, dan terminal interaktif yang benar-benar merespons.",
        role: "Desainer + Developer",
        features: [
          "Transisi babak berbasis scroll",
          "Motion yang menghargai preferensi",
          "Terminal retro interaktif",
          "Lapisan data konten fully typed",
        ],
        challenge:
          "Menjaga atmosfer tetap pekat tanpa merusak Core Web Vitals berarti menggambar hujan, kabut, dan grain dengan CSS + satu canvas ringan.",
        outcome:
          "Portofolio yang cepat dimuat, terbaca jelas tanpa JavaScript, dan membuat pengunjung merasa berjalan melewati sebuah kota.",
      },
      signaldesk: {
        title: "SIGNALDESK",
        oneLiner:
          "Meja tiket dukungan real-time untuk tim produk kecil yang tenggelam dalam utas pesan.",
        problem:
          "Dukungan datang dari empat kanal chat sekaligus; masalah lolos dari celah dan tak seorang pun memegang solusinya.",
        solution:
          "Saya membangun front-end React + Vite di atas API Laravel yang tipis: kotak masuk terpadu, aturan penugasan, dan denyut langsung tiket terbuka.",
        role: "Frontend Developer",
        features: [
          "Kotak masuk terpadu lintas sumber dukungan",
          "Penugasan otomatis berdasarkan ketersediaan tim",
          "Denyut tiket langsung via server-sent events",
        ],
        challenge:
          "Menyatukan urutan pesan dari berbagai sumber — saya menerapkan event log sisi klien dengan deduplikasi dan replay.",
        outcome:
          "Median waktu respons pertama turun dari ~4 jam menjadi di bawah 40 menit pada jam kerja.",
      },
      retromart: {
        title: "RETROMART",
        oneLiner:
          "Toko e-commerce Laravel bertema teknologi vintage — keranjang, pembayaran, dan admin retro.",
        problem:
          "Reseller teknologi vintage butuh toko yang terasa seperti katalognya: ceria, kredibel, dan cepat di ponsel.",
        solution:
          "Saya mengirimkan storefront Laravel lengkap dengan varian produk, mesin promo, integrasi payment gateway, dan panel admin untuk inventori.",
        role: "Full-Stack Developer",
        features: [
          "Keranjang, checkout & payment gateway",
          "Kode promo dengan aturan penumpukan",
          "Manajemen inventori & alert stok menipis",
          "Dashboard laporan admin",
        ],
        challenge:
          "Mengamankan transaksi di antara status stok, diskon, dan pembayaran membutuhkan antrean yang hati-hati dan pembuatan order idempoten.",
        outcome:
          "Dirilis dan memproses ratusan order di musim pertama tanpa satu pun double-charge.",
      },
      weathermono: {
        title: "WEATHERMONO",
        oneLiner:
          "PWA cuaca kecil yang bisa offline dalam estetika monospace — cuaca, tapi bergaya terminal.",
        problem:
          "Saya ingin aplikasi cuaca yang menghormati pembaca: tanpa tracker, tanpa basa-basi, data cepat terlihat di ponsel lambat.",
        solution:
          "PWA dengan vanilla TypeScript yang men-cache prakiraan, berfungsi offline, dan merender peta prakiraan grid monospace bertanggal.",
        role: "Solo Developer",
        features: [
          "Cache prakiraan offline",
          "Grid cuaca monospace",
          "Nol iklan & nol analytics",
        ],
        challenge:
          "Mengecilkan bundle di bawah 12 kB sambil tetap merender peta cuaca sungguhan di sisi klien.",
        outcome:
          "Aplikasi inti 10 kB yang masih berfungsi saat jaringan mati — monumen kecil untuk kesederhanaan.",
      },
    },
  },
  git: {
    label: "ruang monitor · umpan opsional",
    title: "Sinyal Aktivitas",
    caption:
      "Denyut semi-nyata dari menara version control. Stempel statis — disegarkan pada setiap deploy.",
    signal: "sinyal",
    commitsSteady: "commit: stabil",
    openRepository: "buka repositori",
    footer:
      "umpan statis secara desain — arsip tak pernah menunggu API pihak ketiga.",
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
  lab: {
    label: "bengkel kerja",
    title: "Lab Developer",
    caption:
      "CRT berfungsi, dipulihkan, dan aman. Ketik perintah — tak ada yang keluar dari ruangan ini.",
    memoTitle: "Memo bengkel",
    noteOne:
      "Terminal ini presentasional — perintah tak pernah menyentuh shell sungguhan.",
    noteTwo: "Coba <help>, <skills>, atau <projects>.",
    noteThree: "Sorotan: tekan <Tab> untuk autocomplete sebuah perintah.",
  },
  terminal: {
    ariaLog: "Terminal retro interaktif",
    ariaInput: "Input terminal",
    typeCmd: "Ketik sebuah perintah",
    tabStatus: "TAB autocomplete · ↑ riwayat",
    safeMode: "mode aman — tanpa shell sungguhan",
    crtLabel: "crt://guest@kodecity",
    bannerTitle: "KODECITY TERMINAL v1.1.0 — AKSES TERBATAS",
    bannerUplink: "Uplink terjalin. Hujan terdeteksi.",
    bannerHelp: "Ketik 'help' untuk melihat perintah yang tersedia.",
    prompt: "{city}@guest:~$ {value}",
    help: {
      available: "kanal yang tersedia:",
      help: "  help      — cetak ulang manifesto ini",
      about: "  about     — dossier developer",
      skills: "  skills    — daftar gudang senjata",
      projects: "  projects  — folder kasus yang dirilis",
      scenes: "  scenes    — peta blok kota",
      visit: "  visit <n> — lompat ke babak (mis. visit 4)",
      contact: "  contact   — buka kanal ke subjek",
      exit: "  exit      — keluar lewat babak akhir",
      clear: "  clear     — bersihkan layar",
      hintTab: "tips: tekan TAB untuk autocomplete.",
    },
    about: {
      name: "NAMA",
      role: "PERAN",
      status: "STATUS",
      location: "LOKASI",
      focus: "FOKUS",
    },
    projectsNote: "Dossier lengkap ada di Arsip Proyek di atas.",
    contactNote: "Buka kanal lewat Sinyal Kontak di bawah.",
    scenesHead: "blok kota (utara → selatan):",
    scenesNote: "pakai 'visit <n>' untuk langsung melompat ke satu.",
    exitLine: "Selamat malam. Pintu kota ada di balik kredit.",
    unknownBlock: "! blok tak dikenal. coba 'scenes' untuk peta.",
    usageVisit: "pemakaian: visit <scene-id | index>",
    unknownCmd: "! perintah tak dikenal: '{cmd}'",
    tryHelp: "Coba 'help'.",
    wiped: "KODECITY TERMINAL v1.1.0 — layar dibersihkan",
    routingTo: "Mengarahkan ke {target}…",
    whoami: "{user}@{city} — developer yang memperhatikan detail.",
  },
  contact: {
    label: "ruang radio di atap",
    title: "Sinyal Kontak",
    caption:
      "Papan sambung kota terbuka. Panggil sebuah kanal atau kirim pesan langsung.",
    primaryFrequency: "frekuensi utama",
    form: {
      title: "Kirim sebuah pesan",
      name: "nama",
      email: "email",
      subject: "subjek",
      message: "pesan",
      placeholderName: "Budi Santoso",
      placeholderEmail: "contoh@gmail.com",
      placeholderSubject: "re: kasus yang layak dibuka",
      placeholderMessage: "Apa yang sedang Anda bangun?",
      sending: "mengirim…",
      send: "kirim sinyal",
      sentTitle: "Sinyal Diterima",
      sentText: "transmisi tercatat. balasan menyusul dalam 48 jam.",
      again: "kirim sinyal lain",
      errFields: "Kolom kosong atau tidak valid — periksa nama dan email.",
      errRejected: "Transmisi ditolak.",
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