import { useState } from 'react';

const gold = '#C6A05B';
const services = [
  {name:'Karatto Signature Villas', type:'LUXURY VILLA & ESTATE MANAGEMENT', description:'Discreet, hands-on stewardship for exceptional villas, private estates and second homes.', items:['Owner representation and scheduled inspections','Housekeeping, landscaping and maintenance oversight','Guest arrivals, concierge and personalised experiences','Preventative maintenance and hurricane readiness']},
  {name:'Karatto Holiday Residences', type:'VACATION RENTAL MANAGEMENT', description:'Thoughtful guest service and disciplined rental operations for holiday homes, apartments and villas.', items:['Listing, calendar and reservations coordination','Guest messaging and arrival management','Cleaning, linen and quality assurance','Performance reporting and pricing support']},
];
export default function PropertyManagement(){
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({name:'', email:'', property:'Luxury villa', location:'', message:''});
  const update = (key,value) => setForm(old=>({...old,[key]:value}));
  
const submit = async (e) => {
  e.preventDefault();
  setSent(false);

  try {
    const response = await fetch("https://formspree.io/f/mdeeeooe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        property_type: form.property,
        property_location: form.location,
        message: form.message,
        _subject: "New Karatto Villa Management Enquiry",
      }),
    });

    if (!response.ok) {
      throw new Error("Form submission failed");
    }

    setSent(true);
  } catch (error) {
    console.error("Enquiry submission error:", error);
    alert("Your enquiry could not be sent. Please try again.");
  }
};

  return <div className="min-h-screen bg-[#F6F2EB] text-[#12203A]">
    <header className="sticky top-0 z-50 bg-[#12203A] text-white shadow-lg"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4"><a href="/" className="flex items-center gap-3"><img src="/karatto-logo.jpg" alt="The Karatto Collection logo" className="h-14 w-auto"/><span className="font-serif text-lg tracking-[.15em]">KARATTO <span className="block text-[10px] uppercase tracking-[.3em] text-[#C6A05B]">Villa & Residence Management</span></span></a><nav className="flex flex-wrap gap-5 text-xs uppercase tracking-widest"><a href="/">The Collection</a><a href="#divisions">Services</a><a href="#owners">For Owners</a><a href="#enquire">Enquire</a></nav></div></header>
    <main>
      <section className="relative isolate flex min-h-[580px] items-center overflow-hidden bg-[#12203A] px-6 py-24 text-white"><div className="absolute inset-0 -z-10 opacity-25" style={{backgroundImage:'linear-gradient(115deg,#12203A 20%,#C6A05B 120%)'}}/><div className="mx-auto w-full max-w-6xl"><p className="mb-6 text-xs font-semibold uppercase tracking-[.35em] text-[#C6A05B]">A proposed subsidiary of The Karatto Collection · Antigua & Barbuda</p><h1 className="max-w-4xl font-serif text-5xl leading-tight md:text-7xl">Exceptional homes.<br/><em className="text-[#D9BB82]">Thoughtfully managed.</em></h1><p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/80">Premium villa stewardship and vacation rental management, guided by the Art of Curated Hospitality.</p><a href="#enquire" className="mt-10 inline-block rounded-full bg-[#C6A05B] px-8 py-4 text-xs font-semibold uppercase tracking-[.2em] text-[#12203A]">Discuss your property</a></div></section>
      <section className="mx-auto max-w-6xl px-6 py-20"><p className="text-xs font-semibold uppercase tracking-[.3em]" style={{color:gold}}>Our philosophy</p><h2 className="mt-4 max-w-4xl font-serif text-4xl md:text-5xl">Your property deserves the care of a private residence and the standards of a luxury hotel.</h2><p className="mt-7 max-w-3xl text-lg leading-relaxed text-[#46536A]">We bring hospitality-led oversight, trusted service coordination and clear owner communication together under one considered management experience. Whether your property is a private retreat or an active holiday rental, every detail matters.</p></section>
      <section id="divisions" className="bg-white px-6 py-20"><div className="mx-auto max-w-6xl"><p className="text-xs font-semibold uppercase tracking-[.3em]" style={{color:gold}}>Our divisions</p><h2 className="mt-4 mb-10 font-serif text-4xl">Two distinct services. One standard of care.</h2><div className="grid gap-7 md:grid-cols-2">{services.map(s=><article key={s.name} className="border border-[#E5D9C6] bg-[#F6F2EB] p-8 md:p-10"><p className="text-xs font-semibold tracking-[.2em]" style={{color:gold}}>{s.type}</p><h3 className="mt-5 font-serif text-3xl">{s.name}</h3><p className="mt-5 leading-relaxed text-[#46536A]">{s.description}</p><ul className="mt-7 space-y-3">{s.items.map(item=><li className="flex gap-3" key={item}><span style={{color:gold}}>✦</span>{item}</li>)}</ul></article>)}</div></div></section>
      <section id="owners" className="bg-[#12203A] px-6 py-20 text-white"><div className="mx-auto max-w-6xl"><p className="text-xs font-semibold uppercase tracking-[.3em] text-[#C6A05B]">For property owners</p><h2 className="mt-4 font-serif text-4xl">Confidence, clarity and care.</h2><div className="mt-10 grid gap-8 md:grid-cols-3">{[['Dedicated oversight','A consistent point of contact and structured inspection routines.'],['Transparent reporting','Clear updates on property condition, guest activity and approved expenditure.'],['Thoughtful hospitality','Arrival preparation and guest experiences reflecting the Karatto philosophy.']].map(([title,copy])=><div key={title} className="border-t border-[#C6A05B]/70 pt-6"><h3 className="font-serif text-2xl">{title}</h3><p className="mt-3 text-white/70">{copy}</p></div>)}</div></div></section>
      <section id="enquire" className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2"><div><p className="text-xs font-semibold uppercase tracking-[.3em]" style={{color:gold}}>Begin a conversation</p><h2 className="mt-4 font-serif text-4xl">Let's care for what matters.</h2><p className="mt-6 leading-relaxed text-[#46536A]">Tell us about your villa, residence or holiday rental. We welcome enquiries from owners and investors across Antigua and Barbuda.</p><p className="mt-6 text-sm text-[#46536A]">Our proposed contact address is <strong>info@karattocollection.com</strong>. Email activation has not yet been verified.</p><p className="mt-4 text-sm text-[#46536A]">This form opens your email application. It does not send or store information on the website.</p></div><form onSubmit={submit} className="space-y-5 bg-white p-7 shadow-sm"><label className="block text-sm">Full name<input required value={form.name} onChange={e=>update('name',e.target.value)} className="mt-2 w-full border border-[#D9D1C3] p-3"/></label><label className="block text-sm">Email address<input type="email" required value={form.email} onChange={e=>update('email',e.target.value)} className="mt-2 w-full border border-[#D9D1C3] p-3"/></label><label className="block text-sm">Property type<select value={form.property} onChange={e=>update('property',e.target.value)} className="mt-2 w-full border border-[#D9D1C3] p-3"><option>Luxury villa</option><option>Vacation rental</option><option>Private residence</option><option>Other</option></select></label><label className="block text-sm">Property location<input value={form.location} onChange={e=>update('location',e.target.value)} className="mt-2 w-full border border-[#D9D1C3] p-3"/></label><label className="block text-sm">How can we help?<textarea rows="4" value={form.message} onChange={e=>update('message',e.target.value)} className="mt-2 w-full border border-[#D9D1C3] p-3"/></label><button className="w-full bg-[#12203A] px-6 py-4 text-xs font-semibold uppercase tracking-widest text-white hover:bg-[#283A58]">Submit Enquiry</button>{sent&&<p role="status" className="text-sm font-medium text-green-700">Thank you for your enquiry! Your message has been successfully submitted. Our team will be in touch shortly.</p>}</form></section>
    </main><footer className="bg-[#091427] px-6 py-10 text-center text-sm text-white/70"><p className="font-serif text-xl tracking-[.2em] text-white">KARATTO</p><p className="mt-2">Villa & Residence Management · A proposed subsidiary of The Karatto Collection</p><a className="mt-5 inline-block text-[#C6A05B]" href="/">Return to The Karatto Collection</a></footer>
  </div>;
}
