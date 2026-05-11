import { Instagram, Facebook, Twitter, Youtube, ArrowUpRight } from "lucide-react";

export function Footer() {
  const cols = [
    { title: "Company", items: ["Home", "About Us", "Our Products", "Careers", "Contact Us"] },
  ];
  return (
    <footer className="bg-navy text-cream/90 pt-20 pb-8">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-5 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-11 w-11 rounded-full bg-gold/80 flex items-center justify-center text-navy font-display text-xl">S</div>
            <div>
              <div className="font-display tracking-[0.2em]">SEADOCK</div>
              <div className="text-[10px] tracking-[0.25em] text-cream/60">FRESH FROM THE SEA</div>
            </div>
          </div>
          <p className="text-sm text-cream/70 max-w-sm leading-relaxed">
            Coastal-fresh fish and seafood, hand-cleaned and delivered to your doorstep in 60–90 minutes. Never frozen. Never compromised.
          </p>
          {/* <form className="mt-8 flex border border-cream/20 max-w-sm">
            <input placeholder="Your email" className="bg-transparent flex-1 px-4 py-3 text-sm placeholder:text-cream/40 outline-none" />
            <button className="bg-gold/80 text-navy px-4"><ArrowUpRight className="h-4 w-4" /></button>
          </form> */}
          {/* <div className="flex gap-3 mt-6">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="h-10 w-10 border border-cream/20 flex items-center justify-center hover:bg-cream/10 transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div> */}
        </div>
        {/* {cols.map(c => (
          <div key={c.title}>
            <div className="text-[11px] tracking-[0.25em] text-cream/50 mb-5">{c.title.toUpperCase()}</div>
            <ul className="space-y-3 text-sm">
              {c.items.map(i => <li key={i}><a href="#" className="hover:text-gold transition">{i}</a></li>)}
            </ul>
          </div>
        ))} */}
      </div>
      <div className="mx-auto max-w-7xl px-6 mt-16 pt-6 border-t border-cream/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-cream/50">
        <div>© 2026 Seadock Seafoods Pvt. Ltd. All rights reserved.</div>
        <div><a href="https://www.directoo.in" className="hover:text-gold transition">Powered by Directoo</a></div>
        {/* <div className="flex gap-8"><a href="#">Privacy Policy</a><a href="#">Terms of Service</a><a href="#">Cookies</a></div> */}
      </div>
    </footer>
  );
}
