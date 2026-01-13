import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return <div className="min-h-screen bg-zinc-50">
    <Outlet />
  </div>;
};

export default AppLayout;
