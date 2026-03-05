import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog – Slidez",
  robots: { index: false, follow: false },
};
export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#080808]">
      <p className="text-white/40 text-sm">Coming soon.</p>
    </main>
  );
}
