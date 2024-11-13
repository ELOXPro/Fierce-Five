export default function Hero() {
  return (
    <div className="relative w-full h-screen flex flex-col overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/assets/hero back.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      <div className="relative w-full h-full flex flex-col items-center justify-center z-10">
        <img
          className="absolute w-4/5 lg:w-1/3 animate-spin-slow glow-effect"
          src="/assets/globe.png"
          alt="Spinning Globe"
        />

        <div className="absolute font-stitch top-[40%] text-[8vw] text-yellow-400 mix-blend-exclusion z-10">
          FIERCE FIVE
        </div>

        <div className="absolute bottom-0 w-full h-[50%] bgg-gradient-to-t from-cyan-500 via-cyan-600 z-10" />
      </div>
    </div>
  );
}
