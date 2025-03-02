import React, { useState } from "react";
// Fix the import to match what's actually exported
import { shortletData } from "./shortletData";
// Or if it's a default export, use:
// import shortlets from "./shortletData";
import { HiHeart } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { FaBath, FaBed, FaRulerCombined } from "react-icons/fa";

const ShortletContent = () => {
	const [favorites, setFavorites] = useState({});

	const toggleFavorite = (id) => {
		setFavorites((prev) => ({
			...prev,
			[id]: !prev[id],
		}));
	};

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

			<div className="container mx-auto px-4 py-20">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 z-10">
					{shortletData.map((shortlet) => (
						<div
							key={shortlet.id}
							className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-2"
							data-aos="fade-up"
						>
							<div className="relative">
								<img
									src={shortlet.image}
									alt={shortlet.title}
									className="w-full h-96 object-cover"
								/>
								<div className="absolute top-4 left-4 bg-blue-950 font-semibold space-x-2 text-white text-xl px-4 py-3 rounded-xl">
									{shortlet.type}
								</div>
								<div className="absolute bottom-4 right-4 text-white px-4 py-2 rounded-md font-bold text-4xl">
									{shortlet.price}
								</div>
								<div
									className={`absolute top-4 right-4 px-2 py-2 border-2 ${
										favorites[shortlet.id]
											? "bg-red-600 border-red-600"
											: "border-white hover:bg-red-600 hover:border-red-600"
									} rounded-[50%] transition-all cursor-pointer`}
									onClick={() => toggleFavorite(shortlet.id)}
								>
									<HiHeart
										style={{ color: favorites[shortlet.id] ? "#fff" : "#fff" }}
										size={26}
									/>
								</div>
							</div>

							<div className="p-6">
								<h3 className="text-3xl  font-bold text-[#0B0B1F] mb-3">
									{shortlet.title}
								</h3>
								<p className="text-gray-600 text-2xl mb-4 flex items-center">
									<svg
										className="w-8 h-8 mr-2 text-blue-950"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path
											fillRule="evenodd"
											d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
											clipRule="evenodd"
										/>
									</svg>
									{shortlet.location}
								</p>

								<div className="flex justify-between bg-gray-100 text-gray-500 px-8 py-6 rounded-md text-2xl mt-8 mb-6">
									<div className="flex items-center ">
										<FaBed className="text-blue-950 mr-2" />
										<span>{shortlet.beds} Beds</span>
									</div>
									<div className="flex items-center">
										<FaBath className="text-blue-950 mr-2" />
										<span>{shortlet.baths} Baths</span>
									</div>
									<div className="flex items-center">
										<FaRulerCombined className="text-blue-950 mr-2" />
										<span>{shortlet.area}</span>
									</div>
								</div>
							</div>

							<div className="px-6 pb-6">
								<button className="w-full bg-blue-950 hover:bg-blue-900 text-white py-3 rounded-md transition-colors font-medium text-2xl">
									View Details
								</button>
							</div>
						</div>
					))}
				</div>

				{/* <div className="text-center mt-12" data-aos="fade-down">
					<a className="inline-block bg-blue-950 hover:bg-blue-900 text-white px-8 py-3 rounded-md transition-colors font-medium text-xl">
						View All Properties
					</a>
				</div> */}
			</div>
		</>
	);
};

export default ShortletContent;
