import Origin from "../components/sections/Origin";
import Prototype from "../components/sections/Prototype";

export default function About() {

  return (
    <div className="font-mono">
      <div className="flex text-6xl w-full h-64 orange-bg font-extra capitalize items-center justify-center">
        Who we are
      </div>
      <Origin />
      <Prototype />
    </div>
  );
}
