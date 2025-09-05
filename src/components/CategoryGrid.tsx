import Link from "next/link";
export default function CategoryGrid({items}:{items:{title:string,img:string,href:string}[]}){
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl grid md:grid-cols-3 gap-6 px-4">
        {items.map(c=>(
          <Link key={c.title} href={c.href} className="rounded-2xl overflow-hidden border bg-[var(--card)]">
            <img src={c.img} alt={c.title} className="aspect-[4/3] object-cover"/>
            <div className="p-4 text-xl font-medium">{c.title}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
