import { Link, useLocation } from "react-router-dom";
import { MenuButton } from "../ui/elements";
import { useEffect, useState } from "react";

export default function NavMenu() {
  const menuItems = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    { title: "The Project", path: "/projects" },
  ];

  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const screen = window.innerWidth;

  useEffect(() => {
    screen < 768 ? setIsOpen(false) : setIsOpen(true);
  }, [screen]);

  return (
    <div className="flex w-full h-full justify-between items-center">
      <img
        className="w-[10%] md:w-[8%] lg:w-[6%] h-full px-1 m-1 rounded-md bg-yellow-400"
        src="/assets/logo.jpg"
        alt="Logo"
      />

      <div className="hidden md:grid grid-cols-3 w-1/2 h-full gap-2 m-1">
        {menuItems.map((item, index) => (
          <Link key={index} to={item.path}>
            <MenuButton
              title={item.title}
              isActive={location.pathname === item.path}
            />
          </Link>
        ))}
      </div>
      <div className="md:hidden flex w-10 h-10 p-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative text-sm text-white hover:opacity-75 transition-all font-semibold"
        >
          <img
            className="w-full h-full p-1 bg-white rounded-md"
            src="/assets/menu-burger.png"
            alt="Menu Button"
          />
        </button>
        <div
          className={`fixed z-20 top-0 left-0 w-full ${
            isOpen ? "h-1/2" : "h-0"
          } flex flex-col bg-white shadow-lg shadow-zinc-900 transition-all overflow-hidden`}
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-10 h-10 p-2 text-sm text-white hover:opacity-75 transition-all font-semibold"
          >
            <img
              className="w-full h-full"
              src="/assets/close.png"
              alt="Menu Button"
            />
          </button>
          <div className="flex flex-col w-full h-full justify-center items-center gap-4">
            {menuItems.map((item, index) => (
              <Link className="w-2/3" key={index} to={item.path}>
                <MenuButton
                  title={item.title}
                  isActive={location.pathname === item.path}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
