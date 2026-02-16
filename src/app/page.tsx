import Header from "./Header";
import Footer from "./Footer";
import WorkflowSection from "./WorkflowSection";
import BendingTestChart from "./BendingTestChart";
import ConcentricDiagram from "./ConcentricDiagram";
import ExamplesSection from "./ExamplesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

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
              src="https://github.com/tomohiron907/Strecs3D-web/releases/download/v1.0.1/Strecs3D-demo2.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#get-started"
            className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            Download Strecs3D v2.0.0
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
            {[
              {
                title: "Reliability",
                subtitle: "Evidence-based optimization",
                desc: "Infill density is determined based on stress simulation. The software automatically identifies stress concentration points and locally increases density, delivering maximum strength with minimal weight gain.",
                icon: (
                  <img src="figures/infill-optimization.svg" alt="Reliability" className="h-40 w-60" />
                ),
              },
              {
                title: "Integration",
                subtitle: "Works with your slicer",
                desc: "Strecs3D is a preprocessor that sits between your CAD tool and slicer. Keep using Bambu Studio, Cura, or PrusaSlicer as usual — it optimizes the infill via 3MF metadata.",
                icon: (
                  <img src="figures/integration.svg" alt="Integration" className="h-40 w-60" />
                ),
              },
              {
                title: "Built-in FEM & Free",
                subtitle: "No extra licenses needed",
                desc: "Strecs3D comes with its own stress analysis engine built in. No expensive licenses required. Anyone can run analysis quickly — setup, analyze, and optimize all in one tool.",
                icon: (
                  <img src="figures/built-in-FEM.svg" alt="Built-in FEM & Free" className="h-40 w-60" />
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative flex flex-col items-center overflow-hidden rounded-xl border border-foreground/10 p-8 transition-all duration-300 hover:border-foreground/30"
              >
                {/* Default: icon + title */}
                <div className="flex flex-col items-center transition-opacity duration-300 group-hover:opacity-0">
                  <div className="text-foreground/80">{item.icon}</div>
                  <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-foreground/50">{item.subtitle}</p>
                </div>
                {/* Hover: description overlay */}
                <div className="absolute inset-0 flex items-center justify-center p-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-sm leading-relaxed text-foreground/70">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples */}
      <ExamplesSection />

      {/* Workflow */}
      <WorkflowSection />

      {/* Evidence */}
      <section id="evidence" className="border-t border-foreground/10 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-3xl font-bold">
            Optimized Infill, Proven Strength
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-foreground/70">
            At the same weight, Strecs3D&apos;s optimized infill delivers significantly higher stiffness and fracture resistance.
          </p>
          <div className="mt-14">
            <BendingTestChart />
          </div>
        </div>
      </section>

      {/* Origin */}
      <section className="border-t border-foreground/10 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-3xl font-bold">
            From RoboCon to Every Engineer
          </h2>
          <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
            <ConcentricDiagram className="order-first" />
            <p className="leading-relaxed text-foreground/70">
              Strecs3D was born from the real-world demands of robot
              competitions, where every gram matters and reliability is
              non-negotiable. This tool was built for all engineers who face
              the challenge of making parts that are both light and
              unbreakable.
            </p>
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section
        id="get-started"
        className="border-t border-foreground/10 py-24"
      >
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold">Get Started</h2>
          <p className="mt-4 text-sm text-foreground/60">Strecs3D v2.0.0</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://github.com/tomohiron907/Strecs3D/releases/download/v2.0.0/Strecs3D_MacOS_Installer.dmg"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground w-56 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
            >
              Download for Mac
            </a>
            <a
              href="https://github.com/tomohiron907/Strecs3D/releases/download/v2.0.0/Strecs3D_Windows_Installer.zip"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground w-56 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
            >
              Download for Windows
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
