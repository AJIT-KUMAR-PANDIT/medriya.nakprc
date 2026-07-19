import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function HealthProfileMemory() {
  const navigate = useNavigate();
  return (
    <>
<div>
  {/* Top App Bar */}
  <header className="bg-surface sticky top-0 z-40 docked full-width">
    <div className="flex justify-between items-center w-full px-margin-mobile py-4 max-w-7xl mx-auto">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-primary-container flex items-center justify-center">
          <img className="w-full h-full object-cover" data-alt="A professional, high-resolution portrait of a smiling female healthcare professional in a clean, modern medical setting. The lighting is soft and natural, emphasizing a trustworthy and compassionate atmosphere. The background features a subtle, blurred medical office with light green accents consistent with the MedRiya AI color palette." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsQbKkJksZBiNIfycyOsW1cGmcuMHzAGjn8wcGQjZZI0jFuYARbMHI0AhKDZDzEpamQ-lGY78yiebY-PHibEKixU9BN_1LxX-f7W2FrOEKeWGWx_ISn-1OWsfBWYDrJROYyKZsDYq-ShkyXe81QoplzbgQpi6YJ4eLf7Vx3XoM3g297DgLnqeo1Zic6bt9bULBWtcN4hEpyqO2lrovg4G-NmXhSOPdQURaGF3fEDeVNdeF8w6t1y5U-A" />
        </div>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary">Health Profile &amp; Memory</h1>
      </div>
      <button className="material-symbols-outlined text-primary p-2 hover:bg-surface-container-low transition-colors rounded-full active:scale-95 duration-150" data-icon="notifications">notifications</button>
    </div>
  </header>
  {/* Main Content Canvas */}
  <main className="flex-grow px-margin-mobile pb-32 max-w-7xl mx-auto w-full">
    {/* Search & Filter Area */}
    <section className="mt-4 mb-8">
      <div className="relative flex items-center group">
        <span className="material-symbols-outlined absolute left-4 text-outline group-focus-within:text-primary transition-colors">search</span>
        <input className="w-full h-14 pl-12 pr-4 rounded-full border-none bg-surface-container focus:ring-2 focus:ring-primary focus:bg-surface transition-all text-body-lg font-body-lg shadow-sm" placeholder="Search your health memories..." type="text" />
      </div>
      {/* Quick Chips */}
      <div className="flex gap-2 mt-4 overflow-x-auto pb-2 no-scrollbar">
        <button className="bg-primary text-on-primary px-4 py-2 rounded-xl text-label-lg font-label-lg whitespace-nowrap active:scale-95 transition-transform">All Memories</button>
        <button className="bg-surface-container-high text-on-surface-variant border border-outline-variant px-4 py-2 rounded-xl text-label-lg font-label-lg whitespace-nowrap hover:bg-surface-container-highest transition-colors">Recent</button>
        <button className="bg-surface-container-high text-on-surface-variant border border-outline-variant px-4 py-2 rounded-xl text-label-lg font-label-lg whitespace-nowrap hover:bg-surface-container-highest transition-colors">Critical</button>
      </div>
    </section>
    {/* Memories Bento Grid */}
    <div className="bento-grid">
      {/* Allergies Card (Large) */}
      <div className="col-span-2 bg-surface-container-low rounded-3xl p-6 shadow-sm border border-outline-variant/30 flex flex-col justify-between hover:shadow-md transition-shadow group cursor-pointer active:scale-[0.98] duration-200">
        <div>
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 rounded-2xl bg-error-container text-on-error-container">
              <span className="material-symbols-outlined">warning</span>
            </div>
            <span className="text-label-md font-label-md text-outline">Updated Oct 24</span>
          </div>
          <h3 className="text-title-lg font-title-lg text-on-surface mb-1">Allergies</h3>
          <p className="text-display-lg text-error font-display-lg leading-tight">Penicillin</p>
        </div>
        <div className="mt-4 pt-4 border-t border-outline-variant/20 flex items-center text-on-surface-variant gap-2">
          <span className="material-symbols-outlined text-[18px]">info</span>
          <span className="text-body-md font-body-md">Reaction: Severe anaphylaxis risk.</span>
        </div>
      </div>
      {/* Blood Group Card */}
      <div className="col-span-1 bg-surface-container-low rounded-3xl p-6 shadow-sm border border-outline-variant/30 flex flex-col justify-between hover:shadow-md transition-shadow cursor-pointer active:scale-[0.98] duration-200">
        <div>
          <div className="p-3 w-fit rounded-2xl bg-secondary-container text-on-secondary-container mb-4">
            <span className="material-symbols-outlined">bloodtype</span>
          </div>
          <h3 className="text-title-lg font-title-lg text-on-surface mb-1">Blood Group</h3>
          <p className="text-headline-lg font-headline-lg text-primary">O Positive</p>
        </div>
        <span className="text-label-md font-label-md text-outline mt-4">Verified Aug 12</span>
      </div>
      {/* Chronic Conditions Card */}
      <div className="col-span-1 md:col-span-1 bg-surface-container-low rounded-3xl p-6 shadow-sm border border-outline-variant/30 flex flex-col justify-between hover:shadow-md transition-shadow cursor-pointer active:scale-[0.98] duration-200">
        <div>
          <div className="p-3 w-fit rounded-2xl bg-tertiary-container text-on-tertiary-container mb-4">
            <span className="material-symbols-outlined">conditions</span>
          </div>
          <h3 className="text-title-lg font-title-lg text-on-surface mb-1">Chronic Conditions</h3>
          <p className="text-body-lg font-body-lg text-on-surface-variant">Type 2 Diabetes</p>
        </div>
        <span className="text-label-md font-label-md text-outline mt-4">Active Since 2018</span>
      </div>
      {/* Doctor Advice Card (Large) */}
      <div className="col-span-2 bg-primary-container text-on-primary-container rounded-3xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow cursor-pointer active:scale-[0.98] duration-200">
        <div>
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 rounded-2xl bg-on-primary-container/20 text-on-primary-container">
              <span className="material-symbols-outlined">medical_information</span>
            </div>
            <span className="text-label-md font-label-md opacity-80">Added 2 days ago</span>
          </div>
          <h3 className="text-title-lg font-title-lg mb-2">Doctor Advice</h3>
          <p className="text-headline-lg-mobile font-headline-lg-mobile leading-snug">"Avoid grapefruit with current cholesterol meds to prevent interactions."</p>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <span className="text-body-md font-body-md opacity-90">— Dr. Aris Thorne</span>
        </div>
      </div>
      {/* Emergency Contact Card */}
      <div className="col-span-2 md:col-span-1 bg-secondary-fixed text-on-secondary-fixed rounded-3xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow cursor-pointer active:scale-[0.98] duration-200">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-title-lg font-title-lg mb-4">Emergency Contact</h3>
            <p className="text-headline-lg-mobile font-bold">Sarah Doe</p>
            <p className="text-body-lg">555-0123</p>
          </div>
          <div className="p-3 rounded-full bg-on-secondary-fixed/10">
            <span className="material-symbols-outlined">call</span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-on-secondary-fixed/10">
          <span className="text-label-md font-label-md">Relation: Spouse</span>
        </div>
      </div>
      {/* Empty Memory Placeholder / Suggestion */}
      <div className="col-span-2 md:col-span-1 border-2 border-dashed border-outline-variant rounded-3xl p-6 flex flex-col items-center justify-center text-center group hover:border-primary transition-colors cursor-pointer">
        <span className="material-symbols-outlined text-outline group-hover:text-primary mb-2 text-4xl">add_circle</span>
        <p className="text-body-md font-body-md text-on-surface-variant">Add medical history or family records to help MedRiya AI learn.</p>
      </div>
    </div>
  </main>
  {/* FAB */}
  <button className="fixed bottom-24 right-6 w-14 h-14 bg-primary text-on-primary rounded-2xl shadow-xl flex items-center justify-center active:scale-90 transition-all hover:bg-primary-container z-50">
    <span className="material-symbols-outlined text-3xl">add</span>
  </button>
  {/* Bottom Navigation Bar */}
</div>

    </>
  );
}
