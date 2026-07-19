import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AiAssistantChat() {
  const navigate = useNavigate();
  const [isListening, setIsListening] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);

  return (
    <div className="page-enter">
      {/* CSS for voice wave animation */}
      <style>{`
        @keyframes wave-bar {
          0%, 100% { height: 8px; }
          50% { height: var(--h, 24px); }
        }
        .wave-bar-animated {
          width: 4px;
          background: linear-gradient(to top, var(--c, #95d4b3), var(--c2, #0f5238));
          border-radius: 999px;
          animation: wave-bar 1s ease-in-out infinite;
          animation-delay: var(--delay, 0s);
          --h: ${16 + Math.random() * 24}px;
          --c: #95d4b3;
          --c2: #0f5238;
        }
        @keyframes typing-bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-6px); }
        }
        .typing-dot { animation: typing-bounce 1.4s ease-in-out infinite; }
        .typing-dot:nth-child(2) { animation-delay: 0.2s; }
        .typing-dot:nth-child(3) { animation-delay: 0.4s; }
        @keyframes mic-pulse-ring {
          0% { transform: scale(1); opacity: 0.4; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        .mic-pulse-ring {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: var(--c, #0f5238);
          animation: mic-pulse-ring 1.5s ease-out infinite;
        }
        @keyframes slide-in-right {
          from { transform: translateX(20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slide-in-left {
          from { transform: translateX(-20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .msg-user { animation: slide-in-right 0.35s cubic-bezier(0.22, 1, 0.36, 1) both; }
        .msg-ai { animation: slide-in-left 0.35s cubic-bezier(0.22, 1, 0.36, 1) both; animation-delay: 0.2s; }
      `}</style>

      {/* Top App Bar */}
      <header className="bg-surface sticky top-0 z-50 flex justify-between items-center w-full px-margin-mobile py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center overflow-hidden relative group cursor-pointer scale-hover">
            {/* Green ring indicator */}
            <div className={`absolute -inset-[2px] rounded-full border-2 border-primary transition-opacity duration-300 ${isListening ? 'opacity-100' : 'opacity-0'}`} />
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyKE9UQlDt1DHXueaKSrEt0ncyqnZDIfZp4pbT92qqKnlcpGCVGQ4lwuuEmaEI-uyN0ISmO2KyeeqCmNhpLvDz5_zuxeK2N98VYzVoC8hMHZgXVhajRWvxn3oYUEpZ0MfzxPuGnicphn1JJ6vxFaGwwvbI3g_63YeRA2J-VkC-SGbCMPUVixvAik8fjdwxbW7FRVN2zg9NEFybC9ILeAdRlyW-1unZdQexgpBNjNoYqA5pgG26dyN5Tw"
              alt="AI Assistant"
            />
          </div>
          <div>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary">
              <span className="text-primary">Med</span>riya <span className="font-label-md text-on-surface-variant opacity-70">AI</span>
            </h1>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className={`w-2 h-2 rounded-full transition-colors duration-300 ${isListening ? 'bg-primary pulse-slow' : 'bg-outline'}`} />
              <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                {isListening ? 'Listening...' : 'Offline'}
              </span>
            </div>
          </div>
        </div>
        <button
          className="w-12 h-12 flex items-center justify-center rounded-full text-primary hover:bg-surface-container-low transition-colors relative ripple"
          aria-label="Notifications"
        >
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-error rounded-full border-2 border-surface pulse-slow" />
        </button>
      </header>

      {/* Main Content Canvas */}
      <main className="flex-1 flex flex-col overflow-hidden relative max-w-2xl mx-auto w-full px-margin-mobile">
        {/* Chat History Area */}
        <div className="flex-1 overflow-y-auto chat-scroll py-gutter flex flex-col gap-stack-lg">
          {/* System/Time Marker */}
          <div className="flex justify-center">
            <span className="bg-surface-container-low text-on-surface-variant text-label-md px-4 py-2 rounded-full shadow-sm">
              Today, 2:45 PM
            </span>
          </div>

          {/* User Message */}
          <div className="flex justify-end ml-12 msg-user">
            <div className="bg-primary text-on-primary px-5 py-3.5 rounded-2xl rounded-tr-none shadow-md max-w-[85%] ripple group/msg">
              <p className="font-body-lg text-body-lg leading-relaxed">What medicines do I have today?</p>
              <div className="flex justify-end items-center gap-1 mt-1 opacity-0 group-hover/msg:opacity-100 transition-opacity">
                <span className="font-label-md opacity-70">2:45 PM</span>
                <span className="material-symbols-outlined text-[14px] text-on-primary/50">check</span>
              </div>
            </div>
          </div>

          {/* AI Response */}
          <div className="flex justify-start mr-12 msg-ai">
            <div className="bg-surface-container-highest text-on-surface px-5 py-3.5 rounded-2xl rounded-tl-none shadow-md max-w-[85%] border border-surface-variant/50 group/msg hover:border-primary/20 transition-colors duration-300">
              <p className="font-body-lg text-body-lg leading-relaxed">
                Today you have{' '}
                <span className="font-bold text-primary inline-block scale-hover">&nbsp;Crocin&nbsp;</span>
                at 8 AM,{' '}
                <span className="font-bold text-primary inline-block scale-hover">&nbsp;Vitamin D&nbsp;</span>
                at 2 PM, and{' '}
                <span className="font-bold text-primary inline-block scale-hover">&nbsp;Metformin&nbsp;</span>
                at 8 PM.
              </p>
            </div>
          </div>

          {/* AI typing indicator */}
          <div className="flex justify-start mr-12">
            <div className="bg-surface-container-highest text-on-surface px-5 py-3.5 rounded-2xl rounded-tl-none shadow-md max-w-[85%] border border-surface-variant/50">
              <div className="flex items-center gap-1">
                <span className="typing-dot w-2 h-2 bg-outline-variant rounded-full inline-block" />
                <span className="typing-dot w-2 h-2 bg-outline-variant rounded-full inline-block" />
                <span className="typing-dot w-2 h-2 bg-outline-variant rounded-full inline-block" />
              </div>
            </div>
          </div>

          {/* Spacer for visual breathing room */}
          <div className="h-8" />
        </div>

        {/* Voice Interaction & Input Area */}
        <div className="bg-surface pt-gutter pb-stack-lg rounded-t-3xl shadow-2xl border-t border-surface-variant/30">
          {/* Voice Wave Animation */}
          <div className="flex justify-center items-end gap-[3px] h-8 mb-4">
            {Array.from({ length: 11 }).map((_, i) => (
              <div
                key={i}
                className={`wave-bar-animated ${isListening ? '' : 'opacity-20'}`}
                style={{ '--delay': `${Math.random() * 0.5}s`, height: isListening ? undefined : '6px' }}
              />
            ))}
          </div>

          {/* Mic and Input Row */}
          <div className="flex flex-col items-center gap-stack-lg px-4">
            {/* Mic Button */}
            <button
              onClick={() => setIsListening(!isListening)}
              className={`relative w-20 h-20 bg-primary text-on-primary rounded-full flex items-center justify-center active:scale-90 transition-all ripple group/mic shadow-lg hover:shadow-xl ${
                isListening ? 'ring-4 ring-primary/30' : ''
              }`}
            >
              {isListening && (
                <>
                  <span className="mic-pulse-ring" style={{ animationDelay: '0s' }} />
                  <span className="mic-pulse-ring" style={{ animationDelay: '0.5s' }} />
                  <span className="mic-pulse-ring" style={{ animationDelay: '1s' }} />
                </>
              )}
              <span className="material-symbols-outlined relative z-10 group-hover/mic:scale-110 transition-transform duration-300" style={{ fontVariationSettings: '"FILL" 1' }}>
                mic
              </span>
            </button>

            {/* Input Row */}
            <div className={`w-full flex items-center gap-3 bg-surface-container-low border rounded-full px-5 py-3 focus-within:ring-2 transition-all duration-300 ${
              inputFocused ? 'ring-primary border-primary/30 shadow-lg shadow-primary/5' : 'border-outline-variant'
            }`}>
              <input
                className="bg-transparent border-none focus:ring-0 w-full text-on-surface font-body-lg placeholder:text-outline outline-none"
                placeholder="Ask MedRiya AI anything..."
                type="text"
                onFocus={() => setInputFocused(true)}
                onBlur={() => setInputFocused(false)}
              />
              <button className="text-primary hover:bg-surface-variant p-2 rounded-full transition-all duration-200 ripple group/send scale-hover">
                <span className="material-symbols-outlined group-hover/send:-translate-y-1 group-hover/send:translate-x-1 transition-transform duration-300">send</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation Shell */}
      <div className="h-[80px]" />
    </div>
  );
}
