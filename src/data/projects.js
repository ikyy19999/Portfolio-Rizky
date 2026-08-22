/**
 * Single source of truth for the project list.
 *
 * IMPORTANT: the order here has to stay in sync with
 * `translations.<lang>.work.projects`, because Work.jsx merges the localized
 * title/desc by index. Adding a project means adding it in both places.
 *
 * `slug` is what links a project to its case study in ./caseStudies.js and to
 * its command in the command palette.
 */
const projects = [
  {
    slug: "koskosan-platform",
    imgSrc: "",
    visual: "property",
    title: "Koskosan Platform",
    desc: "Responsive platform for exploring boarding houses and managing reservations.",
    category: "web",
    tech: ["Laravel", "Blade", "MySQL"],
    demo: "https://koskosan.madebyrizky.my.id/",
  },
  {
    slug: "sports-booking-platform",
    imgSrc: "/assets/Galaxy-S22+-sportix.madebyrizky.my.id.png",
    title: "Sports Booking Platform",
    desc: "Online sports court reservation system with a responsive booking experience.",
    category: "web",
    tech: ["Laravel", "Filament", "Livewire"],
    demo: "https://sportix.madebyrizky.my.id",
  },
  {
    slug: "music-streaming-website",
    imgSrc: "/assets/Web Music.png",
    title: "Music Streaming Website",
    desc: "Interactive music platform integrated with public APIs.",
    category: "web",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "/assets/Web Music/music.html",
  },
  {
    slug: "bookshelf-app",
    imgSrc: "/assets/Book.png",
    title: "Bookshelf App",
    desc: "Minimal reading management application with local storage.",
    category: "tool",
    tech: ["JavaScript", "LocalStorage"],
    demo: "/assets/Bookshelf App/book.html",
  },
  {
    slug: "qr-generator",
    imgSrc: "/assets/QR.png",
    title: "QR Generator",
    desc: "Instant QR code generator with a simple and focused interface.",
    category: "tool",
    tech: ["JavaScript", "API"],
    demo: "/assets/QR/index.html",
  },
  {
    slug: "calculator-tool",
    imgSrc: "/assets/Calculator.png",
    title: "Calculator Tool",
    desc: "Simple utility calculator focused on usability and accessibility.",
    category: "tool",
    tech: ["HTML", "JavaScript"],
    demo: "/assets/Calculator/index.html",
  },
  {
    slug: "calendar-app",
    imgSrc: "/assets/Calender.png",
    title: "Calendar App",
    desc: "Interactive calendar application with event management.",
    category: "tool",
    tech: ["HTML", "JavaScript"],
    demo: "/assets/Calender/index.html",
  },
  {
    slug: "finance-tracker",
    imgSrc: "/assets/Finance.png",
    title: "Finance Tracker",
    desc: "Personal finance tracking application with budgeting features.",
    category: "tool",
    tech: ["HTML", "JavaScript"],
    demo: "/assets/Personal Finance Tracker/index.html",
  },
];

export { projects };
export default projects;
