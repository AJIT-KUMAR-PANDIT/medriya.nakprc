import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AddMedicine() {
  const navigate = useNavigate();
  const [dosageType, setDosageType] = useState('Pill');
  const [foodRelation, setFoodRelation] = useState('With Food');
  const [isAdding, setIsAdding] = useState(false);

  const dosageOptions = ['Pill', 'Capsule', 'Syrup', 'Injection'];
  const foodOptions = ['Before', 'With Food', 'After'];

  return (
    <div className="page-enter">
      {/* Top App Bar */}
      <header className="bg-surface dark:bg-on-background fixed top-0 w-full z-50">
        <div className="flex justify-between items-center w-full px-margin-mobile py-2 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full hover:bg-surface-container-low transition-colors active:scale-95 duration-150 ripple">
              <span className="material-symbols-outlined text-primary">arrow_back</span>
            </button>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary dark:text-primary-fixed-dim">
              <span className="text-primary">Med</span>
              <span className="text-on-surface">riya</span>
              <span className="text-on-surface-variant text-[18px] font-label-md ml-1 opacity-70">AI</span>
            </h1>
          </div>
        </div>
      </header>

      <main className="pt-20 px-margin-mobile max-w-2xl mx-auto space-y-stack-lg">

        {/* Image Upload & AI Scan Section */}
        <section className="mt-6 space-y-4">
          <div className="relative group aspect-video w-full rounded-2xl bg-surface-container-high border-2 border-dashed border-outline-variant flex flex-col items-center justify-center overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-lg cursor-pointer">
            {/* Animated border gradient */}
            <div className="absolute inset-[2px] rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-primary via-tertiary to-primary transition-opacity duration-500 -z-10" style={{ backgroundSize: '200% 100%', animation: 'shimmer 3s linear infinite' }} />

            <div className="absolute inset-0 z-0 opacity-10 bg-cover bg-center group-hover:opacity-15 transition-opacity duration-300"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAIADyIajABXk6482zOPfcR62lMyCzHFF5JuogbZZQfcZOBisHHltfO9mFaxwmvqu8zahUPFN8pLhRhI_z2L96MWardSmVwxv2n1myYronLgvTWTKrmz3nxcy7mIJQ6UmcFv3Ev6O-TqTBMzXbkM4Bo1LSpplvmol6HZLKdWARDq9ci8DqS-wSJ8STdA-T68AxtLigMoF3ORGRRFRmpBml1wQIf3LPjvp2vnGEHYwLVPc4MotozGtUpsg")' }}
            />

            <div className="z-10 flex flex-col items-center text-center space-y-3">
              {/* Icon with hover spin */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 pill-spin transition-colors">
                <span className="material-symbols-outlined text-primary text-[40px]">add_a_photo</span>
              </div>
              <p className="font-label-lg text-on-surface-variant px-6 max-w-xs leading-relaxed">Upload or capture a photo of your prescription or medicine box</p>
            </div>

            <div className="absolute bottom-4 left-4 right-4 z-20 flex gap-3">
              <button className="flex-1 bg-primary text-on-primary py-3 rounded-full font-label-lg flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform ripple group/btn">
                <span className="material-symbols-outlined group-hover/btn:rotate-12 transition-transform duration-300">photo_camera</span>
                Take Photo
              </button>
              <button className="flex-1 bg-surface-container-lowest text-primary border border-primary py-3 rounded-full font-label-lg flex items-center justify-center gap-2 active:scale-95 transition-transform ripple group/btn">
                <span className="material-symbols-outlined group-hover/btn:-translate-y-1 transition-transform duration-300">upload</span>
                Upload
              </button>
            </div>
          </div>

          {/* AI OCR Feature */}
          <button className="w-full bg-secondary-container text-on-secondary-container p-4 rounded-2xl flex items-center justify-between group hover:bg-secondary-container/80 transition-colors chip-spring ripple relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <div className="flex items-center gap-3 relative z-10">
              <div className="bg-on-secondary-container text-secondary-container p-2.5 rounded-xl shadow-sm group-hover:scale-110 pill-spin transition-transform duration-300">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>auto_fix_high</span>
              </div>
              <div className="text-left">
                <p className="font-title-lg text-sm">Scan with AI</p>
                <p className="font-body-md text-xs opacity-80">Extract dosage and frequency from label</p>
              </div>
            </div>
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform duration-200">chevron_right</span>
          </button>
        </section>

        {/* General Info Section */}
        <section className="space-y-4">
          <h2 className="font-title-lg text-primary flex items-center gap-2">
            <span className="breath-dot inline-block bg-primary w-2.5 h-2.5" />
            Medicine Identity
          </h2>
          <div className="space-y-4">
            {/* Floating label inputs */}
            <div className="relative">
              <input
                className="w-full p-4 bg-transparent border border-outline rounded-2xl font-body-lg text-on-surface placeholder-transparent focus:border-primary focus:ring-2 glow-focus transition-all duration-300"
                id="medicine-name"
                placeholder="e.g. Paracetamol"
                type="text"
              />
              <label htmlFor="medicine-name" className="absolute left-4 top-4 font-label-md text-on-surface-variant bg-background px-1 transition-all duration-200 pointer-events-none">
                Medicine Name
              </label>
              <div className="absolute bottom-0 left-0 h-[2px] bg-primary scale-x-0 focus-within:scale-x-100 origin-left transition-transform duration-300" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="relative">
                <input
                  className="w-full p-4 bg-transparent border border-outline-variant rounded-2xl font-body-lg text-on-surface placeholder-transparent focus:border-primary focus:ring-2 glow-focus transition-all duration-300"
                  id="brand-name"
                  placeholder="Panadol"
                  type="text"
                />
                <label htmlFor="brand-name" className="absolute left-4 top-4 font-label-md text-on-surface-variant bg-background px-1 transition-all duration-200 pointer-events-none">
                  Brand Name
                </label>
                <div className="absolute bottom-0 left-0 h-[2px] bg-primary scale-x-0 focus-within:scale-x-100 origin-left transition-transform duration-300" />
              </div>
              <div className="relative">
                <input
                  className="w-full p-4 bg-transparent border border-outline-variant rounded-2xl font-body-lg text-on-surface placeholder-transparent focus:border-primary focus:ring-2 glow-focus transition-all duration-300"
                  id="generic-name"
                  placeholder="Acetaminophen"
                  type="text"
                />
                <label htmlFor="generic-name" className="absolute left-4 top-4 font-label-md text-on-surface-variant bg-background px-1 transition-all duration-200 pointer-events-none">
                  Generic Name
                </label>
                <div className="absolute bottom-0 left-0 h-[2px] bg-primary scale-x-0 focus-within:scale-x-100 origin-left transition-transform duration-300" />
              </div>
            </div>
          </div>
        </section>

        {/* Dosage & Frequency */}
        <section className="space-y-4">
          <h2 className="font-title-lg text-primary flex items-center gap-2">
            <span className="breath-dot inline-block bg-primary w-2.5 h-2.5" />
            Dosage Details
          </h2>
          <div className="p-5 bg-surface-container rounded-3xl space-y-6 shadow-sm border border-surface-variant">
            {/* Dosage Selector */}
            <div className="space-y-3">
              <label className="font-label-lg text-on-surface-variant">Dosage Form</label>
              <div className="flex flex-wrap gap-2">
                {dosageOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setDosageType(opt)}
                    className={`chip-spring px-4 py-2.5 rounded-full border font-label-md flex items-center gap-1.5 shadow-sm relative overflow-hidden ripple ${
                      dosageType === opt
                        ? 'border-primary bg-primary text-on-primary'
                        : 'border-outline-variant text-on-surface-variant hover:bg-surface-variant'
                    }`}
                  >
                    {dosageType === opt && (
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 translate-x-[-200%] animate-pulse" />
                    )}
                    <span className="material-symbols-outlined text-[16px] relative z-10">pill</span>
                    <span className="relative z-10">{opt}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Frequency & Time */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="font-label-lg text-on-surface-variant">Frequency</label>
                <select className="w-full p-3 bg-surface-container-lowest border border-outline-variant rounded-xl font-body-md outline-none focus:border-primary focus:ring-2 glow-focus transition-all duration-300 appearance-none cursor-pointer">
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Specific Days</option>
                  <option>As Needed (PRN)</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-label-lg text-on-surface-variant">Time</label>
                <div className="relative">
                  <input
                    className="w-full p-3 bg-surface-container-lowest border border-outline-variant rounded-xl font-body-md pr-10 outline-none focus:border-primary focus:ring-2 glow-focus transition-all duration-300"
                    type="time"
                    defaultValue="09:00"
                  />
                  <span className="material-symbols-outlined absolute right-3 top-3 text-on-surface-variant">schedule</span>
                </div>
              </div>
            </div>

            {/* Food Relation */}
            <div className="space-y-2">
              <label className="font-label-lg text-on-surface-variant">Relation to Food</label>
              <div className="flex p-1 bg-surface-container-highest rounded-2xl shadow-inner">
                {foodOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setFoodRelation(opt)}
                    className={`flex-1 py-2.5 text-xs font-label-md rounded-xl transition-all duration-200 chip-spring ${
                      foodRelation === opt
                        ? 'bg-surface-container-lowest shadow-sm text-primary font-bold'
                        : 'text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Duration */}
        <section className="space-y-4">
          <h2 className="font-title-lg text-primary flex items-center gap-2">
            <span className="breath-dot inline-block bg-primary w-2.5 h-2.5" />
            Treatment Duration
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="font-label-lg text-on-surface-variant">Start Date</label>
              <input
                className="w-full p-3 bg-transparent border border-outline-variant rounded-2xl font-body-md outline-none focus:border-primary focus:ring-2 glow-focus transition-all duration-300"
                type="date"
                defaultValue="2023-10-27"
              />
            </div>
            <div className="space-y-2">
              <label className="font-label-lg text-on-surface-variant">End Date</label>
              <input
                className="w-full p-3 bg-transparent border border-outline-variant rounded-2xl font-body-md placeholder:text-on-surface-variant outline-none focus:border-primary focus:ring-2 glow-focus transition-all duration-300"
                placeholder="Ongoing"
                type="date"
              />
            </div>
          </div>
          <label className="flex items-center gap-3 p-3 chip-spring cursor-pointer hover:bg-surface-container-high rounded-xl transition-colors">
            <span className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${isAdding ? 'bg-primary border-primary' : 'border-outline-variant'}`}>
              {isAdding && <span className="material-symbols-outlined text-[18px] text-on-primary" style={{ fontVariationSettings: '"FILL" 1' }}>check</span>}
            </span>
            <input
              type="checkbox"
              className="hidden"
              checked={isAdding}
              onChange={() => setIsAdding(!isAdding)}
            />
            <span className="font-body-md text-on-surface">Ongoing medication (No end date)</span>
          </label>
        </section>

        {/* Notes */}
        <section className="space-y-4">
          <h2 className="font-title-lg text-primary flex items-center gap-2">
            <span className="breath-dot inline-block bg-primary w-2.5 h-2.5" />
            Doctor's Advice & Notes
          </h2>
          <div className="relative">
            <textarea
              className="w-full p-4 bg-transparent border border-outline rounded-2xl font-body-lg resize-none outline-none focus:border-primary focus:ring-2 glow-focus transition-all duration-300"
              placeholder="e.g. Avoid alcohol, keep in a cool dry place..."
              rows={4}
            />
            <div className="absolute bottom-3 right-3 text-on-surface-variant/50 font-label-md">0/500</div>
          </div>
        </section>

        {/* Spacing for fixed bottom bar */}
        <div className="h-8" />
      </main>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 w-full z-50 bg-surface/95 backdrop-blur-lg px-margin-mobile pb-6 pt-4 border-t border-surface-variant/50">
        <div className="max-w-2xl mx-auto flex gap-3">
          <button
            onClick={() => navigate(-1)}
            className="flex-1 py-4 rounded-2xl font-title-lg text-primary bg-surface-container-high active:scale-95 transition-all ripple"
          >
            Cancel
          </button>
          <button className="flex-[2] py-4 rounded-2xl font-title-lg bg-primary text-on-primary shadow-lg shadow-primary/20 active:scale-95 transition-all flex items-center justify-center gap-2 ripple group/btn relative overflow-hidden hover:shadow-xl">
            <span className="material-symbols-outlined group-hover/btn:rotate-12 transition-transform duration-300" style={{ fontVariationSettings: '"FILL" 1' }}>save</span>
            Save Medicine
            <div className="absolute -inset-1 bg-gradient-to-t from-tertiary/40 to-transparent rounded-2xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
          </button>
        </div>
      </div>
    </div>
  );
}
