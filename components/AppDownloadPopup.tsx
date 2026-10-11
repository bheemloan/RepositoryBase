"use client";

import { useState, useEffect } from "react";

export const AppDownloadPopup = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <>
      {/* Sticky Bottom Banner */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-[999] transition-transform duration-300 ease-out ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="bg-gradient-to-r from-[#0a1535] via-[#132a5c] to-[#0a1535] text-white shadow-[0_-10px_40px_rgba(0,0,0,0.3)] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-5 flex items-center justify-between gap-4">
            {/* LEFT: Icon + Text */}
            <div className="flex items-center gap-4 min-w-0">
              <div className="hidden sm:flex flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 items-center justify-center text-2xl shadow-lg">
                📱
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <p className="text-sm sm:text-base font-bold truncate">
                    Get the BheemLoan App
                  </p>
                  <span className="hidden sm:inline-block bg-yellow-400 text-[#0a1535] text-[10px] font-bold px-2 py-0.5 rounded">
                    NEW
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 truncate">
                  Manage loans, track EMI & check CIBIL score on the go
                </p>
              </div>
            </div>

            {/* RIGHT: Store buttons + Close */}
            <div className="flex items-center gap-2.5 flex-shrink-0">
              <button className="hidden sm:flex items-center gap-2.5 bg-black/40 hover:bg-black/60 border border-white/20 rounded-lg px-4 py-2.5 transition">
                <span className="text-xl">▶️</span>
                <div className="text-left leading-none">
                  <p className="text-[9px] text-slate-300">GET IT ON</p>
                  <p className="text-xs font-semibold">Google Play</p>
                </div>
              </button>

              <button className="hidden sm:flex items-center gap-2.5 bg-black/40 hover:bg-black/60 border border-white/20 rounded-lg px-4 py-2.5 transition">
                <span className="text-xl">🍎</span>
                <div className="text-left leading-none">
                  <p className="text-[9px] text-slate-300">Download on</p>
                  <p className="text-xs font-semibold">App Store</p>
                </div>
              </button>

              <button className="sm:hidden bg-white text-[#0a1535] text-sm font-bold px-4 py-2.5 rounded-lg whitespace-nowrap">
                Download
              </button>

              <button
                onClick={() => {
                  setDismissed(true);
                  setVisible(false);
                }}
                aria-label="Close banner"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-red-500 text-white flex items-center justify-center text-base transition flex-shrink-0"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
