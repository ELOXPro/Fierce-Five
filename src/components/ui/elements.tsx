export const MenuButton = ({ title }: { title: string }) => {
  return (
    <button className="flex w-full h-full text-base hover:tracking-wide font-toony p-1 menu-button-bg bg-yellow-400 hover:bg-white hover:shadow-white  text-black transition-all font-bold overflow-hidden shadow-lg shadow-yellow-500">
      <h1
        className={`flex w-full h-full ${
          title === "The Project" ? "bg-orange-500" : "bg-yellow-400"
        } hover:bg-inherit transition-all justify-center`}
      >
        {title}
      </h1>
    </button>
  );
};

export const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex w-52 h-12 text-lg font-toony menu-button-bg py-[6px] text-black font-bold overflow-hidden shadow-lg">
      <h1 className="flex w-full h-full bg-yellow-400 tracking-[0.1px] justify-center items-center capitalize">
        {title}
      </h1>
    </div>
  );
};

export const GreenTitle = ({
  title,
  flip,
}: {
  title: string;
  flip: boolean;
}) => {
  return (
    <div
      className={`flex w-52 h-[60px] text-xl font-toony green-title py-[6px] ${
        flip && "transform -scale-x-100"
      } text-white overflow-hidden`}
    >
      <h1
        className={`flex w-full h-full tracking-[0.1px] justify-center items-center capitalize ${
          flip && "transform -scale-x-100"
        }`}
      >
        {title}
      </h1>
    </div>
  );
};

export const SectionBorder = () => {
  return <div className="w-full h-[12px] div-border" />;
};

export const FooterBorder = () => {
  return <div className="w-full h-[22px] footer-border" />;
};

export const MemberCard = ({
  name,
  url,
  role,
}: {
  name: string;
  url: string;
  role: string;
}) => {
  return (
    <div className="flex flex-col w-full h-full justify-start items-center gap-4 rounded-md">
      <div className="w-24 h-24 rounded-full profile-bg overflow-hidden p-1">
        <img
          src={url}
          className="w-full h-full rounded-full"
          alt="Team Member Picture"
        />
      </div>
      <div className="w-full h-auto p-4">
        <div className="w-full h-auto text-center p-2 bg-yellow-400 border-2 border-zinc-600 rounded-md">
          <h1 className="text-sm font-extra capitalise">{name}</h1>
          <h1 className="text-sm font-toony">{role}</h1>
        </div>
      </div>
      <img className="w-full h-auto" src="/assets/road.jpg" alt="good road" />
    </div>
  );
};
