export default function Footer(){
  return (
    <footer className="mt-8 border-t">
      <div className="mx-auto max-w-7xl px-4 py-10 grid sm:grid-cols-3 gap-6 text-sm">
        <div><div className="text-xl font-semibold">Sarmsak</div><p className="mt-2 text-black/70">Taşköprü’den doğal sarımsak ürünleri.</p></div>
        <div><div className="font-medium mb-2">Bilgi</div><ul className="space-y-1 text-black/70"><li>Kargo & İade</li><li>KVKK</li><li>SSS</li></ul></div>
        <div><div className="font-medium mb-2">İletişim</div><ul className="space-y-1 text-black/70"><li>info@sarmsak.com</li><li>Kastamonu / Taşköprü</li></ul></div>
      </div>
      <div className="py-4 text-xs text-black/60 border-t">© {new Date().getFullYear()} Sarmsak</div>
    </footer>
  );
}
