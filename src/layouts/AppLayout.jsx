import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-[#f6f6f8] flex">
      <Sidebar />
      <main className="flex-1 px-10 py-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
