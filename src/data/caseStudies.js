/**
 * Case study content, keyed by the `slug` in ./projects.js.
 *
 * ── How this file behaves ──────────────────────────────────────────────
 * • A project WITHOUT an entry here keeps its old behaviour: the card is a
 *   plain link straight to the demo. Nothing breaks while this file is empty.
 * • A project WITH an entry gets a case study panel, and the demo link moves
 *   inside that panel.
 * • Every section is optional. Missing or empty sections are simply not
 *   rendered, so you can fill this in gradually instead of all at once.
 * • Every text field takes { en, id, jv }. Missing languages fall back to en,
 *   so you can write english first and translate later.
 *
 * ── The one rule ───────────────────────────────────────────────────────
 * Only write things that are true. A case study with vague claims reads worse
 * than no case study at all. Anything marked TODO below is a spot where the
 * text is filler taken from your existing card copy — replace it with the real
 * story (what actually broke, what you actually decided) or delete the field.
 */

const caseStudies = {
  "sports-booking-platform": {
    meta: {
      // TODO: confirm these three — they're the first thing a recruiter reads.
      role: {
        en: "Solo developer — design, backend, deployment",
        id: "Developer tunggal — desain, backend, deployment",
        jv: "Developer piyambak — desain, backend, deployment",
      },
      timeline: {
        en: "TODO: e.g. 2025 · 6 weeks",
        id: "TODO: contoh 2025 · 6 minggu",
        jv: "TODO: tuladha 2025 · 6 minggu",
      },
      status: {
        en: "Live",
        id: "Live",
        jv: "Live",
      },
    },

    stack: ["Laravel", "Filament", "Livewire", "MySQL"],

    links: {
      demo: "https://sportix.madebyrizky.my.id",
      repo: "", // leave empty to hide the button
    },

    summary: {
      en: "An online reservation system for sports courts, built so a venue owner can manage schedules and bookings without a spreadsheet.",
      id: "Sistem reservasi lapangan olahraga online, dibangun supaya pemilik venue bisa mengelola jadwal dan booking tanpa spreadsheet.",
      jv: "Sistem reservasi lapangan olahraga online, dipundamel supados ingkang kagungan venue saged ngatur jadwal lan booking tanpa spreadsheet.",
    },

    // TODO: this is the most valuable section. Describe the actual problem —
    // double bookings? manual WhatsApp confirmation? no payment record?
    problem: {
      en: "Court bookings were handled manually, which made schedule conflicts and lost reservations easy to miss.",
      id: "Booking lapangan masih ditangani manual, sehingga bentrok jadwal dan reservasi yang terlewat gampang terjadi.",
      jv: "Booking lapangan taksih dipuntangani manual, satemah bentrok jadwal lan reservasi ingkang kelangkungan gampil kedadosan.",
    },

    // TODO: replace each `body` with a real decision and the reason behind it.
    // "I picked X because Y" is worth more than a list of features.
    approach: {
      en: [
        {
          title: "Schedule as the core model",
          body: "Availability is derived from the schedule itself instead of being stored separately, so a booking can never point at a slot that no longer exists.",
        },
        {
          title: "Filament for the admin side",
          body: "The owner-facing panel was built on Filament so the CRUD, filtering, and permissions came from one consistent layer instead of hand-rolled screens.",
        },
        {
          title: "Livewire for the booking flow",
          body: "The customer flow updates the available slots without a page reload, which keeps the booking step short on mobile.",
        },
      ],
      id: [
        {
          title: "Jadwal sebagai model inti",
          body: "Ketersediaan slot diturunkan dari jadwal itu sendiri, bukan disimpan terpisah, sehingga booking tidak mungkin menunjuk slot yang sudah tidak ada.",
        },
        {
          title: "Filament untuk sisi admin",
          body: "Panel pemilik venue dibangun di atas Filament supaya CRUD, filter, dan permission datang dari satu lapisan yang konsisten.",
        },
        {
          title: "Livewire untuk alur booking",
          body: "Alur pelanggan memperbarui slot tanpa reload halaman, sehingga proses booking tetap singkat di mobile.",
        },
      ],
      jv: [
        {
          title: "Jadwal minangka model inti",
          body: "Kasadhiyan slot dipunpendhet saking jadwalipun piyambak, boten kasimpen kapisah, satemah booking boten saged nedahaken slot ingkang sampun boten wonten.",
        },
        {
          title: "Filament kangge sisih admin",
          body: "Panel ingkang kagungan venue dipundamel ngginakaken Filament supados CRUD, filter, lan permission saking setunggal lapisan ingkang konsisten.",
        },
        {
          title: "Livewire kangge alur booking",
          body: "Alur pelanggan nganyari slot tanpa reload kaca, satemah proses booking tetep cekak wonten mobile.",
        },
      ],
    },

    // TODO: results are where most portfolios lie. Only put numbers here if you
    // actually measured them. If you didn't measure anything, describe the
    // outcome plainly instead — that still counts.
    results: {
      en: [
        "Bookings and schedules live in one place instead of being tracked by hand.",
        "The admin panel covers venue, schedule, and booking management end to end.",
      ],
      id: [
        "Booking dan jadwal ada di satu tempat, tidak lagi dicatat manual.",
        "Panel admin menangani pengelolaan venue, jadwal, dan booking dari ujung ke ujung.",
      ],
      jv: [
        "Booking lan jadwal wonten setunggal papan, boten malih dipuncathet manual.",
        "Panel admin nangani pangelolaan venue, jadwal, lan booking saking pucuk dumugi pucuk.",
      ],
    },

    // Optional. Delete the key entirely if you don't want this section.
    learnings: {
      en: "TODO: one honest paragraph — what you'd build differently now.",
      id: "TODO: satu paragraf jujur — apa yang akan kamu bangun berbeda sekarang.",
      jv: "TODO: setunggal paragraf jujur — menapa ingkang badhe dipundamel benten samenika.",
    },
  },

  /*
   * ── Template — copy this block, rename the slug, fill it in ──────────
   *
   * "music-streaming-website": {
   *   meta: {
   *     role: { en: "", id: "", jv: "" },
   *     timeline: { en: "", id: "", jv: "" },
   *     status: { en: "", id: "", jv: "" },
   *   },
   *   stack: ["HTML", "CSS", "JavaScript"],
   *   links: { demo: "/assets/Web Music/music.html", repo: "" },
   *   summary: { en: "", id: "", jv: "" },
   *   problem: { en: "", id: "", jv: "" },
   *   approach: {
   *     en: [{ title: "", body: "" }],
   *     id: [{ title: "", body: "" }],
   *     jv: [{ title: "", body: "" }],
   *   },
   *   results: { en: [""], id: [""], jv: [""] },
   *   learnings: { en: "", id: "", jv: "" },
   * },
   */
};

const getCaseStudy = (slug) => (slug ? (caseStudies[slug] ?? null) : null);

const hasCaseStudy = (slug) => Boolean(getCaseStudy(slug));

export { caseStudies, getCaseStudy, hasCaseStudy };
export default caseStudies;
