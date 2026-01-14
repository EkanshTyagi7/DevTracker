import ActiveRoadmapsCard from "@/components/ActiveRoadmapsCard";
import ConsistencyCard from "@/components/ConsistencyCard";
import Page from "@/components/Page";
import TodayFocusCard from "@/components/TodayFocusCard";
import WeakAreasCard from "@/components/WeakAreasCard";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-6">
      <Page title={"Dashboard"}>
        <p> Overview of your learning progress.</p>
      </Page>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <TodayFocusCard />
        <ActiveRoadmapsCard />
        <WeakAreasCard />
        <ConsistencyCard />
      </div>
    </div>
  );
};

export default Dashboard;
