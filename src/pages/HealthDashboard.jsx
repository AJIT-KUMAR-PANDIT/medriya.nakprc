import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

/* Reveal-on-scroll wrapper */
function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`${visible ? 'slide-up visible' : 'slide-up'} ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* Animated progress ring */
function ProgressRing({ percent, size = 96, strokeWidth = 8 }) {
  const r = (size - strokeWidth) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (percent / 100) * circ;
  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <defs>
        <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#95d4b3" />
          <stop offset="100%" stopColor="#0f5238" />
        </linearGradient>
      </defs>
      <circle cx={size / 2} cy={size / 2} fill="transparent" r={r} stroke="rgba(168,231,197,0.2)" strokeWidth={strokeWidth} />
      <circle
        cx={size / 2} cy={size / 2} fill="transparent" r={r}
        stroke="url(#ringGrad)" strokeWidth={strokeWidth}
        strokeDasharray={circ} strokeDashoffset={circ}
        style={{ transition: 'stroke-dashoffset 1.5s cubic-bezier(0.22, 1, 0.36, 1)', strokeDashoffset: offset }}
        strokeLinecap="round"
      />
    </svg>
  );
}

/* Animated counter */
function Counter({ value, duration = 1200 }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
    return () => {};
  }, [value, duration]);
  return <span className="counter-pulse inline-block">{count}</span>;
}

export default function HealthDashboard() {
  const navigate = useNavigate();
  const [activeTimeSlot, setActiveTimeSlot] = useState(0);
  const timeSlots = ['8 AM', '2 PM', '8 PM', '10 PM'];

  return (
    <div className="page-enter">
      {/* Top App Bar */}
      <header className="bg-surface dark:bg-on-background sticky top-0 z-50 w-full transition-shadow">
        <div className="flex justify-between items-center w-full px-margin-mobile py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-secondary-container flex items-center justify-center relative group cursor-pointer scale-hover">
              <img
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiwnaZ5JdDhVNgVCp8nauSCcaqPaginqfiKnPvuOZ-IY6qTN68PbfSXMsFE6y7egjsjuGw9jR2L9NUcQDEjqVJdUKSWQ_G8d2IRPARMhAaoDZzB0XZN4L6hbRBnqEmTQRI1R4H0O_zS6pUokD3hBGilUSPbCvyqudJ9-QorWMw0oCpGUblN32o1BOBYUlvLGEwGnUJa2CMjhC7hdRtbW3DoR86SamShyUhgyHVT6lPhpU3HRpHkj681w"
                alt="Profile"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold tracking-tight">
              <span className="text-primary dark:text-primary-fixed-dim">Med</span>
              <span className="text-on-surface">riya</span>
              <span className="text-on-surface-variant text-[18px] font-label-md ml-1 opacity-70">AI</span>
            </h1>
          </div>
          <button
            className="p-2 rounded-full hover:bg-surface-container-low transition-colors active:scale-95 duration-150 relative ripple"
            aria-label="Notifications"
          >
            <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
            {/* Red dot indicator */}
            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-error rounded-full border-2 border-surface pulse-slow" />
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-margin-mobile space-y-stack-lg mt-4 pb-8">

        {/* Greeting */}
        <Reveal delay={50}>
          <div className="mb-2">
            <p className="font-body-md text-on-surface-variant">Good morning,</p>
            <h2 className="font-display-lg text-body-lg font-bold text-on-surface">
              Ready for your<span className="text-primary icon-bounce inline-block">&nbsp;next dose</span>?
            </h2>
          </div>
        </Reveal>

        {/* Section 1: Today's Schedule */}
        <Reveal delay={100}>
          <section>
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-title-lg text-title-lg text-on-surface">Today's Schedule</h2>
              <span className="breath-dot" />
            </div>
            <div className="flex overflow-x-auto gap-3 pb-2 hide-scrollbar">
              {timeSlots.map((slot, i) => (
                <button
                  key={slot}
                  onClick={() => setActiveTimeSlot(i)}
                  className={`flex-none px-6 py-2.5 rounded-full font-label-lg shadow-sm chip-spring ripple relative overflow-hidden ${
                    activeTimeSlot === i
                      ? 'bg-primary text-on-primary'
                      : 'bg-surface-container-high text-on-surface-variant border border-outline-variant hover:bg-surface-variant'
                  }`}
                >
                  {activeTimeSlot === i && (
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse" />
                  )}
                  <span className="relative z-10">{slot}</span>
                </button>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Section 2: Active Medicine Cards */}
        <Reveal delay={150}>
          <section className="space-y-stack-md">
            <h2 className="font-title-lg text-title-lg text-on-surface">Active Medicines</h2>
            <div className="stagger space-y-4">

              {/* Card 1: Taken */}
              <Link to="/medicines" className="card-hover block">
                <div className="bg-surface-container-low border border-outline-variant rounded-2xl p-4 tonal-card-elevation flex items-center justify-between relative overflow-hidden group ripple">
                  {/* Shimmer on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-primary-fixed-dim flex items-center justify-center text-primary pill-spin shadow-sm">
                      <span className="material-symbols-outlined text-[32px]">pill</span>
                    </div>
                    <div>
                      <h3 className="font-title-lg text-body-lg font-bold text-on-surface group-hover:text-primary transition-colors duration-200">Crocin 650</h3>
                      <p className="text-on-surface-variant font-body-md">1 Tablet · After Breakfast</p>
                    </div>
                  </div>
                  <div className="text-right relative z-10">
                    <div className="inline-flex items-center gap-1.5 bg-secondary-container text-on-secondary-container px-3 py-1.5 rounded-full font-label-md">
                      <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
                      <span>Taken</span>
                    </div>
                    <p className="text-on-surface-variant font-label-md mt-1.5">at 08:03 AM</p>
                  </div>
                </div>
              </Link>

              {/* Card 2: Upcoming */}
              <Link to="/medicines" className="card-hover block">
                <div className="bg-surface-container-low border-l-4 border-l-primary rounded-2xl p-4 tonal-card-elevation flex items-center justify-between relative overflow-hidden group ripple">
                  {/* Pulse indicator on left */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-tertiary opacity-60" />

                  <div className="flex items-center gap-4 relative z-10 pl-2">
                    <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center text-secondary pill-spin shadow-sm">
                      <span className="material-symbols-outlined text-[32px]">medication</span>
                    </div>
                    <div>
                      <h3 className="font-title-lg text-body-lg font-bold text-on-surface group-hover:text-primary transition-colors duration-200">Vitamin D</h3>
                      <p className="text-on-surface-variant font-body-md">1 Capsule · After Lunch</p>
                    </div>
                  </div>
                  <div className="text-right relative z-10">
                    <div className="inline-flex items-center gap-1.5 bg-surface-container-highest text-on-surface-variant px-3 py-1.5 rounded-full font-label-md">
                      <span className="material-symbols-outlined text-[18px]">schedule</span>
                      <span>Upcoming</span>
                    </div>
                    <p className="text-primary font-label-md mt-1.5 font-bold">2:00 PM</p>
                  </div>
                </div>
              </Link>

            </div>
          </section>
        </Reveal>

        {/* Section 3: Adherence Summary */}
        <Reveal delay={200}>
          <section>
            <div className="bg-primary-container text-on-primary-container p-6 rounded-3xl tonal-card-elevation relative overflow-hidden group/card hover:shadow-xl transition-shadow duration-300">
              {/* Background icon with fade-in */}
              <div className="absolute -right-8 -top-8 opacity-[0.07] group-hover/card:opacity-[0.12] transition-opacity duration-500">
                <span className="material-symbols-outlined text-[180px]">monitoring</span>
              </div>

              {/* Gradient glow at top */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-tertiary/20 rounded-full blur-3xl group-hover/card:bg-tertiary/30 transition-all duration-500" />

              <div className="flex items-center justify-between relative z-10">
                <div className="space-y-3 max-w-[55%]">
                  <div className="flex items-center gap-2">
                    <span className="breath-dot bg-on-primary-container/50 w-2 h-2 inline-block" />
                    <h2 className="font-headline-lg-mobile text-body-lg font-bold tracking-tight">Adherence Weekly</h2>
                  </div>
                  <p className="font-body-md opacity-90 leading-relaxed">Great job! You've missed only 2 doses this week. Keep maintaining your health streak.</p>
                  <button className="mt-1 text-on-primary-container font-label-lg flex items-center gap-1 underline underline-offset-4 hover:gap-2 transition-all duration-200 group/link">
                    View Details
                    <span className="material-symbols-outlined text-[16px] group-hover/link:translate-x-1 transition-transform duration-200">arrow_forward</span>
                  </button>
                </div>

                {/* Animated Progress Ring */}
                <div className="relative flex items-center justify-center w-28 h-28 fab-bounce">
                  <ProgressRing percent={85} size={112} strokeWidth={9} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-title-lg text-on-primary-container font-bold text-xl counter-pulse inline-block">
                      <Counter value={85} />%
                    </span>
                    <span className="font-label-md opacity-70 mt-0.5">on track</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Quick Actions */}
        <Reveal delay={250}>
          <section>
            <h2 className="font-title-lg text-title-lg text-on-surface mb-3">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3 stagger">
              <button className="card-hover bg-secondary-container/60 rounded-2xl p-4 flex items-center gap-3 text-left ripple group">
                <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center text-secondary pill-spin">
                  <span className="material-symbols-outlined">local_hospital</span>
                </div>
                <div>
                  <p className="font-label-lg font-medium text-on-surface group-hover:text-primary transition-colors">Doctor Visit</p>
                  <p className="font-label-md text-on-surface-variant">Log next visit</p>
                </div>
              </button>
              <button className="card-hover bg-tertiary-container/40 rounded-2xl p-4 flex items-center gap-3 text-left ripple group">
                <div className="w-10 h-10 rounded-xl bg-tertiary-fixed/60 flex items-center justify-center text-on-tertiary-fixed-variant pill-spin">
                  <span className="material-symbols-outlined">biotech</span>
                </div>
                <div>
                  <p className="font-label-lg font-medium text-on-surface group-hover:text-primary transition-colors">Health Log</p>
                  <p className="font-label-md text-on-surface-variant">Record symptoms</p>
                </div>
              </button>
              <button className="card-hover bg-surface-container/60 rounded-2xl p-4 flex items-center gap-3 text-left ripple group">
                <div className="w-10 h-10 rounded-xl bg-surface-variant flex items-center justify-center text-on-surface-variant pill-spin">
                  <span className="material-symbols-outlined">share</span>
                </div>
                <div>
                  <p className="font-label-lg font-medium text-on-surface group-hover:text-primary transition-colors">Share Report</p>
                  <p className="font-label-md text-on-surface-variant">Export adherence</p>
                </div>
              </button>
              <button className="card-hover bg-error-container/40 rounded-2xl p-4 flex items-center gap-3 text-left ripple group">
                <div className="w-10 h-10 rounded-xl bg-error-container flex items-center justify-center text-error pill-spin">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>emergency</span>
                </div>
                <div>
                  <p className="font-label-lg font-medium text-on-surface group-hover:text-primary transition-colors">Emergency</p>
                  <p className="font-label-md text-on-surface-variant">Quick alert</p>
                </div>
              </button>
            </div>
          </section>
        </Reveal>
      </main>

      {/* FAB */}
      <button
        onClick={() => navigate('/add-medicine')}
        className="fixed bottom-24 right-6 w-14 h-14 bg-primary text-on-primary rounded-2xl shadow-xl flex items-center justify-center active:scale-90 transition-transform z-40 group overflow-hidden fab-bounce hover:shadow-2xl hover:bg-[#0d4a35] duration-200"
        aria-label="Add medicine"
      >
        <span className="material-symbols-outlined text-[32px] group-hover:rotate-90 transition-transform duration-300">add</span>
        {/* Press ripple */}
        <div className="absolute inset-0 bg-white opacity-0 group-active:opacity-20 transition-opacity" />
        {/* Gradient edge glow */}
        <div className="absolute -inset-1 bg-gradient-to-t from-tertiary/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
      </button>
    </div>
  );
}
