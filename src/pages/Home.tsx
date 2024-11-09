import Contact from "../components/sections/Contact";
import Hero from "../components/sections/Hero";
import Mission from "../components/sections/Mission";
import Team from "../components/sections/Team";

export default function Home() {

  return (
    <div className="font-mono">
      <Hero />
      <Mission />
      <Team />
      <Contact />
    </div>
  );
}
