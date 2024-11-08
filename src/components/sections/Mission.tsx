export default function Mission() {
  return (
    <div className="flex flex-col gap-6 w-full h-72 bg-gradient-to-t from-orange-500 via-yellow-500 to-orange-500 justify-start items-center">
      <div className="w-full h-[14px] yborder" />
      <div className="relative w-64 h-12 text-2xl text-black">
        <h1 className="absolute w-full h-full flex items-center justify-center font-black">
          Our Mission
        </h1>
        <div className="w-full h-full yback" />
      </div>
      <h1 className=" text-xl text-pretty font-semibold text-white text-center p-4">
        Our mission is to advocate for improved infrastructure in local
        communities through improved visibility and best practices in
        sustainability regarding natural resource use. We focus on access to
        clean water, reliable energy, efficient waste management, and resilient
        transportation systems. In doing this, we enable growth in the community
        in a sustainable manner with an improved quality of life by working at
        the grass-roots level with community members, governments, and private
        organizations.
      </h1>
    </div>
  );
}
