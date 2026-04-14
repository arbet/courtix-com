import { MDXRemote } from "next-mdx-remote/rsc";
import type { ComponentProps } from "react";

const components = {
  h2: (props: ComponentProps<"h2">) => (
    <h2 className="mt-14 scroll-mt-24 text-2xl font-semibold tracking-tight text-fg" {...props} />
  ),
  h3: (props: ComponentProps<"h3">) => (
    <h3 className="mt-10 scroll-mt-24 text-xl font-semibold tracking-tight text-fg" {...props} />
  ),
  p: (props: ComponentProps<"p">) => <p className="my-4 leading-relaxed text-fg-muted" {...props} />,
  ul: (props: ComponentProps<"ul">) => <ul className="my-4 list-disc space-y-1.5 pl-5 text-fg-muted" {...props} />,
  ol: (props: ComponentProps<"ol">) => <ol className="my-4 list-decimal space-y-1.5 pl-5 text-fg-muted" {...props} />,
  li: (props: ComponentProps<"li">) => <li className="leading-relaxed" {...props} />,
  a: (props: ComponentProps<"a">) => <a className="text-brand-300 underline-offset-4 hover:text-brand-200 hover:underline" {...props} />,
  strong: (props: ComponentProps<"strong">) => <strong className="font-semibold text-fg" {...props} />,
  hr: () => <hr className="my-10 border-border-subtle" />,
  blockquote: (props: ComponentProps<"blockquote">) => (
    <blockquote className="my-6 border-l-2 border-brand-500 pl-4 italic text-fg-muted" {...props} />
  ),
};

export function Mdx({ source }: { source: string }) {
  return (
    <div className="prose-courtix">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
