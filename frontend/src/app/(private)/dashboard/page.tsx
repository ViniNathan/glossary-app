import React from "react";

import DashboardFooter from "@/app/components/Dashboard/DashboardFooter";
import DashboardTopbar from "@/app/components/Dashboard/DashboardTopbar";
import Word from "@/app/components/Dashboard/Word";

function Dashboard() {
  return (
    <div className="flex flex-col justify-between items-center w-full h-full">
      <DashboardTopbar />
      <Word />
      <DashboardFooter />
    </div>
  );
}

export default Dashboard;
