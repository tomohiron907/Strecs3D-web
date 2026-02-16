import Header from "../Header";
import Footer from "../Footer";

const links = [
  {
    label: "GitHub",
    description: "Source code and releases",
    href: "https://github.com/tomohiron907/Strecs3D",
  },
  {
    label: "X (Hashtag)",
    description: "#Strecs3D on X",
    href: "https://x.com/hashtag/Strecs3D",
  },
  {
    label: "Developer (X)",
    description: "@tamutamu3D — developer account",
    href: "https://twitter.com/tamutamu3D",
  },
  {
    label: "YouTube",
    description: "Demo and tutorial videos",
    href: "https://youtu.be/GLfKM9WXlbM?si=fNpJs5CxzILVpyrI",
  },
  {
    label: "Reddit",
    description: "Discussion on r/3Dprinting",
    href: "https://www.reddit.com/r/3Dprinting/comments/1mls4lq/",
  },
  {
    label: "Qiita",
    description: "Technical articles (日本語)",
    href: "https://qiita.com/tags/strecs3d",
  },
  {
    label: "Academic Paper",
    description: "Master's thesis (修士論文, 日本語)",
    href: "https://github.com/tomohiron907/master-thesis/releases/download/v1/master-thesis.pdf",
  },
];

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
          Links
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-foreground/70">
          Related resources and community links for Strecs3D.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-foreground/10 p-6 transition-all hover:-translate-y-1 hover:border-foreground/30 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">{link.label}</h2>
                <svg
                  className="h-4 w-4 text-foreground/40 transition-colors group-hover:text-foreground/70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
              <p className="mt-2 text-sm text-foreground/50">
                {link.description}
              </p>
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
