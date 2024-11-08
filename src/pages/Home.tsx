import Contact from "../components/sections/Contact";
import Hero from "../components/sections/Hero";
import Mission from "../components/sections/Mission";
import Problem from "../components/sections/Problem";
import Solution from "../components/sections/Solution";
import Team from "../components/sections/Team";

export default function Home() {
  
  return (
    <div>
      <Hero />
      <Mission />
      <Problem />
      <Solution />
      <Team />
      <Contact />
    </div>
  );
}
