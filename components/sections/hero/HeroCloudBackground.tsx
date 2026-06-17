export default function HeroCloudBackground() {
  return (
    <>
      <div
        className="pointer-events-none absolute -left-[120px] -top-[80px] z-0 h-[560px] w-[560px] rounded-full"
        style={{ background: "radial-gradient(circle, #f2f3f6 0%, transparent 70%)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-[80px] top-[60px] z-0 h-[500px] w-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, #f5f6f8 0%, transparent 68%)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[-60px] left-[30%] z-0 h-[300px] w-[400px] rounded-full"
        style={{ background: "radial-gradient(circle, #ecedf0 0%, transparent 70%)" }}
        aria-hidden
      />
    </>
  );
}
