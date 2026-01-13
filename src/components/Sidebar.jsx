import { NavLink } from "react-router-dom";
import logo from "@/assets/DevTracker.svg";
import {
  House,
  ScrollText,
  Settings as SettingsIcon,
  ChartColumnBig,
  SquareChartGantt,
} from "lucide-react";

const NavItems = [
  { label: "Dashboard", path: "/", icons: <House /> },
  { label: "Roadmaps", path: "/roadmaps", icons: <SquareChartGantt /> },
  { label: "Daily Log", path: "/log", icons: <ScrollText /> },
  { label: "Insights", path: "/insights", icons: <ChartColumnBig /> },
  { label: "Settings", path: "/settings", icons: <SettingsIcon /> },
];

const Sidebar = () => {
  return (
    <aside className="bg-white w-72 p-4 flex flex-col gap-6">
      <div className="flex items-center ">
        <div className="w-20 h-20">
          <img className="w-full" src={logo} alt="logo" />
        </div>
        <span className="font-bold text-xl -ml-2.5">DevTracker</span>
      </div>
      <nav className="flex flex-col gap-3">
        {NavItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `rounded-lg px-4 py-1 w-full flex items-center gap-2 text-2xl font-medium transition ${
                isActive ? "bg-[#ede9fd] text-[#4B2BEE]" : ""
              } `
            }
          >
            {item.icons}
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
