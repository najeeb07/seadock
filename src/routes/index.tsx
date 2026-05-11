import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Clock, Anchor, Fish, Sparkles, Scissors, Snowflake, Timer, Shield, Quote, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import hero from "@/assets/hero-seafood.jpg";
import boat from "@/assets/story-boat.jpg";

import img1 from "@/assets/img-01.png";
import img2 from "@/assets/img-02.png";
import img3 from "@/assets/img-03.png";
import img4 from "@/assets/img-04.png";
import img5 from "@/assets/img-05.png";
import img6 from "@/assets/img-06.png";
import img7 from "@/assets/img-07.png";
import img8 from "@/assets/img-08.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Seadock — Fresh Seafood Delivered in 30–60 Minutes" },
      {
        name: "description",
        content:
          "Fresh seafood delivered fast in Hyderabad. Cleaned, cut, and ready-to-cook fish, prawns, and crab — sourced daily and delivered chilled to your doorstep.",
      },
      {
        property: "og:title",
        content: "Seadock — Premium Fresh Seafood",
      },
      {
        property: "og:description",
        content:
          "Order fresh seafood online — fish, prawns, crab, and more. Expertly cleaned and delivered across Hyderabad in under 60 minutes.",
      },
    ],
  }),
  component: HomePage,
});

const products = [
  { name: "BASA CUBES", img: img1 },
  { name: "SEA CRAB", img: img2 },
  { name: "TILAPIA FILLET", img: img3 },
  { name: "ROOPCHAND CURRY CUT", img: img4 },
  { name: "ROHU CURRY CUT WITH HEAD", img: img5 },
  { name: "PRAWNS", img: img6 },
  { name: "ANCHOCIES", img: img7 },
  { name: "SPINY EEL", img: img8 },
];

const promises = [
  { icon: Scissors, title: "Fresh Cut", desc: "Expertly cleaned, de-scaled and portioned to your preferred style." },
  { icon: Snowflake, title: "Freshness Sealed", desc: "Carefully packed in insulated, food-safe boxes to preserve natural quality from source to delivery." },
  { icon: Timer, title: "60–90 Min Delivery", desc: "Lightning-fast dispatch from our city dock straight to your door." },
  { icon: Shield, title: "Hygienic", desc: "ISO-grade processing, food-safe gloves, and sanitised packaging." },
];

const testimonials = [
  {
    quote: "The basa cubes were incredibly soft and clean-cut — perfect for my fish fry. No muddy smell at all, which is rare.",
    name: "Ananya Reddy",
    loc: "Banjara Hills, Hyderabad",
    product: "BASA CUBES",
  },
  {
    quote: "The sea crab was fresh, heavy, and full of meat. The sweetness really stood out once cooked — felt like coastal quality.",
    name: "Rajesh Varma",
    loc: "Kondapur, Hyderabad",
    product: "SEA CRAB",
  },
  {
    quote: "Tilapia fillets were neatly trimmed and boneless — saved me so much prep time. Perfect for quick weekday meals.",
    name: "Priyanka Chawla",
    loc: "Madhapur, Hyderabad",
    product: "TILAPIA FILLET",
  },
  {
    quote: "The roopchand curry cut pieces were evenly sliced and super fresh. My fish curry tasted just like what we get back home.",
    name: "Saanvi Iyer",
    loc: "Gachibowli, Hyderabad",
    product: "ROOPCHAND CURRY CUT",
  },
  {
    quote: "Rohu with head was exactly what I needed for traditional curry. Fresh, well-cleaned, and no extra effort required.",
    name: "Karthik Menon",
    loc: "Jubilee Hills, Hyderabad",
    product: "ROHU CURRY CUT WITH HEAD",
  },
  {
    quote: "The prawns were deveined perfectly and tasted sweet and fresh. Honestly better than what I’ve bought locally.",
    name: "Ananya Reddy",
    loc: "Banjara Hills, Hyderabad",
    product: "PRAWNS",
  },
  {
    quote: "Anchovies were super fresh and perfect for fry — crispy and flavorful just like coastal street food.",
    name: "Saanvi Iyer",
    loc: "Gachibowli, Hyderabad",
    product: "ANCHOCIES",
  },
  {
    quote: "Spiny eel was cleaned really well, which is usually a hassle. The texture and taste were spot on.",
    name: "Rajesh Varma",
    loc: "Kondapur, Hyderabad",
    product: "SPINY EEL",
  },
];

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* HERO */}
        <section className="bg-cream relative" id="home">
          <div className="mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-background border border-border text-xs tracking-[0.2em] uppercase">
                <Clock className="h-3.5 w-3.5" /> Delivered in 60–90 mins
              </div>
              <h1 className="mt-8 font-display text-5xl md:text-7xl text-navy leading-[1.05]">
  Fresh Seafood,<br />
  <span className="italic-serif text-navy/80">Cleaned &amp; Cut</span><br />
  For Your Kitchen.
</h1>

<p className="mt-8 text-muted-foreground max-w-lg leading-relaxed">
  Fresh fish, prawns, and crab sourced daily, expertly cleaned and cut by master fishmongers, and delivered chilled to your doorstep in Hyderabad — ready to cook, no compromise on quality.
</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="https://order.seadock.in" className="bg-navy text-cream px-7 py-4 text-xs tracking-[0.2em] uppercase inline-flex items-center gap-3 hover:bg-navy/90 transition">
                  Order Now <ArrowUpRight className="h-4 w-4" />
                </a>
                <Link to="https://order.seadock.in" className="border border-navy/30 text-navy px-7 py-4 text-xs tracking-[0.2em] uppercase hover:bg-navy/5 transition">
                  Explore Catalogue
                </Link>
              </div>
              <div className="mt-14 grid grid-cols-3 gap-6 max-w-md border-t border-border pt-6">
                {[["Live","Hand-picked"],["",""],["60m","Arrives fresh"]].map(([n,l]) => (
                  <div key={n}>
                    <div className="font-display text-3xl text-navy">{n}</div>
                    <div className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase mt-1">{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute top-4 right-4 z-10 bg-gold text-navy px-4 py-1.5 text-[10px] tracking-[0.25em] uppercase">Chef's Grade</div>
              <img src={hero} alt="Premium fresh seafood platter" width={1024} height={1024} className="w-full aspect-square object-cover" />
              <div className="absolute -bottom-6 left-6 bg-background shadow-xl px-5 py-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-navy flex items-center justify-center"><Clock className="h-4 w-4 text-cream" /></div>
                <div>
                  <div className="font-display text-lg text-navy">60–90 mins</div>
                  <div className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase">Doorstep Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OUR STORY */}
<section className="py-20 md:py-28 bg-white">
  <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
    
    {/* Left Side: Image with Floating Counter */}
    <div className="relative reveal-left">
      <img 
        src={boat} 
        alt="Fishing boat at dawn" 
        width={1024} 
        height={1024} 
        loading="lazy" 
        className="w-full aspect-square object-cover shadow-xl" 
      />
      {/* <div className="absolute -bottom-4 -right-4 md:right-12 bg-navy text-cream p-6 md:p-8 shadow-2xl">
        <div className="font-display text-4xl md:text-5xl">15+</div>
        <div className="text-[10px] tracking-[0.3em] text-gold mt-2 uppercase font-sans">
          Coastal Harbours
        </div>
      </div> */}
    </div>

    {/* Right Side: Content and Feature Grid */}
    <div className="reveal" id="ourstory">
      <div className="text-xs tracking-[0.3em] text-gold uppercase font-sans">— Our Story</div>
      <h2 className="mt-6 font-display text-4xl md:text-5xl text-navy leading-tight">
        We believe seafood should taste <span className="italic font-display text-teal-sea">fresh and authentic,</span> every single time.
      </h2>
       <p className="mt-8 text-muted-foreground leading-relaxed font-body text-lg">
    Seadock was founded with a clear purpose — to deliver consistently high-quality seafood with care and precision. 
    We work with trusted sourcing partners, inspect every catch thoroughly and ensure it reaches you in 
    <span className="text-navy font-semibold"> 60 to 90 minutes</span> — cleaned, cut, and ready to cook.
  </p>

      {/* Responsive Feature Grid: Stacks on mobile, row on desktop */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
        {[
          { 
  Icon: Anchor, 
  t: "Trusted Sourcing", 
  d: "Carefully selected from reliable partners who meet our strict quality and consistency standards." 
},
{ 
  Icon: Fish, 
  t: "Master Cut", 
  d: "Cleaned, de-scaled and portioned by skilled professionals to deliver restaurant-quality preparation." 
},
{ 
  Icon: Sparkles, 
  t: "Quality Assured", 
  d: "Handled and packaged with precision to preserve natural freshness, taste, and texture." 
},
        ].map(({ Icon, t, d }) => (
          <div key={t} className="border-t border-gray-100 pt-6">
            <Icon className="h-6 w-6 text-navy" />
            <div className="font-display text-xl text-navy mt-4">{t}</div>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed font-sans">
              {d}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

        {/* PRODUCTS */}
        <section id="products" className="bg-cream py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-xs tracking-[0.3em] text-gold uppercase">— The Catch of The Day</div>
            <div className="mt-4 grid lg:grid-cols-3 gap-8 items-end">
              <h2 className="lg:col-span-2 font-display text-4xl md:text-5xl text-navy leading-tight">
                Our Seafood, <span className="italic-serif text-navy/80">Curated Daily.</span>
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A seasonal, ever-changing selection. Hand-picked at the harbour, cleaned to perfection, and ready for your kitchen.
              </p>
            </div>
            <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map(p => (
                <div key={p.name} className="group cursor-pointer">
                  <div className="aspect-square overflow-hidden bg-background relative">
                    <img src={p.img} alt={p.name} width={768} height={768} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                    <div className="absolute top-3 right-3 h-8 w-8 rounded-full bg-background/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                      <ArrowUpRight className="h-4 w-4 text-navy" />
                    </div>
                  </div>
                  <div className="mt-5 flex justify-between items-baseline border-b border-border pb-4">
                    <div className="font-display text-xl text-navy">{p.name}</div>
                    <div className="text-[10px] tracking-[0.25em] text-muted-foreground">FRESH</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-16 text-center">
              <p className="text-sm text-muted-foreground italic-serif text-lg">
                Prawns, oysters, mackerel, basa, rohu, and many more varieties await on the full menu.
              </p>
              <a href="https://order.seadock.in" className="mt-8 inline-flex items-center gap-3 bg-navy text-cream px-7 py-4 text-xs tracking-[0.2em] uppercase">
                Order Now <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* PROMISE */}
        <section className="bg-navy text-cream py-28 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"linear-gradient(var(--cream) 1px, transparent 1px), linear-gradient(90deg, var(--cream) 1px, transparent 1px)", backgroundSize:"60px 60px"}} />
          <div className="mx-auto max-w-7xl px-6 relative">
            <div className="text-center">
              <div className="text-xs tracking-[0.3em] text-gold uppercase">— The Seadock Promise</div>
              <h2 className="mt-6 font-display text-4xl md:text-6xl leading-tight">
                From the dock to your door in<br />
                <span className="italic-serif text-gold">60–90 minutes.</span>
              </h2>
            </div>
            <div className="mt-20 grid md:grid-cols-4 gap-12 max-w-6xl mx-auto">
              {promises.map(({icon:Icon,title,desc}, i) => (
                <div key={title} className={`${i>0?"md:border-l md:border-cream/10 md:pl-8":""}`}>
                  <Icon className="h-8 w-8 text-gold" strokeWidth={1.2} />
                  <div className="font-display text-2xl mt-8">{title}</div>
                  <p className="text-sm text-cream/70 mt-3 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        {/* TESTIMONIALS SECTION - 5 Boxy Cards */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-xs tracking-[0.3em] text-gold uppercase">— Our Community</div>
            <h2 className="mt-4 font-display text-4xl text-navy">Voices of the Shore</h2>
            
            <div className="mt-14 overflow-x-auto pb-8 scrollbar-hide">
              <div className="flex gap-6 w-max px-2">
                {testimonials.map((t) => (
                  <div key={t.name} className="min-w-[320px] max-w-[350px] bg-white border border-gray-100 p-8 relative flex-shrink-0 shadow-sm hover:shadow-md transition-shadow">
                    <Quote className="h-8 w-8 text-gold/20 absolute top-6 right-6" />
                    <p className="font-body italic text-lg text-navy/90 leading-relaxed min-h-[100px]">
                      "{t.quote}"
                    </p>
                    <div className="mt-8 pt-5 border-t border-gray-100 flex items-center gap-3">
                      <div className="h-11 w-11 rounded-full bg-cream flex items-center justify-center text-gold font-display text-lg border border-gold/10">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-display text-lg text-navy">{t.name}</div>
                        <div className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase">{t.loc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT / MAP */}
        <section id="order" className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="font-display text-4xl md:text-5xl text-navy leading-tight max-w-3xl">
              Drop by our <span className="italic-serif">Hyderabad dock.</span>
            </h2>
            <p className="mt-6 text-muted-foreground max-w-xl">
              Visit our processing unit or reach out — our fishmongers would love to help you pick the perfect cut for tonight's dinner.
            </p>
            <div className="mt-14 grid lg:grid-cols-2 gap-8">
              <div className="aspect-[4/3] overflow-hidden border border-border">
                <iframe
                  title="Seadock Hyderabad"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.7304615076364!2d78.44661420930206!3d17.52037558332029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f5d14dff2c3%3A0xc70efc8b1d8b7691!2sSeadock!5e0!3m2!1sen!2sin!4v1778486682068!5m2!1sen!2sin"
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="bg-cream p-10">
                <div className="font-display text-2xl text-navy">Seadock Fresh Catch</div>
                <div className="text-[10px] tracking-[0.3em] text-gold mt-2 uppercase">Hyderabad, Telangana</div>
                <div className="mt-10 space-y-7 text-sm">
                  {[
                    ["Address","survey no 264, Plot No, Block no 3, 33, Rd Number 15, Phase 1, Jeedimetla\n Hyderabad, Telangana 500055"],
                    ["Call Us","+91 8977512664"],
                    ["Email","feedback@seadock.in"],
                    ["Delivery Hours","Everyday, 7:00 AM – 06:00 PM"],
                  ].map(([k,v]) => (
                    <div key={k}>
                      <div className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">{k}</div>
                      <div className="text-navy mt-2 whitespace-pre-line">{v}</div>
                    </div>
                  ))}
                </div>
                <button className="mt-10 w-full bg-navy text-cream py-4 text-xs tracking-[0.25em] uppercase">Get Directions</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
