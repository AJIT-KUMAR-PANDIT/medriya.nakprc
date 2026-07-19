import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function ExpandedReminderWithCountdown() {
  const navigate = useNavigate();
  return (
    <>
<div>
  {/* Main Shell Mockup (Blurred Background) */}
  <div className="fixed inset-0 z-0 flex flex-col opacity-30 grayscale blur-sm pointer-events-none">
    <header className="flex justify-between items-center w-full px-margin-mobile py-2 max-w-7xl mx-auto bg-surface">
      <span className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary">MedRiya AI</span>
      <span className="material-symbols-outlined text-primary text-2xl">notifications</span>
    </header>
    <main className="flex-grow p-margin-mobile">
      <div className="grid grid-cols-2 gap-4">
        <div className="h-32 bg-surface-variant rounded-xl" />
        <div className="h-32 bg-surface-variant rounded-xl" />
        <div className="h-64 col-span-2 bg-surface-variant rounded-xl" />
      </div>
    </main>
  </div>
  {/* Scrim / Dimmer */}
  <div className="fixed inset-0 bg-on-background/40 backdrop-blur-[2px] z-10 transition-opacity duration-500" id="modalScrim" />
  {/* Medicine Reminder Modal (The Primary Canvas) */}
  <div className="relative z-20 w-full max-w-md mx-auto h-[795px] md:h-auto md:max-h-[850px] bg-surface rounded-t-[32px] md:rounded-[40px] shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-500">
    {/* Drag Handle (Visual Indicator for Mobile) */}
    <div className="w-12 h-1.5 bg-outline-variant/30 rounded-full mx-auto mt-4 mb-2" />
    {/* Header Status */}
    <div className="px-8 pt-4 pb-2 flex justify-between items-center h-16">
      <div className="flex items-center gap-2 text-primary">
        <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>alarm</span>
        <span className="font-label-lg text-label-lg tracking-widest uppercase">Reminder Now</span>
      </div>
      <div className="relative flex items-center justify-center">
        {/* Circular Progress Ring */}
        <svg className="w-12 h-12 -rotate-90" viewBox="0 0 48 48">
          <circle className="text-outline-variant/20" cx={24} cy={24} fill="transparent" r={20} stroke="currentColor" strokeWidth={3} />
          <circle className="text-primary" cx={24} cy={24} fill="transparent" r={20} stroke="currentColor" strokeDasharray="125.6" strokeDashoffset="31.4" strokeLinecap="round" strokeWidth={3} />
        </svg>
        {/* Countdown Text */}
        <div className="absolute flex flex-col items-end right-14 whitespace-nowrap">
          <span className="text-on-surface-variant font-label-md text-[10px] uppercase tracking-tighter">Due in</span>
          <span className="text-on-surface font-title-lg text-title-lg leading-none">00:15:24</span>
        </div>
      </div>
    </div>
    {/* Medicine Image Section (Asymmetric Modern Layout) */}
    <div className="px-margin-mobile mt-4 relative">
      <div className="relative group">
        <div className="absolute -inset-2 bg-primary/10 rounded-[48px] blur-2xl group-hover:bg-primary/20 transition-all duration-700" />
        <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[40px] overflow-hidden border-4 border-white shadow-xl float-animation">
          <img className="w-full h-full object-cover" data-alt="A professional medical studio photograph of a Crocin 650 tablet box and individual white pills on a clean, reflective clinical surface. The lighting is soft and bright, using a high-key modern corporate aesthetic with a palette of sterile whites and calming deep greens. Minimalist composition focuses on the clarity and reliability of the medicine." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3JAKYkqm2MaAj2pq0Yfvj4iSjskOwAlslXjtOnXTM0LBDLoqFuhFz7t5g0NTQ7qxS4QQQOEnFrjDnEAAx-F2adW8oFtdB08PaujcZ2KPL_HPDzhKGNE6T1u4GrTYGpwI5LaQ6Oe0P7kUpyw5GdXIcmBm_dB2pPEmuRZ7BOdm3KlkjGfPkHh2ZhI3RHwLMHILHBAOpAeMvq5205fL4iKqEdFGyvd3maTpDq7A_dbIadq3fJvceXxj-nQ" />
        </div>
        {/* Status Badge */}
        <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg flex items-center gap-2 border border-outline-variant/20">
          <span className="w-3 h-3 bg-primary rounded-full animate-pulse" />
          <span className="font-label-lg text-label-lg text-on-surface">Daily Routine</span>
        </div>
      </div>
    </div>
    {/* Info Section */}
    <div className="px-8 pt-8 flex-grow">
      <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-extrabold tracking-tight mb-2">Crocin 650</h1>
      <p className="text-on-surface-variant font-body-lg text-body-lg mb-6">Paracetamol for effective pain relief and fever management.</p>
      {/* Bento Details Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-surface-container-low p-4 rounded-3xl border border-outline-variant/10 flex flex-col gap-1">
          <span className="material-symbols-outlined text-primary mb-1">medication</span>
          <span className="text-on-surface-variant font-label-md text-label-md">Dose</span>
          <span className="text-on-surface font-title-lg text-title-lg">1 Tablet</span>
        </div>
        <div className="bg-surface-container-low p-4 rounded-3xl border border-outline-variant/10 flex flex-col gap-1">
          <span className="material-symbols-outlined text-primary mb-1">restaurant</span>
          <span className="text-on-surface-variant font-label-md text-label-md">Timing</span>
          <span className="text-on-surface font-title-lg text-title-lg">After Breakfast</span>
        </div>
      </div>
      {/* Warning/Note */}
      <div className="mt-6 flex gap-4 items-start p-4 bg-tertiary-fixed/30 rounded-2xl">
        <span className="material-symbols-outlined text-tertiary">info</span>
        <p className="text-on-surface-variant font-body-md text-body-md leading-tight">
          Do not exceed the recommended dose. Drink a full glass of water.
        </p>
      </div>
    </div>
    {/* Actions Cluster */}
    <div className="p-8 space-y-4 bg-gradient-to-t from-surface via-surface to-transparent">
      {/* Primary Action */}
      <button className="w-full bg-primary-container text-on-primary-container hover:bg-primary-container/90 active:scale-95 transition-all duration-150 py-5 rounded-[24px] flex items-center justify-center gap-3 shadow-lg shadow-primary/10" onclick="handleAction('taken')">
        <span className="material-symbols-outlined text-3xl">check_circle</span>
        <span className="font-title-lg text-title-lg">✔ Taken</span>
      </button>
      {/* Secondary Actions */}
      <div className="grid grid-cols-2 gap-4">
        <button className="bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest active:scale-95 transition-all duration-150 py-4 rounded-[24px] flex items-center justify-center gap-2" onclick="handleAction('snooze')">
          <span className="material-symbols-outlined">alarm_on</span>
          <span className="font-label-lg text-label-lg">⏰ Snooze</span>
        </button>
        <button className="bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest active:scale-95 transition-all duration-150 py-4 rounded-[24px] flex items-center justify-center gap-2" onclick="handleAction('skip')">
          <span className="material-symbols-outlined">cancel</span>
          <span className="font-label-lg text-label-lg">❌ Skip</span>
        </button>
      </div>
    </div>
  </div>
  {/* Shared Components Integration Mockup (Hidden on this transactional screen as per Mandate) */}
  <nav className="hidden">
    {/* BottomNavBar Logic would go here if this wasn't a focused task screen */}
  </nav>
</div>

    </>
  );
}
