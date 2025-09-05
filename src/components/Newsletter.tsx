'use client';


export default function Newsletter(){
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 rounded-2xl p-6 border bg-[var(--muted)]">
        <div className="grid md:grid-cols-[1fr,auto] gap-4 items-center">
          <div>
            <h3 className="text-2xl font-semibold">E-posta listemize katıl</h3>
            <p className="text-black/70 mt-1">Kampanyaları ilk sen öğren.</p>
          </div>
          <form onSubmit={(e)=>{e.preventDefault(); alert("Örnek form.");}} className="flex gap-2">
            <input className="h-11 w-72 rounded-xl border px-4 bg-white" placeholder="E-posta adresi" type="email" required/>
            <button className="h-11 px-5 rounded-xl bg-[var(--sand)] text-white">Kaydol</button>
          </form>
        </div>
      </div>
    </section>
  );
}
