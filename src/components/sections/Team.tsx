import { MemberCard, SectionBorder, SectionTitle } from "../ui/elements";

export default function Team() {
  const team = [
    {
      name: "benitha rugwiro",
      imageUrl: "/assets/benitha.jpeg",
      role: "team manager",
    },
    {
      name: "eloi iradukunda",
      imageUrl: "/assets/eloi.jpg",
      role: "tech manager",
    },
    {
      name: "nero kayonga",
      imageUrl: "/assets/nero.jpg",
      role: "tasks manager",
    },
    {
      name: "julie uwineza",
      imageUrl: "/assets/julie.JPG",
      role: "research Manager",
    },
    {
      name: "shadrack nziza",
      imageUrl: "/assets/shadrack.jpg",
      role: "finance manager",
    },
  ];

  // Duplicate the array to create a seamless loop effect
  const infiniteTeam = [...team, ...team];

  return (
    <div className="flex flex-col w-full h-auto blue-bg">
      <SectionBorder />
      <div className="flex flex-col w-full justify-start items-center gap-6 bg-zinc-500 bg-opacity-15 py-4">
        <SectionTitle title="the team" />
        <h1 className="text-xl text-pretty font-bold text-white text-center px-4">
          Meet the people behind the wheels, driven by the change they want to
          make to the world.
        </h1>

        <div className="overflow-hidden w-full h-64">
          <div className="overflow-hidden w-[1280px] h-full relative">
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
