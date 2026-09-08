import React, { useState } from 'react';
import { ActiveView, SessionMetrics } from './types';
import { Navbar } from './components/Navbar';
import { PSKPrototype } from './components/PSKPrototype';
import { LiveDemoScenarios } from './components/LiveDemoScenarios';
import { BusinessImpactModel } from './components/BusinessImpactModel';
import { ComplianceOnePager } from './components/ComplianceOnePager';
import { PitchDeck } from './components/PitchDeck';

export default function App() {
  const [activeView, setActiveView] = useState<ActiveView>('prototype');
  const [metrics, setMetrics] = useState<SessionMetrics>({
    sessionDurationSec: 84,
    pagesViewed: 3,
    actionsCompleted: 1,
    sqiScore: 88,
    frictionPointsAvoided: 4,
    confidenceIndicator: 92,
    rgHealthStatus: 'Optimal',
  });

  return (
    <div className="min-h-screen bg-[#001726] text-slate-100 flex flex-col font-sans selection:bg-[#FFB800] selection:text-[#001D33]">
      {/* Top Navbar with FEG / PSK.hr branding and deliverable switchers */}
      <Navbar
        activeView={activeView}
        setActiveView={setActiveView}
        sqiScore={metrics.sqiScore}
      />

      {/* Main Deliverable Content Area */}
      <main className="flex-1">
        {activeView === 'prototype' && (
          <PSKPrototype metrics={metrics} setMetrics={setMetrics} />
        )}

        {activeView === 'demo' && (
          <LiveDemoScenarios />
        )}

        {activeView === 'impact' && (
          <BusinessImpactModel />
        )}

        {activeView === 'compliance' && (
          <ComplianceOnePager />
        )}

        {activeView === 'pitch' && (
          <PitchDeck />
        )}
      </main>

      {/* Persistent Footer with Hackathon Context */}
      <footer className="bg-[#00121F] border-t border-[#002B49] py-4 px-4 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-200">Fortuna Entertainment Group (FEG)</span>
            <span>•</span>
            <span>T-Hub Hyderabad Innovation Hackathon</span>
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <span>Challenge 01: Session Quality & Conversion</span>
            <span>•</span>
            <span className="text-emerald-400 font-semibold">Strict EU RG Compliant</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
