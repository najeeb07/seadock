import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png"; 

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#ourstory", label: "About Us" },
  { href: "#products", label: "Our Products" },
  { href: "#order", label: "Contact Us" },
] as const;

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-[60] w-full bg-white/90 backdrop-blur-md border-b border-gray-100/50">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between gap-4">
          
          <Link to="/" className="flex items-center shrink-0 group">
            <div className="relative">
              <img src={logo} alt="Seadock" className="h-6 md:h-8 w-auto object-contain transition-all duration-300 group-hover:opacity-70" />
              <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-gold border border-white shadow-sm" />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 text-[10px] tracking-[0.3em] text-navy uppercase font-semibold">
            {navLinks.map((l, i) => (
              <div key={l.href} className="flex items-center gap-8">
                <a href={l.href} className="hover:text-gold transition-colors duration-300">
                  {l.label}
                </a>
                {i < navLinks.length - 1 && <div className="h-3 w-[1px] bg-gray-200" />}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="https://order.seadock.in" className="hidden md:block bg-navy text-cream px-6 py-2.5 text-[9px] tracking-[0.25em] uppercase hover:bg-navy-light transition-all duration-300 font-bold">
              Order Now
            </a>
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-navy p-2 hover:bg-gray-50 rounded-full transition-colors z-[70]">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-[50] bg-white lg:hidden transition-all duration-500 ease-in-out ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none -translate-y-2"}`}>
        <nav className="flex flex-col items-center justify-center gap-10 h-full px-6">
          <div className="mb-2 opacity-30">
             <img src={logo} alt="Seadock" className="h-12 w-auto mx-auto" />
          </div>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setIsOpen(false)} className="font-display text-2xl tracking-[0.25em] text-navy uppercase hover:text-gold transition-all">
              {l.label}
            </a>
          ))}
          <a href="https://order.seadock.in" onClick={() => setIsOpen(false)} className="mt-4 w-full max-w-[180px] bg-navy text-cream py-4 text-center tracking-[0.3em] uppercase text-[9px] font-bold shadow-sm">
            Order Now
          </a>
        </nav>
      </div>
    </>
  );
}