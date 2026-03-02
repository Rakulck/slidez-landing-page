"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Upload, User } from "lucide-react";

interface FloatingStylerProps {
  visible: boolean;
  onComplete: () => void;
}

const STEP1_TIME = 10;
const STEP2_TIME = 6;

/* ── Countdown ring ──────────────────────────────────────────── */
function CountdownRing({ seconds, total }: { seconds: number; total: number }) {
  const r = 16;
  const circ = 2 * Math.PI * r;
  const progress = (seconds / total) * circ;

  return (
    <svg width="44" height="44" className="-rotate-90">
      <circle cx="22" cy="22" r={r} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="2.5" />
      <circle
        cx="22" cy="22" r={r}
        fill="none"
        stroke="rgba(192,192,192,0.5)"
        strokeWidth="2.5"
        strokeDasharray={circ}
        strokeDashoffset={circ - progress}
        strokeLinecap="round"
        style={{ transition: "stroke-dashoffset 1s linear" }}
      />
    </svg>
  );
}

/* ── Main component ──────────────────────────────────────────── */
export function FloatingStyler({ visible, onComplete }: FloatingStylerProps) {
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [seconds, setSeconds] = useState(STEP1_TIME);
  const [minimized, setMinimized] = useState(false);
  const [chosenAvatar, setChosenAvatar] = useState<"default" | "upload" | null>(null);
  const [chosenGender, setChosenGender] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => { setMounted(true); }, []);

  const clearTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const startTimer = useCallback((duration: number, onExpire: () => void) => {
    clearTimer();
    setSeconds(duration);
    timerRef.current = setInterval(() => {
      setSeconds((s) => {
        if (s <= 1) {
          clearTimer();
          onExpire();
          return 0;
        }
        return s - 1;
      });
    }, 1000);
  }, []);

  const goToStep2 = useCallback(() => {
    setStep(2);
    startTimer(STEP2_TIME, () => {
      setTimeout(() => onComplete(), 300);
    });
  }, [startTimer, onComplete]);

  /* Reset + start on visible */
  useEffect(() => {
    if (!visible) {
      clearTimer();
      setStep(1);
      setSeconds(STEP1_TIME);
      setMinimized(false);
      setChosenAvatar(null);
      setChosenGender(null);
      return;
    }
    startTimer(STEP1_TIME, () => {
      // Auto-default avatar, move to gender step
      setChosenAvatar("default");
      goToStep2();
    });
  }, [visible]); // eslint-disable-line react-hooks/exhaustive-deps

  const handlePickAvatar = (type: "default" | "upload") => {
    if (type === "upload") {
      fileRef.current?.click();
      return;
    }
    clearTimer();
    setChosenAvatar("default");
    goToStep2();
  };

  const handleFileChange = () => {
    // Photo uploaded → infer gender → skip step 2
    clearTimer();
    setChosenAvatar("upload");
    setTimeout(() => onComplete(), 700);
  };

  const handlePickGender = (gender: string) => {
    clearTimer();
    setChosenGender(gender);
    setTimeout(() => onComplete(), 500);
  };

  const totalForRing = step === 1 ? STEP1_TIME : STEP2_TIME;

  const headerSub = step === 1
    ? seconds > 0 ? `Defaults in ${seconds}s` : "Using default…"
    : seconds > 0 ? `Skips in ${seconds}s` : "Continuing…";

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-6 z-[100]"
        >
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />

          <AnimatePresence mode="wait">
            {minimized ? (
              /* ── Minimized pill ── */
              <motion.button
                key="pill"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.22 }}
                onClick={() => setMinimized(false)}
                className="flex items-center gap-3 pl-3 pr-4 py-2.5 rounded-2xl border border-[rgba(192,192,192,0.14)] bg-[#0f0f0f]/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] cursor-pointer hover:border-[rgba(192,192,192,0.25)] transition-colors"
              >
                <div className="relative flex items-center justify-center w-[44px] h-[44px]">
                  <CountdownRing seconds={seconds} total={totalForRing} />
                  <span className="absolute text-sm font-semibold text-white tabular-nums">{seconds}</span>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-xs font-semibold text-white">
                    {step === 1 ? "Styling you…" : "Almost there…"}
                  </span>
                  <span className="text-[10px] text-white/35">tap to continue</span>
                </div>
              </motion.button>

            ) : (
              /* ── Expanded card ── */
              <motion.div
                key="card"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.22 }}
                className="w-[300px] rounded-2xl border border-[rgba(192,192,192,0.12)] bg-[#0f0f0f]/95 backdrop-blur-xl shadow-[0_16px_48px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)] overflow-hidden"
              >
                {/* Top highlight */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[rgba(192,192,192,0.3)] to-transparent" />

                {/* Header */}
                <div className="flex items-center justify-between px-4 pt-4 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="relative flex items-center justify-center w-[44px] h-[44px]">
                      <CountdownRing seconds={seconds} total={totalForRing} />
                      <span className="absolute text-sm font-bold text-white tabular-nums">{seconds}</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white leading-tight">
                        {step === 1 ? "How should we style you?" : "What's your gender?"}
                      </p>
                      <p className="text-[10px] text-white/35 mt-0.5">{headerSub}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setMinimized(true)}
                    className="w-6 h-6 rounded-lg flex items-center justify-center text-white/30 hover:text-white/70 hover:bg-white/[0.06] transition-all"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Divider */}
                <div className="h-px bg-[rgba(192,192,192,0.07)] mx-4" />

                {/* Step content */}
                <AnimatePresence mode="wait">
                  {step === 1 ? (
                    /* ── Step 1: Avatar or Upload ── */
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="grid grid-cols-2 gap-2.5 p-4"
                    >
                      {/* Default avatar */}
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => handlePickAvatar("default")}
                        className="flex flex-col items-center gap-2.5 rounded-xl border border-[rgba(192,192,192,0.1)] bg-[rgba(255,255,255,0.02)] hover:border-[rgba(192,192,192,0.25)] hover:bg-[rgba(255,255,255,0.04)] p-4 transition-all duration-200 cursor-pointer"
                      >
                        <div className="w-10 h-10 rounded-full bg-[rgba(192,192,192,0.1)] border border-[rgba(192,192,192,0.15)] flex items-center justify-center">
                          <User className="w-5 h-5 text-[#c0c0c0]" />
                        </div>
                        <div className="text-center">
                          <p className="text-[11px] font-semibold text-white leading-tight">Default</p>
                          <p className="text-[9px] text-white/30 mt-0.5">Try instantly</p>
                        </div>
                      </motion.button>

                      {/* Upload photo */}
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => handlePickAvatar("upload")}
                        className="flex flex-col items-center gap-2.5 rounded-xl border border-[rgba(192,192,192,0.1)] bg-[rgba(255,255,255,0.02)] hover:border-[rgba(192,192,192,0.25)] hover:bg-[rgba(255,255,255,0.04)] p-4 transition-all duration-200 cursor-pointer"
                      >
                        <div className="w-10 h-10 rounded-full bg-[rgba(192,192,192,0.1)] border border-[rgba(192,192,192,0.15)] flex items-center justify-center">
                          <Upload className="w-4 h-4 text-[#c0c0c0]" />
                        </div>
                        <div className="text-center">
                          <p className="text-[11px] font-semibold text-white leading-tight">Your Photo</p>
                          <p className="text-[9px] text-white/30 mt-0.5">Personalised fit</p>
                        </div>
                      </motion.button>
                    </motion.div>

                  ) : (
                    /* ── Step 2: Gender (only for default avatar) ── */
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="flex flex-col gap-2 p-4"
                    >
                      {["Male", "Female", "Non-binary"].map((g) => (
                        <motion.button
                          key={g}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => handlePickGender(g)}
                          className={`flex items-center justify-between px-4 py-3 rounded-xl border transition-all duration-200 cursor-pointer ${
                            chosenGender === g
                              ? "border-[rgba(192,192,192,0.5)] bg-[rgba(192,192,192,0.1)]"
                              : "border-[rgba(192,192,192,0.1)] bg-[rgba(255,255,255,0.02)] hover:border-[rgba(192,192,192,0.25)] hover:bg-[rgba(255,255,255,0.04)]"
                          }`}
                        >
                          <span className="text-sm font-medium text-white">{g}</span>
                          {chosenGender === g && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-4 h-4 rounded-full gradient-silver flex items-center justify-center"
                            >
                              <svg className="w-2.5 h-2.5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </motion.div>
                          )}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Step dots */}
                <div className="flex items-center justify-center gap-1.5 pb-3">
                  {[1, 2].map((s) => (
                    <div
                      key={s}
                      className={`rounded-full transition-all duration-300 ${
                        step === s
                          ? "w-4 h-1.5 bg-[rgba(192,192,192,0.6)]"
                          : "w-1.5 h-1.5 bg-[rgba(192,192,192,0.2)]"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
