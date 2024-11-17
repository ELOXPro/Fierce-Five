import { SectionBorder, SectionTitle } from "../ui/elements";

export default function Mission() {
  return (
    <div className="flex flex-col  w-full h-auto orange-bg">
      <SectionBorder/>
      <div className="flex flex-col w-full h-full justify-center items-center gap-6 bg-black bg-opacity-10 p-4">
        <SectionTitle title="our mission" />
        <h1 className="text-sm md:text-base lg:text-lg text-pretty font-bold text-black text-center px-4">
          Our mission is to advocate for improved infrastructure in local
          communities through improved visibility and best practices in
          sustainability regarding natural resource use. We focus on access to
          clean water, reliable energy, efficient waste management, and
          resilient transportation systems. In doing this, we enable growth in
          the community in a sustainable manner with an improved quality of life
          by working at the grass-roots level with community members,
          governments, and private organizations.
        </h1>
      </div>
    </div>
  );
}
