import { SectionBorder, SectionTitle } from "../ui/elements";

export default function Origin() {
  return (
    <div className="flex flex-col w-full h-auto blue-bg justify-start">
      <SectionBorder />
      <div className="flex flex-col lg:flex-row w-full h-full gap-2 items-center">
        <div className="flex flex-col gap-6 w-full lg:w-1/2 p-6">
          < SectionTitle title="our origin" />
          <h1 className="text-sm md:text-base text-pretty text-white">
            The Fierce Five is a dynamic team of exceptionally talented
            individuals who united in September 2024 at the African Leadership
            University. Their mission is to advocate for and drive positive
            change in local communities by championing improved infrastructure.
            With a focus on sustainability, they aim to increase visibility
            around best practices in the responsible use of natural resources.
            By leveraging their collective expertise, they are committed to
            fostering a future where infrastructure development aligns with
            sustainable growth and environmental stewardship.
          </h1>
        </div>
        <div className="flex w-full lg:w-1/2 h-full justify-center p-2">
          <img
            className="w-full lg:w-2/3 h-auto border-4 border-yellow-400 rounded-md"
            src="/assets/teampic.webp"
            alt="Menu Button"
          />
        </div>
      </div>
    </div>
  );
}
