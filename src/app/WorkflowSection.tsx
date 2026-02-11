"use client";

import { useRef, useEffect, useState, useCallback } from "react";

const steps = [
  {
    step: "0",
    title: "Design",
    tool: "CAD",
    image: "figures/Design.svg",
    desc: "Design a part in CAD and export as a STEP file.",
  },
  {
    step: "1",
    title: "Import",
    tool: "Strecs3D",
    image: "figures/Import.svg",
    desc: "Import your CAD model (STEP file) into Strecs3D.",
  },
  {
    step: "2",
    title: "Simulation",
    tool: "Strecs3D",
    image: "figures/Simulation.svg",
    desc: "Set loads and constraints, then run stress analysis.",
  },
  {
    step: "3",
    title: "Optimize",
    tool: "Strecs3D",
    image: "figures/Optimize.svg",
    desc: "Infill density is auto-assigned per region from analysis results.",
  },
  {
    step: "4",
    title: "Export",
    tool: "Strecs3D",
    image: "figures/Export.svg",
    desc: "Export as 3MF with optimized infill metadata.",
  },
  {
    step: "5",
    title: "Slice",
    tool: "Slicer",
    image: "figures/Slice.svg",
    desc: "Open the 3MF in your favorite slicer and print.",
  },
];

function toolColor(tool: string) {
  switch (tool) {
    case "CAD":
      return "bg-foreground/10 text-foreground/60";
    case "Strecs3D":
      return "bg-foreground/15 text-foreground/80 ring-1 ring-foreground/20";
    case "Slicer":
      return "bg-foreground/10 text-foreground/60";
    default:
      return "bg-foreground/10 text-foreground/60";
  }
}

function cardBorder(tool: string, isActive: boolean) {
  if (isActive) return "border-foreground/50";
  if (tool === "Strecs3D") return "border-foreground/25";
  return "border-foreground/10";
}

// Card width + gap + arrow width (approx)
const CARD_W = 240; // w-60 = 240px
const GAP = 16; // gap-4
const ARROW_W = 40; // arrow + padding
const STEP_UNIT = CARD_W + GAP + ARROW_W;

export default function WorkflowSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scheduleNext = useCallback(() => {
    timerRef.current = setTimeout(() => {
      setActiveStep((prev) => {
        if (prev < steps.length - 1) return prev + 1;
        return prev;
      });
    }, 4000);
  }, []);

  useEffect(() => {
    if (!isVisible || paused) return;
    scheduleNext();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isVisible, activeStep, paused, scheduleNext]);

  const handleCardClick = (i: number) => {
    setPaused(true);
    setActiveStep(i);
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  // Calculate translateX to center active card
  const translateX = -(activeStep * STEP_UNIT);

  return (
    <section
      id="workflow"
      ref={sectionRef}
      className="border-t border-foreground/10 py-24"
    >
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-3xl font-bold">Workflow</h2>
      </div>

      <div className="mt-14 overflow-hidden py-8">
        <div
          className="flex items-center gap-4 pl-[calc(50vw-130px)] sm:pl-[calc(50vw-140px)]"
          style={{
            transform: `translateX(${translateX}px)`,
            transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {steps.map((item, i) => {
            const isActive = i === activeStep;
            return (
              <div
                key={item.step}
                className="flex flex-shrink-0 items-center"
              >
                <div
                  onClick={() => handleCardClick(i)}
                  className={`flex h-72 w-52 cursor-pointer flex-col items-center rounded-xl border p-5 sm:h-80 sm:w-60 ${cardBorder(item.tool, isActive)}`}
                  style={{
                    transform: isActive ? "scale(1.1)" : "scale(0.9)",
                    opacity: isActive ? 1 : 0.45,
                    transition:
                      "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s ease, border-color 0.4s ease",
                  }}
                >
                  <span
                    className={`rounded-full px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${toolColor(item.tool)}`}
                  >
                    {item.tool}
                  </span>
                  <h3 className="mt-3 text-base font-semibold sm:text-lg">
                    {item.step}. {item.title}
                  </h3>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="mt-3 h-32 w-full object-contain sm:h-40"
                  />
                  <p className="mt-2 text-center text-xs leading-relaxed text-foreground/60 sm:text-sm">
                    {item.desc}
                  </p>
                </div>
                {i < steps.length - 1 && (
                  <span className="flex flex-shrink-0 items-center px-2 text-xl text-foreground/30 sm:px-3 sm:text-2xl">
                    →
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
