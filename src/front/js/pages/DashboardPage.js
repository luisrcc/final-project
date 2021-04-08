import React from "react";
import { DashboardSidebar } from "../component/dashboard/DashboardSidebar";
import { DashboardContent } from "../component/dashboard/DashboardContent";
import { DashboardCards } from "../component/dashboard/DashboardCards";

export const DashboardPage = () => {
	return (
		<div className="container-fluid">
			<DashboardSidebar />
			<DashboardContent />
			<DashboardCards />
		</div>
	);
};
