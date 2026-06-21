import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  icon = "arrow",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  icon?: "arrow" | "play";
}) {
  const Icon = icon === "play" ? PlayCircle : ArrowRight;
  return (
    <Link
      href={href}
      className={
        variant === "primary"
          ? "inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
          : "inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
      }
    >
      {children}
      <Icon aria-hidden className="h-4 w-4" />
    </Link>
  );
}
