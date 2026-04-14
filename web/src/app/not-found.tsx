import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-max flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <div className="eyebrow">404</div>
      <h1 className="mt-4 text-display-lg font-semibold">Page not found</h1>
      <p className="mt-3 max-w-md text-fg-muted">
        The page you&rsquo;re looking for doesn&rsquo;t exist, has moved, or was never here to begin with.
      </p>
      <div className="mt-8 flex gap-3">
        <Link href="/" className="btn-primary">
          Back to home
        </Link>
        <Link href="/contact" className="btn-secondary">
          Contact us
        </Link>
      </div>
    </section>
  );
}
