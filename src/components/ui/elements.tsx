export const MenuButton = ({ title }: { title: string }) => {
  return (
    <button className="flex w-full h-full text-base tracking-normal font-toony p-1 menu-button-bg bg-yellow-400 hover:bg-white hover:shadow-white  text-black transition-all font-bold overflow-hidden shadow-lg shadow-yellow-500">
      <h1 className="flex w-full h-full bg-yellow-400 hover:bg-inherit transition-all justify-center">
        {title}
      </h1>
    </button>
  );
};

export const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex w-64 h-12 text-lg font-toony menu-button-bg py-[6px] text-black font-bold overflow-hidden">
      <h1 className="flex w-full h-full bg-yellow-400 tracking-[0.1px] justify-center items-center capitalize">
        {title}
      </h1>
    </div>
  );
};

export const SectionBorder = () => {
  return <div className="w-full h-[12px] div-border" />;
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
    <div className="flex flex-col w-full h-full justify-start items-center gap-4">
      <div className="w-20` h-20 rounded-full menu-button-bg overflow-hidden p-2">
        <img src={url} className="w-full h-full rounded-full" alt="Team Member Picture" />
      </div>
      <div className="w-full h-auto text-center">
        <h1 className="text-sm font-jackpot capitalise">{name}</h1>
        <h1 className="text-sm font-toony">{role}</h1>
      </div>
    </div>
  );
};
