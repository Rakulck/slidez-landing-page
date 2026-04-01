"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Upload, ChevronLeft } from "lucide-react";
import Image from "next/image";

interface FloatingStylerProps {
  visible: boolean;
  onComplete: (payload: FloatingStylerOnCompletePayload) => void;
}

export type FloatingStylerOnCompletePayload = {
  avatar: "model-preset" | "upload";
  modelSrc?: string;
  chosenGender?: "Men" | "Women";
  uploadedFile?: File | null;
};

const STEP1_TIME = 59;

/* ── 2 models per gender ─────────────────────────────────────── */
const GENDERED_MODELS = {
  Women: [
    { id: "blonde-woman",   src: "/models/blonde-woman.png"   },
    { id: "brunette-woman", src: "/models/brunette-woman.png" },
  ],
  Men: [
    { id: "blonde-white-man", src: "/models/blonde-white-man.png" },
    { id: "black-man",        src: "/models/black-man.png"        },
  ],
} as const;

const DEFAULT_GENDER  = "Men"  as const;
const DEFAULT_SRC     = GENDERED_MODELS.Men[0].src;

/* ── Slide animation helpers ─────────────────────────────────── */
const slideIn  = (dir: 1 | -1) => ({ opacity: 0, x: dir * 24 });
const slideOut = (dir: 1 | -1) => ({ opacity: 0, x: dir * -24 });

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
  const [mounted,      setMounted]      = useState(false);
  const [step,         setStep]         = useState<1 | 2>(1);
  const [gender,       setGender]       = useState<"Men" | "Women" | null>(null);
  const [seconds,      setSeconds]      = useState(STEP1_TIME);
  const [minimized,    setMinimized]    = useState(false);
  const [chosenId,     setChosenId]     = useState<string | null>(null);
  const timerRef       = useRef<ReturnType<typeof setInterval> | null>(null);
  const fileRef        = useRef<HTMLInputElement>(null);
  const uploadedRef    = useRef<File | null>(null);

  useEffect(() => { setMounted(true); }, []);

  const clearTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const startTimer = useCallback((duration: number, onExpire: () => void) => {
    clearTimer();
    setSeconds(duration);
    timerRef.current = setInterval(() => {
      setSeconds((s) => {
        if (s <= 1) { clearTimer(); onExpire(); return 0; }
        return s - 1;
      });
    }, 1000);
  }, []);

  /* Reset + start on visible */
  useEffect(() => {
    if (!visible) {
      clearTimer();
      setStep(1);
      setGender(null);
      setSeconds(STEP1_TIME);
      setMinimized(false);
      setChosenId(null);
      return;
    }
    startTimer(STEP1_TIME, () => {
      setTimeout(() => {
        onComplete({ avatar: "model-preset", modelSrc: DEFAULT_SRC, chosenGender: DEFAULT_GENDER, uploadedFile: null });
      }, 300);
    });
  }, [visible]); // eslint-disable-line react-hooks/exhaustive-deps

  /* Step 1 → pick gender */
  const handlePickGender = (g: "Men" | "Women") => {
    setGender(g);
    setStep(2);
  };

  /* Step 2 → pick model */
  const handlePickModel = (src: string, id: string) => {
    clearTimer();
    setChosenId(id);
    setTimeout(() => {
      onComplete({ avatar: "model-preset", modelSrc: src, chosenGender: gender ?? DEFAULT_GENDER, uploadedFile: null });
    }, 380);
  };

  const handlePickUpload = () => { uploadedRef.current = null; fileRef.current?.click(); };

  const handleFileChange = () => {
    const file = fileRef.current?.files?.[0] ?? null;
    if (!file) return;
    clearTimer();
    uploadedRef.current = file;
    setTimeout(() => { onComplete({ avatar: "upload", uploadedFile: file }); }, 300);
  };

  const headerTitle = step === 1 ? "Who's wearing it?" : "Pick your model";
  const headerSub   = seconds > 0 ? `Defaults in ${seconds}s` : "Using default…";

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
          <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />

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
                  <CountdownRing seconds={seconds} total={STEP1_TIME} />
                  <span className="absolute text-sm font-semibold text-white tabular-nums">{seconds}</span>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-xs font-semibold text-white">Styling you…</span>
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
                    {/* Back button (step 2 only) */}
                    {step === 2 && (
                      <motion.button
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        onClick={() => setStep(1)}
                        className="w-7 h-7 rounded-lg flex items-center justify-center text-white/40 hover:text-white/80 hover:bg-white/[0.07] transition-all mr-0.5"
                        aria-label="Back to gender"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </motion.button>
                    )}

                    {step === 1 && (
                      <div className="relative flex items-center justify-center w-[44px] h-[44px]">
                        <CountdownRing seconds={seconds} total={STEP1_TIME} />
                        <span className="absolute text-sm font-bold text-white tabular-nums">{seconds}</span>
                      </div>
                    )}

                    <div>
                      <p className="text-xs font-semibold text-white leading-tight">{headerTitle}</p>
                      {step === 1 && <p className="text-[10px] text-white/35 mt-0.5">{headerSub}</p>}
                      {step === 2 && gender && (
                        <p className="text-[10px] text-white/35 mt-0.5">{gender === "Women" ? "Women's models" : "Men's models"}</p>
                      )}
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

                    /* ── Step 1: Gender ── */
                    <motion.div
                      key="gender"
                      initial={slideIn(1)}
                      animate={{ opacity: 1, x: 0 }}
                      exit={slideOut(-1)}
                      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                      className="flex flex-col gap-2.5 p-4"
                    >
                      <p className="text-[10px] text-white/30 font-medium uppercase tracking-widest mb-0.5">Select gender</p>

                      {(["Women", "Men"] as const).map((g) => (
                        <motion.button
                          key={g}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => handlePickGender(g)}
                          className="group flex items-center justify-between w-full px-5 py-4 rounded-xl border border-[rgba(192,192,192,0.12)] bg-[rgba(255,255,255,0.03)] hover:border-[rgba(192,192,192,0.4)] hover:bg-[rgba(255,255,255,0.06)] transition-all duration-200 cursor-pointer"
                        >
                          <span className="text-[15px] font-semibold text-white/80 group-hover:text-white transition-colors">{g}</span>
                          <ChevronLeft className="w-4 h-4 text-white/25 group-hover:text-white/60 rotate-180 transition-colors" />
                        </motion.button>
                      ))}

                      {/* Upload — available from step 1 too */}
                      <div className="flex items-center gap-2 mt-1 mb-0.5">
                        <div className="flex-1 h-px bg-[rgba(192,192,192,0.08)]" />
                        <span className="text-[9px] text-white/20 uppercase tracking-widest">or use your photo</span>
                        <div className="flex-1 h-px bg-[rgba(192,192,192,0.08)]" />
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={handlePickUpload}
                        className="group flex items-center gap-3 w-full rounded-xl border border-dashed border-[rgba(192,192,192,0.3)] bg-[rgba(255,255,255,0.03)] hover:border-[rgba(192,192,192,0.6)] hover:bg-[rgba(255,255,255,0.07)] px-4 py-3 transition-all duration-200 cursor-pointer"
                      >
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[rgba(255,255,255,0.07)] group-hover:bg-[rgba(255,255,255,0.12)] transition-colors flex-shrink-0">
                          <Upload className="w-4 h-4 text-white" />
                        </div>
                        <div className="text-left">
                          <p className="text-[12px] font-semibold text-white leading-tight">Upload Your Photo</p>
                          <p className="text-[10px] text-white/45 mt-0.5">Personalised fit</p>
                        </div>
                      </motion.button>
                    </motion.div>

                  ) : (

                    /* ── Step 2: 2 model cards ── */
                    <motion.div
                      key={`models-${gender}`}
                      initial={slideIn(1)}
                      animate={{ opacity: 1, x: 0 }}
                      exit={slideOut(-1)}
                      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                      className="p-4 flex flex-col gap-3"
                    >
                      {/* 2-col model grid */}
                      <div className="grid grid-cols-2 gap-3">
                        {(GENDERED_MODELS[gender ?? "Men"]).map((model, i) => (
                          <motion.button
                            key={model.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, delay: i * 0.06 }}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.96 }}
                            onClick={() => handlePickModel(model.src, model.id)}
                            className={`group relative rounded-xl overflow-hidden border transition-all duration-200 cursor-pointer ${
                              chosenId === model.id
                                ? "border-[rgba(192,192,192,0.65)] ring-1 ring-[rgba(192,192,192,0.3)]"
                                : "border-[rgba(192,192,192,0.12)] hover:border-[rgba(192,192,192,0.45)]"
                            }`}
                          >
                            <div className="relative w-full" style={{ height: 148 }}>
                              <Image
                                src={model.src}
                                alt="model"
                                fill
                                className="object-cover object-top"
                                sizes="130px"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200" />
                              {chosenId === model.id && <div className="absolute inset-0 bg-white/5" />}
                            </div>
                          </motion.button>
                        ))}
                      </div>

                      {/* Upload */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={handlePickUpload}
                        className="group flex items-center gap-3 w-full rounded-xl border border-dashed border-[rgba(192,192,192,0.3)] bg-[rgba(255,255,255,0.03)] hover:border-[rgba(192,192,192,0.6)] hover:bg-[rgba(255,255,255,0.07)] px-4 py-3 transition-all duration-200 cursor-pointer"
                      >
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[rgba(255,255,255,0.07)] group-hover:bg-[rgba(255,255,255,0.12)] transition-colors flex-shrink-0">
                          <Upload className="w-4 h-4 text-white" />
                        </div>
                        <div className="text-left">
                          <p className="text-[12px] font-semibold text-white leading-tight">Upload Your Photo</p>
                          <p className="text-[10px] text-white/45 mt-0.5">Personalised fit</p>
                        </div>
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Step dots */}
                <div className="flex items-center justify-center gap-1.5 pb-3">
                  {[1, 2].map((s) => (
                    <div
                      key={s}
                      className={`rounded-full transition-all duration-300 ${
                        step === s ? "w-4 h-1.5 bg-[rgba(192,192,192,0.6)]" : "w-1.5 h-1.5 bg-[rgba(192,192,192,0.2)]"
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
