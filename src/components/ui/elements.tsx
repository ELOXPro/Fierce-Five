type MenuButtonProps = {
  title: string;
  isActive: boolean;
};

export const MenuButton = ({ title, isActive }: MenuButtonProps) => {
  return (
    <button
      className={`flex w-full h-full text-base hover:tracking-wide font-toony p-1 menu-button-bg transition-all overflow-hidden shadow-lg`}
    >
      <h1
        className={`flex w-full h-full text-base hover:tracking-wide font-toony p-1 justify-center items-center transition-all ${
          isActive
            ? "bg-zinc-900 text-white tracking-wide"
            : "bg-yellow-400 text-black hover:bg-white"
        }`}
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

export const ChallengeCard = ({
  name,
  url,
  pic,
  challenge,
  description,
}: {
  name: string;
  url: string;
  pic: string;
  challenge: string;
  description: string;
}) => {
  return (
    <div className="relative w-full h-full menu-button-bg rounded-md shadow-lg shadow-zinc-700 overflow-hidden">
      <div className="absolute top-2 right-2 bg-yellow-400 text-zinc-900 text-xs font-bold py-1 px-2 rounded-md shadow-md">
        Challenge {challenge}
      </div>
      <div className="flex flex-col w-full h-full justify-start items-center gap-1 rounded-md overflow-hidden">
        <img
          src={pic}
          className="w-full h-1/2 object-cover"
          alt="Challenge Picture"
        />
        <div className="flex flex-col w-full h-1/2 py-2 bg-zinc-950 text-yellow-400 gap-4">
          <h1 className="text-xl bg-black font-toony capitalize mr-4 pl-1">
            {name}
          </h1>
          <h1 className="text-xs text-white px-2">{description}</h1>
          <a
            href={url}
            className="flex w-24 h-auto ml-2 justify-center items-center text-sm text-black hover:tracking-wide font-toony p-1 bg-yellow-400 transition-all rounded-md"
          >
            Watch
          </a>
        </div>
      </div>
    </div>
  );
};
