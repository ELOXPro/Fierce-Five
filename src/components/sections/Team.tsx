import { MemberCard, SectionBorder, SectionTitle } from "../ui/elements";

export default function Team() {
  const team = [
    {
      name: "benitha rugwiro",
      imageUrl: "/assets/logo.jpg",
      role: "team manager",
    },
    {
      name: "eloi iradukunda",
      imageUrl: "/assets/eloi.jpg",
      role: "tech manager",
    },
    {
      name: "nero kayonga",
      imageUrl: "/assets/benitha.jpg",
      role: "tasks manager",
    },
    {
      name: "julie uwineza",
      imageUrl: "/assets/benitha.jpg",
      role: "well being",
    },
    {
      name: "shadrack nziza",
      imageUrl: "/assets/benitha.jpg",
      role: "researcher",
    },
  ];
  return (
    <div className="flex flex-col  w-full h-auto blue-bg ">
      <SectionBorder />
      <div className="flex flex-col w-full h-full justify-start items-center gap-6 bg-zinc-500 bg-opacity-15 p-4">
        <SectionTitle title="the team" />
        <h1 className=" text-xl text-pretty font-bold text-white text-center px-4">
          Meet the people behind the wheels, driven by the change they want to
          make to the world.
        </h1>
        <div className="grid grid-cols-5 w-full h-full gap-2">
        {team.map((item, index) => (
          <MemberCard name = {item.name} url={item.imageUrl} role={item.role} key={index}/>
        ))}
      </div>
      </div>
    </div>
  );
}
