import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function MedicineReminderNotification() {
  const navigate = useNavigate();
  return (
    <>
<div>
  {/* Lock Screen Background Mockup */}
  <div className="fixed inset-0 z-0 overflow-hidden">
    <div className="w-full h-full bg-cover bg-center scale-110" data-alt="A serene and beautiful high-definition nature photograph featuring a misty mountain range at dawn. The lighting is soft and ethereal with cool blue and warm gold tones, creating a tranquil atmosphere suitable for a premium mobile device lock screen. The aesthetic is clean, professional, and sophisticated, matching a modern corporate and healthcare-oriented design system." style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCgS4Z3FiwEaCLlLzSyL1aDIvwScU3cg2nhfEDt4lUo_Q4xcEivZ08a5nJO-wfAsx8j2lwU1vO-CfBx6TGTgJlcc132mvRPxvUKBVAEBKvkiDuhUKQ6ZEc_Jg80mzoDrJJVlwpB4E-Jq6tpH_oD0pxJZA16NZX6j8mL6sM2HVlVH7QeEJL3gaas04xYPdfud0IBpEjbWAmFT2ZBnWsJEvkHDr56TKK6KGRBZZUAYybwnblRWFIJHvFFww")'}} />
    <div className="absolute inset-0 bg-black/10" />
  </div>
  {/* Status Bar Mockup */}
  <div className="relative z-20 w-full max-w-md px-6 pt-4 flex justify-between items-center text-white">
    <span className="font-label-lg text-label-lg">9:41</span>
    <div className="flex gap-2">
      <span className="material-symbols-outlined text-[18px]">signal_cellular_4_bar</span>
      <span className="material-symbols-outlined text-[18px]">wifi</span>
      <span className="material-symbols-outlined text-[18px]">battery_full</span>
    </div>
  </div>
  {/* Notification Container */}
  <main className="relative z-10 w-full max-w-md px-4 pt-4">
    {/* The Medicine Notification */}
    <div className="animate-notification bg-surface-container/90 notification-blur rounded-[28px] p-4 shadow-lg border border-white/10 transition-all active:scale-[0.98]">
      {/* App Header Info */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[16px]" data-icon="pill">pill</span>
          </div>
          <span className="font-label-md text-label-md text-on-surface-variant tracking-wider">MEDRIYA AI • NOW</span>
        </div>
        <span className="material-symbols-outlined text-on-surface-variant text-[20px]">keyboard_arrow_down</span>
      </div>
      {/* Main Content */}
      <div className="px-1">
        <h2 className="font-title-lg text-title-lg text-on-surface mb-0.5">💊 Time to take your medicine</h2>
        <h3 className="font-body-lg text-body-lg text-on-surface font-semibold">Crocin 650</h3>
        <p className="font-body-md text-body-md text-on-surface-variant mt-1">Take one tablet after breakfast.</p>
      </div>
      {/* Quick Action Buttons */}
      <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
        {/* Taken Button */}
        <button className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 bg-secondary-container text-on-secondary-container rounded-xl font-label-lg text-label-lg hover:bg-secondary-fixed transition-colors active:scale-95 duration-150">
          <span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: '"FILL" 1'}}>check_circle</span>
          <span>Taken</span>
        </button>
        {/* Snooze Button */}
        <button className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 bg-surface-container-high text-on-surface rounded-xl font-label-lg text-label-lg hover:bg-surface-variant transition-colors active:scale-95 duration-150">
          <span className="material-symbols-outlined text-[18px]">alarm</span>
          <span>Snooze</span>
        </button>
        {/* Skip Button */}
        <button className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 bg-surface-container-high text-on-surface rounded-xl font-label-lg text-label-lg hover:bg-surface-variant transition-colors active:scale-95 duration-150">
          <span className="material-symbols-outlined text-[18px]">cancel</span>
          <span>Skip</span>
        </button>
      </div>
    </div>
    {/* Decorative Screen Content (Clock) */}
    <div className="mt-24 text-center text-white drop-shadow-md">
      <h1 className="text-[80px] font-thin leading-none">09:41</h1>
      <p className="font-title-lg text-title-lg mt-2">Tuesday, October 24</p>
    </div>
  </main>
  {/* Navigation Bar (Hidden per context rule, but defined in JSON) */}
  {/* We suppress the BottomNavBar because this is a "Lock Screen/Focused Notification" context */}
  {/* Feedback Interaction Script */}
</div>

    </>
  );
}
