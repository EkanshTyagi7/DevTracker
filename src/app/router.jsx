import AppLayout from "@/layouts/AppLayout";
import DailyLog from "@/pages/DailyLog";
import Dashboard from "@/pages/Dashboard";
import Insights from "@/pages/Insights";
import RoadmapDetail from "@/pages/RoadmapDetail";
import Roadmaps from "@/pages/Roadmaps";
import Settings from "@/pages/Settings";
import { createBrowserRouter } from "react-router-dom";


const router=createBrowserRouter([
    {
        element:<AppLayout />,
        children:[
            {path:"/" , element:<Dashboard />},
            {path:"/roadmaps" , element:<Roadmaps />},
            {path:"/roadmaps/:id" , element:<RoadmapDetail />},
            {path:"/log" , element: <DailyLog />},
            {path:"/insights" , element: <Insights />},
            {path:"/settings" , element:<Settings />},
        ]
    },
])

export default router