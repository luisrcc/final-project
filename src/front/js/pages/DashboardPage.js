import React from "react";
import { HeaderBar } from "../component/dashboard/HeaderBar";
import { HeaderBar } from "../component/dashboard/NavigationMenu";

export const DashboardPage = () => {
	return (
		<div className="container">
			<HeaderBar />
			<NavigationMenu />
		</div>
	);
};
