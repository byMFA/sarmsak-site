export default function ProductGrid({items}:{items:{title:string,price:number,img:string}[]}){
  return (
    <section className="py-6">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-semibold mb-6">Öne Çıkan Ürünler</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {items.map(p=>(
            <div key={p.title} className="rounded-2xl overflow-hidden border bg-[var(--card)]">
              <img src={p.img} alt={p.title} className="aspect-square object-cover"/>
              <div className="p-3">
                <div className="text-sm text-black/70">{p.title}</div>
                <div className="font-medium">{p.price} TRY</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
