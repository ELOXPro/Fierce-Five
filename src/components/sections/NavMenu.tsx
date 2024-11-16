import { Link, useLocation } from "react-router-dom";
import { MenuButton } from "../ui/elements";

export default function NavMenu() {
  const menuItems = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    { title: "The Project", path: "/projects" },
  ];

  const location = useLocation();

  return (
    <div className="flex w-full h-full justify-between items-center">
      <img
        className="w-[20%] md:w-[12%] lg:w-[6%] h-full px-1 m-1 rounded-md bg-yellow-400"
        src="/assets/logo.jpg"
        alt="Logo"
      />

      {/* Desktop Menu */}
      <div className="hidden lg:grid grid-cols-3 w-1/2 h-full gap-2 m-1">
        {menuItems.map((item, index) => (
          <Link key={index} to={item.path}>
            <MenuButton
              title={item.title}
              isActive={location.pathname === item.path}
            />
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex w-auto h-12">
        <button className="relative text-sm text-white hover:opacity-75 transition-all font-semibold">
          <h1 className="absolute -inset-x-2 w-full h-full flex items-center justify-center">
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
