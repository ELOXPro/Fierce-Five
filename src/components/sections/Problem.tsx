import { SectionBorder, SectionTitle } from "../ui/elements";

export default function Problem() {
  return (
    <div className="flex flex-col w-full h-auto blue-bg justify-start">
      <SectionBorder />
      <div className="flex flex-col md:flex-row w-full h-full gap-2 items-center">
        <div className="flex flex-col gap-6 w-full lg:w-1/2 p-6">
          <SectionTitle title="Problem Statement" />
          <h1 className="text-sm md:text-base text-pretty text-white">
            In the Democratic republic of Congo(DRC),they are currently facing
            infranstructure as a big challenge,specifically road transport in
            Katanga district in the southern part of DRC.The roads started to
            deterioate in the 1980s when Congo gained their independence,and the
            roads have not been mantained ever since.Approximately only 11% of
            the DRC's road network is paved. The majority of roads are unpaved
            and often in poor condition, making transportation difficult,
            especially during the rainy season ,therefore the citizens are
            negatively affected since the households can hadly access healthcare
            especially mothers hence affecting their standards of living. There
            is embezzellement in the DRC whereby,government officials use the
            funds for building roads for their own interests. Additionally,the
            drivers do not have enough skills to mantain these roads whereby
            these drivers overload their trucks hence detereoating these roads
            more. This road transport problem is very crucial since it sets back
            many stakeholders including the businessses that find it hard to
            transport their products and the families that find it hard to
            access their basic needs.
          </h1>
        </div>
        <div className="flex w-1/2 h-full justify-center">
          <img
            className="w-full h-auto object-cover"
            src="/assets/problem.png"
            alt="Problem"
          />
        </div>
      </div>
    </div>
  );
}
