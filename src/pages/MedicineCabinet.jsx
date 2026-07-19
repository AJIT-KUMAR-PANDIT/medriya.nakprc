import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

/* Reveal-on-scroll wrapper */
function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`${visible ? 'slide-up visible' : 'slide-up'} ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function MedicineCabinet() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Active', 'Inactive', 'Antibiotics', 'Vitamins'];
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <div className="page-enter">
      {/* Top App Bar */}
      <header className="bg-surface dark:bg-on-background fixed top-0 w-full z-50">
        <div className="flex justify-between items-center w-full px-margin-mobile py-2 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-fixed relative group cursor-pointer scale-hover">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa9P8GWVAc4J1UzQkCbQX2P9P4oXuw__ZkxFIn4cZk4GlIbIfRmShFL3CFDwtTWqNDk0EO5fB6u_Um6f5EZJKf1f07pm_TkoqNnhrdrDa1CUVIbSkXMiMRjb_EiD1PawoIOIkYKrsMxzz7M-jXn-vY614iksf5EczJYQ74f7RZ5kJpHLQcs1WVrZuj-Vil1aytMg6dN3dMm9y6oIGmYrBUy1h3goso9vMnYmVkGWuZ_FgquO0GSoTO0A"
                alt="Profile"
              />
            </div>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary dark:text-primary-fixed-dim">
              <span className="text-primary">Med</span>
              <span className="text-on-surface">riya</span>
              <span className="text-on-surface-variant text-[18px] font-label-md ml-1 opacity-70">AI</span>
            </h1>
          </div>
          <button
            className="p-2 rounded-full hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors relative ripple"
            aria-label="Notifications"
          >
            <span className="material-symbols-outlined text-primary dark:text-primary-fixed-dim">notifications</span>
            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-error rounded-full border-2 border-surface pulse-slow" />
          </button>
        </div>
      </header>

      <main className="flex-grow pt-20 pb-36 px-margin-mobile max-w-2xl mx-auto w-full">
        {/* Search Section */}
        <Reveal delay={50}>
          <section className="mb-stack-lg">
            <div className={`relative group transition-all duration-300 ${searchFocused ? 'scale-[1.01]' : ''}`}>
              <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors duration-300 ${searchFocused ? 'text-primary' : 'text-outline'}`}>
                <span className="material-symbols-outlined text-[24px]">search</span>
              </div>
              <input
                className={`block w-full pl-12 pr-8 py-4 bg-surface-container-low border-none rounded-2xl font-body-lg text-body-lg text-on-surface placeholder:text-on-surface-variant focus:ring-2 transition-all duration-300 shadow-sm ${
                  searchFocused ? 'ring-primary glow-focus shadow-lg shadow-primary/5' : 'ring-transparent hover:shadow-md'
                }`}
                placeholder="Search your medicines"
                type="text"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
            </div>
          </section>
        </Reveal>

        {/* Category Filter Chips */}
        <Reveal delay={100}>
          <section>
            <div className="flex gap-2.5 overflow-x-auto pb-4 hide-scrollbar stagger">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`chip-spring px-5 py-2.5 rounded-full font-label-lg text-label-lg shadow-sm whitespace-nowrap relative overflow-hidden ripple ${
                    activeFilter === filter
                      ? 'bg-primary text-on-primary'
                      : 'border border-outline text-on-surface-variant hover:bg-surface-container-high'
                  }`}
                >
                  {activeFilter === filter && (
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 translate-x-[-200%] animate-pulse" />
                  )}
                  <span className="relative z-10">{filter}</span>
                </button>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Medicine List Grouped by Category */}
        <div className="space-y-8">
          {/* Category: Daily Routine */}
          <Reveal delay={150}>
            <section>
              <h2 className="font-title-lg text-title-lg text-on-surface mb-4 px-1 border-l-4 border-primary pl-3 flex items-center gap-2">
                <span className="breath-dot inline-block bg-primary w-2.5 h-2.5" />
                Daily Routine
              </h2>
              <div className="space-y-4 stagger">
                {/* Item 1: Metformin */}
                <Link to="/medicines" className="card-hover block group ripple">
                  <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-surface-variant relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <div className="flex items-center gap-4 relative z-10">
                      <div className="w-16 h-16 rounded-xl bg-secondary-container flex items-center justify-center overflow-hidden pill-spin shadow-sm">
                        <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcvJr1CsMiAJQdIVODdwySG7tMIv8ol1UnYyl4pI-h5DTzbB1015lfnfSmtwJ86N6EZ0034CE5rv91vovIFskMoZEb2py1CQTKYbdBYBosJDax2cRsG2Ue2jysePVKL_M5T6lRfLr_Dvvc3LpOdZT92n_xm_ENHs27HrhhUSe6HRqQsSMG_XLgBjc7tDRIVIKXJWCGuZh6Z2nN7CzOr2Ye3V_8_Owvg7-ZHC2SvgtZuW148M_yUnf2_w" alt="Medicine" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-title-lg text-on-surface group-hover:text-primary transition-colors duration-200">Metformin</h3>
                        <p className="font-body-md text-on-surface-variant">500mg · Twice daily</p>
                        <div className="flex items-center gap-1.5 mt-2">
                          <span className="breath-dot inline-block bg-primary w-1.5 h-1.5" />
                          <span className="text-xs font-label-md bg-secondary-fixed text-on-secondary-fixed-variant px-3 py-1 rounded-full">Next: 8:00 PM</span>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-outline group-hover:text-primary group-hover:translate-x-1 transition-all duration-200">chevron_right</span>
                    </div>
                  </div>
                </Link>

                {/* Item 2: Lisinopril */}
                <Link to="/medicines" className="card-hover block group ripple">
                  <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-surface-variant relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <div className="flex items-center gap-4 relative z-10">
                      <div className="w-16 h-16 rounded-xl bg-secondary-container flex items-center justify-center overflow-hidden pill-spin shadow-sm">
                        <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK5904k7VQV2M1w9qSeAl2C_46fH1fgtJ5g-AfTQprPxnTsxB_aOn2F8zU3SfkacJpsyWSdI8w9vuKPXaIoEu6l0yDHaqKbr7mqEko0-Do4DGLwXGnLTjO0gvwlRcClLuqOFXMsCE1HG-KAGjPHUiWugC8MPIN37pJoqysl-qZYluHZ1ytkGICuMPQpETL2M1B8RdPnlHxs_BiH6iNbMODse-s4q9pLfLJ64Fjh_bvEoku0lbaDRCTMA" alt="Medicine" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-title-lg text-on-surface group-hover:text-primary transition-colors duration-200">Lisinopril</h3>
                        <p className="font-body-md text-on-surface-variant">10mg · Once daily (Morning)</p>
                        <div className="flex items-center gap-1 mt-1">
                          <span className="text-xs font-label-md bg-tertiary-fixed text-on-tertiary-fixed-variant px-3 py-1 rounded-full flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: '"FILL" 1' }}>favorite</span>
                            Heart Health
                          </span>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-outline group-hover:text-primary group-hover:translate-x-1 transition-all duration-200">chevron_right</span>
                    </div>
                  </div>
                </Link>
              </div>
            </section>
          </Reveal>

          {/* Category: As Needed (PRN) */}
          <Reveal delay={200}>
            <section>
              <h2 className="font-title-lg text-title-lg text-on-surface mb-4 px-1 border-l-4 border-secondary pl-3 flex items-center gap-2">
                <span className="breath-dot inline-block bg-secondary w-2.5 h-2.5" />
                As Needed (PRN)
              </h2>
              <div className="space-y-4 stagger">
                <Link to="/medicines" className="card-hover block group ripple">
                  <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-surface-variant relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <div className="flex items-center gap-4 relative z-10">
                      <div className="w-16 h-16 rounded-xl bg-secondary-container flex items-center justify-center overflow-hidden pill-spin shadow-sm">
                        <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYuCUcVZ7PIuNzQ55RANVMvzgErLHxeHaZBpNQxhQgycRGP_OvQdgr_UVGJQ-mfXuX5zi0JxYwLZSk24y6EI-qMYpA0WxROUQq2ZbDnyQI06KzOk0dRX0vqrjrbPR7vRzB8NAhF7Tn1BeKIUMQeACheRLMR6zzuik87VcFxcONyRY7zyxaf-LDtcsHgIOkzozMB3LqTMGz4eXhUEPNTm3GkQRhGp3hCCoBc59l6mcLN1holciPxpo9nw" alt="Medicine" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-title-lg text-on-surface group-hover:text-primary transition-colors duration-200">Albuterol</h3>
                        <p className="font-body-md text-on-surface-variant">90mcg · Every 4 hours as needed</p>
                      </div>
                      <span className="material-symbols-outlined text-outline group-hover:text-primary group-hover:translate-x-1 transition-all duration-200">chevron_right</span>
                    </div>
                  </div>
                </Link>
              </div>
            </section>
          </Reveal>

          {/* Category: Inactive */}
          <Reveal delay={250}>
            <section className="opacity-60 grayscale transition-opacity duration-300 hover:opacity-75">
              <h2 className="font-title-lg text-title-lg text-on-surface mb-4 px-1 border-l-4 border-outline pl-3 flex items-center gap-2">
                <span className="breath-dot inline-block bg-outline w-2.5 h-2.5" />
                Inactive
              </h2>
              <div className="space-y-4 stagger">
                <div className="bg-surface-container rounded-2xl p-4 border border-dashed border-outline-variant cursor-not-allowed relative overflow-hidden">
                  <div className="absolute inset-0 shimmer pointer-events-none" />
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-16 h-16 rounded-xl bg-surface-dim flex items-center justify-center mr-4 pill-spin">
                      <span className="material-symbols-outlined text-outline text-3xl">pill</span>
                    </div>
                    <div>
                      <h3 className="font-title-lg text-on-surface-variant">Amoxicillin</h3>
                      <p className="font-body-md text-on-surface-variant">250mg · Course completed</p>
                      <span className="text-xs font-label-md text-outline-variant mt-1 inline-block">Completed 2 weeks ago</span>
                    </div>
                    <span className="material-symbols-outlined text-outline-variant">history</span>
                  </div>
                </div>
              </div>
            </section>
          </Reveal>
        </div>
      </main>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-24 right-6 z-50 flex flex-col gap-3 items-end">
        <button className="fab-bounce flex items-center gap-2 bg-secondary-container text-on-secondary-container px-6 py-3.5 rounded-2xl shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200 ripple group">
          <span className="material-symbols-outlined group-hover:rotate-12 transition-transform duration-300" style={{ fontVariationSettings: '"FILL" 1' }}>qr_code_scanner</span>
          <span className="font-label-lg text-label-lg">Scan Medicine</span>
        </button>
        <button
          onClick={() => navigate('/add-medicine')}
          className="fab-bounce flex items-center gap-2 bg-primary text-on-primary px-6 py-3.5 rounded-2xl shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200 ripple group relative overflow-hidden"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="material-symbols-outlined group-hover:rotate-90 transition-transform duration-300">add</span>
          <span className="font-label-lg text-label-lg">Add Manually</span>
          <div className="absolute -inset-1 bg-gradient-to-t from-tertiary/40 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
        </button>
      </div>
    </div>
  );
}
