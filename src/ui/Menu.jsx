import { createContext, useContext, useRef, useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Link } from "react-router-dom";
import UseOutsideClick from "../hooks/UseOutsideClick";

const MenuContext = createContext();

function Menu({ children }) {
  const [openMenu, setOpenMenu] = useState("");
  const open = setOpenMenu;
  const close = () => setOpenMenu("");

  return (
    <div className="md:hidden">
      <MenuContext.Provider value={{ open, close, openMenu, setOpenMenu }}>
        {children}
      </MenuContext.Provider>
    </div>
  );
}

function Toggle({ opens }) {
  const { openMenu, setOpenMenu } = useContext(MenuContext);

  return (
    <button onClick={() => setOpenMenu(openMenu === opens ? "" : opens)}>
      {openMenu === opens ? (
        <HiOutlineX className="text-3xl" />
      ) : (
        <HiOutlineMenu className="text-3xl" />
      )}
    </button>
  );
}

function List({ children, name }) {
  const { openMenu, close } = useContext(MenuContext);
  const ref = useRef();
  UseOutsideClick(close, ref);

  return (
    <>
      {openMenu === name && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={close}
        />
      )}

      <div
        ref={ref}
        className={`fixed top-0 right-0 h-dvh bg-white px-6 py-4 w-full sm:w-80 z-50 transform ${
          openMenu === name ? "translate-x-0" : "translate-x-full"
        } duration-300 ease-in-out transition-all`}
      >
        <div className="flex items-center justify-between border-b border-gray-300 pb-4">
          <Link
            to="/"
            className="text-3xl font-bold text-blue-600"
            onClick={close}
          >
            Debbal
          </Link>
          <HiOutlineX
            className="text-3xl hover:text-slate-400 duration-300 transition-colors cursor-pointer"
            onClick={close}
          />
        </div>
        {children}
      </div>
    </>
  );
}

function Buttons({ icon, name, path }) {
  const { close } = useContext(MenuContext);

  return (
    <ul className="pt-4">
      <li className="py-3 hover:bg-gray-200 duration-300 transition-colors">
        <Link to={path} className="flex items-center gap-2" onClick={close}>
          <span className="text-blue-500">{icon}</span>
          <span>{name}</span>
        </Link>
      </li>
    </ul>
  );
}

Menu.Toggle = Toggle;
Menu.List = List;
Menu.Buttons = Buttons;

export default Menu;
