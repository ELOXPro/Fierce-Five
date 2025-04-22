import { MemberCard, SectionBorder, SectionTitle } from "../ui/elements";

export default function Team() {
  const team = [
    {
      name: "benitha rugwiro",
      imageUrl: "/assets/benitha.webp",
      role: "team leader",
    },
    {
      name: "eloi iradukunda",
      imageUrl: "/assets/eloi.webp",
      role: "tech manager",
    },
    {
      name: "nero kayonga",
      imageUrl: "/assets/nero.webp",
      role: "organiser",
    },
    {
      name: "julie uwineza",
      imageUrl: "/assets/julie.webp",
      role: "secretary",
    },
    {
      name: "shadrack nziza",
      imageUrl: "/assets/shadrack.webp",
      role: "finance manager",
    },
  ];

  const infiniteTeam = [...team, ...team];

  return (
    <div className="flex flex-col w-full h-auto blue-bg">
      <SectionBorder />
      <div className="flex flex-col w-full justify-start items-center gap-6 py-4">
        <SectionTitle title="the team" />
        <h1 className="text-sm md:text-base lg:text-lg text-pretty font-bold text-yellow-400 text-center px-4">
          Meet the people behind the wheels, driven by the change they want to
          make to the world.
        </h1>

        <div className="overflow-hidden w-full h-64">
          <div className="overflow-hidden min-w-[1280px] h-full relative">
            <div className="flex animate-infinite-scroll">
              {infiniteTeam.map((item, index) => (
                <MemberCard
                  name={item.name}
                  url={item.imageUrl}
                  role={item.role}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
