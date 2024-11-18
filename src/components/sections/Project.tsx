import { SectionBorder, SectionTitle } from "../ui/elements";

export default function Project() {
  return (
    <div className="flex flex-col w-full h-auto orange-bg2">
      <SectionBorder />
      <div className="flex w-full h-full">
        <div className="flex flex-col w-full lg:w-1/2 h-full justify-center items-center gap-4 p-4">
          <SectionTitle title="our project" />
          <h1 className="text-sm md:text-base text-pretty font-bold text-black text-center px-4">
            We have come up with a solution of combining recycled asphalt,
            crushed stones, and gravel stones to harden the road against hazards
            like heavy rainfall and also build retaining holes to redirect the
            water from damaging the roads. In addition, we will introduce
            campaigns that will teach the truck drivers and the local community
            how to maintain these roads.
          </h1>
          <a href="https://fierce5.netlify.app/projects" className="flex w-24 h-auto ml-2 justify-center items-center text-sm text-black hover:tracking-wide font-toony p-1 bg-yellow-400 transition-all rounded-md">Read More</a>
        </div>
        <img
          src="/assets/curve.png"
          className="hidden lg:flex w-1/2 h-full object-cover"
          alt="Challenge Picture"
        />
      </div>
    </div>
  );
}
