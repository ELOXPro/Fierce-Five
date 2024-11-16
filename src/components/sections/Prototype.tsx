import { SectionBorder, SectionTitle } from "../ui/elements";
import Team from "./Team";

export default function Prototype() {
  return (
    <div className="flex flex-col w-full h-auto orange-bg justify-start">
      <SectionBorder />
      <div className="flex w-full h-full gap-2 items-center">
        <div className="flex w-1/2 h-full justify-center py-2">
          <img
            className="w-2/3 h-auto border-4 border-zinc-800 rounded-md"
            src="/assets/prototype.jpg"
            alt="Menu Button"
          />
        </div>
        <div className="flex flex-col gap-6 w-1/2 p-6">
          <SectionTitle title="our prototype" />
          <h1 className=" text-base text-pretty font-semibold text-zinc-800">
          The Fierce Five Prototype embodies the three core pillars of our mission: Sharing Knowledge, Hard Work, and Teamwork. These principles are seamlessly integrated into the design of the prototype, reflecting our commitment to achieving a unified vision. We firmly believe that by embracing these values, we are well-positioned to accomplish our ultimate goal: a Developed Africa driven by sustainable progress and community empowerment.
          </h1>
        </div>
      </div>
      <Team/>
    </div>
  );
}
