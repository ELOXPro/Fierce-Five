import {
  ChallengeCard,
  SectionBorder,
  SectionTitle,
} from "../ui/elements";

export default function Challenges() {
  const challenges = [
    {
      name: "the introduction",
      pic: "/assets/team.png",
      url: "https://www.youtube.com/watch?v=qhQO7mpLKxU",
      challenge: "1",
      description:
        "As a first step, we introduced ourselves to the world, our interests and roles.",
    },
    {
      name: "orango tribe",
      pic: "/assets/orango.jpg",
      url: "https://www.youtube.com/watch?v=P-dFlBw5AW8",
      challenge: "2",
      description:
        "Second, we made a visit to the Orango Tribe to learn about their culture and their way of life.",
    },
    {
      name: "spreading education",
      pic: "/assets/school.png",
      url: "https://www.youtube.com/watch?v=p5bHjZzQbjU",
      challenge: "3",
      description:
        "Third, we visited Les Hirondelles den don bosco and taught them the Khan Academy way of learning.",
    },
    {
      name: "a visit in the mines",
      pic: "/assets/mines.png",
      url: "https://www.youtube.com/watch?v=oJaa9UWyUQU",
      challenge: "4",
      description:
        "Fourth, we made a visit to the mines and we learnt about the process mining of wolfram ",
    },
    {
      name: "the plan was",
      pic: "/assets/plan.png",
      url: "https://youtu.be/watch?v=JCBsgXtrhv0",
      challenge: "5",
      description:
        "And Lastly, we breakdown our mission and how we are planning to execute it with our team members",
    },
  ];

  return (
    <div className="flex flex-col w-full h-auto blue-bg">
      <SectionBorder />
      <div className="flex flex-col w-full justify-start items-center gap-6 bg-zinc-800 py-4">
        <SectionTitle title="the challenges" />
        <h1 className="text-xl text-pretty font-bold text-yellow-400 text-center px-4">
          a Recap of our E-LAB Journey through the video challenges.
        </h1>
        <div className="grid grid-cols-5 p-2 gap-2 w-full h-full">
          {challenges.map((item, index) => (
            <ChallengeCard
              name={item.name}
              url={item.url}
              pic={item.pic}
              description={item.description}
              challenge={item.challenge}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
