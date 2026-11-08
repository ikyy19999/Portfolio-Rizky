const CURRENT_UPDATE_VERSION = "2026.11.09-portfolio-projects";
const WHATS_NEW_STORAGE_KEY = "portfolio-whats-new-read";

const updates = [
  {
    id: "2026.11.09-portfolio-projects",
    version: "2026.11.09",
    date: {
      en: "November 9, 2026",
      id: "9 November 2026",
      jv: "9 November 2026",
    },
    title: {
      en: "Portfolio Projects, Refined",
      id: "Pembaruan Project Portfolio",
      jv: "Panyampurnan Karya Portfolio",
    },
    description: {
      en: "The Koskosan Platform now uses its new Havunio domain, while the Music Streaming Website has been removed from the portfolio.",
      id: "Koskosan Platform kini menggunakan domain Havunio yang baru. Project Music Streaming Website juga telah dihapus dari daftar portfolio.",
      jv: "Koskosan Platform samenika ngginakaken domain Havunio ingkang enggal. Karya Music Streaming Website ugi sampun dipunbusak saking dhaptar portfolio.",
    },
    items: {
      en: [
        "Updated the Koskosan Platform domain to havunio.madebyrizky.my.id",
        "Redirected the project reference to its new domain",
        "Removed Music Streaming Website from the project collection",
        "Cleaned up the portfolio project listing",
        "Preserved existing case studies and navigation functionality",
      ],
      id: [
        "Memperbarui domain Koskosan Platform menjadi havunio.madebyrizky.my.id",
        "Mengubah referensi project agar mengarah ke domain terbaru",
        "Menghapus Music Streaming Website dari daftar project",
        "Merapikan daftar project pada portfolio",
        "Mempertahankan case study dan navigasi yang masih digunakan",
      ],
      jv: [
        "Nganyari domain Koskosan Platform dados havunio.madebyrizky.my.id",
        "Ngowahi pranala karya supados tumuju dhateng domain enggal",
        "Mbusak Music Streaming Website saking dhaptar karya",
        "Ngrapekaken dhaptar karya wonten ing portfolio",
        "Njagi case study lan navigasi ingkang taksih dipunginakaken",
      ],
    },
  },
  {
    id: "2026.09.01-email-contact",
    version: "2026.09.01",
    date: {
      en: "September 1, 2026",
      id: "1 September 2026",
      jv: "1 September 2026",
    },
    title: {
      en: "Email Contact, Refined",
      id: "Pembaruan Kontak Email",
      jv: "Panyampurnan Kontak Email",
    },
    description: {
      en: "The portfolio now uses its new primary email domain and includes a dedicated contact for abuse reports.",
      id: "Portfolio kini menggunakan domain email utama yang baru dan menyediakan alamat khusus untuk laporan penyalahgunaan.",
      jv: "Portfolio samenika ngginakaken domain email utama ingkang enggal lan nyawisaken alamat khusus kangge laporan penyalahgunaan.",
    },
    items: {
      en: [
        "Updated the primary portfolio email to hello@madebyrizky.id",
        "Added abuse@madebyrizky.id for abuse reports",
        "Kept hello@ as the primary public contact",
      ],
      id: [
        "Memperbarui email utama portfolio menjadi hello@madebyrizky.id",
        "Menambahkan abuse@madebyrizky.id untuk laporan penyalahgunaan",
        "Mempertahankan hello@ sebagai kontak publik utama",
      ],
      jv: [
        "Nganyari email utama portfolio dados hello@madebyrizky.id",
        "Nambahaken abuse@madebyrizky.id kangge laporan penyalahgunaan",
        "Njagi hello@ minangka kontak umum utama",
      ],
    },
  },
  {
    id: "2026.08.30-javanese-maintenance",
    version: "2026.08.30",
    date: {
      en: "August 30, 2026",
      id: "30 Agustus 2026",
      jv: "30 Agustus 2026",
    },
    title: {
      en: "Javanese Language Under Maintenance",
      id: "Bahasa Jawa dalam Pemeliharaan",
      jv: "Basa Jawa Saweg Dipunraosaken",
    },
    description: {
      en: "The Javanese language option is temporarily unavailable while its translation system is being refined.",
      id: "Pilihan bahasa Jawa sementara tidak tersedia selama sistem terjemahannya sedang disempurnakan.",
      jv: "Pilihan basa Jawa sauntawis dereng saged dipunginakaken amargi sistem terjemahanipun saweg dipunsampurnakaken.",
    },
    items: {
      en: [
        "Kept Javanese visible in the language switcher",
        "Displayed a maintenance notice when Javanese is selected",
        "Kept English and Indonesian fully functional",
      ],
      id: [
        "Mempertahankan bahasa Jawa pada language switcher",
        "Menampilkan pemberitahuan pemeliharaan saat bahasa Jawa dipilih",
        "Memastikan bahasa Inggris dan Indonesia tetap berfungsi normal",
      ],
      jv: [
        "Njagi basa Jawa tetep katingal wonten ing language switcher",
        "Nampilaken pawartos pangopènan nalika basa Jawa dipunpilih",
        "Mesthekaken basa Inggris lan Indonesia tetep saged dipunginakaken kanthi sae",
      ],
    },
  },
  {
    id: "2026.08.22-koskosan-case-study",
    version: "2026.08.22",
    date: {
      en: "August 22, 2026",
      id: "22 Agustus 2026",
      jv: "22 Agustus 2026",
    },
    title: {
      en: "Koskosan Platform Is Live",
      id: "Koskosan Platform Resmi Diluncurkan",
      jv: "Koskosan Platform Sampun Dipunluncuraken",
    },
    description: {
      en: "The Koskosan Platform is now live, featuring a complete case study and direct access to the product.",
      id: "Koskosan Platform kini telah tersedia dengan case study lengkap dan akses langsung ke produknya.",
      jv: "Koskosan Platform samenika sampun cumawis kanthi case study ingkang jangkep lan akses langsung dhateng produkipun.",
    },
    items: {
      en: [
        "Launched the Koskosan web platform",
        "Added a responsive generated preview without a separate image asset",
        "Introduced project descriptions in English, Indonesian, and Javanese Krama",
        "Added a complete case study covering the problem, approach, and results",
        "Integrated a direct link to the live product",
      ],
      id: [
        "Meluncurkan platform web Koskosan",
        "Menambahkan preview responsif tanpa file gambar terpisah",
        "Menyediakan deskripsi project dalam bahasa Inggris, Indonesia, dan Jawa Krama",
        "Menambahkan case study lengkap yang mencakup masalah, pendekatan, dan hasil",
        "Mengintegrasikan tautan langsung menuju produk yang sudah live",
      ],
      jv: [
        "Ngluncuraken platform web Koskosan",
        "Nambahaken pratinjau responsif tanpa berkas gambar kapisah",
        "Nyawisaken katrangan karya mawi basa Inggris, Indonesia, lan Jawa Krama",
        "Nambahaken case study jangkep ingkang ngemot prekawis, pendekatan, lan asil",
        "Nggabungaken pranala langsung dhateng produk ingkang sampun live",
      ],
    },
  },
  {
    id: "2026.08.21-scrollsmoother",
    version: "2026.08.21",
    date: {
      en: "August 21, 2026",
      id: "21 Agustus 2026",
      jv: "21 Agustus 2026",
    },
    title: {
      en: "A Smoother Scrolling Experience",
      id: "Pengalaman Scroll yang Lebih Halus",
      jv: "Pengalaman Scroll Ingkang Langkung Alus",
    },
    description: {
      en: "Page transitions and scrolling now feel smoother and more immersive while preserving existing interactions.",
      id: "Transisi halaman dan scrolling kini terasa lebih halus dan immersive tanpa mengubah interaksi yang sudah tersedia.",
      jv: "Transisi kaca lan scrolling samenika langkung alus lan immersive kanthi tetep njagi interaksi ingkang sampun wonten.",
    },
    items: {
      en: [
        "Replaced Lenis with GSAP ScrollSmoother",
        "Unified smooth navigation across the header, navbar, hero, footer, Command Palette, and keyboard shortcuts",
        "Automatically paused scrolling when an intro, overlay, or case study is open",
        "Preserved native scrolling as the fallback for Reduced Motion",
      ],
      id: [
        "Mengganti Lenis dengan GSAP ScrollSmoother",
        "Menyatukan smooth navigation pada header, navbar, hero, footer, Command Palette, dan keyboard shortcut",
        "Menghentikan scrolling secara otomatis saat intro, overlay, atau case study terbuka",
        "Mempertahankan native scrolling sebagai fallback untuk Reduced Motion",
      ],
      jv: [
        "Nggantos Lenis kanthi GSAP ScrollSmoother",
        "Nyawijikaken smooth navigation wonten ing header, navbar, hero, footer, Command Palette, lan keyboard shortcut",
        "Ngendhegaken scrolling kanthi otomatis nalika intro, overlay, utawi case study kabikak",
        "Njagi native scrolling minangka fallback kangge Reduced Motion",
      ],
    },
  },
  {
    id: "2026.08.20-motion",
    version: "2026.08.20",
    date: {
      en: "August 20, 2026",
      id: "20 Agustus 2026",
      jv: "20 Agustus 2026",
    },
    title: {
      en: "Motion, Your Way",
      id: "Atur Animasi Sesuai Preferensi",
      jv: "Ngatur Animasi Miturut Kersa",
    },
    description: {
      en: "The site respects your device preferences by default, with an option to customize motion settings and automatic adjustments when performance drops.",
      id: "Situs mengikuti preferensi perangkat secara default. Pengaturan animasi juga dapat disesuaikan dan akan dinonaktifkan otomatis ketika performa menurun.",
      jv: "Situs ndherek pilihan piranti kanthi otomatis. Pangaturan animasi ugi saged dipunowahi lan badhe dipunpateni nalika performa mudhun.",
    },
    items: {
      en: [
        "Added a motion toggle to the footer and Command Palette",
        "Respected system Reduced Motion preferences with an option to override them",
        "Automatically disabled animations when page performance becomes unstable",
        "Fixed horizontal scrolling in the skills category row",
      ],
      id: [
        "Menambahkan toggle animasi pada footer dan Command Palette",
        "Mengikuti preferensi Reduced Motion perangkat dengan opsi pengaturan manual",
        "Menonaktifkan animasi secara otomatis ketika performa halaman menurun",
        "Memperbaiki horizontal scrolling pada baris kategori skills",
      ],
      jv: [
        "Nambahaken toggle animasi wonten ing footer lan Command Palette",
        "Ndherek pilihan Reduced Motion piranti kanthi pilihan pangaturan manual",
        "Mateni animasi kanthi otomatis nalika performa kaca mudhun",
        "Ndandosi horizontal scrolling wonten ing larik kategori skills",
      ],
    },
  },
  {
    id: "2026.08.19-case-study",
    version: "2026.08.19",
    date: {
      en: "August 19, 2026",
      id: "19 Agustus 2026",
      jv: "19 Agustus 2026",
    },
    title: {
      en: "Behind Every Project",
      id: "Cerita di Balik Setiap Project",
      jv: "Cariyos Wonten Wingking Saben Karya",
    },
    description: {
      en: "Projects now feature dedicated case studies, while the Command Palette has become more effective at finding content.",
      id: "Setiap project kini memiliki case study tersendiri, sementara Command Palette menjadi lebih efektif dalam menemukan konten.",
      jv: "Saben karya samenika gadhah case study piyambak, dene Command Palette langkung efektif anggenipun madosi konten.",
    },
    items: {
      en: [
        "Introduced case study panels covering project challenges, decisions, and results",
        "Made projects searchable directly from the Command Palette",
        "Improved search to recognize abbreviations and remember recent commands",
        "Added a keyboard shortcut reference and G + key section navigation",
      ],
      id: [
        "Menambahkan panel case study yang membahas masalah, keputusan teknis, dan hasil project",
        "Memungkinkan pencarian project langsung melalui Command Palette",
        "Meningkatkan pencarian agar mengenali singkatan dan mengingat command terakhir",
        "Menambahkan referensi keyboard shortcut dan navigasi bagian menggunakan G + tombol",
      ],
      jv: [
        "Nambahaken panel case study ingkang ngrembag prekawis, keputusan teknis, lan asil karya",
        "Ndadosaken karya saged dipunpadosi langsung lumantar Command Palette",
        "Ningkataken sistem pados supados saged mangertos cekakan lan ngemut printah pungkasan",
        "Nambahaken referensi keyboard shortcut lan navigasi bagean mawi G + tombol",
      ],
    },
  },
  {
    id: "2026.08.19-command-palette",
    version: "2026.08.19",
    date: {
      en: "August 19, 2026",
      id: "19 Agustus 2026",
      jv: "19 Agustus 2026",
    },
    title: {
      en: "A Faster Way to Navigate",
      id: "Navigasi yang Lebih Cepat",
      jv: "Navigasi Ingkang Langkung Enggal",
    },
    description: {
      en: "Find pages, navigation links, and useful actions without leaving your keyboard.",
      id: "Temukan halaman, tautan navigasi, dan berbagai tindakan penting langsung melalui keyboard.",
      jv: "Pados kaca, pranala navigasi, lan maneka warna tumindak wigatos langsung lumantar keyboard.",
    },
    items: {
      en: [
        "Introduced the Command Palette with Cmd or Ctrl + K",
        "Added searchable navigation and quick actions",
        "Introduced a dedicated What's New panel",
      ],
      id: [
        "Menghadirkan Command Palette melalui kombinasi Cmd atau Ctrl + K",
        "Menambahkan pencarian navigasi dan quick action",
        "Menghadirkan panel What's New khusus",
      ],
      jv: [
        "Nyangyakaken Command Palette mawi kombinasi Cmd utawi Ctrl + K",
        "Nambahaken pados navigasi lan quick action",
        "Nyangyakaken panel What's New khusus",
      ],
    },
  },
  {
    id: "2026.08.18-languages",
    version: "2026.08.18",
    date: {
      en: "August 18, 2026",
      id: "18 Agustus 2026",
      jv: "18 Agustus 2026",
    },
    title: {
      en: "Three Languages, One Experience",
      id: "Tiga Bahasa, Satu Pengalaman",
      jv: "Tigang Basa, Setunggal Pengalaman",
    },
    description: {
      en: "The entire portfolio is now available in English, Indonesian, and Javanese Krama.",
      id: "Seluruh portfolio kini tersedia dalam bahasa Inggris, Indonesia, dan Jawa Krama.",
      jv: "Sedaya portfolio samenika cumawis mawi basa Inggris, Indonesia, lan Jawa Krama.",
    },
    items: {
      en: [
        "Added lightweight language transitions",
        "Saved language preferences on the user's device",
        "Introduced time-aware Javanese greetings",
      ],
      id: [
        "Menambahkan transisi bahasa yang lebih ringan",
        "Menyimpan preferensi bahasa pada perangkat pengguna",
        "Menambahkan sapaan bahasa Jawa yang menyesuaikan waktu",
      ],
      jv: [
        "Nambahaken transisi basa ingkang langkung entheng",
        "Nyimpen pilihan basa wonten ing piranti pangangge",
        "Nambahaken salam basa Jawa ingkang nyelarasaken wekdal",
      ],
    },
  },
  {
    id: "2026.08.17-immersive",
    version: "2026.08.17",
    date: {
      en: "August 17, 2026",
      id: "17 Agustus 2026",
      jv: "17 Agustus 2026",
    },
    title: {
      en: "A More Immersive Portfolio",
      id: "Portfolio dengan Pengalaman Lebih Immersive",
      jv: "Portfolio Kanthi Pengalaman Ingkang Langkung Immersive",
    },
    description: {
      en: "Visual motion and depth have been refined to create a more immersive experience while keeping the interface responsive.",
      id: "Animasi visual dan kedalaman tampilan disempurnakan untuk menciptakan pengalaman yang lebih immersive dengan tetap menjaga responsivitas antarmuka.",
      jv: "Animasi visual lan kedalaman tampilan dipunsampurnakaken kangge nyiptakaken pengalaman ingkang langkung immersive kanthi tetep njagi responsivitas antarmuka.",
    },
    items: {
      en: [
        "Refined the immersive visual scene",
        "Improved repeated scroll reveal animations",
        "Polished semantic colors across light and dark modes",
      ],
      id: [
        "Menyempurnakan tampilan immersive scene",
        "Memperbaiki animasi scroll reveal agar berjalan konsisten",
        "Merapikan semantic colors pada light mode dan dark mode",
      ],
      jv: [
        "Nyampurnakaken tampilan immersive scene",
        "Ndandosi animasi scroll reveal supados lumampah kanthi konsisten",
        "Ngrapekaken semantic colors wonten ing light mode lan dark mode",
      ],
    },
  },
];

export { CURRENT_UPDATE_VERSION, WHATS_NEW_STORAGE_KEY, updates };