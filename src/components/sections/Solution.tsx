import { SectionBorder, SectionTitle } from "../ui/elements";

export default function Solution() {
  return (
    <div className="flex flex-col w-full h-auto orange-bg2 justify-start">
      <SectionBorder />
      <div className="flex flex-col w-full h-full justify-center items-center gap-6 bg-black bg-opacity-10 p-4">
        <SectionTitle title="Solution Statement" />
        <h1 className=" text-base text-center text-pretty font-semibold text-zinc-800">
          We have come up with a solution of combining recycled asphalt ,
          crushed stones, and gravel stones to harden the road against hazards
          like heavy rainfall and also build retaining holes to redirect the
          water from damaging the roads. In addition, we will introduce
          campaigns that will teach the truck drivers and the local community
          how to maintain these roads.
        </h1>
        <img
          className="w-1/2 h-auto border-4 border-zinc-800 rounded-md"
          src="/assets/plan.png"
          alt="The Plan"
        />
      </div>
    </div>
  );
}
