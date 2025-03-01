import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const AppLayout = () => {
	return (
		<div className="min-h-screen w-screen ">
			<main className="w-screen">
				<NavBar />
				<Outlet />
			</main>
		</div>
	);
};

export default AppLayout;
