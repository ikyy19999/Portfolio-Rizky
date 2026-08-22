const CURRENT_UPDATE_VERSION = "2026.08.22-koskosan-live";
const WHATS_NEW_STORAGE_KEY = "portfolio-whats-new-read";

const updates = [
  {
    id: "2026.08.22-koskosan-live",
    version: "2026.08.22",
    date: {
      en: "august 22, 2026",
      id: "22 agustus 2026",
      jv: "22 agustus 2026",
    },
    title: {
      en: "koskosan is now live",
      id: "koskosan sekarang sudah live",
      jv: "koskosan samenika sampun live",
    },
    description: {
      en: "the koskosan platform is now available and can be opened directly from the portfolio.",
      id: "platform koskosan sekarang sudah tersedia dan bisa dibuka langsung dari portfolio.",
      jv: "platform koskosan samenika sampun cumawis lan saged dipunbikak langsung saking portfolio.",
    },
    items: {
      en: [
        "launched the koskosan web platform",
        "added a responsive generated preview without a separate image asset",
        "added project copy in english, indonesian, and javanese krama",
        "added direct access from the project card and command palette",
      ],
      id: [
        "meluncurkan platform web koskosan",
        "menambahkan preview responsif tanpa file gambar terpisah",
        "menambahkan teks project dalam english, indonesia, dan jawa krama",
        "menambahkan akses langsung dari project card dan command palette",
      ],
      jv: [
        "ngluncuraken platform web koskosan",
        "nambahaken pratinjau responsif tanpa berkas gambar kapisah",
        "nambahaken teks karya mawi english, indonesia, lan jawa krama",
        "nambahaken akses langsung saking project card lan command palette",
      ],
    },
  },
  {
    id: "2026.08.21-scrollsmoother",
    version: "2026.08.21",
    date: {
      en: "august 21, 2026",
      id: "21 agustus 2026",
      jv: "21 agustus 2026",
    },
    title: {
      en: "scrolling, refined",
      id: "scroll yang lebih cinematic",
      jv: "scroll ingkang langkung cinematic",
    },
    description: {
      en: "page movement now feels smoother and more cinematic while keeping every existing interaction intact.",
      id: "gerakan halaman sekarang lebih halus dan cinematic tanpa mengubah interaction yang sudah ada.",
      jv: "obahing kaca samenika langkung alus lan cinematic kanthi tetep njagi sedaya interaction ingkang sampun wonten.",
    },
    items: {
      en: [
        "replaced Lenis with GSAP ScrollSmoother",
        "unified smooth navigation across the header, navbar, hero, footer, command palette, and keyboard shortcuts",
        "scrolling now pauses automatically while an intro, overlay, or case study is open",
        "reduced motion keeps the native scrolling fallback",
      ],
      id: [
        "mengganti Lenis sepenuhnya dengan GSAP ScrollSmoother",
        "menyatukan smooth navigation pada header, navbar, hero, footer, command palette, dan keyboard shortcut",
        "scroll otomatis pause saat intro, overlay, atau case study sedang terbuka",
        "reduced motion tetap memakai native scrolling sebagai fallback",
      ],
      jv: [
        "nggantos Lenis kanthi GSAP ScrollSmoother",
        "nyawijikaken smooth navigation wonten header, navbar, hero, footer, command palette, lan keyboard shortcut",
        "scroll otomatis kendel nalika intro, overlay, utawi case study saweg kabikak",
        "reduced motion tetep ngagem native scrolling minangka fallback",
      ],
    },
  },
  {
    id: "2026.08.20-motion",
    version: "2026.08.20",
    date: {
      en: "august 20, 2026",
      id: "20 agustus 2026",
      jv: "20 agustus 2026",
    },
    title: {
      en: "motion, on your terms",
      id: "animasi, sesuai maunya kamu",
      jv: "animasi, manut kersa panjenengan",
    },
    description: {
      en: "the site follows your device by default, but you can override it here — and it steps back on its own when things get slow.",
      id: "situs ini mengikuti setting device kamu, tapi bisa kamu atur sendiri di sini — dan otomatis mengalah kalau terasa berat.",
      jv: "situs punika ndherek setting piranti panjenengan, nanging saged dipunatur piyambak wonten mriki — lan piyambakipun ngalah menawi kraos awrat.",
    },
    items: {
      en: [
        "added a motion toggle in the footer and the command palette",
        "reduced motion is respected by default, and can be overridden per site",
        "animations turn themselves off when the page can't keep up",
        "fixed sideways scrolling on the skills category row",
      ],
      id: [
        "toggle animasi tersedia di footer dan command palette",
        "setting reduced motion device dihormati, tapi bisa ditimpa khusus di situs ini",
        "animasi mati sendiri kalau halaman terasa berat",
        "memperbaiki scroll menyamping pada baris kategori skills",
      ],
      jv: [
        "toggle animasi cumawis wonten footer lan command palette",
        "setting reduced motion piranti dipunajeni, nanging saged dipunewahi wonten situs punika",
        "animasi pejah piyambak menawi kaca kraos awrat",
        "ndandosi scroll ngiwa-nengen wonten larik kategori skills",
      ],
    },
  },
  {
    id: "2026.08.19-case-study",
    version: "2026.08.19",
    date: {
      en: "august 19, 2026",
      id: "19 agustus 2026",
      jv: "19 agustus 2026",
    },
    title: {
      en: "the story behind the work",
      id: "cerita di balik setiap project",
      jv: "cariyos wonten wingking karya",
    },
    description: {
      en: "projects can now be opened as a case study, and the palette got a lot better at finding things.",
      id: "project sekarang bisa dibuka sebagai case study, dan palette jadi jauh lebih pintar mencari.",
      jv: "karya samenika saged dipunbikak minangka case study, lan palette langkung pinter madosi.",
    },
    items: {
      en: [
        "added case study panels with the problem, the decisions, and the results",
        "projects are now searchable straight from the command palette",
        "the palette now matches abbreviations and remembers recent commands",
        "added a keyboard shortcut sheet and g + key section navigation",
      ],
      id: [
        "panel case study berisi masalah, keputusan teknis, dan hasilnya",
        "project sekarang bisa dicari langsung dari command palette",
        "palette sekarang mengerti singkatan dan mengingat command terakhir",
        "menambahkan daftar keyboard shortcut dan navigasi g + huruf",
      ],
      jv: [
        "panel case study isinipun prekawis, keputusan teknis, lan asilipun",
        "karya samenika saged dipunpadosi langsung saking command palette",
        "palette samenika mangertos cekakan lan kemutan printah pungkasan",
        "nambahaken daftar keyboard shortcut lan navigasi g + aksara",
      ],
    },
  },
  {
    id: "2026.08.19-command-palette",
    version: "2026.08.19",
    date: {
      en: "august 19, 2026",
      id: "19 agustus 2026",
      jv: "19 agustus 2026",
    },
    title: {
      en: "a faster way around",
      id: "akses makin cepat",
      jv: "akses langkung enggal",
    },
    description: {
      en: "find pages and useful actions without leaving your keyboard.",
      id: "cari halaman dan action penting langsung dari keyboard.",
      jv: "pados kaca lan printah wigatos langsung saking keyboard.",
    },
    items: {
      en: [
        "added command palette with cmd or ctrl + k",
        "added searchable navigation and quick actions",
        "added a dedicated what’s new panel",
      ],
      id: [
        "command palette sekarang bisa dibuka lewat cmd atau ctrl + k",
        "navigation dan quick action sekarang bisa dicari",
        "panel what’s new sudah tersedia",
      ],
      jv: [
        "command palette saged dipunbikak ngagem cmd utawi ctrl + k",
        "navigation lan quick action samenika saged dipunpadosi",
        "panel what’s new sampun cumawis",
      ],
    },
  },
  {
    id: "2026.08.18-languages",
    version: "2026.08.18",
    date: {
      en: "august 18, 2026",
      id: "18 agustus 2026",
      jv: "18 agustus 2026",
    },
    title: {
      en: "three languages, one experience",
      id: "tiga bahasa dalam satu pengalaman",
      jv: "tigang basa wonten setunggal pengalaman",
    },
    description: {
      en: "the whole portfolio is now available in english, indonesian, and javanese krama.",
      id: "seluruh portfolio sekarang tersedia dalam english, indonesia, dan jawa krama.",
      jv: "sedaya portfolio samenika cumawis mawi english, indonesia, lan jawa krama.",
    },
    items: {
      en: [
        "added a lightweight language transition",
        "saved language preference on the device",
        "added time-aware javanese greetings",
      ],
      id: [
        "menambahkan transisi bahasa yang ringan",
        "pilihan bahasa tersimpan di device",
        "sapaan jawa sekarang mengikuti waktu user",
      ],
      jv: [
        "nambahaken transisi basa ingkang entheng",
        "pilihan basa kasimpen wonten ing piranti",
        "atur salam jawa manut wekdalipun user",
      ],
    },
  },
  {
    id: "2026.08.17-immersive",
    version: "2026.08.17",
    date: {
      en: "august 17, 2026",
      id: "17 agustus 2026",
      jv: "17 agustus 2026",
    },
    title: {
      en: "a more immersive portfolio",
      id: "portfolio yang lebih immersive",
      jv: "portfolio ingkang langkung immersive",
    },
    description: {
      en: "motion and depth were refined while keeping the interface responsive.",
      id: "motion dan depth dibuat lebih halus sambil menjaga tampilan tetap responsive.",
      jv: "motion lan depth dipundamel langkung alus kanthi tampilan tetep responsive.",
    },
    items: {
      en: [
        "refined the immersive scene",
        "improved repeated scroll reveal",
        "polished light and dark semantic colors",
      ],
      id: [
        "menyempurnakan immersive scene",
        "memperbaiki scroll reveal berulang",
        "merapikan semantic colors light dan dark mode",
      ],
      jv: [
        "nyampurnakaken immersive scene",
        "ndandosi scroll reveal ingkang bola-bali",
        "nata semantic colors light lan dark mode",
      ],
    },
  },
];

export { CURRENT_UPDATE_VERSION, WHATS_NEW_STORAGE_KEY, updates };
