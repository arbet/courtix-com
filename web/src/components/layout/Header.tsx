"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { siteConfig } from "@/lib/site.config";
import { Logo } from "@/components/brand/Logo";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle/60 bg-bg/70 backdrop-blur-xl">
      <div className="container-max flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center" aria-label="Courtix home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {siteConfig.nav.map((item) => {
            const hasChildren = "children" in item && item.children;
            return (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm text-fg-muted transition-colors hover:text-fg"
                >
                  {item.label}
                  {hasChildren && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
                </Link>
                {hasChildren && (
                  <div className="invisible absolute left-0 top-full w-80 translate-y-1 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="mt-2 overflow-hidden rounded-2xl border border-border-subtle bg-surface-1/95 p-2 shadow-2xl backdrop-blur-xl">
                      {item.children!.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex flex-col gap-0.5 rounded-lg px-3 py-2.5 transition-colors hover:bg-white/5"
                        >
                          <span className="text-sm font-medium text-fg">{child.label}</span>
                          <span className="text-xs text-fg-muted">{child.description}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link href="/contact" className="btn-primary">
            Start a project
          </Link>
        </div>

        <button
          className="btn-ghost lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "grid overflow-hidden border-t border-border-subtle/60 bg-bg/95 backdrop-blur-xl transition-[grid-template-rows] duration-300 lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="min-h-0">
          <nav className="container-max flex flex-col gap-1 py-4">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-fg-muted hover:bg-white/5 hover:text-fg"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2">
              <Link href="/contact" className="btn-primary w-full" onClick={() => setOpen(false)}>
                Start a project
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
