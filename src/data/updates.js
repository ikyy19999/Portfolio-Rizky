const CURRENT_UPDATE_VERSION = "2026.08.19";
const WHATS_NEW_STORAGE_KEY = "portfolio-whats-new-read";

const updates = [
  {
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
