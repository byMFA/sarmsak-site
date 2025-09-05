import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[var(--muted)]">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-10 items-center px-4 py-16">
        <div>
          <h1 className="text-4xl sm:text-5xl font-semibold">Taşköprü’den Doğal Sarımsak</h1>
          <p className="mt-3 text-black/70">Organik ve katkısız sarımsak ürünleri.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/satinal" className="px-5 py-3 rounded-xl bg-[var(--sand)] text-white">Satın Al</Link>
            <Link href="/urunler" className="px-5 py-3 rounded-xl border bg-white">Ürünleri keşfet</Link>
          </div>
        </div>
        <img src="/images/hero.jpg" alt="" className="rounded-2xl border shadow-sm"/>
      </div>
    </section>
  );
}
