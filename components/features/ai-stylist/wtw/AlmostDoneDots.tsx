"use client";

export default function AlmostDoneDots() {
  return (
    <span className="inline-flex items-end gap-[3px] ml-1 h-[0.85em]" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="inline-block w-[5px] h-[5px] rounded-full bg-[#0a0a0a] animate-wtw-dot-bounce"
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </span>
  );
}
