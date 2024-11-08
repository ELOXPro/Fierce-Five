export default function Team() {
  return (
    <div className="flex flex-col gap-6 w-full h-72 teamback justify-start items-center">
      <div className="w-full h-[14px] yborder" />
      <div className="relative w-64 h-12 text-2xl text-black">
        <h1 className="absolute w-full h-full flex items-center justify-center font-black">
          Our Team
        </h1>
        <div className="w-full h-full yback" />
      </div>
      <h1 className=" text-xl text-pretty font-semibold text-orange-500 text-center p-4">
        Who are the people behind the Fierce Five?
      </h1>
    </div>
  );
}
