import { Link, NavLink } from "react-router-dom";
import Menu from "../ui/Menu";

import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineServer,
  HiOutlineBriefcase,
  HiOutlinePhone,
} from "react-icons/hi";

function Header() {
  return (
    <div className="fixed z-40 bg-white top-0 right-0 w-full px-6 py-4 flex items-center justify-between shadow-md">
      <Link to="/" className="text-3xl font-bold text-blue-600">
        Debbal
      </Link>
      <div>
        <ul className="hidden items-center gap-4 md:flex ">
          <li>
            <NavLink
              className={({ isActive }) =>
                `px-4 ${isActive ? "text-blue-600" : "text-slate-950"}`
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `px-4 ${isActive ? "text-blue-600" : "text-slate-950"}`
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `px-4 ${isActive ? "text-blue-600" : "text-slate-950"}`
              }
              to="/service"
            >
              Service
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `px-4 ${isActive ? "text-blue-600" : "text-slate-950"}`
              }
              to="/portfolio"
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `px-4 ${isActive ? "text-blue-600" : "text-slate-950"}`
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <Menu>
          <Menu.Toggle opens="open" />

          <Menu.List name="open">
            <Menu.Buttons
              name="Home"
              path="/"
              icon={<HiOutlineHome size={20} />}
            />
            <Menu.Buttons
              name="About"
              path="/about"
              icon={<HiOutlineUser size={20} />}
            />
            <Menu.Buttons
              name="Service"
              path="/service"
              icon={<HiOutlineServer size={20} />}
            />
            <Menu.Buttons
              name="Portfolio"
              path="/portfolio"
              icon={<HiOutlineBriefcase size={20} />}
            />
            <Menu.Buttons
              name="Contact"
              path="/contact"
              icon={<HiOutlinePhone size={20} />}
            />
          </Menu.List>
        </Menu>
      </div>
    </div>
  );
}

export default Header;
