export default function Problem() {
  return (
    <div className="flex flex-col w-full h-auto bg-orange-500 justify-start">
      <div className="w-full h-[14px] yborder" />
      <div className="flex w-full h-full gap-2">
        <div className="flex w-1/2 h-full justify-center">
          <img
            className="w-2/3 h-auto"
            src="/src/assets/solution.png"
            alt="Menu Button"
          />
        </div>
        <div className="flex flex-col gap-6 w-1/2 p-6">
          <div className="relative w-64 h-12 text-2xl text-black">
            <h1 className="absolute w-full h-full flex items-center justify-center font-black">
              Solution
            </h1>
            <div className="w-full h-full yback" />
          </div>
          <h1 className=" text-xl text-pretty font-semibold text-white">
            Our mission is to advocate for improved infrastructure in local
            communities through improved visibility and best practices in
            sustainability regarding natural resource use. We focus on access to
            clean water, reliable energy, efficient waste management, and
            resilient transportation systems. In doing this, we enable growth in
            the community in a sustainable manner with an improved quality of
            life by working at the grass-roots level with community members,
            governments, and private organizations.
          </h1>
        </div>
      </div>
    </div>
  );
}
