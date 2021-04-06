import React from "react";
import { Sidebar } from "../component/dashboard/Sidebar";
import { DashboardContent } from "../component/dashboard/DashboardContent";
// import { DashboardCards } from "../component/dashboard/DashboardCards";

export const DashboardPage = () => {
	return (
		<div className="">
			<div className="row" id="wrapper">
				<div className="col-md-3">
					<Sidebar />
				</div>
				<div className="col-md-6">
					{/* <DashboardCards /> */}
					<DashboardContent />
				</div>
			</div>
		</div>
	);
};
