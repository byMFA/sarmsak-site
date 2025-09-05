import Link from "next/link";
export default function Header(){
  return (
    <header className="border-b bg-[var(--paper)]/80 backdrop-blur">
      <div className="mx-auto max-w-7xl h-16 flex items-center justify-between px-4">
        <Link href="/" className="text-2xl font-semibold">Sarmsak</Link>
        <nav className="hidden sm:flex gap-6 text-sm">
          <Link href="/urunler">Ürünler</Link>
          <Link href="/hakkimizda">Hakkımızda</Link>
          <Link href="/iletisim">İletişim</Link>
          <Link href="/sepet" className="px-4 py-2 rounded-xl bg-[var(--sand)] text-white">Sepet</Link>
        </nav>
      </div>
    </header>
  );
}
