import React, { useState } from 'react';
import { ActiveView } from '../types';
import { 
  Compass, 
  PlayCircle, 
  TrendingUp, 
  ShieldCheck, 
  Presentation, 
  ExternalLink,
  Sparkles,
  Layers,
  Globe2,
  ChevronDown,
  Download,
  FolderGit2
} from 'lucide-react';
import { STAGE_CREDENTIALS_INFO, FEG_CORPORATE_PROFILE } from '../data/mockData';

interface NavbarProps {
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
  sqiScore: number;
}

export const Navbar: React.FC<NavbarProps> = ({ activeView, setActiveView, sqiScore }) => {
  const [selectedMarketId, setSelectedMarketId] = useState<string>('hr');
  const [isMarketDropdownOpen, setIsMarketDropdownOpen] = useState<boolean>(false);

  const currentMarket = FEG_CORPORATE_PROFILE.markets.find((m) => m.id === selectedMarketId) || FEG_CORPORATE_PROFILE.markets[0];

  return (
    <header className="sticky top-0 z-50 bg-[#001D33] border-b border-[#003B64] text-white">
      {/* Top Bar with Brand & Stage Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="bg-[#FFB800] text-[#001D33] font-black px-2 py-0.5 rounded tracking-wider text-sm">
              PSK
            </span>
            <span className="font-semibold text-slate-200 tracking-wide text-sm hidden sm:inline">
              FORTUNA ENTERTAINMENT GROUP
            </span>
          </div>
          <span className="text-slate-500">|</span>
          <div className="flex items-center gap-1.5 bg-[#002D4E] text-sky-300 px-2.5 py-1 rounded-full border border-sky-800/40">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium">FEG India Hackathon: Challenge 01</span>
          </div>

          {/* 5-Market Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsMarketDropdownOpen(!isMarketDropdownOpen)}
              className="flex items-center gap-1.5 bg-[#002845] hover:bg-[#00355c] px-2.5 py-1 rounded border border-sky-700/50 text-slate-200 transition-colors"
              title="FEG Operating Markets in CEE"
            >
              <Globe2 className="w-3.5 h-3.5 text-amber-400" />
              <span>{currentMarket.flag} {currentMarket.country} ({currentMarket.brand.split(' ')[0]})</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {isMarketDropdownOpen && (
              <div className="absolute left-0 mt-1.5 w-64 bg-[#001f36] border border-[#004a7f] rounded-xl shadow-2xl p-2 z-50">
                <div className="text-[10px] font-bold text-amber-400 uppercase tracking-wider px-2 py-1 border-b border-[#00355c] mb-1">
                  FEG 5 Operating Markets
                </div>
                {FEG_CORPORATE_PROFILE.markets.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => {
                      setSelectedMarketId(m.id);
                      setIsMarketDropdownOpen(false);
                    }}
                    className={`w-full text-left px-2.5 py-1.5 rounded-lg flex items-center justify-between text-xs transition-colors ${
                      selectedMarketId === m.id ? 'bg-[#004a7f] text-white font-bold' : 'text-slate-300 hover:bg-[#002d4e]'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{m.flag}</span>
                      <span>{m.country}</span>
                    </span>
                    <span className="text-[10px] text-amber-300 font-mono">{m.monthlySessions}/mo</span>
                  </button>
                ))}
                <div className="mt-1 pt-1.5 border-t border-[#00355c] text-[10px] text-slate-400 px-2">
                  <a href="https://www.feg.eu" target="_blank" rel="noreferrer" className="text-sky-300 hover:underline flex items-center gap-1">
                    <span>www.feg.eu (6,000+ employees)</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Stage Environment Badge */}
          <div className="hidden md:flex items-center gap-2 bg-[#002D4E] px-3 py-1 rounded border border-[#004A7F]">
            <span className="text-slate-400">Stage:</span>
            <a 
              href={STAGE_CREDENTIALS_INFO.stageUrl} 
              target="_blank" 
              rel="noreferrer"
              className="text-amber-400 hover:text-amber-300 font-mono flex items-center gap-1 transition-colors"
              title="Open Stage Environment"
            >
              {STAGE_CREDENTIALS_INFO.exampleUser}
              <ExternalLink className="w-3 h-3 inline" />
            </a>
          </div>

          {/* Real-Time Session Quality Index Indicator */}
          <div className="flex items-center gap-2 bg-gradient-to-r from-emerald-950/70 to-teal-950/70 border border-emerald-600/40 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-slate-300 font-medium">Session Quality:</span>
            <span className="text-emerald-400 font-bold font-mono">{sqiScore}/100</span>
            <span className="text-[10px] bg-emerald-800/50 text-emerald-200 px-1.5 py-0.2 rounded font-semibold">
              High
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Tabs corresponding to Hackathon Deliverables D1, D2, D3, D4 & Pitch Deck */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav className="flex space-x-1 sm:space-x-2 overflow-x-auto py-1.5 scrollbar-none" aria-label="Deliverable Views">
          <button
            id="nav-tab-prototype"
            onClick={() => setActiveView('prototype')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
              activeView === 'prototype'
                ? 'bg-[#005088] text-white shadow-sm ring-1 ring-[#0074C4]'
                : 'text-slate-300 hover:text-white hover:bg-[#002D4E]'
            }`}
          >
            <Compass className="w-4 h-4 text-[#FFB800]" />
            <span>D1: Working Prototype</span>
            <span className="text-[10px] bg-[#001D33] px-1.5 py-0.5 rounded text-slate-300">PSK.hr Sandbox</span>
          </button>

          <button
            id="nav-tab-demo"
            onClick={() => setActiveView('demo')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
              activeView === 'demo'
                ? 'bg-[#005088] text-white shadow-sm ring-1 ring-[#0074C4]'
                : 'text-slate-300 hover:text-white hover:bg-[#002D4E]'
            }`}
          >
            <PlayCircle className="w-4 h-4 text-emerald-400" />
            <span>D2: Live Demo Scenarios</span>
            <span className="text-[10px] bg-[#001D33] px-1.5 py-0.5 rounded text-emerald-300">15-Min Script</span>
          </button>

          <button
            id="nav-tab-impact"
            onClick={() => setActiveView('impact')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
              activeView === 'impact'
                ? 'bg-[#005088] text-white shadow-sm ring-1 ring-[#0074C4]'
                : 'text-slate-300 hover:text-white hover:bg-[#002D4E]'
            }`}
          >
            <TrendingUp className="w-4 h-4 text-sky-400" />
            <span>D3: Business Impact Case</span>
          </button>

          <button
            id="nav-tab-compliance"
            onClick={() => setActiveView('compliance')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
              activeView === 'compliance'
                ? 'bg-[#005088] text-white shadow-sm ring-1 ring-[#0074C4]'
                : 'text-slate-300 hover:text-white hover:bg-[#002D4E]'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            <span>D4: EU Compliance Note</span>
            <span className="text-[10px] bg-[#001D33] px-1.5 py-0.5 rounded text-teal-300">RG Audit</span>
          </button>

          <button
            id="nav-tab-pitch"
            onClick={() => setActiveView('pitch')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
              activeView === 'pitch'
                ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 font-bold shadow-sm'
                : 'text-amber-300 hover:text-white hover:bg-[#002D4E]'
            }`}
          >
            <Presentation className="w-4 h-4 text-slate-900" />
            <span>Jury Pitch Deck</span>
            <span className="text-[10px] bg-slate-900 text-amber-300 px-1.5 py-0.5 rounded font-bold">
              T-Hub Stage
            </span>
          </button>

          {/* Direct Download Repository Archive */}
          <button
            type="button"
            onClick={async () => {
              try {
                const res = await fetch('/feg-claritycore-submission.tar.gz');
                if (!res.ok) throw new Error('Fetch failed');
                const blob = await res.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'feg-claritycore-submission.tar.gz';
                document.body.appendChild(a);
                a.click();
                setTimeout(() => {
                  window.URL.revokeObjectURL(url);
                  document.body.removeChild(a);
                }, 1000);
              } catch {
                window.open('/feg-claritycore-submission.tar.gz', '_blank');
              }
            }}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-emerald-300 hover:text-white bg-emerald-950/60 hover:bg-emerald-900 border border-emerald-500/40 whitespace-nowrap ml-auto transition-all cursor-pointer shadow-sm"
            title="Download full project repository archive for submission"
          >
            <Download className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">Download Repo</span> (.tar.gz)
          </button>
        </nav>
      </div>
    </header>
  );
};
