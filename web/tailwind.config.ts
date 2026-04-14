import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx,mdx}", "./content/**/*.{md,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        bg: {
          DEFAULT: "#07090f",
          raised: "#0b1220",
          subtle: "#0f1628",
        },
        surface: {
          DEFAULT: "#0b1220",
          1: "#0e1628",
          2: "#121c35",
        },
        border: {
          subtle: "rgba(148, 163, 184, 0.12)",
          strong: "rgba(148, 163, 184, 0.25)",
        },
        fg: {
          DEFAULT: "#e6eaf2",
          muted: "#9aa4b2",
          faint: "#64748b",
        },
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#0f2b46",
        },
        accent: {
          cyan: "#22d3ee",
          violet: "#8b5cf6",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.06) 1px, transparent 1px)",
        "radial-brand":
          "radial-gradient(ellipse 80% 60% at 50% -20%, rgba(37, 99, 235, 0.35), transparent 70%)",
        "mesh-hero":
          "radial-gradient(at 20% 10%, rgba(37, 99, 235, 0.35) 0, transparent 50%), radial-gradient(at 80% 0%, rgba(139, 92, 246, 0.25) 0, transparent 50%), radial-gradient(at 50% 80%, rgba(34, 211, 238, 0.15) 0, transparent 50%)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(59, 130, 246, 0.3), 0 10px 40px -10px rgba(59, 130, 246, 0.4)",
        "ring-brand": "0 0 0 1px rgba(59, 130, 246, 0.5)",
      },
      borderRadius: {
        xl: "14px",
        "2xl": "18px",
      },
      fontSize: {
        "display-xl": ["clamp(2.5rem, 6vw, 4.75rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2rem, 4.5vw, 3.5rem)", { lineHeight: "1.08", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
