import Problem from "../components/sections/Problem";
import Solution from "../components/sections/Solution";

export default function Projects() {
  return (
    <div className="font-mono">
      <div className="flex text-base md:text-6xl w-full h-64 orange-bg2 text-white font-extra capitalize items-center justify-center">
        Cheap Roads & Green Future
      </div>
      <Problem />
      <Solution />
    </div>
  );
}
