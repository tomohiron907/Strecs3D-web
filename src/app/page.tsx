const BASE_PATH = process.env.NODE_ENV === "production" ? "/Strecs3D-web" : "";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img src={`${BASE_PATH}/logo-mark.png`} alt="Strecs3D" className="h-10" />
            <img src={`${BASE_PATH}/logo-type.svg`} alt="Strecs3D" className="h-6" />
          </div>
          <nav className="flex gap-6 text-sm">
            <a href="#benefits" className="transition-colors hover:text-foreground/70">
              Benefits
            </a>
            <a href="#examples" className="transition-colors hover:text-foreground/70">
              Examples
            </a>
            <a href="#workflow" className="transition-colors hover:text-foreground/70">
              Workflow
            </a>
            <a href="#get-started" className="transition-colors hover:text-foreground/70">
              Get Started
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Infill Optimizer for 3D Printing
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70">
          Strecs3D is a preprocessor that automatically optimizes the infil
          structure of 3D prints based on FEM stress analysis. Keep your
          existing slicer — place material only where it&apos;s needed.
        </p>
        <div className="mt-10 overflow-hidden rounded-xl shadow-lg">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full"
          >
            <source
              src="https://github.com/tomohiron907/Strecs3D-web/releases/download/v1.0.0/Strecs3D-demo.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#get-started"
            className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            Download
          </a>
          <a
            href="#workflow"
            className="rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium transition-colors hover:bg-foreground/5"
          >
            How It Works
          </a>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="border-t border-foreground/10 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-3xl font-bold">
            Three Core Benefits
          </h2>
          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            <div className="rounded-xl border border-foreground/10 p-8">
              <p className="text-2xl">01</p>
              <h3 className="mt-3 text-lg font-semibold">Reliability</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                Infill density is determined based on mechanical evidence.
                The software automatically identifies stress concentration
                points and locally increases density, delivering maximum
                strength with minimal weight gain.
              </p>
            </div>
            <div className="rounded-xl border border-foreground/10 p-8">
              <p className="text-2xl">02</p>
              <h3 className="mt-3 text-lg font-semibold">Integration</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                Strecs3D is a preprocessor that sits between your CAD tool and
                slicer. Keep using Bambu Studio, Cura, or PrusaSlicer as
                usual — it optimizes the infill via 3MF metadata.
              </p>
            </div>
            <div className="rounded-xl border border-foreground/10 p-8">
              <p className="text-2xl">03</p>
              <h3 className="mt-3 text-lg font-semibold">Built-in &amp; Free</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                Strecs3D comes with its own stress analysis engine built in.
                No expensive licenses required. An intuitive UI lets anyone
                run analysis quickly — setup, analyze, and optimize all in
                one tool.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section id="examples" className="border-t border-foreground/10 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-3xl font-bold">Examples</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-foreground/70">
            From mechanical parts to everyday items — strengthen your prints
            with optimized infill.
          </p>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: `${BASE_PATH}/examples/bearing_holder.png`, alt: "Bearing Holder" },
              { src: `${BASE_PATH}/examples/canti.png`, alt: "Cantilever" },
              { src: `${BASE_PATH}/examples/drone.png`, alt: "Drone" },
              { src: `${BASE_PATH}/examples/frame_connector.png`, alt: "Frame Connector" },
              { src: `${BASE_PATH}/examples/wall_hook.png`, alt: "Wall Hook" },
              { src: `${BASE_PATH}/examples/tablet_stand.png`, alt: "Tablet Stand" },
              { src: `${BASE_PATH}/examples/rod_connector.png`, alt: "Rod Connector" },
              { src: `${BASE_PATH}/examples/motor_mount.png`, alt: "Motor Mount" },
              { src: `${BASE_PATH}/examples/iphone_stand.png`, alt: "iPhone Stand" },
              { src: `${BASE_PATH}/examples/hook.png`, alt: "Hook" },
              { src: `${BASE_PATH}/examples/handle.png`, alt: "Handle" },
            ].map((item) => (
              <div
                key={item.src}
                className="overflow-hidden rounded-xl border border-foreground/10"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            ))}
            <a
              href="#get-started"
              className="flex aspect-[4/3] flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-foreground/20 transition-colors hover:border-foreground/40 hover:bg-foreground/5"
            >
              <span className="text-3xl">+</span>
              <span className="text-sm font-medium text-foreground/50">
                Try it with your model
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section id="workflow" className="border-t border-foreground/10 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-3xl font-bold">
            4-Step Workflow
          </h2>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "1",
                title: "Import",
                desc: "Import your CAD model (STEP file) into Strecs3D.",
              },
              {
                step: "2",
                title: "Analyze",
                desc: "Set load conditions and fixed faces with an intuitive UI, then run the analysis.",
              },
              {
                step: "3",
                title: "Optimize",
                desc: "Infill density is automatically assigned per region based on the analysis results.",
              },
              {
                step: "4",
                title: "Export",
                desc: "Export as 3MF and print with your favorite slicer.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-lg font-bold text-background">
                  {item.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evidence */}
      <section className="border-t border-foreground/10 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-3xl font-bold">
            Scientific Evidence
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-foreground/70">
            Backed by rigorous material testing in a master&apos;s thesis.
          </p>
          <div className="mx-auto mt-14 max-w-2xl rounded-xl border border-foreground/10 p-8">
            <h3 className="text-lg font-semibold">Strength Test</h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/70">
              In three-point bending tests, optimized models showed
              improved maximum load compared to uniform-infill models of
              the same weight.
            </p>
          </div>
        </div>
      </section>

      {/* Origin */}
      <section className="border-t border-foreground/10 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold">
            From RoboCon to Every Engineer
          </h2>
          <p className="mt-6 leading-relaxed text-foreground/70">
            Strecs3D was born from the real-world demands of robot
            competitions, where every gram matters and reliability is
            non-negotiable. This tool was built for all engineers who face
            the challenge of making parts that are both light and
            unbreakable.
          </p>
        </div>
      </section>

      {/* Get Started */}
      <section
        id="get-started"
        className="border-t border-foreground/10 py-24"
      >
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold">Get Started</h2>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
            >
              Download v2.0.0-beta
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-8 py-3 text-sm font-medium transition-colors hover:bg-foreground/5"
            >
              Documentation
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-8 py-3 text-sm font-medium transition-colors hover:bg-foreground/5"
            >
              Academic Paper
            </a>
          </div>
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
