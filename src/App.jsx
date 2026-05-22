const services = [
  { icon: "🏨", title: "Hotel & Resort Management", text: "Complete operational leadership for boutique luxury resorts, villas, wellness retreats, and independent hotels under 200 rooms." },
  { icon: "✦", title: "Luxury Guest Experience", text: "Personalized guest journeys, VIP handling, service rituals, and curated hospitality standards from pre-arrival to departure." },
  { icon: "☷", title: "Training & Culture", text: "The Art of Curated Hospitality service culture program, SOP implementation, leadership coaching, and luxury team development." },
  { icon: "◒", title: "Luxury Repositioning", text: "Transforming Caribbean hospitality assets into refined boutique luxury destinations with timeless identity and elevated standards." },
  { icon: "≈", title: "Wellness & Lifestyle", text: "Wellness concepts, spa positioning, lifestyle programming, destination experiences, and Caribbean-inspired guest rituals." },
  { icon: "◈", title: "Pre-Opening Services", text: "Opening support, staffing, operational setup, brand standards, training, SOP deployment, and soft-opening preparation." },
];

const ownerValues = [
  { title: "Curated Guest Experiences", text: "Luxury hospitality built around personalization, anticipation, emotional connection, and timeless elegance." },
  { title: "Operational Excellence", text: "Structured systems, refined SOPs, leadership standards, and seamless luxury operations across every department." },
  { title: "Brand Elevation", text: "Editorial aesthetics, sophisticated Caribbean luxury identity, and consistent visual standards across all touchpoints." },
  { title: "Boutique Luxury Focus", text: "Dedicated exclusively to intimate luxury properties that require elevated attention, discretion, and personalized oversight." },
];

const moodBoards = [
  { src: "/karatto-resort-board.png", title: "Caribbean Luxury Resort Atmosphere" },
  { src: "/karatto-interior-board.png", title: "Boutique Interior Aesthetic" },
  { src: "/karatto-dining-board.png", title: "Luxury Dining & Table Styling" },
  { src: "/karatto-wellness-board.png", title: "Wellness & Spa Lifestyle" },
];

const portfolioTypes = [
  { title: "Boutique Beach Resorts", text: "Intimate luxury resorts where oceanfront experiences, personalized service, and island elegance define the guest journey." },
  { title: "Luxury Villas & Residences", text: "Private villa and residence collections supported by refined operations, concierge-style service, and discreet luxury standards." },
  { title: "Wellness Retreats", text: "Calm, restorative hospitality concepts built around spa, wellness, nutrition, mindfulness, and nature-led experiences." },
  { title: "Lifestyle Hotels", text: "Design-forward independent hotels positioned for modern luxury travelers seeking culture, atmosphere, and authenticity." },
];

const proofPoints = [
  "Boutique properties under 200 rooms",
  "Caribbean luxury hospitality focus",
  "Owner-first management philosophy",
  "Service culture and training systems",
];

function Logo({ dark = false }) {
  return (
    <div className="flex items-center gap-4">
      <img src="/karatto-logo.jpg" alt="The Karatto Collection Logo" className="h-16 w-auto object-contain" />
      <div className="leading-tight">
        <p className={`font-serif text-2xl tracking-[0.25em] ${dark ? "text-[#12203A]" : "text-white"}`}>KARATTO</p>
        <p className="text-[10px] uppercase tracking-[0.35em] text-[#C6A05B]">The Collection</p>
      </div>
    </div>
  );
}

function IconMark({ children }) {
  return <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C6A05B]/50 bg-white text-2xl font-serif text-[#C6A05B] shadow-sm">{children}</div>;
}

function MiniBrandBoard() {
  const cards = ["Brand Philosophy", "Visual Identity", "Logo Usage", "Color Palette", "Interior Aesthetic", "Scent Branding", "Uniform Standards", "Lighting Standards", "Table Setting", "Floral Styling", "Social Identity", "Our Promise"];
  return (
    <div className="grid grid-cols-2 gap-3 rounded-[2rem] border border-[#C6A05B]/30 bg-[#F6F2EB] p-4 shadow-2xl sm:grid-cols-3">
      {cards.map((card, index) => (
        <div key={card} className={`min-h-[105px] rounded-2xl border border-[#E5D9C6] p-4 ${index % 4 === 0 ? "bg-[#12203A] text-white" : "bg-white text-[#12203A]"}`}>
          <p className="font-serif text-2xl text-[#C6A05B]">{String(index + 1).padStart(2, "0")}</p>
          <p className="mt-2 text-xs uppercase tracking-[0.18em]">{card}</p>
          <div className="mt-4 h-1 w-10 bg-[#C6A05B]" />
        </div>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F6F2EB] text-[#121212]">
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#12203A]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.18em] text-white/80 lg:flex">
            <a href="#about" className="transition hover:text-[#C6A05B]">About</a>
            <a href="#services" className="transition hover:text-[#C6A05B]">Services</a>
            <a href="#portfolio" className="transition hover:text-[#C6A05B]">Portfolio</a>
            <a href="#visuals" className="transition hover:text-[#C6A05B]">Visuals</a>
            <a href="#contact" className="transition hover:text-[#C6A05B]">Contact</a>
          </nav>
        </div>
      </header>
      <main>
        <section className="relative flex min-h-screen items-center overflow-hidden bg-[#12203A] pt-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(198,160,91,0.35),transparent_28%),linear-gradient(135deg,#12203A_0%,#050505_100%)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-[1fr_.9fr]">
            <div>
              <p className="mb-6 text-sm uppercase tracking-[0.42em] text-[#C6A05B]">Caribbean Luxury Hospitality Management</p>
              <h1 className="max-w-4xl font-serif text-6xl leading-tight text-white md:text-7xl xl:text-8xl">Curated Hospitality.<br />Timeless Experiences.</h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">The Karatto Collection is an Antigua-based luxury hospitality management company specializing in boutique resorts, villas, wellness retreats, and refined independent hotels throughout the Caribbean.</p>
              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-[#C6A05B] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#12203A] transition hover:scale-[1.02]">Partner With Us <span className="ml-2">→</span></a>
                <a href="#services" className="inline-flex items-center justify-center rounded-full border border-[#C6A05B] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white/10">Explore Services</a>
              </div>
            </div>
            <MiniBrandBoard />
          </div>
        </section>

        <section id="about" className="px-6 py-28">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.38em] text-[#C6A05B]">About The Brand</p>
              <h2 className="mt-5 font-serif text-5xl leading-tight text-[#12203A] md:text-6xl">A modern Caribbean luxury management platform.</h2>
            </div>
            <div className="text-lg leading-8 text-black/70">
              <p>The Karatto Collection partners with owners and developers to reposition, manage, and elevate boutique hospitality assets through refined operations, editorial luxury aesthetics, emotional hospitality, and timeless Caribbean sophistication.</p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {["Boutique Luxury Resorts", "Independent Hotels", "Luxury Villas & Residences", "Wellness & Lifestyle Retreats"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-white p-5 shadow-sm">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C6A05B] text-xs text-white">✓</span><span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#12203A] px-6 py-28 text-white">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div><p className="text-sm uppercase tracking-[0.38em] text-[#C6A05B]">Founder Vision</p><h2 className="mt-5 font-serif text-5xl leading-tight md:text-6xl">Caribbean luxury should feel personal, intentional, and deeply rooted in place.</h2></div>
            <div className="rounded-[2rem] border border-[#C6A05B]/30 bg-white/10 p-8 backdrop-blur-sm">
              <p className="text-lg leading-8 text-white/75">The vision behind The Karatto Collection is to create a new standard for boutique Caribbean hospitality — one that blends emotional service, refined operational discipline, elevated aesthetics, and authentic island warmth.</p>
              <p className="mt-6 text-lg leading-8 text-white/75">We believe smaller luxury properties deserve focused management, stronger storytelling, and service cultures that make every guest feel known, valued, and remembered.</p>
            </div>
          </div>
        </section>

        <section id="services" className="bg-white px-6 py-28">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm uppercase tracking-[0.38em] text-[#C6A05B]">Services</p>
            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#12203A] md:text-6xl">Luxury hospitality management designed around elevated experiences.</h2>
            <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map(({ icon, title, text }) => (
                <div key={title} className="rounded-[1.8rem] border border-[#E7DED0] bg-[#F6F2EB] p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                  <IconMark>{icon}</IconMark><h3 className="mt-6 font-serif text-3xl text-[#12203A]">{title}</h3><p className="mt-5 leading-8 text-black/68">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="bg-[#F6F2EB] px-6 py-28">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm uppercase tracking-[0.38em] text-[#C6A05B]">Portfolio Focus</p>
            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#12203A] md:text-6xl">Property types designed for boutique luxury management.</h2>
            <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {portfolioTypes.map((item) => (
                <div key={item.title} className="rounded-[1.8rem] border border-[#E7DED0] bg-white p-7 shadow-sm">
                  <p className="font-serif text-2xl text-[#12203A]">{item.title}</p><p className="mt-4 leading-7 text-black/65">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="visuals" className="bg-white px-6 py-28">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm uppercase tracking-[0.38em] text-[#C6A05B]">Visual Brand Boards</p>
            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#12203A] md:text-6xl">A refined visual language for Caribbean luxury hospitality.</h2>
            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {moodBoards.map((board) => (
                <div key={board.src} className="overflow-hidden rounded-[2rem] border border-[#C6A05B]/30 bg-white shadow-2xl">
                  <img src={board.src} alt={board.title} className="h-full w-full object-cover" />
                  <div className="p-6"><p className="font-serif text-2xl text-[#12203A]">{board.title}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="philosophy" className="relative overflow-hidden bg-[#12203A] px-6 py-28 text-white">
          <div className="relative mx-auto max-w-7xl">
            <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div><p className="text-sm uppercase tracking-[0.38em] text-[#C6A05B]">Owner Partnership Philosophy</p><h2 className="mt-5 font-serif text-5xl leading-tight md:text-6xl">Hospitality management centered around timeless luxury and operational refinement.</h2><p className="mt-8 max-w-xl text-lg leading-8 text-white/72">The Karatto Collection works closely with hotel owners to create emotionally memorable guest experiences while maintaining refined operational standards and elevated luxury positioning.</p></div>
              <div className="grid gap-5 sm:grid-cols-2">
                {ownerValues.map((item) => (
                  <div key={item.title} className="rounded-[1.8rem] border border-[#C6A05B]/30 bg-white/10 p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#C6A05B]/60"><p className="font-serif text-2xl text-[#C6A05B]">{item.title}</p><p className="mt-4 leading-7 text-white/72">{item.text}</p></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#111] px-6 py-28 text-white"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center"><MiniBrandBoard /><div><IconMark>◆</IconMark><h2 className="mt-6 font-serif text-5xl leading-tight">The Karatto Standard</h2><p className="mt-6 text-lg leading-8 text-white/72">Our signature service culture program shapes every guest touchpoint from pre-arrival to departure, ensuring each experience feels elegant, intentional, and emotionally memorable.</p><div className="mt-10 space-y-5 text-white/78"><div>• Personalized connection</div><div>• Anticipatory service</div><div>• Editorial luxury aesthetics</div><div>• Authentic Caribbean warmth</div><div>• Operational excellence</div></div></div></div></section>

        <section className="bg-[#F6F2EB] px-6 py-28"><div className="mx-auto max-w-7xl rounded-[2rem] bg-[#12203A] p-8 text-white shadow-2xl md:p-12"><div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center"><div><p className="text-sm uppercase tracking-[0.38em] text-[#C6A05B]">Why Karatto</p><h2 className="mt-5 font-serif text-5xl leading-tight">Built for owners who want a more personal luxury operator.</h2></div><div className="grid gap-4 sm:grid-cols-2">{proofPoints.map((item) => (<div key={item} className="rounded-2xl border border-[#C6A05B]/30 bg-white/10 p-5 text-white/80">{item}</div>))}</div></div></div></section>

        <section id="contact" className="px-6 py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div><p className="text-sm uppercase tracking-[0.38em] text-[#C6A05B]">Private Inquiry</p><h2 className="mt-5 font-serif text-5xl leading-tight text-[#12203A] md:text-6xl">Ready to elevate your hospitality asset?</h2><p className="mt-7 max-w-2xl text-lg leading-8 text-black/65">Contact The Karatto Collection to discuss hotel management, operational audits, pre-opening services, or hospitality repositioning opportunities.</p><div className="mt-10"><Logo dark /></div><p className="mt-8 text-black/60">Antigua & Barbuda | Caribbean Luxury Hospitality Management</p><a href="mailto:info@karattocollection.com" className="mt-8 inline-flex rounded-full bg-[#12203A] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#C6A05B] hover:text-[#12203A]">info@karattocollection.com</a></div>
              <form action="mailto:info@karattocollection.com" method="post" encType="text/plain" className="rounded-[2rem] bg-white p-8 shadow-xl">
                <div className="grid gap-5"><input className="rounded-xl border border-[#E7DED0] p-4 outline-none focus:border-[#C6A05B]" name="Name" placeholder="Name" /><input className="rounded-xl border border-[#E7DED0] p-4 outline-none focus:border-[#C6A05B]" name="Company" placeholder="Company / Property Name" /><input className="rounded-xl border border-[#E7DED0] p-4 outline-none focus:border-[#C6A05B]" name="Email" placeholder="Email Address" /><input className="rounded-xl border border-[#E7DED0] p-4 outline-none focus:border-[#C6A05B]" name="Property Type" placeholder="Property Type / Number of Rooms" /><textarea className="min-h-[150px] rounded-xl border border-[#E7DED0] p-4 outline-none focus:border-[#C6A05B]" name="Message" placeholder="Tell us about your property or opportunity" /><button type="submit" className="rounded-full bg-[#12203A] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#C6A05B] hover:text-[#12203A]">Submit Inquiry</button></div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
