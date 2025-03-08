// import React from "react";
// import { NavLink, useParams } from "react-router-dom";
// import ImageSlider from "../../ui/ImagesSlider";
// // import { properties } from "./propertiesData";
// import { FaBath, FaBed, FaBuilding, FaCar } from "react-icons/fa";
// import { FaLocationDot } from "react-icons/fa6";
// import {
// 	AirVent,
// 	CctvIcon,
// 	Dumbbell,
// 	LockKeyhole,
// 	ProportionsIcon,
// 	Shrub,
// 	TableColumnsSplit,
// 	Trees,
// 	Volleyball,
// 	Waves,
// 	Wine,
// } from "lucide-react";
// import { useProperties } from "../../hooks/useProperties";

// const PropertyDetails = () => {
// 	const { properties, isLoading, error } = useProperties();

// 	if (isLoading)
// 		return <div className="text-center text-2xl py-20">Loading...</div>;
// 	if (error)
// 		return (
// 			<div className="text-center text-red-500 text-2xl py-20">
// 				Error: {error}
// 			</div>
// 		);

// 	// Get the propertyId from the URL parameters
// 	const { propertyId } = useParams();

// 	// Find the property that matches the propertyId
// 	const property = properties.find((p) => p.id === propertyId);
// 	if (property && typeof property.images === "string") {
// 		property.images = JSON.parse(property.images);
// 	}

// 	// If property not found, display a message
// 	if (!property) {
// 		return (
// 			<div className="container mx-auto px-4 py-20 text-center mt-20 w-full h-screen">
// 				<h2 className="text-4xl font-bold text-red-600">Property Not Found</h2>
// 				<p className="text-2xl mt-4">
// 					The property you're looking for doesn't exist.
// 				</p>
// 				<NavLink
// 					to="/properties"
// 					className="inline-block bg-blue-950 hover:bg-blue-900 text-white px-8 py-3 rounded-md transition-colors font-medium text-xl mt-8"
// 				>
// 					Back to Properties
// 				</NavLink>
// 			</div>
// 		);
// 	}
// 	return (
// 		<div className="w-screen bg-slate-50">
// 			<div className="w-full">
// 				<div className="w-full bg-blue-950 py-20 md:py-32 flex flex-col justify-center items-center mt-28 text-white">
// 					<h2 className="text-5xl mb-4 font-semibold">Property Details</h2>
// 					<p className="text-2xl">
// 						<a href="" className="text-yellow-700 ">
// 							<NavLink to="/">Home </NavLink>
// 						</a>
// 						/ View this property details
// 					</p>
// 				</div>
// 			</div>

// 			<div className="container py-20 m-auto">
// 				{/* //////////////////////////////////////////////////////////////// */}
// 				<div className="w-full p-3 flex justify-between items-center pb-20 mb-20 border-b-2 border-gray-300">
// 					<div className="">
// 						<p className="text-2xl text-white mb-4 ">
// 							<span className="bg-blue-950 py-2 px-4 rounded-md">
// 								{property.type}
// 							</span>
// 						</p>
// 						<h2 className="text-3xl md:text-5xl pt-3 pb-3 font-semibold mb-2">
// 							{property.title}
// 						</h2>
// 						<p className="text-xl font-semibold text-gray-500 flex justify-start items-center gap-3">
// 							<FaLocationDot /> {property.loctext}
// 						</p>
// 					</div>
// 					<div className="text-3xl font-semibold">
// 						<p>N{property.price}</p>
// 					</div>
// 				</div>
// 				{/* //////////////////////////////////////////////////////////////// border-2 border-red-600*/}
// 				<div className="w-full p-3 flex flex-col md:flex-row justify-between items-start gap-5 md:gap-10">
// 					<div className="w-full md:w-[65%]">
// 						<div className="bg-white p-6 rounded-lg md:rounded-xl mb-10">
// 							<ImageSlider imageList={properties.images} />
// 						</div>
// 						<div className="w-full p-7 bg-white rounded-md my-10">
// 							<p className="text-4xl font-semibold mb-10">Overview</p>
// 							<div className="w-full flex justify-between items-center">
// 								{/* <div className="text-2xl flex flex-col justify-center items-center">
// 									<FaBed size={20} />
// 									<p className="text-2xl pt-4">{property.beds} Bedroom</p>
// 								</div>
// 								<div className="text-2xl flex flex-col justify-center items-center">
// 									<FaBath size={20} />
// 									<p className="text-2xl pt-4">{property.baths} Bathroom</p>
// 								</div>
// 								<div className="text-2xl flex flex-col justify-center items-center">
// 									<FaCar size={20} />
// 									<p className="text-2xl pt-4">2 Garages</p>
// 								</div>
// 								<div className="text-2xl flex flex-col justify-center items-center">
// 									<FaBuilding size={20} />
// 									<p className="text-2xl pt-4">{property.area}</p>
// 								</div> */}
// 							</div>
// 						</div>

// 						<div className="w-full p-7 bg-white rounded-md my-10">
// 							<p className="text-4xl font-semibold mb-10">Description</p>
// 							<p className="text-2xl text-gray-400">{properties.description}</p>
// 						</div>

// 						<div className="w-full p-7 bg-white rounded-md my-10">
// 							<p className="text-4xl font-semibold mb-10">Property Address</p>
// 							<div className="flex flex-wrap justify-start gap-5 items-start">
// 								<p className="text-2xl text-gray-300 pr-10 md:text-2xl md:pr-18">
// 									<span className=" text-gray-400 font-semibold">
// 										Address :{" "}
// 									</span>{" "}
// 									Ferris Park
// 								</p>
// 								<p className="text-2xl text-gray-300 pr-10 md:text-3xl md:pr-16">
// 									<span className=" text-gray-400 font-semibold">City : </span>{" "}
// 									Lekki
// 								</p>
// 								<p className="text-2xl text-gray-300 pr-10 md:text-3xl md:pr-16">
// 									<span className=" text-gray-400 font-semibold">State : </span>{" "}
// 									Lagos
// 								</p>
// 								<p className="text-2xl text-gray-300 pr-10 md:text-3xl md:pr-16">
// 									<span className=" text-gray-400 font-semibold">
// 										Country :{" "}
// 									</span>{" "}
// 									Nigeria
// 								</p>
// 								<p className="text-2xl text-gray-300 pr-10 md:text-3xl md:pr-16">
// 									<span className=" text-gray-400 font-semibold">Zip : </span>{" "}
// 									002817
// 								</p>
// 							</div>
// 						</div>

// 						<div className="w-full p-7 bg-white rounded-md my-10">
// 							<p className="text-4xl font-semibold mb-10">Property Details</p>
// 							<div className="grid grid-cols-2 md:grid-cols-3 ">
// 								<p className="text-2xl text-gray-300 pr-10 md:text-2xl md:pr-16 mb-8">
// 									<span className=" text-gray-400 font-semibold">
// 										Property Id :{" "}
// 									</span>{" "}
// 									223847
// 								</p>
// 								<p className="text-2xl text-gray-300 pr-10 md:text-2xl md:pr-16 mb-8">
// 									<span className=" text-gray-400 font-semibold">Rooms : </span>{" "}
// 									10
// 								</p>
// 								<p className="text-2xl text-gray-300 pr-10 md:text-2xl md:pr-16 mb-8">
// 									<span className=" text-gray-400 font-semibold">
// 										Year built :{" "}
// 									</span>{" "}
// 									2024
// 								</p>
// 								<p className="text-2xl text-gray-300 pr-10 md:text-2xl md:pr-16 mb-8">
// 									<span className=" text-gray-400 font-semibold">Price : </span>{" "}
// 									$ 600,000
// 								</p>
// 								<p className="text-2xl text-gray-300 pr-10 md:text-2xl md:pr-16 mb-8">
// 									<span className=" text-gray-400 font-semibold">
// 										Bedrooms :{" "}
// 									</span>{" "}
// 									5
// 								</p>
// 								<p className="text-2xl text-gray-300 pr-10 md:text-2xl md:pr-16 mb-8">
// 									<span className=" text-gray-400 font-semibold">
// 										Garage Size :{" "}
// 									</span>{" "}
// 									3 cars
// 								</p>
// 								<p className="text-2xl text-gray-300 pr-10 md:text-2xl md:pr-16 mb-8">
// 									<span className=" text-gray-400 font-semibold">
// 										Price info :{" "}
// 									</span>{" "}
// 									$ 1039/sq ft
// 								</p>
// 								<p className="text-2xl text-gray-300 pr-10 md:text-2xl md:pr-16 mb-8">
// 									<span className=" text-gray-400 font-semibold">
// 										Available from :{" "}
// 									</span>{" "}
// 									2024-07-22
// 								</p>
// 								<p className="text-2xl text-gray-300 pr-10 md:text-2xl md:pr-16 mb-8">
// 									<span className=" text-gray-400 font-semibold">
// 										Propert size :{" "}
// 									</span>{" "}
// 									190 ft2
// 								</p>
// 								<p className="text-2xl text-gray-300 pr-10 md:text-2xl md:pr-16 mb-8">
// 									<span className=" text-gray-400 font-semibold">
// 										Custom Id :{" "}
// 									</span>{" "}
// 									68
// 								</p>
// 								<p className="text-2xl text-gray-300 pr-10 md:text-2xl md:pr-16 mb-8">
// 									<span className=" text-gray-400 font-semibold">
// 										Structure type :{" "}
// 									</span>{" "}
// 									Brick
// 								</p>
// 								<p className="text-2xl text-gray-300 pr-10 md:text-2xl md:pr-16 mb-8">
// 									<span className=" text-gray-400 font-semibold">
// 										Floor No. :{" "}
// 									</span>{" "}
// 									3
// 								</p>
// 							</div>
// 						</div>

// 						<div className="w-full p-7 bg-white rounded-md my-10">
// 							<p className="text-4xl font-semibold mb-10">Amenities</p>
// 							<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
// 								<p className="flex items-center gap-3 text-2xl text-gray-400 pr-10 md:text-3xl md:pr-16">
// 									<AirVent color="#525bff" size={15} /> Air Conditioner
// 								</p>
// 								<p className="flex items-center gap-3 text-2xl text-gray-400 pr-10 md:text-3xl md:pr-16">
// 									<Waves color="#525bff" size={15} /> Swimming pools
// 								</p>
// 								<p className="flex items-center gap-3 text-2xl text-gray-400 pr-10 md:text-3xl md:pr-16">
// 									<Volleyball color="#525bff" size={15} /> Sport facilities
// 								</p>
// 								<p className="flex items-center gap-3 text-2xl text-gray-400 pr-10 md:text-3xl md:pr-16">
// 									<Trees color="#525bff" size={15} /> Landscaped Gardens
// 								</p>
// 								<p className="flex items-center gap-3 text-2xl text-gray-400 pr-10 md:text-3xl md:pr-16">
// 									<CctvIcon color="#525bff" size={15} /> Surveillance Cameras
// 								</p>
// 								<p className="flex items-center gap-3 text-2xl text-gray-400 pr-10 md:text-3xl md:pr-16">
// 									<ProportionsIcon color="#525bff" size={15} /> Wide-Open Space
// 								</p>
// 								<p className="flex items-center gap-3 text-2xl text-gray-400 pr-10 md:text-3xl md:pr-16">
// 									<Shrub color="#525bff" size={15} /> Parks
// 								</p>
// 								<p className="flex items-center gap-3 text-2xl text-gray-400 pr-10 md:text-3xl md:pr-16">
// 									<Dumbbell color="#525bff" size={15} /> Gym
// 								</p>
// 								<p className="flex items-center gap-3 text-2xl text-gray-400 pr-10 md:text-3xl md:pr-16">
// 									<TableColumnsSplit color="#525bff" size={15} /> Billiard table
// 								</p>
// 								<p className="flex items-center gap-3 text-2xl text-gray-400 pr-10 md:text-3xl md:pr-16">
// 									<LockKeyhole color="#525bff" size={15} /> Package locker
// 								</p>
// 								<p className="flex items-center gap-3 text-2xl text-gray-400 pr-10 md:text-3xl md:pr-16">
// 									<Wine color="#525bff" size={15} /> CLubhouse
// 								</p>
// 							</div>
// 						</div>

// 						<div className="w-full p-7 bg-white rounded-md my-10">
// 							<p className="text-4xl font-semibold mb-10">Map</p>
// 							<div className="w-full h-[300px] md:h-[400px]">
// 								<iframe
// 									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7277813442757!2d3.4701!3d6.4345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjYnMDQuMiJOIDPCsDI4JzEyLjQiRQ!5e0!3m2!1sen!2sng!4v1624981887673!5m2!1sen!2sng"
// 									width="100%"
// 									height="100%"
// 									style={{ border: 0 }}
// 									allowFullScreen=""
// 									loading="lazy"
// 									referrerPolicy="no-referrer-when-downgrade"
// 								></iframe>
// 							</div>
// 						</div>
// 					</div>

// 					<div className="w-full md:w-[35%]">
// 						<form className="w-full p-9 bg-white rounded-md">
// 							<input
// 								type="text"
// 								placeholder="Your name"
// 								className="w-full px-5 py-6 bg-gray-100 rounded-md text-2xl mb-8"
// 							/>
// 							<input
// 								type="text"
// 								placeholder="Your email"
// 								className="w-full px-5 py-6 bg-gray-100 rounded-md text-2xl mb-8"
// 							/>
// 							<input
// 								type="text"
// 								placeholder="Your Phone number"
// 								className="w-full px-5 py-6 bg-gray-100 rounded-md text-2xl mb-8"
// 							/>
// 							<textarea
// 								name="yes i'm interested"
// 								placeholder="yes i'm interested"
// 								id=""
// 								className="w-full h-[15rem] px-5 py-6 bg-gray-100 rounded-md text-2xl mb-8 resize-none"
// 							></textarea>

// 							<button className="w-full bg-blue-950 text-white text-2xl font-semibold py-7 px-5 rounded-md cursor-pointer">
// 								SEND EMAIL
// 							</button>
// 						</form>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default PropertyDetails;

// DUmmy data

import React from "react";
import { NavLink, useParams } from "react-router-dom";
import ImageSlider from "../../ui/ImagesSlider";
// import { properties } from "./propertiesData";
import { FaBath, FaBed, FaBuilding, FaCar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import {
	AirVent,
	CctvIcon,
	Dumbbell,
	LockKeyhole,
	ProportionsIcon,
	Shrub,
	TableColumnsSplit,
	Trees,
	Volleyball,
	Waves,
	Wine,
} from "lucide-react";
import { useProperties } from "../../hooks/useProperties";

const PropertyDetails = () => {
	const { properties, isLoading, error } = useProperties();

	if (isLoading)
		return <div className="text-center text-2xl py-20">Loading...</div>;
	if (error)
		return (
			<div className="text-center text-red-500 text-2xl py-20">
				Error: {error}
			</div>
		);

	// Get the propertyId from the URL parameters
	const { propertyId } = useParams();

	// Find the property that matches the propertyId
	const property = properties.find((p) => p.id === parseInt(propertyId));

	// If property not found, display a message
	if (!property) {
		return (
			<div className="container mx-auto px-4 py-20 text-center mt-20 w-full h-screen">
				<h2 className="text-4xl font-bold text-red-600">Property Not Found</h2>
				<p className="text-2xl mt-4">
					The property you're looking for doesn't exist.
				</p>
				<NavLink
					to="/properties"
					className="inline-block bg-blue-950 hover:bg-blue-900 text-white px-8 py-3 rounded-md transition-colors font-medium text-xl mt-8"
				>
					Back to Properties
				</NavLink>
			</div>
		);
	}
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
							<span className="bg-blue-950 py-2 px-4 rounded-md">
								{property.type}
							</span>
						</p>
						<h2 className="text-3xl md:text-5xl pt-3 pb-3 font-semibold mb-2">
							{property.title}
						</h2>
						<p className="text-xl font-semibold text-gray-500 flex justify-start items-center gap-3">
							<FaLocationDot /> {property.location}
						</p>
					</div>
					<div className="text-3xl font-semibold">
						<p>N{property.price}</p>
					</div>
				</div>
				{/* //////////////////////////////////////////////////////////////// border-2 border-red-600*/}
				<div className="w-full p-3 flex flex-col md:flex-row justify-between items-start gap-5 md:gap-10">
					<div className="w-full md:w-[65%]">
						<div className="bg-white p-6 rounded-lg md:rounded-xl mb-10">
							<ImageSlider
								imageList={properties[propertyId - 1].detailImages}
							/>
						</div>
						<div className="w-full p-7 bg-white rounded-md my-10">
							<p className="text-4xl font-semibold mb-10">Overview</p>
							<div className="w-full flex justify-between items-center">
								<div className="text-2xl flex flex-col justify-center items-center">
									<FaBed size={20} />
									<p className="text-2xl pt-4">{property.beds} Bedroom</p>
								</div>
								<div className="text-2xl flex flex-col justify-center items-center">
									<FaBath size={20} />
									<p className="text-2xl pt-4">{property.baths} Bathroom</p>
								</div>
								<div className="text-2xl flex flex-col justify-center items-center">
									<FaCar size={20} />
									<p className="text-2xl pt-4">2 Garages</p>
								</div>
								<div className="text-2xl flex flex-col justify-center items-center">
									<FaBuilding size={20} />
									<p className="text-2xl pt-4">{property.area}</p>
								</div>
							</div>
						</div>

						<div className="w-full p-7 bg-white rounded-md my-10">
							<p className="text-4xl font-semibold mb-10">Description</p>
							<p className="text-2xl text-gray-400">
								{properties[propertyId - 1].description}
							</p>
						</div>

						<div className="w-full p-7 bg-white rounded-md my-10">
							<p className="text-4xl font-semibold mb-10">Property Address</p>
							<div className="flex flex-wrap justify-start gap-5 items-start">
								<p className="text-2xl text-gray-300 pr-10 md:text-2xl md:pr-18">
									<span className=" text-gray-400 font-semibold">
										Address :{" "}
									</span>{" "}
									Ferris Park
								</p>
								<p className="text-2xl text-gray-300 pr-10 md:text-3xl md:pr-16">
									<span className=" text-gray-400 font-semibold">City : </span>{" "}
									Lekki
								</p>
								<p className="text-2xl text-gray-300 pr-10 md:text-3xl md:pr-16">
									<span className=" text-gray-400 font-semibold">State : </span>{" "}
									Lagos
								</p>
								<p className="text-2xl text-gray-300 pr-10 md:text-3xl md:pr-16">
									<span className=" text-gray-400 font-semibold">
										Country :{" "}
									</span>{" "}
									Nigeria
								</p>
								<p className="text-2xl text-gray-300 pr-10 md:text-3xl md:pr-16">
									<span className=" text-gray-400 font-semibold">Zip : </span>{" "}
									002817
								</p>
							</div>
						</div>

						<div className="w-full p-7 bg-white rounded-md my-10">
							<p className="text-4xl font-semibold mb-10">Property Details</p>
							<div className="grid grid-cols-2 md:grid-cols-3 ">
								<p className="text-2xl text-gray-300 pr-10 md:text-2xl md:pr-16 mb-8">
									<span className=" text-gray-400 font-semibold">
										Property Id :{" "}
									</span>{" "}
									223847
								</p>
								<p className="text-2xl text-gray-300 pr-10 md:text-2xl md:pr-16 mb-8">
									<span className=" text-gray-400 font-semibold">Rooms : </span>{" "}
									10
								</p>
								<p className="text-2xl text-gray-300 pr-10 md:text-2xl md:pr-16 mb-8">
									<span className=" text-gray-400 font-semibold">
										Year built :{" "}
									</span>{" "}
									2024
								</p>
								<p className="text-2xl text-gray-300 pr-10 md:text-2xl md:pr-16 mb-8">
									<span className=" text-gray-400 font-semibold">Price : </span>{" "}
									$ 600,000
								</p>
								<p className="text-2xl text-gray-300 pr-10 md:text-2xl md:pr-16 mb-8">
									<span className=" text-gray-400 font-semibold">
										Bedrooms :{" "}
									</span>{" "}
									5
								</p>
								<p className="text-2xl text-gray-300 pr-10 md:text-2xl md:pr-16 mb-8">
									<span className=" text-gray-400 font-semibold">
										Garage Size :{" "}
									</span>{" "}
									3 cars
								</p>
								<p className="text-2xl text-gray-300 pr-10 md:text-2xl md:pr-16 mb-8">
									<span className=" text-gray-400 font-semibold">
										Price info :{" "}
									</span>{" "}
									$ 1039/sq ft
								</p>
								<p className="text-2xl text-gray-300 pr-10 md:text-2xl md:pr-16 mb-8">
									<span className=" text-gray-400 font-semibold">
										Available from :{" "}
									</span>{" "}
									2024-07-22
								</p>
								<p className="text-2xl text-gray-300 pr-10 md:text-2xl md:pr-16 mb-8">
									<span className=" text-gray-400 font-semibold">
										Propert size :{" "}
									</span>{" "}
									190 ft2
								</p>
								<p className="text-2xl text-gray-300 pr-10 md:text-2xl md:pr-16 mb-8">
									<span className=" text-gray-400 font-semibold">
										Custom Id :{" "}
									</span>{" "}
									68
								</p>
								<p className="text-2xl text-gray-300 pr-10 md:text-2xl md:pr-16 mb-8">
									<span className=" text-gray-400 font-semibold">
										Structure type :{" "}
									</span>{" "}
									Brick
								</p>
								<p className="text-2xl text-gray-300 pr-10 md:text-2xl md:pr-16 mb-8">
									<span className=" text-gray-400 font-semibold">
										Floor No. :{" "}
									</span>{" "}
									3
								</p>
							</div>
						</div>

						<div className="w-full p-7 bg-white rounded-md my-10">
							<p className="text-4xl font-semibold mb-10">Amenities</p>
							<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
								<p className="flex items-center gap-3 text-2xl text-gray-400 pr-10 md:text-3xl md:pr-16">
									<AirVent color="#525bff" size={15} /> Air Conditioner
								</p>
								<p className="flex items-center gap-3 text-2xl text-gray-400 pr-10 md:text-3xl md:pr-16">
									<Waves color="#525bff" size={15} /> Swimming pools
								</p>
								<p className="flex items-center gap-3 text-2xl text-gray-400 pr-10 md:text-3xl md:pr-16">
									<Volleyball color="#525bff" size={15} /> Sport facilities
								</p>
								<p className="flex items-center gap-3 text-2xl text-gray-400 pr-10 md:text-3xl md:pr-16">
									<Trees color="#525bff" size={15} /> Landscaped Gardens
								</p>
								<p className="flex items-center gap-3 text-2xl text-gray-400 pr-10 md:text-3xl md:pr-16">
									<CctvIcon color="#525bff" size={15} /> Surveillance Cameras
								</p>
								<p className="flex items-center gap-3 text-2xl text-gray-400 pr-10 md:text-3xl md:pr-16">
									<ProportionsIcon color="#525bff" size={15} /> Wide-Open Space
								</p>
								<p className="flex items-center gap-3 text-2xl text-gray-400 pr-10 md:text-3xl md:pr-16">
									<Shrub color="#525bff" size={15} /> Parks
								</p>
								<p className="flex items-center gap-3 text-2xl text-gray-400 pr-10 md:text-3xl md:pr-16">
									<Dumbbell color="#525bff" size={15} /> Gym
								</p>
								<p className="flex items-center gap-3 text-2xl text-gray-400 pr-10 md:text-3xl md:pr-16">
									<TableColumnsSplit color="#525bff" size={15} /> Billiard table
								</p>
								<p className="flex items-center gap-3 text-2xl text-gray-400 pr-10 md:text-3xl md:pr-16">
									<LockKeyhole color="#525bff" size={15} /> Package locker
								</p>
								<p className="flex items-center gap-3 text-2xl text-gray-400 pr-10 md:text-3xl md:pr-16">
									<Wine color="#525bff" size={15} /> CLubhouse
								</p>
							</div>
						</div>

						<div className="w-full p-7 bg-white rounded-md my-10">
							<p className="text-4xl font-semibold mb-10">Map</p>
							<div className="w-full h-[300px] md:h-[400px]">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7277813442757!2d3.4701!3d6.4345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjYnMDQuMiJOIDPCsDI4JzEyLjQiRQ!5e0!3m2!1sen!2sng!4v1624981887673!5m2!1sen!2sng"
									width="100%"
									height="100%"
									style={{ border: 0 }}
									allowFullScreen=""
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
								></iframe>
							</div>
						</div>
					</div>

					<div className="w-full md:w-[35%]">
						<form className="w-full p-9 bg-white rounded-md">
							<input
								type="text"
								placeholder="Your name"
								className="w-full px-5 py-6 bg-gray-100 rounded-md text-2xl mb-8"
							/>
							<input
								type="text"
								placeholder="Your email"
								className="w-full px-5 py-6 bg-gray-100 rounded-md text-2xl mb-8"
							/>
							<input
								type="text"
								placeholder="Your Phone number"
								className="w-full px-5 py-6 bg-gray-100 rounded-md text-2xl mb-8"
							/>
							<textarea
								name="yes i'm interested"
								placeholder="yes i'm interested"
								id=""
								className="w-full h-[15rem] px-5 py-6 bg-gray-100 rounded-md text-2xl mb-8 resize-none"
							></textarea>

							<button className="w-full bg-blue-950 text-white text-2xl font-semibold py-7 px-5 rounded-md cursor-pointer">
								SEND EMAIL
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PropertyDetails;
