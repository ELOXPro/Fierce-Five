export default function NavMenu() {
  const menuItems = ["Home", "Team", "Challenges", "Archive"];

  return (
    <div className="flex w-full h-auto justify-between">
      <img
        className="w-[20%] md:w-[12%] lg:w-[6%] h-auto px-1 bg-yellow-400 m-1 rounded-md mix-blend-multiply"
        src="/src/assets/logo.jpg"
        alt="Logo"
      />
      <div className="hidden lg:grid grid-cols-4 w-[50%] h-full gap-2 p-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="relative text-base tracking-normal font-toony text-black hover:opacity-75 transition-all font-bold"
          >
            <h1 className="absolute w-full h-full flex items-center justify-center ">
              {item}
            </h1>
            <img
              className="w-full h-12"
              src="/src/assets/yellow button.png"
              alt="Menu Button"
            />
          </button>
        ))}
      </div>
      <div className="lg:hidden flex w-auto h-12">
        <button className="relative text-sm text-white hover:opacity-75 transition-all font-semibold">
          <h1 className="absolute -inset-x-2 w-full h-full flex items-center justify-center ">
            Menu
          </h1>
          <img
            className="w-full h-full"
            src="/src/assets/menu-button.png"
            alt="Menu Button"
          />
        </button>
      </div>
    </div>
  );
}
