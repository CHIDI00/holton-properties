import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import { Menu } from "lucide-react";
import { HiXMark } from "react-icons/hi2";
import { FaChevronDown } from "react-icons/fa";

const PropertiesContent = () => {
	const [showOptions, setShowOptions] = useState(false);
	const [showMobileSearch, setShowMobileSearch] = useState(false);
	const [selectedLocation, setSelectedLocation] = useState("Abuja");
	const [selectedStatus, setSelectedStatus] = useState("");
	const [selectedPropertyType, setSelectedPropertyType] = useState("");
	const [selectedBeds, setSelectedBeds] = useState("");
	const [priceRange, setPriceRange] = useState([0, 7]);
	const [showStatusOptions, setShowStatusOptions] = useState(false);
	const [showPropertyTypeOptions, setShowPropertyTypeOptions] = useState(false);
	const [showBedsOptions, setShowBedsOptions] = useState(false);

	function handleOption() {
		setShowOptions(!showOptions);
		setShowStatusOptions(false);
		setShowPropertyTypeOptions(false);
		setShowBedsOptions(false);
	}

	function handleStatusOption() {
		setShowStatusOptions(!showStatusOptions);
		setShowOptions(false);
		setShowPropertyTypeOptions(false);
		setShowBedsOptions(false);
	}

	function handlePropertyTypeOption() {
		setShowPropertyTypeOptions(!showPropertyTypeOptions);
		setShowOptions(false);
		setShowStatusOptions(false);
		setShowBedsOptions(false);
	}

	function handleBedsOption() {
		setShowBedsOptions(!showBedsOptions);
		setShowOptions(false);
		setShowStatusOptions(false);
		setShowPropertyTypeOptions(false);
	}

	function handleMobileSearch() {
		setShowMobileSearch(!showMobileSearch);
	}

	return (
		<>
			<div className="w-full bg-blue-950 py-20 md:py-32 flex flex-col justify-center items-center mt-28 text-white">
				<h2 className="text-5xl mb-4 font-semibold">Buy Properties</h2>
				<p className="text-2xl">
					<a href="" className="text-yellow-700 ">
						<NavLink to="/">Home </NavLink>
					</a>
					/ Select your preferred properties and go for it
				</p>
			</div>

			<div className="w-full flex justify-start items-start px-6 gap-20">
				<div className="hidden md:block w-[45%] my-20  p-10 bg-white shadow-lg rounded-md">
					<p className="text-2xl font-semibold mb-6">Advanced Search</p>

					<form action="" className="w-full space-y-6">
						{/* Location Dropdown */}
						<div className="w-full relative">
							<div
								className="w-full py-6 px-6 border border-gray-300 rounded-md relative cursor-pointer flex justify-between items-center"
								onClick={() => handleOption()}
							>
								<span>{selectedLocation || "Location"}</span>
								<FaChevronDown className="text-gray-500" />
							</div>

							{showOptions && (
								<div className="absolute top-[100%] w-full max-h-[17rem] overflow-y-auto border border-gray-300 rounded-md z-10 bg-white shadow-lg">
									{[
										"Lekki",
										"Abuja",
										"Chevron",
										"Ikoyi",
										"Victoria Island",
										"Aja",
									].map((location) => (
										<div
											key={location}
											className="w-full text-center cursor-pointer hover:bg-gray-50 py-3 px-6"
											onClick={() => {
												setSelectedLocation(location);
												setShowOptions(false);
											}}
										>
											{location}
										</div>
									))}
								</div>
							)}
						</div>

						{/* Status Dropdown */}
						<div className="w-full relative">
							<div
								className="w-full py-6 px-6 border border-gray-300 rounded-md relative cursor-pointer flex justify-between items-center"
								onClick={() => handleStatusOption()}
							>
								<span>{selectedStatus || "Status (Rent, Sale)"}</span>
								<FaChevronDown className="text-gray-500" />
							</div>

							{showStatusOptions && (
								<div className="absolute top-[100%] w-full border border-gray-300 rounded-md z-10 bg-white shadow-lg">
									{["For Rent", "For Sale"].map((status) => (
										<div
											key={status}
											className="w-full text-center cursor-pointer hover:bg-gray-50 py-3 px-6"
											onClick={() => {
												setSelectedStatus(status);
												setShowStatusOptions(false);
											}}
										>
											{status}
										</div>
									))}
								</div>
							)}
						</div>

						{/* Property Type Dropdown */}
						<div className="w-full relative">
							<div
								className="w-full py-6 px-6 border border-gray-300 rounded-md relative cursor-pointer flex justify-between items-center"
								onClick={() => handlePropertyTypeOption()}
							>
								<span>{selectedPropertyType || "Property Type"}</span>
								<FaChevronDown className="text-gray-500" />
							</div>

							{showPropertyTypeOptions && (
								<div className="absolute top-[100%] w-full border border-gray-300 rounded-md z-10 bg-white shadow-lg">
									{["Apartment", "House", "Villa", "Office", "Land"].map(
										(type) => (
											<div
												key={type}
												className="w-full text-center cursor-pointer hover:bg-gray-50 py-3 px-6"
												onClick={() => {
													setSelectedPropertyType(type);
													setShowPropertyTypeOptions(false);
												}}
											>
												{type}
											</div>
										)
									)}
								</div>
							)}
						</div>

						{/* Number of Beds Dropdown */}
						<div className="w-full relative">
							<div
								className="w-full py-6 px-6 border border-gray-300 rounded-md relative cursor-pointer flex justify-between items-center"
								onClick={() => handleBedsOption()}
							>
								<span>{selectedBeds || "Number of Beds"}</span>
								<FaChevronDown className="text-gray-500" />
							</div>

							{showBedsOptions && (
								<div className="absolute top-[100%] w-full border border-gray-300 rounded-md z-10 bg-white shadow-lg">
									{["1", "2", "3", "4", "5+"].map((beds) => (
										<div
											key={beds}
											className="w-full text-center cursor-pointer hover:bg-gray-50 py-3 px-6"
											onClick={() => {
												setSelectedBeds(beds);
												setShowBedsOptions(false);
											}}
										>
											{beds}
										</div>
									))}
								</div>
							)}
						</div>

						{/* Price Range Slider */}
						<div className="w-full">
							<p className="mb-2 text-xl">From NGN0 to NGN7,456,698,955</p>
							<div className="relative pt-1">
								<input
									type="range"
									min="0"
									max="7"
									value={priceRange[1]}
									className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
									onChange={(e) =>
										setPriceRange([priceRange[0], parseInt(e.target.value)])
									}
								/>
							</div>
						</div>

						{/* Find Property Button */}
						<button
							type="submit"
							className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-5 px-4 rounded-md transition-colors duration-300 mt-4 text-xl"
						>
							Find Property
						</button>
					</form>
				</div>

				<PropertyCard />
			</div>

			{/* Button to open search menu */}
			<button
				className="top-1/2 right-0 bg-red-500 z-20 fixed w-20 h-20 flex md:hidden justify-center items-center transition-all duration-500 transform rounded-s-md text-white"
				onClick={() => handleMobileSearch()}
			>
				{showMobileSearch ? <HiXMark size={26} /> : <Menu />}
			</button>

			{/* Mobile search */}
			<div
				className={`lg:hidden bg-white fixed overflow-y-auto shadow-lg transition-all duration-300 transform z-20  ${
					showMobileSearch ? "translate-x-0" : "-translate-x-full "
				} ${
					/* For tablet screens (md), menu comes from top */ "md:top-0 md:left-0 md:right-0 md:w-full md:h-auto md:max-h-[80vh] " +
					/* For mobile screens (below md), menu comes from right */ "top-28 left-0 h-full w-3/4 "
				}`}
			>
				<div className="py-8 px-6 w-full">
					<p className="text-2xl font-semibold mb-6">Advanced Search</p>

					<form action="" className="w-full space-y-6">
						{/* Location Dropdown */}
						<div className="w-full relative">
							<div
								className="w-full py-6 px-6 text-2xl border border-gray-300 rounded-md relative cursor-pointer flex justify-between items-center"
								onClick={() => handleOption()}
							>
								<span>{selectedLocation || "Location"}</span>
								<FaChevronDown className="text-gray-500" />
							</div>

							{showOptions && (
								<div className="absolute top-[100%] text-2xl w-full max-h-[17rem] overflow-y-auto border border-gray-300 rounded-md z-10 bg-white shadow-lg">
									{[
										"Lekki",
										"Abuja",
										"Chevron",
										"Ikoyi",
										"Victoria Island",
										"Aja",
									].map((location) => (
										<div
											key={location}
											className="w-full text-center cursor-pointer hover:bg-gray-50 py-3 px-6"
											onClick={() => {
												setSelectedLocation(location);
												setShowOptions(false);
											}}
										>
											{location}
										</div>
									))}
								</div>
							)}
						</div>

						{/* Status Dropdown */}
						<div className="w-full relative">
							<div
								className="w-full text-2xl py-6 px-6 border border-gray-300 rounded-md relative cursor-pointer flex justify-between items-center"
								onClick={() => handleStatusOption()}
							>
								<span>{selectedStatus || "Status (Rent, Sale)"}</span>
								<FaChevronDown className="text-gray-500" />
							</div>

							{showStatusOptions && (
								<div className="absolute top-[100%] text-2xl w-full border border-gray-300 rounded-md z-10 bg-white shadow-lg">
									{["For Rent", "For Sale"].map((status) => (
										<div
											key={status}
											className="w-full text-center cursor-pointer hover:bg-gray-50 py-3 px-6"
											onClick={() => {
												setSelectedStatus(status);
												setShowStatusOptions(false);
											}}
										>
											{status}
										</div>
									))}
								</div>
							)}
						</div>

						{/* Property Type Dropdown */}
						<div className="w-full relative">
							<div
								className="w-full text-2xl py-6 px-6 border border-gray-300 rounded-md relative cursor-pointer flex justify-between items-center"
								onClick={() => handlePropertyTypeOption()}
							>
								<span>{selectedPropertyType || "Property Type"}</span>
								<FaChevronDown className="text-gray-500" />
							</div>

							{showPropertyTypeOptions && (
								<div className="absolute top-[100%] text-2xl w-full border border-gray-300 rounded-md z-10 bg-white shadow-lg">
									{["Apartment", "House", "Villa", "Office", "Land"].map(
										(type) => (
											<div
												key={type}
												className="w-full text-2xl text-center cursor-pointer hover:bg-gray-50 py-3 px-6"
												onClick={() => {
													setSelectedPropertyType(type);
													setShowPropertyTypeOptions(false);
												}}
											>
												{type}
											</div>
										)
									)}
								</div>
							)}
						</div>

						{/* Number of Beds Dropdown */}
						<div className="w-full relative">
							<div
								className="w-full text-2xl py-6 px-6 border border-gray-300 rounded-md relative cursor-pointer flex justify-between items-center"
								onClick={() => handleBedsOption()}
							>
								<span>{selectedBeds || "Number of Beds"}</span>
								<FaChevronDown className="text-gray-500" />
							</div>

							{showBedsOptions && (
								<div className="absolute top-[100%] text-2xl w-full border border-gray-300 rounded-md z-10 bg-white shadow-lg">
									{["1", "2", "3", "4", "5+"].map((beds) => (
										<div
											key={beds}
											className="w-full text-center cursor-pointer hover:bg-gray-50 py-3 px-6"
											onClick={() => {
												setSelectedBeds(beds);
												setShowBedsOptions(false);
											}}
										>
											{beds}
										</div>
									))}
								</div>
							)}
						</div>

						{/* Price Range Slider */}
						<div className="w-full">
							<p className="mb-2 text-2xl">From NGN0 to NGN7,456,698,955</p>
							<div className="relative pt-1">
								<input
									type="range"
									min="0"
									max="7"
									value={priceRange[1]}
									className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
									onChange={(e) =>
										setPriceRange([priceRange[0], parseInt(e.target.value)])
									}
								/>
							</div>
						</div>

						{/* Find Property Button */}
						<button
							type="submit"
							className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-5 px-4 rounded-md transition-colors duration-300 mt-4 text-2xl"
						>
							Find Property
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default PropertiesContent;
