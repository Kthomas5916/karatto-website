import kenyattaThomas from "./assets/kenyatta-thomas.png";
import leonNorville from "./assets/leon-norville.png";
import { useEffect, useState } from "react";

const moodBoards = [
  ["/karatto-resort-board.png", "Caribbean Luxury Resort Atmosphere"],
  ["/karatto-interior-board.png", "Boutique Interior Aesthetic"],
  ["/karatto-dining-board.png", "Luxury Dining & Table Styling"],
  ["/karatto-wellness-board.png", "Wellness & Spa Lifestyle"],
];

const services = [
  ["🏨", "Hotel & Resort Management", "Complete operational leadership for boutique luxury resorts, villas, wellness retreats, and independent hotels under 200 rooms."],
  ["✦", "Luxury Guest Experience", "Personalized guest journeys, VIP handling, service rituals, and curated hospitality standards from pre-arrival to departure."],
  ["☷", "Training & Culture", "Service culture programs, SOP implementation, leadership coaching, and luxury team development."],
  ["◒", "Luxury Repositioning", "Transforming Caribbean hospitality assets into refined boutique luxury destinations."],
  ["≈", "Wellness & Lifestyle", "Wellness concepts, spa positioning, lifestyle programming, and Caribbean-inspired rituals."],
  ["◈", "Pre-Opening Services", "Opening support, staffing, operational setup, brand standards, training, and soft-opening preparation."],
    ["◆", "Sales, Marketing & Public Relations Representation", "Strategic luxury brand positioning, hospitality sales representation, destination marketing, editorial partnerships, and public relations support designed to elevate visibility, reputation, and commercial performance throughout the Caribbean luxury travel market."],
];

const standards = [
  ["Guest Experience", "Personalized arrival, emotional service, recognition moments, and elegant departure rituals."],
  ["Culinary Direction", "Local sourcing, dining storytelling, private table rituals, and elevated restaurant presentation."],
  ["Wellness Programming", "Spa positioning, restorative rituals, retreats, mindfulness, and nature-led guest experiences."],
  ["Revenue Strategy", "ADR positioning, seasonal pricing, luxury distribution, and owner-focused performance discipline."],
  ["Boutique Operations", "Lean systems, SOPs, leadership cadence, audits, and refined daily execution."],
  ["Luxury Branding", "Editorial visual language, sensory details, storytelling, and consistent high-end touchpoints."],
];

const showcase = [
  ["/karatto-resort-board.png", "Coming Soon", "Antigua Coastal Reserve", "Antigua & Barbuda", "A future boutique beach resort concept shaped around private coves, ocean rituals, barefoot elegance, and emotionally intelligent service."],
  ["/karatto-interior-board.png", "Villa Collection", "The Karatto Villas", "Caribbean Region", "A refined collection of private villas and residences managed with discreet concierge service, owner care, and timeless island sophistication."],
  ["/karatto-wellness-board.png", "Wellness Retreat", "Serenity Island Retreat", "Eastern Caribbean", "A restorative wellness concept built around spa rituals, quiet luxury, nutrition, nature, and deeply personal guest journeys."],
];

const mapDestinations = [
  ["Antigua & Barbuda", "39%", "63%"],
  ["Saint Lucia", "61%", "54%"],
  ["Grenada", "78%", "50%"],
  ["Barbados", "69%", "68%"],
  ["Saint Vincent", "71%", "56%"],
];

function Reveal({ children, className = "" }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

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

function MiniBrandBoard() {
  const cards = ["Brand Philosophy", "Visual Identity", "Logo Usage", "Scent Branding", "Uniform Standards", "Table Setting", "Social Identity", "Our Promise"];
  return (
    <div className="grid grid-cols-2 gap-3 rounded-[2rem] border border-[#C6A05B]/30 bg-[#F6F2EB] p-4 shadow-2xl sm:grid-cols-4">
      {cards.map((card, i) => (
        <div key={card} className={`min-h-[105px] rounded-2xl border border-[#E5D9C6] p-4 ${i % 4 === 0 ? "bg-[#12203A] text-white" : "bg-white text-[#12203A]"}`}>
          <p className="font-serif text-2xl text-[#C6A05B]">{String(i + 1).padStart(2, "0")}</p>
          <p className="mt-2 text-xs uppercase tracking-[0.18em]">{card}</p>
          <div className="mt-4 h-1 w-10 bg-[#C6A05B]" />
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const [loader, setLoader] = useState(true);
  const [audioOn, setAudioOn] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [showKenyattaBio, setShowKenyattaBio] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoader(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && e.target.classList.add("reveal-visible"));
    }, { threshold: 0.15 });
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let ctx, osc, gain;
    if (audioOn) {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
      osc = ctx.createOscillator();
      gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = 84;
      gain.gain.value = 0.035;
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      useEffect(() => {
  const moveCursor = (event) => {
    setCursor({
      x: event.clientX,
      y: event.clientY,
    });
  };

  window.addEventListener("mousemove", moveCursor);

  return () => {
    window.removeEventListener("mousemove", moveCursor);
  };
}, []);
    }
    return () => {
      if (osc) osc.stop();
      if (ctx) ctx.close();
    };
  }, [audioOn]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F6F2EB] text-[#121212]">
      <div
  className="gold-cursor hidden lg:block"
  style={{
    left: `${cursor.x}px`,
    top: `${cursor.y}px`,
  }}
/>
      <style>{`
        html { scroll-behavior: smooth; }
        .reveal { opacity: 0; transform: translateY(34px); transition: opacity 900ms ease, transform 900ms ease; }
        .reveal-visible { opacity: 1; transform: translateY(0); }
        .loader-fade { animation: loaderFade 1.8s ease forwards; }
        @keyframes loaderFade { 0%,70% { opacity: 1; } 100% { opacity: 0; visibility: hidden; } }
        .gold-cursor {
  pointer-events: none;
  position: fixed;
  z-index: 9999;
  height: 22px;
  width: 22px;
  border-radius: 9999px;
  background: rgba(198, 160, 91, 0.35);
  box-shadow: 0 0 35px rgba(198, 160, 91, 0.75);
  transform: translate(-50%, -50%);
  transition: transform 120ms ease;
}

.luxury-tilt {
  transition:
    transform 500ms ease,
    box-shadow 500ms ease;
}

.luxury-tilt:hover {
  transform:
    perspective(900px)
    rotateX(2deg)
    rotateY(-3deg)
    scale(1.015);

  box-shadow:
    0 30px 80px rgba(18, 32, 58, 0.22);
}

.magnetic-button {
  transition:
    transform 300ms ease,
    box-shadow 300ms ease;
}

.magnetic-button:hover {
  transform:
    translateY(-3px)
    scale(1.03);

  box-shadow:
    0 18px 45px rgba(198, 160, 91, 0.25);
}
      `}</style><style>{`
  html { 
    scroll-behavior: smooth; 
  }

  .reveal {
    opacity: 0;
    transform: translateY(34px);
    transition: opacity 900ms ease, transform 900ms ease;
  }

  .reveal-visible {
    opacity: 1;
    transform: translateY(0);
  }

  .loader-fade {
    animation: loaderFade 1.8s ease forwards;
  }

  @keyframes loaderFade {
    0%,70% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      visibility: hidden;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(18px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`}</style>

      {loader && (
        <div className="loader-fade fixed inset-0 z-[100] flex items-center justify-center bg-black">
          <div className="text-center">
            <img src="/karatto-logo.jpg" alt="Karatto Logo" className="mx-auto h-28 w-auto object-contain opacity-90" />
            <p className="mt-8 text-xs uppercase tracking-[0.5em] text-[#C6A05B]">The Karatto Collection</p>
          </div>
        </div>
      )}

      <button onClick={() => setAudioOn(!audioOn)} className="fixed bottom-6 right-6 z-50 rounded-full border border-[#C6A05B]/60 bg-[#12203A]/90 px-5 py-3 text-xs uppercase tracking-[0.22em] text-white shadow-2xl backdrop-blur-md transition hover:bg-[#C6A05B] hover:text-[#12203A]">
        {audioOn ? "Ambient On" : "Ambient"}
      </button>

      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#12203A]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.18em] text-white/80 lg:flex">
            <a href="#showcase" className="hover:text-[#C6A05B]">Showcase</a>
            <a href="#standards" className="hover:text-[#C6A05B]">Standards</a>
            <a href="#karatto-experience" className="hover:text-[#C6A05B]">Experience</a>
            <a href="#contact" className="hover:text-[#C6A05B]">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative h-screen overflow-hidden bg-black">

  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 h-full w-full object-cover"
  >
    <source src="/karatto-hero-video.mp4" type="video/mp4" />
  </video>

  <div className="absolute inset-0 bg-black/45" />

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,160,91,0.18),transparent_40%)]" />

  <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">

    <img
      src="/karatto-logo.jpg"
      alt="Karatto Logo"
      className="mb-10 h-28 w-auto object-contain opacity-95 animate-[fadeIn_2s_ease]"
    />

    <p className="text-sm uppercase tracking-[0.55em] text-[#C6A05B]">
      The Karatto Collection
    </p>

    <h1 className="mt-8 max-w-5xl font-serif text-6xl leading-tight md:text-8xl">
      Curated Hospitality.<br />
      Timeless Experiences.
    </h1>

    <p className="mt-10 max-w-3xl text-lg leading-8 text-white/75 md:text-xl">
      Caribbean luxury hospitality management for boutique resorts,
      private villas, wellness retreats, and refined independent hotels.
    </p>

    <a
      href="#about"
      className="mt-14 inline-flex items-center justify-center rounded-full border border-[#C6A05B] px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#C6A05B] hover:text-[#12203A]"
    >
      Enter Experience
    </a>

  </div>
</section>

        <section className="relative overflow-hidden bg-[#12203A] px-6 py-32 text-white">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('/karatto-resort-board.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }} />
          <div className="absolute inset-0 bg-[#12203A]/85" />
          <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <Reveal>
              <p className="text-sm uppercase tracking-[0.38em] text-[#C6A05B]">Founder Story</p>
              <h2 className="mt-5 font-serif text-5xl leading-tight md:text-7xl">Born in Antigua & Barbuda, The Karatto Collection was created to redefine Caribbean luxury hospitality.</h2>
            </Reveal><div className="mt-24">
  <div className="flex items-end justify-between">
    <div>
      <p className="text-sm uppercase tracking-[0.35em] text-[#C6A05B]">
        Leadership
      </p>

      <h3 className="mt-4 font-serif text-4xl text-white md:text-5xl">
        Executive Leadership
      </h3>
    </div>
  </div>

  <div className="mt-14 grid gap-10 md:grid-cols-3">

    {/* Executive Profile 1 */}
<div className="luxury-tilt overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-sm">
  <div className="relative aspect-[4/5] overflow-hidden bg-[#EAE2CC]">
    <img
      src={kenyattaThomas}
      alt="Kenyatta Thomas"
      className="h-full w-full object-cover object-[65%_top] transition duration-700 hover:scale-105"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
  </div>

  <div className="p-8">
    <p className="text-xs uppercase tracking-[0.3em] text-[#C6A05B]">
      Managing Director & Operations
    </p>

    <h4 className="mt-4 font-serif text-3xl text-white">
      Kenyatta Thomas
    </h4>

    <button
      onClick={() => setShowKenyattaBio(true)}
      className="magnetic-button mt-6 rounded-full border border-[#C6A05B]/60 px-6 py-3 text-xs uppercase tracking-[0.22em] text-[#C6A05B] transition hover:bg-[#C6A05B] hover:text-black"
    >
      View Biography
    </button>
  </div>
</div>

{/* Executive Profile 2 */}
<div className="luxury-tilt overflow-hidden rounded-[2rem] border border-[#C6A05B]/20 bg-black/40 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-md transition duration-700 hover:-translate-y-2">
  <div className="aspect-[4/5] bg-[#1A1A1A]" />

  <div className="p-8">
    <p className="text-xs uppercase tracking-[0.3em] text-[#C6A05B]">
      Director of Sales & Guest Experiences
    </p>

    <h4 className="mt-4 font-serif text-3xl text-white">
      Name Coming Soon
    </h4>
  </div>
</div>

{/* Executive Profile 3 */}
<div className="luxury-tilt overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-sm">
  <div className="relative aspect-[4/5] overflow-hidden bg-[#EAE2CC]">
    <img
      src={leonNorville}
      alt="Leon Norville"
      className="h-full w-full object-cover object-top transition duration-700 hover:scale-105"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
  </div>

  <div className="p-8">
    <p className="text-xs uppercase tracking-[0.3em] text-[#C6A05B]">
      Director of Marketing Development Strategy & Public Relations
    </p>

    <h4 className="mt-4 font-serif text-3xl text-white">
      Leon Norville
    </h4>

    <button className="magnetic-button mt-6 rounded-full border border-[#C6A05B]/60 px-6 py-3 text-xs uppercase tracking-[0.22em] text-[#C6A05B] transition hover:bg-[#C6A05B] hover:text-black">
      View Biography
    </button>
  </div>
</div>
</div>
</div>
            <Reveal className="rounded-[2rem] border border-[#C6A05B]/30 bg-white/10 p-8 backdrop-blur-sm">
              <p className="text-lg leading-8 text-white/75">Our philosophy is grounded in intimate scale, emotional service, refined operational discipline, and a deep respect for place. We believe Caribbean luxury should feel personal, intentional, and beautifully connected to the destination.</p>
              <p className="mt-6 text-lg leading-8 text-white/75">From boutique resorts and private villas to wellness retreats and lifestyle hotels, Karatto exists to help owners build hospitality assets that are memorable, profitable, and culturally resonant.</p>
            </Reveal>
          </div>
        </section>

        <section id="showcase" className="bg-[#F6F2EB] px-6 py-28">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <p className="text-sm uppercase tracking-[0.38em] text-[#C6A05B]">Signature Property Showcase</p>
              <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#12203A] md:text-6xl">Featured resort and villa concepts shaped for the next era of Caribbean luxury.</h2>
            </Reveal>
            <div className="mt-16 grid gap-8 lg:grid-cols-3">
              {showcase.map(([src, label, title, place, text]) => (
                <Reveal key={title}>
                  <div className="luxury-tilt overflow-hidden rounded-[2rem] shadow-2xl">
                    <div className="relative h-[430px] overflow-hidden">
                      <img src={src} alt={title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
                      <div className="absolute bottom-0 p-7">
                        <p className="text-xs uppercase tracking-[0.3em] text-[#C6A05B]">{label}</p>
                        <h3 className="mt-3 font-serif text-3xl">{title}</h3>
                        <p className="mt-1 text-sm uppercase tracking-[0.2em] text-white/60">{place}</p>
                      </div>
                    </div>
                    <p className="p-7 leading-7 text-white/72">{text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="bg-white px-6 py-28">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <p className="text-sm uppercase tracking-[0.38em] text-[#C6A05B]">Services</p>
              <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#12203A] md:text-6xl">Luxury hospitality management designed around elevated experiences.</h2>
            </Reveal>
            <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map(([icon, title, text]) => (
                <Reveal key={title}>
                  <div className="rounded-[1.8rem] border border-[#E7DED0] bg-[#F6F2EB] p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C6A05B]/50 bg-white text-2xl">{icon}</div>
                    <h3 className="mt-6 font-serif text-3xl text-[#12203A]">{title}</h3>
                    <p className="mt-5 leading-8 text-black/68">{text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="standards" className="relative overflow-hidden bg-[#111] px-6 py-28 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(198,160,91,0.22),transparent_35%)]" />
          <div className="relative mx-auto max-w-7xl">
            <Reveal>
              <p className="text-sm uppercase tracking-[0.38em] text-[#C6A05B]">Our Standards</p>
              <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight md:text-6xl">A luxury-standard system for boutique properties.</h2>
            </Reveal>
            <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {standards.map(([title, text]) => (
                <Reveal key={title}>
                  <div className="min-h-[260px] rounded-[1.8rem] border border-[#C6A05B]/30 bg-white/10 p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#C6A05B]/70">
                    <p className="font-serif text-3xl text-[#C6A05B]">{title}</p>
                    <p className="mt-5 leading-8 text-white/72">{text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="cinematic-experience" className="bg-[#12203A] px-6 py-28 text-white">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <p className="text-sm uppercase tracking-[0.38em] text-[#C6A05B]">Cinematic Brand Experience</p>
              <h2 className="mt-5 font-serif text-5xl leading-tight md:text-6xl">A moving expression of Caribbean luxury.</h2>
            </Reveal>
            <Reveal className="mt-14 overflow-hidden rounded-[2rem] border border-[#C6A05B]/30 bg-black shadow-2xl">
              <video controls autoPlay muted loop playsInline className="h-auto w-full">
                <source src="/karatto-hero-video.mp4" type="video/mp4" />
              </video>
            </Reveal>
          </div>
        </section>

        <section id="visuals" className="bg-white px-6 py-28">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <p className="text-sm uppercase tracking-[0.38em] text-[#C6A05B]">Visual Brand Boards</p>
              <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight text-[#12203A] md:text-6xl">A refined visual language for Caribbean luxury hospitality.</h2>
            </Reveal>
            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {moodBoards.map(([src, title]) => (
                <Reveal key={src}>
                  <div className="overflow-hidden rounded-[2rem] border border-[#C6A05B]/30 bg-white shadow-2xl">
                    <img src={src} alt={title} className="h-full w-full object-cover transition duration-700 hover:scale-105" />
                    <div className="p-6"><p className="font-serif text-2xl text-[#12203A]">{title}</p></div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="karatto-experience" className="bg-[#F6F2EB] px-6 py-32">
  <div className="mx-auto max-w-7xl">
    <p className="text-sm uppercase tracking-[0.38em] text-[#C6A05B]">
      The Karatto Experience
    </p>

    <h2 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-[#12203A] md:text-7xl">
      Hospitality designed around feeling, memory, and place.
    </h2>

    <div className="mt-20 grid gap-24">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="luxury-tilt overflow-hidden rounded-[2rem] shadow-2xl">
          <img
            src="/karatto-resort-board.png"
            alt="Arrival Experience"
            className="h-full w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-[#C6A05B]">
            Arrival Experience
          </p>
          <h3 className="mt-5 font-serif text-4xl leading-tight text-[#12203A] md:text-5xl">
            Every arrival should feel cinematic, personal, and emotionally unforgettable.
          </h3>
          <p className="mt-7 text-lg leading-8 text-black/65">
            From the first impression to the final detail, Karatto-managed destinations are designed to create a sense of anticipation, elegance, and emotional connection.
          </p>
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="order-2 lg:order-1">
          <p className="text-sm uppercase tracking-[0.32em] text-[#C6A05B]">
            Wellness & Restoration
          </p>
          <h3 className="mt-5 font-serif text-4xl leading-tight text-[#12203A] md:text-5xl">
            Privacy, calm, and restoration woven into the rhythm of the stay.
          </h3>
          <p className="mt-7 text-lg leading-8 text-black/65">
            Spa rituals, candlelit spaces, tropical serenity, and wellness programming create a deeper sense of renewal for guests seeking quiet luxury.
          </p>
        </div>

        <div className="luxury-tilt overflow-hidden rounded-[2rem] shadow-2xl">
          <img
            src="/karatto-wellness-board.png"
            alt="Wellness and Restoration"
            className="h-full w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>
      </div>

    <div className="luxury-tilt overflow-hidden rounded-[2rem] shadow-2xl">
        <img
          src="/karatto-dining-board.png"
          alt="Culinary Rituals"
          className="h-[520px] w-full object-cover opacity-85"
        />
        <div className="p-8 text-white md:p-12">
          <p className="text-sm uppercase tracking-[0.32em] text-[#C6A05B]">
            Culinary Rituals
          </p>
          <h3 className="mt-6 max-w-4xl rounded-2xl bg-black/45 p-6 font-serif text-4xl leading-tight text-white shadow-2xl backdrop-blur-sm md:text-5xl">
  Dining becomes a ritual of atmosphere, storytelling, and Caribbean refinement.
</h3>

<p className="mt-6 max-w-3xl rounded-2xl bg-black/45 p-6 text-lg leading-8 text-white shadow-2xl backdrop-blur-sm">
  Candlelit tables, local ingredients, oceanfront moments, and refined service transform dining into one of the most memorable parts of the guest journey.

          </p>
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="luxury-tilt overflow-hidden rounded-[2rem] shadow-2xl">
          <img
            src="/karatto-interior-board.png"
            alt="Private Villa Living"
            className="h-full w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-[#C6A05B]">
            Private Villa Living
          </p>
          <h3 className="mt-5 font-serif text-4xl leading-tight text-[#12203A] md:text-5xl">
            Quiet mornings, private terraces, and discreet concierge-style care.
          </h3>
          <p className="mt-7 text-lg leading-8 text-black/65">
            The Karatto Collection brings villa living into a hospitality framework defined by privacy, elegance, service consistency, and owner confidence.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="relative overflow-hidden bg-[#12203A] px-6 py-44 text-white">
  <div className="absolute inset-0 opacity-25">
    <img
      src="/karatto-resort-board.png"
      alt="Ocean Luxury Atmosphere"
      className="h-full w-full object-cover"
    />
  </div>

  <div className="absolute inset-0 bg-[#12203A]/80" />

  <div className="relative mx-auto max-w-5xl text-center">
    <p className="text-sm uppercase tracking-[0.42em] text-[#C6A05B]">
      The Karatto Philosophy
    </p>

    <h2 className="mt-10 font-serif text-5xl leading-tight md:text-7xl">
      “Luxury should feel personal, timeless, and deeply connected to place.”
    </h2>
  </div>
</section>

        <section className="bg-white px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <p className="text-center text-sm uppercase tracking-[0.38em] text-[#C6A05B]">Press & Recognition</p>
              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {["Featured Destinations", "Luxury Hospitality Vision", "Caribbean Excellence"].map((item) => (
                  <div key={item} className="rounded-[1.5rem] border border-[#E7DED0] bg-[#F6F2EB] p-8 text-center shadow-sm">
                    <p className="font-serif text-3xl text-[#12203A]">{item}</p>
                    <p className="mt-4 text-sm uppercase tracking-[0.2em] text-black/45">Karatto Editorial</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="contact" className="px-6 py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <Reveal>
                <p className="text-sm uppercase tracking-[0.38em] text-[#C6A05B]">Private Consultation</p>
                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#12203A] md:text-6xl">Private Concierge</h2>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-black/65"><p className="mt-7 max-w-2xl text-lg leading-8 text-black/65">
  Connect privately with The Karatto Collection regarding hospitality management, luxury villa operations, owner representation, wellness retreat concepts, or boutique resort development opportunities throughout the Caribbean.
</p></p>
                <div className="mt-10"><Logo dark /></div>
                <p className="mt-8 text-black/60">Antigua & Barbuda | Caribbean Luxury Hospitality Management</p>
                <a href="mailto:info@karattocollection.com" className="mt-8 inline-flex rounded-full bg-[#12203A] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#C6A05B] hover:text-[#12203A]">info@karattocollection.com</a>
              </Reveal>
              <Reveal>
                <div className="mb-10 grid gap-4 sm:grid-cols-2">

  <div className="rounded-2xl border border-[#C6A05B]/30 bg-[#F6F2EB] p-5">
    <p className="text-xs uppercase tracking-[0.25em] text-[#C6A05B]">
      Inquiry Assistance
    </p>
    <p className="mt-3 text-sm leading-7 text-black/65">
      Personalized guidance regarding hospitality partnerships and luxury operational support.
    </p>
  </div>

  <div className="rounded-2xl border border-[#C6A05B]/30 bg-[#F6F2EB] p-5">
    <p className="text-xs uppercase tracking-[0.25em] text-[#C6A05B]">
      Consultation Requests
    </p>
    <p className="mt-3 text-sm leading-7 text-black/65">
      Private discussions for resort ownership groups, villa operators, and boutique hotel investors.
    </p>
  </div>

  <div className="rounded-2xl border border-[#C6A05B]/30 bg-[#F6F2EB] p-5">
    <p className="text-xs uppercase tracking-[0.25em] text-[#C6A05B]">
      Owner Onboarding
    </p>
    <p className="mt-3 text-sm leading-7 text-black/65">
      Luxury operational onboarding for new hospitality assets entering the Karatto Collection.
    </p>
  </div>

  <div className="rounded-2xl border border-[#C6A05B]/30 bg-[#F6F2EB] p-5">
    <p className="text-xs uppercase tracking-[0.25em] text-[#C6A05B]">
      Property Discussions
    </p>
    <p className="mt-3 text-sm leading-7 text-black/65">
      Conversations regarding luxury repositioning, wellness hospitality, and Caribbean expansion opportunities.
    </p>
  </div>

</div>
                <form action="mailto:info@karattocollection.com" method="post" encType="text/plain" className="rounded-[2rem] border border-[#C6A05B]/50 bg-white p-8 shadow-2xl">
                  <div className="grid gap-5">
                    <input className="rounded-xl border border-[#E7DED0] p-4 outline-none transition focus:border-[#C6A05B] focus:shadow-lg" name="Name" placeholder="Name" />
                    <input className="rounded-xl border border-[#E7DED0] p-4 outline-none transition focus:border-[#C6A05B] focus:shadow-lg" name="Company" placeholder="Company / Property Name" />
                    <input className="rounded-xl border border-[#E7DED0] p-4 outline-none transition focus:border-[#C6A05B] focus:shadow-lg" name="Email" placeholder="Email Address" />
                    <input className="rounded-xl border border-[#E7DED0] p-4 outline-none transition focus:border-[#C6A05B] focus:shadow-lg" name="Property Type" placeholder="Property Type / Number of Rooms" />
                    <input className="rounded-xl border border-[#E7DED0] p-4 outline-none transition focus:border-[#C6A05B] focus:shadow-lg" name="Preferred Consultation Date" type="date" />
                    <textarea className="min-h-[150px] rounded-xl border border-[#E7DED0] p-4 outline-none transition focus:border-[#C6A05B] focus:shadow-lg" name="Message" placeholder="Tell us about your property or opportunity" />
                    <button type="submit" className="rounded-full bg-[#12203A] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#C6A05B] hover:text-[#12203A]">Connect With Concierge</button>
                  </div>
                </form>
              </Reveal>
            </div>
          </div>
        </section><footer className="relative overflow-hidden bg-[#050505] px-6 py-24 text-white">

  <div className="absolute inset-0 opacity-20">
    <img
      src="/karatto-resort-board.png"
      alt="Karatto cinematic background"
      className="h-full w-full object-cover"
    />
  </div>

  <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/95 to-black" />

  <div className="relative mx-auto max-w-7xl">

    <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">

      <div>

        <div className="inline-flex rounded-full border border-[#C6A05B]/40 bg-white/5 p-4 shadow-[0_0_40px_rgba(198,160,91,0.18)]">
          <Logo />
        </div>

        <h2 className="mt-10 max-w-2xl font-serif text-5xl leading-tight md:text-6xl">
          Curated hospitality for the next era of Caribbean luxury.
        </h2>

        <p className="mt-8 max-w-xl text-lg leading-8 text-white/65">
          The Karatto Collection partners with owners, developers, and investors to shape boutique resorts, private villas, wellness retreats, and refined independent hotels.
        </p>

      </div>

      <div>

        <p className="text-sm uppercase tracking-[0.35em] text-[#C6A05B]">
          Destinations
        </p>

        <div className="mt-8 space-y-4 text-white/70">
          <p>Antigua & Barbuda</p>
          <p>Barbados</p>
          <p>Saint Lucia</p>
          <p>Grenada</p>
          <p>Turks & Caicos</p>
          <p>Future Caribbean Retreats</p>
        </div>

      </div>

      <div>

        <p className="text-sm uppercase tracking-[0.35em] text-[#C6A05B]">
          Connect
        </p>

        <div className="mt-8 space-y-4 text-white/70">

          <a
            href="mailto:info@karattocollection.com"
            className="block hover:text-[#C6A05B]"
          >
            info@karattocollection.com
          </a>

          <a
            href="#contact"
            className="block hover:text-[#C6A05B]"
          >
            Private Consultation
          </a>

          <a
            href="#showcase"
            className="block hover:text-[#C6A05B]"
          >
            Property Showcase
          </a>

          <a
            href="#karatto-experience"
            className="block hover:text-[#C6A05B]"
          >
            The Karatto Experience
          </a>

        </div>

        <div className="mt-10 flex gap-4">

          <a className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C6A05B]/50 text-sm text-[#C6A05B] transition hover:bg-[#C6A05B] hover:text-black">
            IG
          </a>

          <a className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C6A05B]/50 text-sm text-[#C6A05B] transition hover:bg-[#C6A05B] hover:text-black">
            IN
          </a>

          <a className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C6A05B]/50 text-sm text-[#C6A05B] transition hover:bg-[#C6A05B] hover:text-black">
            FB
          </a>

        </div>

      </div>

    </div>

    <div className="mt-20 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm uppercase tracking-[0.22em] text-white/40 md:flex-row md:items-center md:justify-between">

  <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
    <span>Antigua & Barbuda | Caribbean Luxury Hospitality</span>

    <a
      href="/privacy"
      className="transition hover:text-[#C6A05B]"
    >
      Privacy Policy
    </a>

    <a
      href="/terms"
      className="transition hover:text-[#C6A05B]"
    >
      Terms & Conditions
    </a>
  </div>

</div>   {/* closes mt-20 footer row */}

</div>   {/* closes max-w-7xl footer container */}

</footer>
      </main>
      {showKenyattaBio && (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 px-6 backdrop-blur-md">
    <div className="relative max-h-[90vh] max-w-4xl overflow-y-auto rounded-[2rem] border border-[#C6A05B]/30 bg-[#F6F2EB] p-8 shadow-2xl md:p-12">
      <button
        onClick={() => setShowKenyattaBio(false)}
        className="absolute right-6 top-6 rounded-full border border-[#C6A05B]/50 px-4 py-2 text-sm text-[#12203A] hover:bg-[#C6A05B]"
      >
        Close
      </button>

      <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
        <img
          src={kenyattaThomas}
          alt="Kenyatta Thomas"
          className="rounded-[1.5rem] object-cover shadow-2xl"
        />

        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-[#C6A05B]">
            Managing Director & Operations
          </p>

          <h2 className="mt-4 font-serif text-5xl text-[#12203A]">
            Kenyatta Thomas
          </h2>

          <p className="mt-8 text-lg leading-8 text-black/70">
            Kenyatta Thomas is a passionate Caribbean hospitality leader whose career has been defined by a deep commitment to creating exceptional guest experiences rooted in warmth, refinement, and genuine human connection.
          </p>

          <p className="mt-6 text-lg leading-8 text-black/70">
            His leadership philosophy is grounded in the belief that true luxury is not simply delivered through service, but through atmosphere, anticipation, personalization, and heartfelt attention to detail. With more than a decade of experience across luxury resorts, boutique hospitality, food and beverage operations, and executive leadership throughout the Caribbean, he has built a reputation for transforming hospitality environments into emotionally memorable experiences that leave a lasting impression on every guest.
          </p>
        </div>
      </div>
    </div>
  </div>
)}
    </div>
  );
}
