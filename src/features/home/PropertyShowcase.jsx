import React from "react";
import { FaBath, FaBed, FaRulerCombined } from "react-icons/fa";
import { properties } from "../properties/propertiesData";
import PropertyCard from "../properties/PropertyCard";

const PropertyShowcase = () => {
	return (
		<section className="w-screen py-24 bg-gray-100">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2
						className="text-5xl font-bold text-[#0B0B1F] mb-4"
						data-aos="fade-up"
					>
						Featured Properties for sale
					</h2>
					<div
						className="flex items-center justify-center gap-2 mb-4"
						data-aos="fade-up"
					>
						<span
							className="w-40 h-2 bg-blue-800 rounded-full"
							data-aos="fade-up"
						></span>
					</div>
					<p className="text-gray-500 text-2xl">
						Explore our handpicked selection of premium properties
					</p>
				</div>

				<PropertyCard limit={13} />

				<div className="text-center mt-12" data-aos="fade-down">
					<a
						href="buy-property-grid.html"
						className="inline-block bg-blue-950 hover:bg-blue-900 text-white px-8 py-3 rounded-md transition-colors font-medium text-xl"
					>
						View All Properties
					</a>
				</div>
			</div>
		</section>
	);
};

export default PropertyShowcase;
