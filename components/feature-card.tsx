import type { LucideIcon } from "lucide-react";
import { CheckCircle2 } from "lucide-react";

export function FeatureCard({
  title,
  items,
  icon: Icon,
}: {
  title: string;
  items: string[];
  icon: LucideIcon;
}) {
  return (
    <article className="glass rounded-md p-6 transition hover:-translate-y-1 hover:shadow-2xl">
      <div className="mb-5 grid h-12 w-12 place-items-center rounded-md bg-blue-50 text-primary dark:bg-blue-500/10">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
      <ul className="mt-4 grid gap-3 text-sm text-slate-600 dark:text-slate-300">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-accent" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
