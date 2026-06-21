export function TestimonialCard({ quote, name, role }: { quote: string; name: string; role: string }) {
  return (
    <article className="glass rounded-md p-6">
      <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">"{quote}"</p>
      <div className="mt-6 flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-md bg-gradient-to-br from-primary to-accent text-sm font-black text-white">
          {name.split(" ").map((part) => part[0]).join("")}
        </div>
        <div>
          <h3 className="font-bold">{name}</h3>
          <p className="text-sm text-slate-500">{role}</p>
        </div>
      </div>
    </article>
  );
}
