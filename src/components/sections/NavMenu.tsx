import { MenuButton } from "../ui/elements";

export default function NavMenu() {
  const menuItems = ["Home", "About Us", "Challenges", "The Project"];

  return (
    <div className="flex w-full h-full justify-between items-center">
      <img
        className="w-[20%] md:w-[12%] lg:w-[6%] h-full px-1 bg-yellow-400 m-1 rounded-md"
        src="/assets/logo.jpg"
        alt="Logo"
      />
      <div className="hidden lg:grid grid-cols-4 w-1/2 h-full gap-2">
        {menuItems.map((item, index) => (
          <MenuButton title = {item} key={index}/>
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
