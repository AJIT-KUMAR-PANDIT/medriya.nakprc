import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function LocalModeSettings() {
  const navigate = useNavigate();
  return (
    <>
<div>
  {/* TopAppBar */}
  <header className="fixed top-0 left-0 right-0 z-50 bg-surface dark:bg-on-background">
    <div className="flex justify-between items-center w-full px-margin-mobile py-2 max-w-7xl mx-auto h-16">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center overflow-hidden">
          <img className="w-full h-full object-cover" data-alt="A professional studio portrait of a friendly healthcare user, a middle-aged woman with a warm expression, wearing a neutral-toned casual outfit. The lighting is bright and high-key, emphasizing a clean and secure medical app environment. The background is a soft, out-of-focus modern clinic setting with hints of healthcare green accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuACTITN45JKptAnI6Kyho35cz7xKeVhpofkx8RfQfApMwLEDCoJEmMAWIxkuY4W50pdWVsjtVzxC9pxWyQADufefWL9floji961JyW0TEmMbX8y3jrmVhtCkKNPTzZOWKKtYLNMPE2insHIiid2Ou1TAuVcWH8Bw0kJXK9wvI5PpAAPofVevyyJ1kKnKZm2-QA9QokNTxfxdMCeKdfjDkJTdxjzIe0mqpZvjst-cXDuq8UnFRj15biO1g" />
        </div>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary dark:text-primary-fixed-dim">Local Mode &amp; Privacy</h1>
      </div>
      <button className="material-symbols-outlined text-on-surface-variant p-2 rounded-full hover:bg-surface-container-low transition-colors active:scale-95 duration-150">
        notifications
      </button>
    </div>
  </header>
  {/* Main Content */}
  <main className="flex-1 mt-16 mb-24 px-margin-mobile py-stack-lg max-w-2xl mx-auto w-full">
    {/* Section: On-Device AI */}
    <section className="mb-stack-lg">
      <h2 className="font-label-lg text-label-lg text-primary uppercase tracking-wider mb-stack-md ml-1">On-Device AI</h2>
      <div className="bg-surface-container-low rounded-xl p-4 shadow-sm border border-outline-variant/30">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-[28px]">neurology</span>
            </div>
            <div>
              <p className="font-title-lg text-title-lg text-on-surface">Gemini Nano</p>
              <p className="font-label-md text-label-md text-on-surface-variant">Version 1.2 • Installed</p>
            </div>
          </div>
          <span className="px-2 py-1 bg-secondary-container text-on-secondary-container font-label-md text-label-md rounded-full">Offline Ready</span>
        </div>
        <hr className="border-outline-variant/20 my-4" />
        <div className="flex items-center justify-between py-2">
          <div className="flex-1">
            <p className="font-body-lg text-body-lg text-on-surface">Voice-to-Text Processing</p>
            <p className="font-body-md text-body-md text-on-surface-variant">Analyze medical notes locally</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input defaultChecked className="sr-only peer custom-toggle" type="checkbox" />
            <div className="w-11 h-6 bg-surface-container-highest rounded-full peer-checked:bg-primary transition-colors" />
            <div className="absolute left-1 top-1 w-4 h-4 bg-on-surface-variant rounded-full transition-transform peer-checked:translate-x-5 peer-checked:bg-white" />
          </label>
        </div>
        <button className="mt-4 w-full h-12 bg-secondary-container text-on-secondary-container rounded-full font-label-lg text-label-lg flex items-center justify-center gap-2 hover:bg-surface-variant transition-all active:scale-95">
          <span className="material-symbols-outlined text-[20px]">sync</span>
          Check for Model Updates
        </button>
      </div>
    </section>
    {/* Section: Local Storage */}
    <section className="mb-stack-lg">
      <h2 className="font-label-lg text-label-lg text-primary uppercase tracking-wider mb-stack-md ml-1">Local Storage</h2>
      <div className="bg-surface-container-low rounded-xl p-4 shadow-sm border border-outline-variant/30">
        <div className="mb-6">
          <div className="flex justify-between items-end mb-2">
            <p className="font-title-lg text-title-lg text-on-surface">Device Capacity</p>
            <p className="font-label-md text-label-md text-on-surface-variant">1.4 GB used of 10 GB allocated</p>
          </div>
          {/* Visual Storage Bar */}
          <div className="h-3 w-full bg-surface-container-highest rounded-full flex overflow-hidden">
            <div className="h-full bg-primary" style={{width: '45%'}} title="Medicine Images" />
            <div className="h-full bg-secondary" style={{width: '25%'}} title="Chat History" />
            <div className="h-full bg-tertiary-container" style={{width: '15%'}} title="Health Records" />
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-primary" />
              <span className="font-label-md text-label-md text-on-surface-variant">Meds (630MB)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-secondary" />
              <span className="font-label-md text-label-md text-on-surface-variant">Chats (350MB)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-tertiary-container" />
              <span className="font-label-md text-label-md text-on-surface-variant">Records (210MB)</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button className="h-12 border border-outline text-primary rounded-xl font-label-lg text-label-lg flex items-center justify-center gap-2 hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined text-[18px]">delete_sweep</span>
            Clear Cache
          </button>
          <button className="h-12 border border-outline text-primary rounded-xl font-label-lg text-label-lg flex items-center justify-center gap-2 hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined text-[18px]">database</span>
            Export SQLite
          </button>
        </div>
        <button className="mt-3 w-full h-12 bg-primary text-on-primary rounded-full font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all">
          <span className="material-symbols-outlined text-[20px]">backup</span>
          Manual Local Backup
        </button>
      </div>
    </section>
    {/* Section: Offline Connectivity */}
    <section className="mb-stack-lg">
      <h2 className="font-label-lg text-label-lg text-primary uppercase tracking-wider mb-stack-md ml-1">Offline Connectivity</h2>
      <div className="bg-surface-container-low rounded-xl p-4 shadow-sm border border-outline-variant/30">
        <div className="flex items-center justify-between py-2 mb-4">
          <div className="flex-1">
            <p className="font-title-lg text-title-lg text-on-surface">Force Offline Mode</p>
            <p className="font-body-md text-body-md text-on-surface-variant">Disable all external network calls</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input className="sr-only peer custom-toggle" type="checkbox" />
            <div className="w-11 h-6 bg-surface-container-highest rounded-full peer-checked:bg-primary transition-colors" />
            <div className="absolute left-1 top-1 w-4 h-4 bg-on-surface-variant rounded-full transition-transform peer-checked:translate-x-5 peer-checked:bg-white" />
          </label>
        </div>
        <div className="p-4 bg-secondary-fixed/30 rounded-lg border border-secondary-fixed-dim/50">
          <div className="flex gap-3">
            <span className="material-symbols-outlined text-secondary">hub</span>
            <div>
              <p className="font-label-lg text-label-lg text-on-secondary-fixed">Local Network Sync</p>
              <p className="font-body-md text-body-md text-on-secondary-fixed-variant">Family members on your Wi-Fi can receive critical medication alerts without cloud connection.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Section: Security */}
    <section className="mb-stack-lg">
      <h2 className="font-label-lg text-label-lg text-primary uppercase tracking-wider mb-stack-md ml-1">Security</h2>
      <div className="bg-surface-container-low rounded-xl overflow-hidden shadow-sm border border-outline-variant/30">
        <div className="divide-y divide-outline-variant/20">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-on-surface-variant">fingerprint</span>
              <p className="font-body-lg text-body-lg text-on-surface">Biometric Lock</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input defaultChecked className="sr-only peer custom-toggle" type="checkbox" />
              <div className="w-11 h-6 bg-surface-container-highest rounded-full peer-checked:bg-primary transition-colors" />
              <div className="absolute left-1 top-1 w-4 h-4 bg-on-surface-variant rounded-full transition-transform peer-checked:translate-x-5 peer-checked:bg-white" />
            </label>
          </div>
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-on-surface-variant">history_toggle_off</span>
              <p className="font-body-lg text-body-lg text-on-surface">Auto-Delete History</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input className="sr-only peer custom-toggle" type="checkbox" />
              <div className="w-11 h-6 bg-surface-container-highest rounded-full peer-checked:bg-primary transition-colors" />
              <div className="absolute left-1 top-1 w-4 h-4 bg-on-surface-variant rounded-full transition-transform peer-checked:translate-x-5 peer-checked:bg-white" />
            </label>
          </div>
        </div>
      </div>
    </section>
    {/* Bottom Warning (Atmospheric) */}
    <div className="flex flex-col items-center text-center gap-2 opacity-60 px-4">
      <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: '"FILL" 1'}}>shield_with_heart</span>
      <p className="font-label-md text-label-md text-on-surface-variant">MedRiya AI uses military-grade local encryption. Your data never leaves your device while Local Mode is active.</p>
    </div>
  </main>
  {/* BottomNavBar */}
  <nav className="fixed bottom-0 left-0 w-full z-50 bg-surface-container dark:bg-surface-container-highest flex justify-around items-center px-base pb-4 pt-3 rounded-t-xl shadow-lg dark:shadow-none">
    <button className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-5 py-1 hover:bg-surface-variant dark:hover:bg-inverse-surface transition-all active:scale-90 duration-200">
      <span className="material-symbols-outlined">home</span>
      <span className="font-label-md text-label-md">Home</span>
    </button>
    <button className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-5 py-1 hover:bg-surface-variant dark:hover:bg-inverse-surface transition-all active:scale-90 duration-200">
      <span className="material-symbols-outlined">pill</span>
      <span className="font-label-md text-label-md">Medicines</span>
    </button>
    <button className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-5 py-1 hover:bg-surface-variant dark:hover:bg-inverse-surface transition-all active:scale-90 duration-200">
      <span className="material-symbols-outlined">emergency_recording</span>
      <span className="font-label-md text-label-md">Chat</span>
    </button>
    <button className="flex flex-col items-center justify-center bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary rounded-full px-5 py-1 transition-all active:scale-90 duration-200">
      <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>person</span>
      <span className="font-label-md text-label-md">Profile</span>
    </button>
  </nav>
</div>

    </>
  );
}
