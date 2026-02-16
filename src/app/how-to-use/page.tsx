import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import Header from "../Header";
import Footer from "../Footer";
import MarkdownContent from "./MarkdownContent";

export const metadata: Metadata = {
  title: "How to Use | Strecs3D",
  description:
    "Learn how to use Strecs3D v2.0.0 — the infill optimization tool for 3D printing.",
};

export default function HowToUsePage() {
  const mdPath = path.join(process.cwd(), "HowToUse.md");
  const content = fs.readFileSync(mdPath, "utf-8");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <article className="mx-auto max-w-5xl px-6 py-16">
        <MarkdownContent content={content} />
      </article>
      <Footer />
    </div>
  );
}
