import React from "react";
import ShortletCard from "./ShortletCard";
import { NavLink } from "react-router-dom";

const ShortletContent = () => {
	return (
		<>
			<div className="w-full bg-blue-950 py-20 md:py-32 flex flex-col justify-center items-center mt-28 text-white">
				<h2 className="text-5xl mb-4 font-semibold">Home for Rent</h2>
				<p className="text-2xl">
					<a href="" className="text-yellow-700 ">
						<NavLink to="/">Home </NavLink>
					</a>
					/ Select your preferred home and go for it
				</p>
			</div>

			<ShortletCard />
		</>
	);
};

export default ShortletContent;
