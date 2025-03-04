import React from "react";
import { NavLink } from "react-router-dom";
import ImageSlider from "../../ui/ImagesSlider";
import { properties } from "./propertiesData";
import { FaBath, FaBed, FaBuilding, FaCar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const PropertyDetails = () => {
	return (
		<div className="w-screen bg-slate-50">
			<div className="w-full">
				<div className="w-full bg-blue-950 py-20 md:py-32 flex flex-col justify-center items-center mt-28 text-white">
					<h2 className="text-5xl mb-4 font-semibold">Property Details</h2>
					<p className="text-2xl">
						<a href="" className="text-yellow-700 ">
							<NavLink to="/">Home </NavLink>
						</a>
						/ View this property details
					</p>
				</div>
			</div>

			<div className="container py-20 m-auto">
				{/* //////////////////////////////////////////////////////////////// */}
				<div className="w-full p-3 flex justify-between items-center pb-20 mb-20 border-b-2 border-gray-300">
					<div className="">
						<p className="text-2xl text-white mb-4 ">
							<span className="bg-blue-950 py-2 px-4 rounded-md">Buy</span>
						</p>
						<h2 className="text-3xl md:text-5xl pt-3 pb-3 font-semibold mb-2">
							Modern Townhouse Near Park
						</h2>
						<p className="text-xl font-semibold text-gray-500 flex justify-start items-center gap-3">
							<FaLocationDot /> 303 Park View Road, Greenside
						</p>
					</div>
					<div className="text-3xl font-semibold">
						<p>N400,000</p>
					</div>
				</div>
				{/* //////////////////////////////////////////////////////////////// border-2 border-red-600*/}
				<div className="w-full p-3 flex justify-between items-start">
					<div className="w-full md:w-[65%]">
						<div className="bg-white p-6 rounded-lg md:rounded-xl mb-10">
							<ImageSlider imageList={properties[0].detailImages} />
						</div>
						<div className="w-full p-7 bg-white rounded-md my-10">
							<p className="text-4xl font-semibold mb-5">Overview</p>
							<div className="w-full flex justify-between items-center">
								<div className="text-2xl flex flex-col justify-center items-center">
									<FaBed size={20} />
									<p className="text-2xl pt-4">4 Bedroom</p>
								</div>
								<div className="text-2xl flex flex-col justify-center items-center">
									<FaBath size={20} />
									<p className="text-2xl pt-4">4 Bathroom</p>
								</div>
								<div className="text-2xl flex flex-col justify-center items-center">
									<FaCar size={20} />
									<p className="text-2xl pt-4">2 Garages</p>
								</div>
								<div className="text-2xl flex flex-col justify-center items-center">
									<FaBuilding size={20} />
									<p className="text-2xl pt-4">4 35999 Sqft</p>
								</div>
							</div>
						</div>

						<div className="w-full p-7 bg-white rounded-md my-10">
							<p className="text-3xl font-semibold mb-5">Description</p>
							<p className="text-2xl text-gray-400">
								{properties[0].description}
							</p>
						</div>

						<div className="w-full p-7 bg-white rounded-md my-10">
							<p className="text-3xl font-semibold mb-5">Property Address</p>
							<div className="flex flex-wrap justify-start gap-5 items-start">
								<p className="text-2xl text-gray-400 pr-10 md:text-3xl md:pr-16">
									<span className=" text-gray-500 font-semibold">
										Address :{" "}
									</span>{" "}
									Ferris Park
								</p>
								<p className="text-2xl text-gray-400 pr-10 md:text-3xl md:pr-16">
									<span className=" text-gray-500 font-semibold">City : </span>{" "}
									Lekki
								</p>
								<p className="text-2xl text-gray-400 pr-10 md:text-3xl md:pr-16">
									<span className=" text-gray-500 font-semibold">State : </span>{" "}
									Lagos
								</p>
								<p className="text-2xl text-gray-400 pr-10 md:text-3xl md:pr-16">
									<span className=" text-gray-500 font-semibold">
										Country :{" "}
									</span>{" "}
									Nigeria
								</p>
								<p className="text-2xl text-gray-400 pr-10 md:text-3xl md:pr-16">
									<span className=" text-gray-500 font-semibold">Zip : </span>{" "}
									002817
								</p>
							</div>
						</div>
					</div>
					<div className=""></div>
				</div>
			</div>
		</div>
	);
};

export default PropertyDetails;
