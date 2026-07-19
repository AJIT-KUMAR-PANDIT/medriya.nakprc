import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AdherenceReports() {
  const navigate = useNavigate();
  return (
    <>
<div>
  {/* Top AppBar (Injected Styles Applied) */}
  <header className="bg-surface sticky top-0 z-50 flex justify-between items-center w-full px-margin-mobile py-2 max-w-7xl mx-auto">
    <div className="flex items-center gap-4">
      <button className="material-symbols-outlined text-primary p-2 hover:bg-surface-container-low transition-colors active:scale-95 duration-150">arrow_back</button>
      <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary">Adherence Reports</h1>
    </div>
    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-fixed">
      <img className="w-full h-full object-cover" data-alt="A professional studio portrait of a kind, middle-aged female doctor with short dark hair and a warm smile, wearing a white lab coat and a stethoscope around her neck. The background is a soft, out-of-focus medical office setting with clean, minimalist aesthetics and bright, high-key lighting consistent with a corporate healthcare brand." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqCrxb5hfgSWpf9sHvVYKBLgugUnb6nUuPalTugHw7unAfOyIs6svBibNkg_IYYNoT-5GPEbG7tQxW0gS2CRh-eH34KH7Rwokjgmgvsmq60XXrAthd7fLIOe6zWfcDJrcitKyYcSxrQPid-eN6y2jPY2K9lunzl9tnlN2CucSIQ91nCEm17aTUtNS4XHb7c2ETMjSmR2zcvmKAGkI7TqKgBvtMZSDTMrA9JKKOW64D-QGARmM6BhS6Yg" />
    </div>
  </header>
  <main className="px-margin-mobile pt-4 space-y-stack-lg max-w-2xl mx-auto">
    {/* 1. Weekly Summary Card */}
    <section className="bg-surface-container-low rounded-xl p-6 flex flex-col items-center text-center shadow-sm border border-outline-variant/30">
      <div className="relative mb-4">
        <div className="radial-progress" style={{'--twColorPrimary': '#0f5238', '--twColorSurfaceContainerHighest': '#e1e3e4'}}>
          <div className="flex flex-col items-center">
            <span className="text-display-lg font-display-lg text-primary leading-none">85%</span>
            <span className="text-label-md font-label-md text-on-surface-variant">Weekly</span>
          </div>
        </div>
      </div>
      <p className="font-title-lg text-title-lg text-on-surface-variant px-2">
        Great job! You've missed only <span className="text-primary font-bold">2 doses</span> this week.
      </p>
    </section>
    {/* 2. Adherence Calendar/Grid */}
    <section className="space-y-stack-md">
      <h2 className="font-title-lg text-title-lg px-2 text-primary">Weekly Tracker</h2>
      <div className="bg-surface-container-lowest rounded-xl p-4 flex justify-between items-center border border-outline-variant/20 shadow-sm">
        {/* Day S */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-label-md font-label-md text-outline">S</span>
          <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-primary">
            <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>check_circle</span>
          </div>
        </div>
        {/* Day M */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-label-md font-label-md text-outline">M</span>
          <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-primary">
            <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>check_circle</span>
          </div>
        </div>
        {/* Day T (Missed) */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-label-md font-label-md text-outline">T</span>
          <div className="w-10 h-10 rounded-full bg-error-container flex items-center justify-center text-error">
            <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>cancel</span>
          </div>
        </div>
        {/* Day W */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-label-md font-label-md text-outline">W</span>
          <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-primary">
            <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>check_circle</span>
          </div>
        </div>
        {/* Day T */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-label-md font-label-md text-outline">T</span>
          <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-primary">
            <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>check_circle</span>
          </div>
        </div>
        {/* Day F (Skipped) */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-label-md font-label-md text-outline">F</span>
          <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-outline">
            <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>do_not_disturb_on</span>
          </div>
        </div>
        {/* Day S (Today) */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-label-md font-label-md text-primary font-bold">S</span>
          <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center text-primary">
            <span className="text-label-lg font-label-lg">22</span>
          </div>
        </div>
      </div>
    </section>
    {/* 3. Detailed Stats Grid */}
    <section className="grid grid-cols-2 gap-gutter">
      <div className="bg-primary-container/10 p-4 rounded-xl border border-primary-fixed-dim/30">
        <span className="text-label-md font-label-md text-on-secondary-container opacity-80 uppercase tracking-wider">Total Doses</span>
        <p className="text-headline-lg font-headline-lg text-primary mt-1">24</p>
      </div>
      <div className="bg-secondary-container/20 p-4 rounded-xl border border-secondary-fixed/30">
        <span className="text-label-md font-label-md text-on-secondary-container opacity-80 uppercase tracking-wider">Taken</span>
        <p className="text-headline-lg font-headline-lg text-primary mt-1">22</p>
      </div>
      <div className="bg-surface-container-high p-4 rounded-xl border border-outline-variant/30">
        <span className="text-label-md font-label-md text-on-surface-variant opacity-80 uppercase tracking-wider">Skipped</span>
        <p className="text-headline-lg font-headline-lg text-on-surface mt-1">1</p>
      </div>
      <div className="bg-error-container/20 p-4 rounded-xl border border-error/10">
        <span className="text-label-md font-label-md text-error opacity-80 uppercase tracking-wider">Missed</span>
        <p className="text-headline-lg font-headline-lg text-error mt-1">1</p>
      </div>
    </section>
    {/* 4. Medicine Breakdown */}
    <section className="space-y-stack-md">
      <h2 className="font-title-lg text-title-lg px-2 text-primary">Medicine Breakdown</h2>
      <div className="space-y-gutter">
        {/* Crocin */}
        <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/20 shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <span className="font-body-lg text-body-lg font-medium text-on-surface">Crocin 650</span>
            <span className="text-label-lg font-label-lg text-primary">100%</span>
          </div>
          <div className="w-full bg-surface-container-high rounded-full h-3">
            <div className="bg-primary h-3 rounded-full" style={{width: '100%'}} />
          </div>
        </div>
        {/* Vitamin D */}
        <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/20 shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <span className="font-body-lg text-body-lg font-medium text-on-surface">Vitamin D</span>
            <span className="text-label-lg font-label-lg text-primary">90%</span>
          </div>
          <div className="w-full bg-surface-container-high rounded-full h-3">
            <div className="bg-primary h-3 rounded-full" style={{width: '90%'}} />
          </div>
        </div>
        {/* Metformin */}
        <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/20 shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <span className="font-body-lg text-body-lg font-medium text-on-surface">Metformin</span>
            <span className="text-label-lg font-label-lg text-error">75%</span>
          </div>
          <div className="w-full bg-surface-container-high rounded-full h-3">
            <div className="bg-primary-container h-3 rounded-full" style={{width: '75%'}} />
          </div>
        </div>
      </div>
    </section>
    {/* 5. Download Button */}
    <div className="pt-4">
      <button className="w-full bg-primary text-on-primary py-4 rounded-full font-title-lg flex items-center justify-center gap-3 shadow-lg active:scale-95 transition-transform">
        <span className="material-symbols-outlined">download</span>
        Download Report
      </button>
    </div>
  </main>
  {/* Navigation Shell (BottomNavBar) */}
  <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-base pb-4 pt-3 bg-surface-container rounded-t-xl shadow-lg md:hidden">
    <a className="flex flex-col items-center justify-center text-on-surface-variant px-5 py-1 transition-all active:scale-90 duration-200" href="#">
      <span className="material-symbols-outlined">home</span>
      <span className="font-label-md text-label-md">Home</span>
    </a>
    <a className="flex flex-col items-center justify-center text-on-surface-variant px-5 py-1 transition-all active:scale-90 duration-200" href="#">
      <span className="material-symbols-outlined">pill</span>
      <span className="font-label-md text-label-md">Medicines</span>
    </a>
    <a className="flex flex-col items-center justify-center text-on-surface-variant px-5 py-1 transition-all active:scale-90 duration-200" href="#">
      <span className="material-symbols-outlined">emergency_recording</span>
      <span className="font-label-md text-label-md">Chat</span>
    </a>
    {/* Active: Profile (mapped from reports context) */}
    <a className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-5 py-1 transition-all active:scale-90 duration-200" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>person</span>
      <span className="font-label-md text-label-md">Profile</span>
    </a>
  </nav>
</div>

    </>
  );
}
