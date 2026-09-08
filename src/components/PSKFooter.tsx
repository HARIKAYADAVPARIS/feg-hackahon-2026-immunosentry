import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Shield, 
  Smartphone, 
  Download, 
  ExternalLink,
  CreditCard
} from 'lucide-react';

export const PSKFooter: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const accordions = [
    {
      id: 'about',
      title: 'ABOUT US – THE FIRST SPORTS BETTING HOUSE',
      titleHr: 'O NAMA – PRVA SPORTSKA KLADIONICA',
      content: 'Welcome to the heart of the game, to the world where champions play - welcome to PSK, the first Croatian sports betting company! PSK has gained its position on the market through 25 years of experience in providing the best service and support to its partners and players. As proud part of Fortuna Entertainment Group (FEG), we lead omnichannel sports betting across Central and Eastern Europe.',
    },
    {
      id: 'sponsorships',
      title: 'SPONSORSHIPS & CROATIAN SPORT',
      titleHr: 'SPONZORSTVA',
      content: 'Through our sponsorships, promotions and socially responsible business, we strive not only to improve your safe and relaxed gaming experience, but also to influence the world around us. Known for its sporting values, PSK is a major partner of Croatian sports, national teams, and regional grassroots sports development.',
    },
    {
      id: 'heart',
      title: 'WITH THE HEART IN THE GAME, WITH THE GAME FOR THE HEART',
      titleHr: 'POKAŽI SRCE - S NAMA ZA ZDRAVLJE SPORTAŠA',
      content: '"Pokaži srce", a socially responsible initiative launched in March 2022 in collaboration with the Institute for Sports Medicine and Health, aims to raise awareness of athletes\' health and preventative cardiac screening across Croatia.',
    },
    {
      id: 'branches',
      title: 'POSLOVNICE I KAFIĆI PSK KLADIONICE',
      titleHr: 'POSLOVNICE I KAFIĆI PSK KLADIONICE',
      content: 'PSK operates more than 200 retail betting shops and 2,000 partner cafe locations across Croatia. This extensive retail presence pairs seamlessly with our digital platform, giving players a unified omnichannel betting experience.',
    },
    {
      id: 'online-sports',
      title: 'PONUDA SPORTSKE KLADIONICE & UŽIVO',
      titleHr: 'PONUDA SPORTSKE KLADIONICE',
      content: 'PSK offers coverage across 30+ sports disciplines, over 150 football leagues worldwide, and in-depth live in-play betting with real-time odds updates, BetBuilder, Golden Markets, and player proposition specials.',
    },
    {
      id: 'responsible',
      title: 'ODGOVORNO IGRANJE (RESPONSIBLE GAMING)',
      titleHr: 'ODGOVORNO IGRANJE',
      content: 'Player safety and responsible gaming are our highest priorities. PSK provides strict self-regulation tools including deposit limits, loss caps, session timeouts, and self-exclusion mechanisms in full compliance with Croatian Ministry of Finance and EU regulations. Igre na sreću mogu izazvati ovisnost. Igrajte odgovorno (18+).',
    },
  ];

  const paymentMethods = [
    'PSK Terminal',
    'SEPA',
    'Revolut',
    'aircash',
    'abon',
    'VISA',
    'Mastercard',
    'Diners Club',
    'Apple Pay',
    'Skrill',
    'paysafecard',
    'Discover'
  ];

  return (
    <footer className="bg-[#00121F] border-t border-[#002B49] text-slate-400 text-xs">
      {/* Informational Accordions Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-b border-[#002B49] pb-2">
          Sportsbook and Casino for unforgettable betting and entertainment
        </h4>

        <div className="space-y-2">
          {accordions.map((acc) => {
            const isOpen = openAccordion === acc.id;
            return (
              <div 
                key={acc.id} 
                className="border border-[#002B49] bg-[#001A2C] rounded-lg overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(acc.id)}
                  className="w-full text-left px-4 py-3 flex items-center justify-between font-semibold text-slate-300 hover:text-white hover:bg-[#00223B] transition-colors"
                >
                  <span className="text-xs tracking-wide">{acc.title}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-4 pb-3 pt-1 text-slate-300 text-xs leading-relaxed border-t border-[#002B49]/60">
                    <p>{acc.content}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile App Promo Card (Matches Screenshot 5) */}
        <div className="mt-8 bg-gradient-to-r from-[#00243E] to-[#001726] border border-[#004A7F] rounded-xl p-5 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#004070] rounded-xl flex items-center justify-center text-[#FFB800] shrink-0 border border-sky-600/40">
              <Smartphone className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-wide">
                Mobilna aplikacija PSK (PSK Mobile App)
              </h3>
              <p className="text-xs text-slate-300 max-w-xl mt-1 leading-relaxed">
                Naša aplikacija omogućuje ti započeti igru u samo dva dodira! Brza je, jednostavna za korištenje i prepuna značajki za poboljšanje tvog igračkog iskustva uz Swipe & Bet.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <span className="px-3 py-2 bg-black/60 border border-slate-700 rounded-lg text-xs font-semibold text-white flex items-center gap-2 hover:border-slate-500 cursor-pointer">
              <span>App Store</span>
            </span>
            <span className="px-3 py-2 bg-black/60 border border-slate-700 rounded-lg text-xs font-semibold text-white flex items-center gap-2 hover:border-slate-500 cursor-pointer">
              <span>Google Play</span>
            </span>
            <span className="px-3 py-2 bg-[#003B64] border border-[#005A9E] rounded-lg text-xs font-semibold text-sky-200 flex items-center gap-1.5 hover:bg-[#004B80] cursor-pointer">
              <Download className="w-3.5 h-3.5" />
              <span>Android APK</span>
            </span>
          </div>
        </div>

        {/* Payment Methods Bar (Matches Screenshot 6) */}
        <div className="mt-8 pt-6 border-t border-[#002B49]">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
            <CreditCard className="w-3.5 h-3.5 text-slate-400" />
            <span>Payment Methods (Načini plaćanja)</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2">
            {paymentMethods.map((method) => (
              <div 
                key={method}
                className="bg-[#001E33] border border-[#003355] rounded-md py-2 px-3 text-center text-[11px] font-bold text-slate-300 shadow-sm"
              >
                {method}
              </div>
            ))}
          </div>
        </div>

        {/* Regulatory & License Disclosures (Matches Screenshot 6) */}
        <div className="mt-8 pt-6 border-t border-[#002B49] text-[11px] text-slate-400 leading-relaxed space-y-3">
          <p>
            Zakorači u svijet pravog sportskog uzbuđenja. Bez obzira jesi li iskusan tipster ili tek ulaziš u svijet sportskog klađenja, PSK ti donosi vrhunsku ponudu, tisuće događaja svakoga dana i tržišta prilagođena svakom stilu igre. Za sve koji vole brza i jednostavna rješenja tu je <strong>Swipe & Bet</strong> opcija koja omogućuje još intuitivnije i lakše kreiranje listića.
          </p>

          <p className="text-[10px] text-slate-400">
            © 2026 Hattrick-PSK d.o.o. Sva prava pridržana. Web stranica www.psk.hr i casino.psk.hr je u vlasništvu i njome upravlja Hattrick - PSK d.o.o., hrvatsko društvo sa sjedištem u Dugopolju, Sv. Leopolda Mandića 14, OIB: 92265244213. Hattrick - PSK d.o.o. ovlašteni je priređivač igara klađenja putem interneta temeljem odobrenja KLASA: UP/I-461-04/25-02/493, URBROJ: 513-07-21-01-12-2, Zagreb, 25. travnja 2026. Sudjelovanje u igrama na sreću dozvoljeno je samo osobama starijim od 18 godina. Igre na sreću mogu izazvati ovisnost. Igrajte odgovorno!
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-red-600 text-white font-bold text-[10px] flex items-center justify-center">
                18+
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <Shield className="w-3.5 h-3.5" />
                Odgovorno Igranje (EU RG Compliant)
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <span className="text-slate-300 font-semibold">🇭🇷 Hrvatski</span>
              <span>•</span>
              <span className="text-slate-400">Prva Sportska Kladionica - PSK.hr © 2026</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
