import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function EmergencyMode() {
  const navigate = useNavigate();
  return (
    <>
<div>
  {/* Top Bar */}
  <header className="bg-surface sticky top-0 z-50 flex justify-between items-center w-full px-margin-mobile py-4 max-w-7xl mx-auto">
    <div className="flex items-center gap-3">
      <button className="p-2 rounded-full hover:bg-surface-container-low transition-colors active:scale-95 duration-150">
        <span className="material-symbols-outlined text-on-surface">close</span>
      </button>
      <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-error">EMERGENCY</h1>
    </div>
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden">
        <img className="w-full h-full object-cover" data-alt="A clean, professional headshot of a user for a medical application profile. The lighting is bright and clinical, emphasizing a trustworthy and secure healthcare environment. The style is modern corporate, matching the MedRiya AI brand identity with soft shadows and a high-key background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrupcoUTGMHznqDvf1YKkoupSOixrCEUZZ1m0F8k2lOjkng6afRJK3VXes0jO3qt9yirFmuwMVxRrpaRHCWozAcv7E6kB6uzROdkuN7V3lfKRQXOMX6-uYp-ZaFDioLelcBnD0cXeks3Y_27bCUSrNcBvr16ko9wZ7Slw4YXCkHE-oo9DdkmG9WmQ2RZ4oBkR7m7TmVc9wnomMiNnKxBOTDNyihexN7PRD7qWeSentlC9oQqOww5N-PQ" />
      </div>
    </div>
  </header>
  <main className="px-margin-mobile pt-4 space-y-6 max-w-lg mx-auto">
    {/* SOS Section */}
    <section className="flex flex-col items-center justify-center py-8">
      <button className="animate-sos w-48 h-48 rounded-full bg-error text-on-error flex flex-col items-center justify-center shadow-2xl active:scale-90 transition-transform duration-200" id="sos-btn">
        <span className="material-symbols-outlined text-[64px]" style={{fontVariationSettings: '"FILL" 1'}}>emergency_recording</span>
        <span className="font-display-lg text-[40px] font-bold tracking-tighter">SOS</span>
      </button>
      <p className="mt-stack-lg text-center font-label-lg text-error font-bold">HOLD FOR 3 SECONDS TO ALERT SERVICES</p>
    </section>
    {/* Emergency Contact Card */}
    <section className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border-l-4 border-error">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="font-label-md text-on-surface-variant uppercase tracking-wider">Emergency Contact</h2>
          <p className="font-title-lg text-title-lg text-on-surface font-bold mt-1">Sarah Doe</p>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Spouse • 555-0123</p>
        </div>
        <div className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full text-xs font-bold">PRIMARY</div>
      </div>
      <button className="w-full h-14 bg-primary text-on-primary rounded-xl flex items-center justify-center gap-3 font-title-lg hover:opacity-90 active:scale-95 transition-all">
        <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>call</span>
        CALL NOW
      </button>
    </section>
    {/* Medical ID Highlight Bento */}
    <section className="grid grid-cols-2 gap-4">
      <div className="bg-error-container text-on-error-container p-5 rounded-xl flex flex-col justify-between">
        <span className="material-symbols-outlined text-error mb-2">bloodtype</span>
        <div>
          <h3 className="font-label-md uppercase opacity-70">Blood Group</h3>
          <p className="text-headline-lg-mobile font-extrabold">O+</p>
        </div>
      </div>
      <div className="bg-surface-container-high p-5 rounded-xl border border-outline-variant flex flex-col justify-between">
        <span className="material-symbols-outlined text-error mb-2">warning</span>
        <div>
          <h3 className="font-label-md uppercase text-on-surface-variant">Allergy</h3>
          <p className="text-headline-lg-mobile font-extrabold text-error">Penicillin</p>
        </div>
      </div>
      <div className="col-span-2 bg-inverse-surface text-inverse-on-surface p-5 rounded-xl flex items-center justify-between">
        <div className="flex flex-col">
          <h3 className="font-label-md uppercase opacity-80">Conditions</h3>
          <p className="font-body-lg font-bold">Asthmatic, Type 2 Diabetes</p>
        </div>
        <span className="material-symbols-outlined">info</span>
      </div>
    </section>
    {/* Action Grid */}
    <section className="space-y-4">
      <button className="w-full p-6 bg-surface-container-highest rounded-2xl flex items-center gap-4 hover:bg-surface-dim transition-colors active:scale-[0.98]" id="voice-note">
        <div className="w-12 h-12 rounded-full bg-error flex items-center justify-center text-on-error">
          <span className="material-symbols-outlined">mic</span>
        </div>
        <div className="text-left">
          <p className="font-title-lg font-bold">Record Voice Note</p>
          <p className="font-body-md text-on-surface-variant">Message for first responders</p>
        </div>
      </button>
      <button className="w-full p-6 bg-surface-container rounded-2xl flex items-center gap-4 hover:bg-surface-container-high transition-colors active:scale-[0.98]">
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary">
          <span className="material-symbols-outlined">location_on</span>
        </div>
        <div className="text-left">
          <p className="font-title-lg font-bold">Share Location</p>
          <p className="font-body-md text-on-surface-variant">Send live GPS to contacts</p>
        </div>
      </button>
    </section>
    {/* Offline Badge */}
    <div className="flex justify-center py-4">
      <div className="flex items-center gap-2 text-on-surface-variant px-4 py-2 bg-surface-container-low rounded-full border border-outline-variant">
        <span className="material-symbols-outlined text-sm">wifi_off</span>
        <span className="font-label-md">LOCAL MODE ACTIVE (OFFLINE)</span>
      </div>
    </div>
  </main>
  {/* Bottom Navigation Shell (Re-using BottomNavBar logic from JSON) */}
  <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-base pb-6 pt-3 bg-surface-container-highest shadow-lg rounded-t-xl md:hidden">
    <a className="flex flex-col items-center justify-center text-on-surface-variant px-5 py-1" href="#">
      <span className="material-symbols-outlined">home</span>
      <span className="font-label-md text-label-md mt-1">Home</span>
    </a>
    <a className="flex flex-col items-center justify-center text-on-surface-variant px-5 py-1" href="#">
      <span className="material-symbols-outlined">pill</span>
      <span className="font-label-md text-label-md mt-1">Medicines</span>
    </a>
    {/* Active Tab: Chat/Emergency */}
    <a className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-5 py-1" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>emergency_recording</span>
      <span className="font-label-md text-label-md mt-1">Chat</span>
    </a>
    <a className="flex flex-col items-center justify-center text-on-surface-variant px-5 py-1" href="#">
      <span className="material-symbols-outlined">person</span>
      <span className="font-label-md text-label-md mt-1">Profile</span>
    </a>
  </nav>
</div>

    </>
  );
}
