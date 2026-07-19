import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function MissedDoseGuidance() {
  const navigate = useNavigate();
  return (
    <>
<div>
  {/* TopAppBar */}
  <header className="bg-surface dark:bg-on-background sticky top-0 z-50 shadow-sm md:shadow-none">
    <div className="flex justify-between items-center w-full px-margin-mobile py-4 max-w-7xl mx-auto">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-high border border-outline-variant">
          <img className="w-full h-full object-cover" data-alt="A clean professional headshot of a smiling middle-aged male doctor wearing a white coat and a stethoscope. The background is a soft, blurred medical office with warm lighting and a neutral color palette. The image conveys trust, expertise, and a friendly modern healthcare aesthetic consistent with high-end corporate medical applications." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNjlAqp5z2y-QlVCP4Y7PvgOs0GYhu8s03SxfO84zY8qV1q3Eo4t2blHb1Mlqc68Ud4r3ZpAfZlvLJZAoK5DJGURMKR47esj2se_WqbCeMRvhHdGVUjgg1E5NqmRp3_zsiumKJK-zx9xmCoiHQXDy-r0y6IBV7BCsi-53Tliipy8LODkTEGXvG4lNvb6PuA_P6OrZXj_efmR7F-eoW-lH96vki4wR3TeaMxGaLuqnBIabjT4mu5iZbpQ" />
        </div>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary dark:text-primary-fixed-dim">MedRiya AI</h1>
      </div>
      <button className="w-12 h-12 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-low transition-colors active:scale-95 duration-150">
        <span className="material-symbols-outlined">notifications</span>
      </button>
    </div>
  </header>
  {/* Main Content: Chat Layout */}
  <main className="flex-grow w-full max-w-2xl mx-auto px-margin-mobile pt-stack-lg pb-32 space-y-stack-lg">
    {/* User Message */}
    <div className="flex justify-end animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="bg-primary-container text-on-primary-container px-4 py-3 rounded-2xl chat-bubble-user max-w-[85%] shadow-sm">
        <p className="font-body-lg text-body-lg">I forgot my medicine.</p>
      </div>
    </div>
    {/* AI Assistant Response */}
    <div className="flex flex-col gap-stack-md animate-in fade-in slide-in-from-left-4 duration-700 delay-200">
      {/* AI Identity Tag */}
      <div className="flex items-center gap-2 ml-2">
        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
          <span className="material-symbols-outlined text-[14px] text-on-primary" style={{fontVariationSettings: '"FILL" 1'}}>emergency_recording</span>
        </div>
        <span className="font-label-md text-label-md text-on-surface-variant">MedRiya AI</span>
      </div>
      {/* AI Message Bubble */}
      <div className="bg-white border border-outline-variant p-5 rounded-2xl chat-bubble-ai space-y-4 shadow-sm">
        <p className="font-body-lg text-body-lg text-on-surface">
          According to your schedule, you missed your <span className="font-bold text-primary">Metformin 500mg</span> dose at 8 AM.
        </p>
        <div className="bg-error-container/20 border-l-4 border-error p-3 rounded-r-lg">
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed italic">
            Medication advice depends on your treatment plan. Please follow your doctor's instructions. If unsure, contact your provider.
          </p>
        </div>
        {/* Guidance Specialized Card (Bento Style) */}
        <div className="grid grid-cols-1 gap-3 pt-2">
          <div className="bg-surface-container-low border border-outline-variant p-4 rounded-xl flex items-start gap-4">
            <div className="bg-secondary-container p-2 rounded-lg">
              <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: '"FILL" 1'}}>pill</span>
            </div>
            <div>
              <h3 className="font-label-lg text-label-lg text-primary">Metformin 500mg</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Standard instructions: Take with food. Do not double dose if missed.</p>
            </div>
          </div>
        </div>
        {/* Action Buttons Cluster */}
        <div className="flex flex-wrap gap-2 pt-2">
          <button className="flex-1 min-h-[48px] px-4 py-2 bg-primary text-on-primary rounded-full font-label-lg text-label-lg flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all shadow-md">
            <span className="material-symbols-outlined text-[18px]">check_circle</span>
            I Took It Now
          </button>
          <button className="flex-1 min-h-[48px] px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full font-label-lg text-label-lg flex items-center justify-center gap-2 hover:bg-secondary-container/80 active:scale-95 transition-all">
            <span className="material-symbols-outlined text-[18px]">description</span>
            View Instructions
          </button>
          <button className="w-full min-h-[48px] px-4 py-2 border-2 border-error text-error rounded-full font-label-lg text-label-lg flex items-center justify-center gap-2 hover:bg-error/5 active:scale-95 transition-all">
            <span className="material-symbols-outlined text-[18px]">call</span>
            Call Doctor
          </button>
        </div>
      </div>
    </div>
    {/* Atmospheric Visual Context (Secondary Bento) */}
    <div className="grid grid-cols-2 gap-4 mt-8 opacity-90">
      <div className="bg-white border border-outline-variant rounded-2xl p-4 flex flex-col justify-between h-32 relative overflow-hidden group">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-primary to-transparent" />
        <span className="font-label-md text-label-md text-on-surface-variant z-10">Last Recorded</span>
        <div className="z-10">
          <p className="font-title-lg text-title-lg text-primary">Yesterday</p>
          <p className="font-body-md text-body-md">8:05 PM</p>
        </div>
        <span className="material-symbols-outlined absolute -right-2 -bottom-2 text-primary opacity-5 text-7xl">history</span>
      </div>
      <div className="bg-white border border-outline-variant rounded-2xl p-4 flex flex-col justify-between h-32 relative overflow-hidden group">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-tertiary to-transparent" />
        <span className="font-label-md text-label-md text-on-surface-variant z-10">Compliance</span>
        <div className="z-10">
          <p className="font-title-lg text-title-lg text-tertiary">92%</p>
          <p className="font-body-md text-body-md">Weekly average</p>
        </div>
        <span className="material-symbols-outlined absolute -right-2 -bottom-2 text-tertiary opacity-5 text-7xl">trending_up</span>
      </div>
    </div>
  </main>
  {/* Bottom Navigation Shell */}
  <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-base pb-6 pt-3 bg-surface-container dark:bg-surface-container-highest rounded-t-2xl shadow-[0_-4px_24px_rgba(0,0,0,0.06)]">
    <a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-5 py-1 hover:bg-surface-variant transition-all active:scale-90 duration-200" href="#">
      <span className="material-symbols-outlined mb-1">home</span>
      <span className="font-label-md text-label-md">Home</span>
    </a>
    <a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-5 py-1 hover:bg-surface-variant transition-all active:scale-90 duration-200" href="#">
      <span className="material-symbols-outlined mb-1">pill</span>
      <span className="font-label-md text-label-md">Medicines</span>
    </a>
    <a className="flex flex-col items-center justify-center bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary rounded-full px-6 py-1 active:scale-90 duration-200" href="#">
      <span className="material-symbols-outlined mb-1" style={{fontVariationSettings: '"FILL" 1'}}>emergency_recording</span>
      <span className="font-label-md text-label-md">Chat</span>
    </a>
    <a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-5 py-1 hover:bg-surface-variant transition-all active:scale-90 duration-200" href="#">
      <span className="material-symbols-outlined mb-1">person</span>
      <span className="font-label-md text-label-md">Profile</span>
    </a>
  </nav>
  {/* Chat Input Floating Field */}
  <div className="fixed bottom-24 left-0 w-full px-margin-mobile pointer-events-none">
    <div className="max-w-2xl mx-auto pointer-events-auto">
      <div className="relative flex items-center bg-white border border-outline-variant rounded-full p-2 shadow-lg focus-within:ring-2 focus-within:ring-primary/20 transition-all">
        <button className="w-10 h-10 flex items-center justify-center text-outline hover:text-primary transition-colors">
          <span className="material-symbols-outlined">add</span>
        </button>
        <input className="flex-grow bg-transparent border-none focus:ring-0 px-2 font-body-md text-body-md text-on-surface" placeholder="Ask MedRiya AI anything..." type="text" />
        <button className="w-10 h-10 flex items-center justify-center bg-primary text-on-primary rounded-full active:scale-90 transition-transform">
          <span className="material-symbols-outlined">arrow_upward</span>
        </button>
      </div>
    </div>
  </div>
</div>

    </>
  );
}
