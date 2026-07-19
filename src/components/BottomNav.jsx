import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home', icon: 'home' },
  { to: '/medicines', label: 'Medicines', icon: 'pill' },
  { to: '/chat', label: 'Chat', icon: 'emergency_recording' },
  { to: '/profile', label: 'Profile', icon: 'person' },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-base pb-6 pt-3 bg-surface-container/95 dark:bg-surface-container-highest backdrop-blur-lg rounded-t-2xl shadow-lg">
      {navItems.map(({ to, label, icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `relative flex flex-col items-center justify-center px-5 py-1 chip-spring ripple overflow-hidden transition-all rounded-full ${
              isActive
                ? 'bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary shadow-md'
                : 'text-on-surface-variant dark:text-outline-variant hover:bg-surface-variant dark:hover:bg-inverse-surface'
            }`
          }
        >
          {({ isActive }) => (
            <>
              {/* Active pill glow */}
              {isActive && (
                <span className="absolute inset-0 bg-gradient-to-r from-secondary-container/20 via-white/10 to-secondary-container/20 rounded-full animate-pulse pointer-events-none" />
              )}
              <span
                className="material-symbols-outlined relative z-10 icon-bounce"
                style={{ fontVariationSettings: isActive ? '"FILL" 1' : '' }}
              >
                {icon}
              </span>
              <span className="font-label-md text-label-md relative z-10">{label}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}
