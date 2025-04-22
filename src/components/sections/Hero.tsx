export default function Hero() {
  return (
    <div className="relative w-full h-screen flex flex-col overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/assets/hero back.webm"
        autoPlay
        loop
        muted
        playsInline
      ></video>
      <div className="relative w-full h-full flex flex-col items-center justify-center z-10">
        <img
          className="absolute w-1/2 md:w-1/3 animate-spin-slow glow-effect"
          src="/assets/globe.webp"
          alt="Spinning Globe"
        />

        <div className="flex w-full h-full justify-center items-end mb-52 md:mb-0 md:items-center z-10 mix-blend-exclusion">
          <h1 className="font-stitch text-[10vw] md:text-[8vw] text-yellow-400">
            FIERCE FIVE
          </h1>
        </div>
      </div>
    </div>
  );
}
