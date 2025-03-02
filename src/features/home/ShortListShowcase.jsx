import React from "react";

import ShortletCard from "../shortlet/ShortletCard";
import { NavLink } from "react-router-dom";

const ShortListShowcase = () => {
	return (
		<section className="w-screen py-24 bg-gray-100">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2
						className="text-5xl font-bold text-[#0B0B1F] mb-4"
						data-aos="fade-up"
					>
						Shortlist Showcase
					</h2>
					<div
						className="flex items-center justify-center gap-2 mb-4"
						data-aos="fade-up"
					>
						<span className="w-40 h-2 bg-blue-800 rounded-full"></span>
					</div>
					<p className="text-gray-500 text-2xl" data-aos="fade-up">
						Explore our handpicked selection of premium shortlets
					</p>
				</div>

				{/* Pass the limit prop to show only 6 cards */}
				<ShortletCard limit={13} />

				<div className="text-center mt-12" data-aos="fade-down">
					<a className="inline-block bg-blue-950 hover:bg-blue-900 text-white px-8 py-3 rounded-md transition-colors font-medium text-xl">
						<NavLink to="/shortlets">View All Shortlets</NavLink>
					</a>
				</div>
			</div>
		</section>
	);
};

export default ShortListShowcase;
