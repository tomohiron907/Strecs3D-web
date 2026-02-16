"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

const components: Components = {
  h1: ({ children }) => (
    <h1 className="mt-12 text-3xl font-bold tracking-tight first:mt-0 sm:text-4xl">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-10 text-2xl font-bold">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 text-xl font-semibold">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="mt-6 text-lg font-medium">{children}</h4>
  ),
  p: ({ children }) => (
    <p className="mt-4 leading-relaxed text-foreground/70">{children}</p>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="underline transition-colors hover:text-foreground"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul className="mt-4 list-disc space-y-2 pl-6 text-foreground/70">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-4 list-decimal space-y-2 pl-6 text-foreground/70">
      {children}
    </ol>
  ),
  li: ({ children }) => <li>{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="mt-4 border-l-4 border-foreground/20 pl-4 text-foreground/60">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="rounded bg-foreground/10 px-1.5 py-0.5 text-sm">
      {children}
    </code>
  ),
  hr: () => <hr className="my-12 border-foreground/10" />,
  strong: ({ children }) => <strong>{children}</strong>,
  em: ({ children }) => <em>{children}</em>,
  img: ({ src, alt }) => (
    <img src={src} alt={alt || ""} className="mt-4 w-full rounded-lg" />
  ),
};

export default function MarkdownContent({ content }: { content: string }) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {content}
    </ReactMarkdown>
  );
}
