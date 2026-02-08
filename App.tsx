import React, { useState, useEffect, useRef } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sākums', href: '#' },
    { name: 'Par mums', href: '#par-mums' },
    { name: 'Pakalpojumi', href: '#pakalpojumi' },
    { name: 'Komanda', href: '#komanda' },
    { name: 'Kontakti', href: '#kontakti' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm border-b border-clinical-blue/5' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="flex flex-col">
            <span className="font-bold text-xl tracking-tight text-clinical-blue uppercase">Līna</span>
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold -mt-1">Klīnika</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-semibold tracking-wide text-clinical-text hover:text-clinical-blue transition-colors">
              {link.name}
            </a>
          ))}
          <a href="tel:+37127055380" className="bg-clinical-blue text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-clinical-blueSoft transition-all shadow-lg shadow-clinical-blue/20">
            Pieteikties
          </a>
        </div>

        <button className="md:hidden text-clinical-blue font-bold text-xs tracking-widest uppercase" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Aizvērt' : 'Izvēlne'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 p-8 flex flex-col gap-8 animate-in fade-in duration-300">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="font-bold text-xl tracking-tight text-clinical-blue uppercase">Līna</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-clinical-blue font-bold text-xs tracking-widest uppercase">Aizvērt</button>
          </div>
          <div className="flex flex-col gap-6 mt-12 text-center">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-3xl font-bold text-clinical-text" onClick={() => setIsOpen(false)}>
                {link.name}
              </a>
            ))}
            <a href="tel:+37127055380" className="bg-clinical-blue text-white text-center py-5 rounded-2xl font-bold text-xl mt-4">
              Pieteikties vizītei
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero: React.FC = () => (
  <section className="relative h-screen flex items-center overflow-hidden bg-white">
    <div className="absolute inset-0 z-0">
      <img
        src="/images/Hero@0.75x.jpg"
        alt="Zobārstniecības klīnika Līna"
        className="w-full h-full object-cover"
      />
      {/* Increased white overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 via-white/70 to-transparent pointer-events-none"></div>
    </div>

    <div className="container mx-auto px-6 relative z-10 text-left">
      <div className="max-w-4xl space-y-10">
        <div className="space-y-6">
          <p className="text-sm md:text-base font-bold uppercase tracking-[0.3em] text-clinical-blue animate-fade-in-up">
            Zobārstniecības klīnika Saldū
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-semibold tracking-tight leading-[0.85] text-clinical-text" style={{ fontFamily: "'Playfair Display', serif" }}>
            Zobārstniecības <br />
            <span className="text-clinical-blue italic font-light italic">klīnika Līna</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl font-light leading-relaxed animate-fade-in">
            Mūsdienīga zobārstniecība ar individuālu pieeju, nodrošinot augstākās kvalitātes aprūpi Jūsu smaidam un dabiski skaistiem rezultātiem.
          </p>
        </div>

        <div className="pt-4 flex flex-col items-start gap-12">
          <div className="flex flex-wrap gap-4">
            <a href="#pakalpojumi" className="inline-block bg-clinical-blue text-white px-10 py-5 text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:bg-clinical-text shadow-xl shadow-clinical-blue/20">
              Mūsu pakalpojumi
            </a>
            <a href="#kontakti" className="inline-block border-2 border-clinical-text text-clinical-text px-10 py-[18px] text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:bg-clinical-text hover:text-white">
              Sazināties
            </a>
          </div>

          <div className="animate-bounce opacity-20">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-clinical-text"><path d="M7 13l5 5 5-5M7 6l5 5 5-5" /></svg>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Features: React.FC = () => (
  <section id="par-mums" className="py-32 bg-clinical-white border-t border-slate-100">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-5xl md:text-6xl font-light text-clinical-text leading-tight mb-12">
            Klīnika, kas <br /><span className="font-bold text-clinical-blue">Maina Standartus.</span>
          </h2>
          <div className="aspect-square relative overflow-hidden bg-slate-100">
            <img
              src="/images/About us@0.75x.jpg"
              alt="Interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-16">
          <p className="text-slate-500 text-xl leading-relaxed font-light">
            Mēs ticam, ka videi ir nozīme. Mūsu telpas ir veidotas, iedvesmojoties no mākslas galerijām — tīras, gaišas un nomierinošas. Šeit nav zobārstniecības smaržas vai satraucošu skaņu.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
            {[
              { title: '01. Ekspertīze', desc: 'Sertificēti ārsti, kas nepārtraukti papildina zināšanas starptautiskos kongresos.' },
              { title: '02. Tehnoloģijas', desc: 'Digitālā diagnostika un mikroskopi maksimālai precizitātei katrā darbībā.' },
              { title: '03. Caurspīdība', desc: 'Skaidrs ārstēšanas plāns un izmaksas pirms darba uzsākšanas.' },
              { title: '04. Lokācija', desc: 'Ērti sasniedzama vieta Saldus centrā ar privātu autostāvvietu.' }
            ].map((f, i) => (
              <div key={i} className="space-y-4 border-l border-clinical-blue/20 pl-6">
                <h4 className="font-bold text-lg text-clinical-text uppercase tracking-wider">{f.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Services: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const services = [
    {
      id: '01',
      title: 'Zobārstniecība',
      desc: 'Terapeitiskā ārstēšana, kariesa profilakse un kvalitatīva plombēšana visai ģimenei.',
      longDesc: 'Mēs piedāvājam pilnu terapeitiskās ārstēšanas klāstu, sākot no kariesa profilakses līdz sarežģītai zobu kanālu ārstēšanai. Izmantojam modernos helio materiālus, kas nodrošina gan estētiku, gan izturību.'
    },
    {
      id: '02',
      title: 'Zobu higiēna',
      desc: 'Profesionāla aplikuma un zobakmens noņemšana mirdzošam smaidam un dabiski baltiem zobiem.',
      longDesc: 'Higiēnas procedūras laikā tiek izmantota gan ultraskaņa, gan AirFlow (pērļu strūkla), kas saudzīgi un efektīvi noņem pigmentāciju no kafijas, tējas vai smēķēšanas.'
    },
    {
      id: '03',
      title: 'Restaurācija',
      desc: 'Zobu formas un funkcijas atjaunošana ar moderniem materiāliem - kroņiem un tiltiem.',
      longDesc: 'Ja zobs ir stipri bojāts, mēs piedāvājam estētisko restaurāciju, izveidojot anatomiski precīzu zobu formu. Piedāvājam arī protezēšanas risinājumus — cirkonija vai metālkeramikas kroņus.'
    },
    {
      id: '04',
      title: 'Bērnu zobārstniecība',
      desc: 'Saudzīga un mierīga pieeja pašiem mazākajiem, veidojot pozitīvu pieredzi bez bailēm.',
      longDesc: 'Bērnu vizītes laikā galvenais ir uzticības veidošana. Mēs izskaidrojam katru soli bērnam saprotamā valodā un pārvēršam vizīti par pozitīvu piedzīvojumu.'
    },
    {
      id: '05',
      title: 'Akūtā palīdzība',
      desc: 'Palīdzība pēkšņu sāpju gadījumos. Lūdzam iepriekš sazināties, lai vienotos par laiku.',
      longDesc: 'Saprotam, ka sāpes nevar plānot. Akūtos gadījumos cenšamies atrast laiku tajā pašā dienā, lai atvieglotu Jūsu stāvokli un sniegtu pirmo nepieciešamo palīdzību.'
    },
    {
      id: '06',
      title: 'Konsultācijas',
      desc: 'Padziļināta mutes veselības izmeklēšana un individuāla ārstēšanas plāna izstrāde.',
      longDesc: 'Pirmajā vizītē mēs rūpīgi izvērtējam visu zobu un smaganu stāvokli, ja nepieciešams, veicam rentgenu un izstrādājam detalizētu, prioritātēs sakārtotu ārstēšanas plānu.'
    }
  ];

  return (
    <section id="pakalpojumi" className="py-32 bg-clinical-white">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <span className="text-clinical-blue text-xs font-bold uppercase tracking-[0.3em]">Pakalpojumi</span>
          <h2 className="text-5xl font-light mt-4 text-clinical-text">Mūsu Specializācija</h2>
        </div>

        <div className="flex flex-col border-t border-slate-200">
          {services.map((s, i) => (
            <div key={i} className="border-b border-slate-200">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left group py-12 flex flex-col md:flex-row gap-8 md:items-baseline hover:bg-clinical-blueLight/30 transition-colors px-4 focus:outline-none"
              >
                <span className="text-clinical-blue font-bold text-sm tracking-widest opacity-50 group-hover:opacity-100 transition-opacity">{s.id}</span>
                <h4 className="text-3xl font-bold text-clinical-text md:w-1/3 group-hover:text-clinical-blue transition-colors">
                  {s.title}
                </h4>
                {!openIndex && openIndex !== 0 && (
                  <p className="text-slate-500 leading-relaxed md:w-1/3 hidden md:block opacity-70">
                    {s.desc}
                  </p>
                )}
                {openIndex !== i && (
                  <p className="text-slate-500 leading-relaxed md:w-1/3 md:hidden">
                    {s.desc}
                  </p>
                )}
                <div className="md:w-1/3 flex justify-end transition-all duration-300">
                  <span className={`text-clinical-blue text-2xl transition-transform duration-300 ${openIndex === i ? 'rotate-90' : ''}`}>
                    ↗
                  </span>
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-[500px] opacity-100 pb-12 px-4 ml-0 md:ml-[3.5rem]' : 'max-h-0 opacity-0'}`}>
                <div className="max-w-3xl">
                  <div className="space-y-6">
                    <p className="text-xl text-clinical-text font-medium leading-relaxed">
                      {s.desc}
                    </p>
                    <p className="text-slate-500 leading-relaxed font-light">
                      {s.longDesc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Team: React.FC = () => {
  const members = [
    { name: 'Līna Čunka', role: 'Dibinātāja', img: '/images/11.png' },
    { name: 'Agne Bundzena - Pļuska', role: 'Zobārste', img: '/images/12.png' },
    { name: 'Evija Vitkovska', role: 'Zobārste', img: '/images/13.png' },
    { name: 'Ieva Aleksa - Gidrēviča', role: 'Higiēniste', img: '/images/14.png' }
  ];

  return (
    <section id="komanda" className="py-32 bg-clinical-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 border-b border-slate-200 pb-12">
          <div className="md:w-1/2 space-y-4">
            <span className="text-clinical-blue text-xs font-bold uppercase tracking-[0.3em]">Komanda</span>
            <h2 className="text-5xl font-light text-clinical-text">Mūsu speciālisti</h2>
          </div>
          <div className="md:w-1/3">
            <p className="text-slate-500 font-light text-lg">
              Apvienojot pieredzi ar nepārtrauktu izaugsmi.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((m, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden bg-slate-100 relative mb-6">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" />
                <div className="absolute inset-0 bg-clinical-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply"></div>
              </div>
              <div>
                <h4 className="font-bold text-xl text-clinical-text group-hover:text-clinical-blue transition-colors">{m.name}</h4>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">{m.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 border border-slate-200 p-12 text-center max-w-3xl mx-auto">
          <p className="text-clinical-text text-xl font-light mb-8">
            "Mūsu asistentes <strong>Evita un Tīna</strong> ir klīnikas sirds, kas rūpējas par Jūsu mieru ik uz soļa."
          </p>
          <a href="tel:+37127055380" className="inline-block text-clinical-blue font-bold uppercase tracking-widest text-xs border-b border-clinical-blue hover:text-clinical-text hover:border-clinical-text transition-all py-1">
            Sazināties ar reģistratūru
          </a>
        </div>
      </div>
    </section>
  );
};

const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);
  const items = [
    { q: 'Vai pirmajā vizītē ir iespējama higiēna?', a: 'Jā, bieži vien pacienti izvēlas apvienot pirmo konsultāciju ar zobu higiēnu, ja nav sūdzību par pēkšņām sāpēm.' },
    { q: 'Kāpēc bērnam svarīgi doties pie zobārsta jau savlaicīgi?', a: 'Tas palīdz veidot pozitīvu ieradumu un bailes neveidojas, ja pirmās vizītes ir tikai preventīvas un nesāpīgas.' },
    { q: 'Kādi materiāli tiek izmantoti plombēšanai?', a: 'Mēs izmantojam tikai augstākās klases, sertificētus kompozītmateriālus, kas ir izturīgi un estētiski nepamanāmi.' },
    { q: 'Vai klīnika ir pieejama cilvēkiem ar kustību traucējumiem?', a: 'Mūsu klīnika atrodas ērti sasniedzamā vietā. Lūdzam iepriekš sazināties, lai mēs varētu nodrošināt labāko piekļuvi.' }
  ];

  return (
    <section className="py-32 bg-clinical-white">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <span className="text-clinical-blue text-xs font-bold uppercase tracking-[0.3em]">BUJ</span>
          <h2 className="text-5xl font-light mt-4 text-clinical-text">Biežāk uzdotie jautājumi</h2>
        </div>

        <div className="max-w-4xl">
          {items.map((item, i) => (
            <div key={i} className="border-b border-slate-200">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-8 text-left focus:outline-none group"
              >
                <span className={`text-xl md:text-2xl font-light ${open === i ? 'text-clinical-blue' : 'text-clinical-text'} group-hover:text-clinical-blue transition-colors`}>{item.q}</span>
                <span className={`text-2xl font-light ml-8 transition-transform duration-300 ${open === i ? 'rotate-45 text-clinical-blue' : 'text-slate-300'}`}>+</span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open === i ? 'max-h-96 opacity-100 pb-8' : 'max-h-0 opacity-0'}`}>
                <p className="text-slate-500 text-lg leading-relaxed font-light max-w-2xl">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LeafletMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);

  useEffect(() => {
    if (mapRef.current && !mapInstance.current) {
      const L = (window as any).L;
      if (!L) return;

      const saldusCenter: [number, number] = [56.6685, 22.4934];

      mapInstance.current = L.map(mapRef.current, {
        minZoom: 14,
        maxZoom: 19,
        zoomControl: true,
        scrollWheelZoom: false,
        dragging: true,
      }).setView(saldusCenter, 16);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(mapInstance.current);

      const marker = L.marker(saldusCenter).addTo(mapInstance.current);
      marker.bindPopup('<b>Zobārstniecības klīnika Līna</b><br>Rīgas iela 20, Saldus');

      // Restrict the area strictly to Saldus
      const bounds = L.latLngBounds(
        [56.64, 22.44],
        [56.69, 22.55]
      );
      mapInstance.current.setMaxBounds(bounds);
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={mapRef}
      className="w-full h-full"
      style={{ filter: 'grayscale(1) contrast(1.1) brightness(0.95)' }}
    />
  );
};

const Contact: React.FC = () => (
  <section id="kontakti" className="py-32 bg-white border-t border-slate-100">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-16">
          <div className="space-y-12">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-clinical-blue mb-6">Sazināties ar mums</p>
              <h2 className="text-5xl md:text-6xl font-bold text-clinical-text leading-[1.1]" style={{ fontFamily: "'Playfair Display', serif" }}>
                Gaidīsim Jūs <br />
                <span className="text-clinical-blue italic font-medium">Zobārstniecības Klīnikā Līna</span>
              </h2>
              <p className="text-xl text-slate-400 font-light mt-4">Pašā Saldus centrā</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="space-y-2">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest transition-colors">Adrese</p>
                  <p className="text-xl font-bold text-clinical-text">Rīgas iela 20, Saldus</p>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest transition-colors">Tālrunis</p>
                  <a href="tel:+37127055380" className="text-xl font-bold text-clinical-text hover:text-clinical-blue transition-colors tracking-tight">+371 27055380</a>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest transition-colors">Sociālie tīkli</p>
                  <a href="#" className="font-bold text-clinical-text hover:text-clinical-blue transition-all border-b-2 border-clinical-blue/10 hover:border-clinical-blue pb-1">Facebook</a>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-4">Darba laiks</p>
                <div className="space-y-2 pb-6 border-b border-slate-50">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Pirmdiena - Piektdiena</span>
                    <span className="font-bold text-clinical-text">9:00 - 17:00</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Sestdiena - Svētdiena</span>
                    <span className="text-slate-300 font-bold uppercase text-[10px]">Pēc pieraksta</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[560px] bg-slate-50 border-[12px] border-white shadow-2xl overflow-hidden">
          <LeafletMap />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[1000]">
            <div className="w-4 h-4 bg-clinical-blue rounded-full shadow-lg border-2 border-white animate-ping"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="bg-clinical-blueLight py-16 border-t border-clinical-blue/10">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-bold text-2xl tracking-tight text-clinical-blue uppercase">Līna</span>
          <span className="text-[10px] uppercase tracking-[0.5em] text-slate-400 font-bold">Zobārstniecība</span>
        </div>
        <div className="text-slate-400 text-sm font-semibold tracking-wide text-center">
          © {new Date().getFullYear()} Zobārstniecības klīnika Līna. Visas tiesības aizsargātas.
        </div>
        <div className="flex gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
          <a href="#" className="hover:text-clinical-blue transition-colors">Privātums</a>
          <a href="#" className="hover:text-clinical-blue transition-colors">Noteikumi</a>
        </div>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <Team />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
