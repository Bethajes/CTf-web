"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-1 rounded-md border border-white/10 bg-white/[0.03] p-1">
        <div className="h-8 w-8" />
      </div>
    );
  }

  const options = [
    { value: "light", icon: Sun, label: "Light" },
    { value: "dark", icon: Moon, label: "Dark" },
    { value: "system", icon: Monitor, label: "System" },
  ] as const;

  return (
    <div className="flex items-center gap-1 rounded-md border border-white/10 bg-white/[0.03] p-1">
      {options.map((opt) => {
        const active = theme === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => setTheme(opt.value)}
            aria-label={`Set ${opt.label} mode`}
            className={`grid h-8 w-8 place-items-center rounded-md text-sm transition ${
              active
                ? "bg-cyan-400/20 text-cyan-200"
                : "text-slate-400 hover:text-white hover:bg-white/10"
            }`}
            title={opt.label}
          >
            <opt.icon className="h-4 w-4" />
          </button>
        );
      })}
    </div>
  );
}
