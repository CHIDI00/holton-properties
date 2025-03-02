import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const AppLayout = () => {
	return (
		<div className="min-h-screen w-screen ">
			<main className="w-full">
				<NavBar />
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default AppLayout;
