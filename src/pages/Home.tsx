import Challenges from "../components/sections/Challenges";
import Contact from "../components/sections/Contact";
import Hero from "../components/sections/Hero";
import Mission from "../components/sections/Mission";
import Project from "../components/sections/Project";
import Team from "../components/sections/Team";

export default function Home() {
  return (
    <div className="font-mono">
      <Hero />
      <Mission />
      <Challenges />
      <Project />
      <Team />
      <Contact />
    </div>
  );
}
