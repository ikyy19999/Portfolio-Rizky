const caseStudies = {
  "koskosan-platform": {
    meta: {
      role: {
        en: "Full-stack development, product design, and UI/UX redesign",
        id: "Pengembangan full-stack, product design, dan redesign UI/UX",
        jv: "Pangembangan full-stack, product design, saha redesign UI/UX",
      },
      timeline: {
        en: "2026",
        id: "2026",
        jv: "2026",
      },
      status: {
        en: "Live demo · ongoing redesign",
        id: "Demo online · redesign berjalan",
        jv: "Demo online · redesign taksih lumampah",
      },
    },

    stack: [
      "Laravel",
      "Blade",
      "Tailwind CSS",
      "JavaScript",
      "GSAP / ScrollTrigger",
      "Lenis",
      "MySQL",
      "Midtrans",
    ],

    links: {
      demo: "https://koskosan.madebyrizky.my.id/",
      repo: "",
    },

    summary: {
      en: "Havunio is the redesign of my boarding-house project into a premium-focused housing discovery and booking platform. Exclusive boarding houses lead the experience, while other housing categories remain accessible through a connected search, room-selection, and reservation flow.",
      id: "Havunio adalah redesign proyek kos-kosan menjadi platform pencarian dan booking hunian dengan pendekatan premium. Kos eksklusif menjadi identitas utamanya, sementara kategori hunian lain tetap tersedia lewat alur pencarian, pemilihan kamar, dan reservasi yang saling terhubung.",
      jv: "Havunio inggih menika redesign proyek kos dados platform panelusuran saha booking papan panggenan kanthi pendekatan premium. Kos eksklusif dados identitas utaminipun, dene kategori papan panggenan sanesipun tetep saged dipunpadosi lumantar alur panelusuran, pamilihan kamar, saha reservasi ingkang gegayutan.",
    },

    problem: {
      en: "The existing boarding-house project needed a clearer product identity and a more cohesive journey from discovering a property to choosing a room, booking a stay, and checking payment details. The challenge was to introduce a distinctive premium visual language without sacrificing clarity, mobile usability, or transaction accuracy.",
      id: "Proyek kos-kosan sebelumnya membutuhkan identitas produk yang lebih jelas dan pengalaman yang lebih konsisten, mulai dari mencari hunian, memilih kamar, melakukan booking, sampai mengecek pembayaran. Tantangannya adalah membangun visual premium yang punya karakter tanpa mengorbankan keterbacaan, kenyamanan di mobile, dan ketepatan informasi transaksi.",
      jv: "Proyek kos saderengipun mbetahaken identitas produk ingkang langkung cetha saha pengalaman ingkang konsisten, wiwit panelusuran papan panggenan, pamilihan kamar, booking, dumugi pamriksan pambayaran. Tantanganipun inggih menika nyusun tampilan premium ingkang gadhah karakter, kanthi tetep njagi keterbacaan, kenyamanan wonten mobile, saha ketepatan informasi transaksi.",
    },

    approach: {
      en: [
        {
          title: "Repositioning the product as Havunio",
          body: "I moved the original boarding-house identity toward a hybrid premium platform, with exclusive residences as the primary focus. The visual direction combines editorial split layouts, warm natural tones, balanced brutalism, and restrained glass and clay-inspired details.",
        },
        {
          title: "Designing discovery around real decisions",
          body: "I organized the journey around location and category exploration, property information, room availability, and room selection. Each step keeps practical details visible before users move into booking.",
        },
        {
          title: "Connecting booking, payment, and support",
          body: "The flow continues through stay dates, rental duration, checkout, full or down-payment options, booking lookup, invoices, and support tickets. Transaction-related screens distinguish stored payment amounts from price estimates.",
        },
        {
          title: "Using motion with restraint",
          body: "GSAP and ScrollTrigger handle repeatable scroll reveals and selected transitions. Lenis adds smooth scrolling on supported desktop devices, while mobile keeps native scrolling and reduced-motion preferences are respected.",
        },
        {
          title: "Building a maintainable Laravel interface",
          body: "I integrated the redesign with Blade templates and page-specific CSS and JavaScript, keeping existing routes, form validation, and server-driven booking data in place as the visual system evolved.",
        },
      ],
      id: [
        {
          title: "Mengubah identitas menjadi Havunio",
          body: "Saya mengarahkan proyek kos-kosan menjadi hybrid premium platform dengan kos eksklusif sebagai fokus utama. Arah visualnya memadukan editorial split layout, warna natural yang hangat, balanced brutalism, serta aksen glass dan clay yang digunakan seperlunya.",
        },
        {
          title: "Menyusun pencarian sesuai kebutuhan pengguna",
          body: "Saya merancang alur dari eksplorasi lokasi dan kategori, informasi hunian, ketersediaan kamar, sampai pemilihan kamar. Informasi penting tetap mudah ditemukan sebelum pengguna masuk ke proses booking.",
        },
        {
          title: "Menghubungkan booking, pembayaran, dan bantuan",
          body: "Alurnya mencakup tanggal masuk, durasi sewa, checkout, pilihan bayar penuh atau DP, cek booking, invoice, dan tiket bantuan. Di halaman transaksi, nominal pembayaran yang tercatat dibedakan dari estimasi harga kamar.",
        },
        {
          title: "Motion yang halus dan tetap fungsional",
          body: "Saya memakai GSAP dan ScrollTrigger untuk scroll reveal yang bisa berulang serta transisi pada elemen tertentu. Lenis dipakai pada desktop yang mendukung, sedangkan mobile tetap menggunakan native scrolling dan menghormati pengaturan reduced motion.",
        },
        {
          title: "Menjaga integrasi Laravel tetap rapi",
          body: "Redesign diintegrasikan melalui Blade dengan CSS dan JavaScript terpisah per halaman. Route, validasi form, dan data booking dari backend tetap dipertahankan saat sistem visual diperbarui.",
        },
      ],
      jv: [
        {
          title: "Nggantos identitas dados Havunio",
          body: "Kula ngarahaken proyek kos dados hybrid premium platform kanthi kos eksklusif minangka fokus utami. Desainipun nggabungaken editorial split layout, warni natural ingkang anget, balanced brutalism, saha aksen glass lan clay ingkang dipunginakaken sacekapipun.",
        },
        {
          title: "Nyusun panelusuran manut kabutuhan pangguna",
          body: "Kula ngrancang alur saking eksplorasi lokasi saha kategori, informasi papan panggenan, kasadhiyan kamar, dumugi pamilihan kamar. Informasi wigati tetep gampil dipunpanggihi sadèrèngipun booking.",
        },
        {
          title: "Nyambungaken booking, pambayaran, lan pitulungan",
          body: "Aluripun nyakup tanggal mlebet, dangunipun sewa, checkout, pilihan bayar lunas utawi DP, cek booking, invoice, saha tiket pitulungan. Nominal pambayaran ingkang kacathet dipunbedakaken kaliyan perkiraan rega kamar.",
        },
        {
          title: "Motion ingkang alus saha migunani",
          body: "Kula ngginakaken GSAP saha ScrollTrigger kangge scroll reveal ingkang saged dipunambali saha transisi ing unsur tartamtu. Lenis dipunginakaken wonten desktop ingkang ndhukung, dene mobile tetep ngginakaken native scrolling lan ngajeni pengaturan reduced motion.",
        },
        {
          title: "Njagi integrasi Laravel tetep rapi",
          body: "Redesign dipungabungaken lumantar Blade kanthi CSS saha JavaScript kapisah saben kaca. Route, validasi formulir, saha data booking saking backend tetep dipunjagi nalika sistem visual dipunanyaraken.",
        },
      ],
    },

    results: {
      en: [
        "The project was rebranded as Havunio with a clearer premium direction and exclusive boarding houses at its center.",
        "Core screens now share a more cohesive visual language across property discovery, booking, payment details, account, and support flows.",
        "Responsive layouts and repeatable motion patterns have been introduced without replacing the underlying booking and transaction logic.",
      ],
      id: [
        "Proyek berganti identitas menjadi Havunio dengan arah premium yang lebih jelas dan kos eksklusif sebagai fokus utamanya.",
        "Sejumlah halaman inti kini memakai sistem visual yang lebih konsisten, dari pencarian hunian dan booking sampai detail pembayaran, akun, serta bantuan.",
        "Layout responsif dan pola motion berulang diterapkan sambil menjaga alur booking dan transaksi yang sudah ada.",
      ],
      jv: [
        "Proyek sampun nggantos identitas dados Havunio kanthi arah premium ingkang langkung cetha saha kos eksklusif dados fokus utami.",
        "Sawetawis kaca utami samenika ngginakaken sistem visual ingkang langkung konsisten, wiwit panelusuran papan panggenan lan booking dumugi rincian pambayaran, akun, saha pitulungan.",
        "Layout responsif saha pola motion ingkang saged dipunambali dipunterapaken kanthi tetep njagi alur booking saha transaksi ingkang sampun wonten.",
      ],
    },

    learnings: {
      en: "Havunio taught me to treat a redesign as a product-wide system. Visual decisions had to work alongside mobile usability, repeatable animations, form behavior, and reliable transaction data. I also learned to separate live room prices from stored payment records when presenting booking details and invoices. My next priority is cross-page QA, accessibility checks, and testing more booking and payment edge cases.",
      id: "Lewat Havunio, saya belajar melihat redesign sebagai pembaruan sistem produk secara menyeluruh. Keputusan visual harus sejalan dengan kenyamanan mobile, animasi yang konsisten, perilaku form, dan ketepatan data transaksi. Saya juga belajar memisahkan harga kamar saat ini dari nominal pembayaran yang sudah tercatat saat menampilkan detail booking dan invoice. Fokus berikutnya adalah pengujian antarhalaman, aksesibilitas, serta berbagai kondisi khusus pada booking dan pembayaran.",
      jv: "Saking Havunio, kula sinau ningali redesign minangka panyempurnaan sistem produk kanthi jangkep. Keputusan visual kedah selaras kaliyan kenyamanan mobile, animasi ingkang konsisten, prilaku formulir, saha ketepatan data transaksi. Kula ugi sinau misahaken rega kamar samenika saking nominal pambayaran ingkang sampun kacathet nalika nampilaken rincian booking saha invoice. Fokus salajengipun inggih menika pengujian antarkaca, aksesibilitas, saha maneka kondisi khusus wonten booking lan pambayaran.",
    },
  },

  "sports-booking-platform": {
    meta: {
      role: {
        en: "Solo full-stack developer — design, backend, deployment",
        id: "Full-stack developer tunggal — desain, backend, deployment",
        jv: "Full-stack developer piyambak — desain, backend, deployment",
      },
      timeline: {
        en: "2026",
        id: "2026",
        jv: "2026",
      },
      status: {
        en: "Live demo",
        id: "Demo online",
        jv: "Demo online",
      },
    },

    stack: [
      "Laravel 12",
      "Blade",
      "Tailwind CSS",
      "Livewire",
      "Filament",
      "MySQL",
      "Midtrans Sandbox",
      "LLM API",
    ],

    links: {
      demo: "https://sportix.madebyrizky.my.id",
      repo: "",
    },

    summary: {
      en: "A sports court booking demo with schedule-based reservations, sandbox payments, shared bookings through Sportix Squad, and Kivo, an AI-assisted court search experience.",
      id: "Demo platform booking lapangan olahraga dengan reservasi berdasarkan jadwal, simulasi pembayaran, fitur booking bersama Sportix Squad, dan Kivo untuk membantu pencarian lapangan.",
      jv: "Demo platform booking lapangan olahraga kanthi reservasi adhedhasar jadwal, simulasi pambayaran, fitur booking bebarengan Sportix Squad, lan Kivo kangge mbiyantu pados lapangan.",
    },

    problem: {
      en: "A court booking flow must keep slot availability and transaction states consistent, even when payments are delayed, retried, or shared among several participants. Search also needs to return courts that actually exist in the demo catalog.",
      id: "Alur booking lapangan perlu menjaga ketersediaan slot dan status transaksi tetap konsisten, termasuk saat pembayaran tertunda, dicoba ulang, atau dibagi antar peserta. Pencarian juga harus menampilkan lapangan yang benar-benar ada di katalog demo.",
      jv: "Alur booking lapangan kedah njagi kasadhiyan slot lan status transaksi tetep trep, kalebet nalika pambayaran katundha, dipuncobi malih, utawi dipunbagi antawisipun peserta. Panelusuran ugi kedah nampilaken lapangan ingkang saestu wonten ing katalog demo.",
    },

    approach: {
      en: [
        {
          title: "Availability-aware booking flow",
          body: "I used Laravel for server-side booking validation and Livewire for interactive date and time selection, with availability checked again when a reservation is submitted.",
        },
        {
          title: "Sandbox payment verification",
          body: "Midtrans Sandbox simulates payment methods. Signed notifications and gateway status checks help reconcile transactions against the expected order and amount.",
        },
        {
          title: "Shared bookings with Sportix Squad",
          body: "Sportix Squad adds invitation links, participant management, and simulated split payments so a group can coordinate one reservation.",
        },
        {
          title: "Kivo, a catalog-grounded AI assistant",
          body: "Kivo combines local intent handling with an LLM API for more complex queries. Court recommendations are generated from the application's own catalog rather than invented results.",
        },
        {
          title: "Admin workflows with Filament",
          body: "I used Filament to organize administrative workflows separately from the customer booking experience.",
        },
      ],
      id: [
        {
          title: "Booking berdasarkan ketersediaan slot",
          body: "Saya menggunakan Laravel untuk validasi booking di server dan Livewire untuk pemilihan tanggal serta jam secara interaktif. Ketersediaan diperiksa lagi ketika reservasi dikirim.",
        },
        {
          title: "Verifikasi pembayaran sandbox",
          body: "Midtrans Sandbox digunakan untuk simulasi metode pembayaran. Notifikasi bertanda tangan dan pengecekan status gateway membantu mencocokkan transaksi dengan order serta nominal yang seharusnya.",
        },
        {
          title: "Booking bersama lewat Sportix Squad",
          body: "Sportix Squad menyediakan tautan undangan, pengelolaan peserta, dan simulasi split payment supaya satu grup bisa mengatur reservasi bersama.",
        },
        {
          title: "Kivo dengan rekomendasi dari katalog",
          body: "Kivo menggabungkan pemrosesan intent lokal dan LLM API untuk pertanyaan yang lebih kompleks. Rekomendasi lapangan diambil dari katalog aplikasi agar hasilnya sesuai dengan data yang tersedia.",
        },
        {
          title: "Alur administrasi dengan Filament",
          body: "Saya menggunakan Filament untuk menyusun kebutuhan administrasi secara terpisah dari pengalaman booking pengguna.",
        },
      ],
      jv: [
        {
          title: "Booking miturut kasadhiyan slot",
          body: "Kula ngginakaken Laravel kangge validasi booking wonten server lan Livewire kangge milih tanggal saha jam kanthi interaktif. Kasadhiyan slot dipunpriksa malih nalika reservasi dipunkirim.",
        },
        {
          title: "Verifikasi pambayaran sandbox",
          body: "Midtrans Sandbox dipunginakaken kangge simulasi cara pambayaran. Notifikasi kanthi tandha tangan digital lan pamriksan status gateway mbiyantu nyocogaken transaksi kaliyan order saha nominalipun.",
        },
        {
          title: "Booking bebarengan liwat Sportix Squad",
          body: "Sportix Squad nyawisaken pranala undhangan, pangaturan peserta, lan simulasi split payment supados setunggal kelompok saged ngatur reservasi bebarengan.",
        },
        {
          title: "Kivo kanthi rekomendasi saking katalog",
          body: "Kivo nggabungaken pangolahan intent lokal lan LLM API kangge pitakenan ingkang langkung rumit. Rekomendasi lapangan dipunpendhet saking katalog aplikasi supados cocog kaliyan data ingkang wonten.",
        },
        {
          title: "Alur administrasi kanthi Filament",
          body: "Kula ngginakaken Filament kangge nata kabutuhan administrasi kanthi kapisah saking pengalaman booking pangguna.",
        },
      ],
    },

    results: {
      en: [
        "A live portfolio demo connects court discovery, slot selection, booking records, and simulated payments in one application.",
        "Sportix Squad supports group participation and sandbox split-payment flows.",
        "Kivo provides court search and recommendations based on active demo catalog data.",
      ],
      id: [
        "Demo portfolio yang bisa diakses online menghubungkan pencarian lapangan, pemilihan slot, pencatatan booking, dan simulasi pembayaran dalam satu aplikasi.",
        "Sportix Squad mendukung partisipasi grup dan alur split payment menggunakan sandbox.",
        "Kivo membantu pencarian dan rekomendasi lapangan berdasarkan data katalog demo yang aktif.",
      ],
      jv: [
        "Demo portfolio online nyawijikaken panelusuran lapangan, pamilihan slot, cathetan booking, lan simulasi pambayaran wonten setunggal aplikasi.",
        "Sportix Squad ndhukung peserta kelompok lan alur split payment ngginakaken sandbox.",
        "Kivo mbiyantu panelusuran lan rekomendasi lapangan adhedhasar data katalog demo ingkang aktif.",
      ],
    },

    learnings: {
      en: "Sportix taught me to treat payment callbacks, retries, and booking states as connected workflows. I also learned to ground AI features in application data and to make the demo scope explicit. I would add regression tests for payment expiry and rescheduling earlier in the process.",
      id: "Lewat Sportix, saya belajar menangani callback pembayaran, percobaan ulang transaksi, dan status booking sebagai satu alur yang saling terkait. Saya juga belajar menjaga rekomendasi AI tetap berdasarkan data aplikasi dan menjelaskan batasan proyek demo dengan jelas. Ke depan, pengujian untuk pembayaran kedaluwarsa dan reschedule sebaiknya dibuat lebih awal.",
      jv: "Saking Sportix, kula sinau nangani callback pambayaran, pacoban transaksi malih, lan status booking minangka alur ingkang gegayutan. Kula ugi sinau supados rekomendasi AI tetep adhedhasar data aplikasi lan watesan proyek demo dipunandharaken kanthi cetha. Ing ngajeng, pengujian pambayaran kedaluwarsa lan reschedule prayogi dipundamel langkung rumiyin.",
    },
  },
};

const getCaseStudy = (slug) => (slug ? (caseStudies[slug] ?? null) : null);

const hasCaseStudy = (slug) => Boolean(getCaseStudy(slug));

export { caseStudies, getCaseStudy, hasCaseStudy };
export default caseStudies;