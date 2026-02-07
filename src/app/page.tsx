export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-foreground/10">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold">Strecs3D</h1>
          <nav className="flex gap-6 text-sm">
            <a href="#features" className="hover:underline">
              Features
            </a>
            <a href="#download" className="hover:underline">
              Download
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <h2 className="text-5xl font-bold tracking-tight">Strecs3D</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/70">
          3Dソフトウェア
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#download"
            className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            Download
          </a>
          <a
            href="#features"
            className="rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium transition-colors hover:bg-foreground/5"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-foreground/10 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h3 className="text-center text-3xl font-bold">Features</h3>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <div className="rounded-lg border border-foreground/10 p-6">
              <h4 className="text-lg font-semibold">Feature 1</h4>
              <p className="mt-2 text-sm text-foreground/70">
                機能の説明をここに記載します。
              </p>
            </div>
            <div className="rounded-lg border border-foreground/10 p-6">
              <h4 className="text-lg font-semibold">Feature 2</h4>
              <p className="mt-2 text-sm text-foreground/70">
                機能の説明をここに記載します。
              </p>
            </div>
            <div className="rounded-lg border border-foreground/10 p-6">
              <h4 className="text-lg font-semibold">Feature 3</h4>
              <p className="mt-2 text-sm text-foreground/70">
                機能の説明をここに記載します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download */}
      <section
        id="download"
        className="border-t border-foreground/10 py-20"
      >
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h3 className="text-3xl font-bold">Download</h3>
          <p className="mt-4 text-foreground/70">
            最新バージョンをダウンロードできます。
          </p>
          <a
            href="#"
            className="mt-8 inline-block rounded-full bg-foreground px-8 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            Download Latest Version
          </a>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-foreground/10 py-20"
      >
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h3 className="text-3xl font-bold">Contact</h3>
          <p className="mt-4 text-foreground/70">
            お問い合わせやフィードバックはこちらからお願いします。
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-foreground/10 py-8">
        <div className="mx-auto max-w-5xl px-6 text-center text-sm text-foreground/50">
          &copy; {new Date().getFullYear()} Strecs3D. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
