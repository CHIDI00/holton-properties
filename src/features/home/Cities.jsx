import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "../../context/LocationContext";

const Cities = () => {
	// Get the filterByCity function from the LocationContext
	const { filterByCity } = useLocation();
	// Use navigate to redirect to properties page after selecting a city
	const navigate = useNavigate();

	// Unique cities data
	const location = [
		{
			city: "Lekki",
			noOfProperty: 867,
			locationImage: "/city/city-1.jpg",
		},
		{
			city: "Ikoyi",
			noOfProperty: 27,
			locationImage: "/city/city-2.jpg",
		},
		{
			city: "Chevron",
			noOfProperty: 10,
			locationImage: "/city/city-3.jpg",
		},
		{
			city: "Victoria Island",
			noOfProperty: 500,
			locationImage: "/city/city-4.jpg",
		},
		{
			city: "Oniru",
			noOfProperty: 34,
			locationImage: "/city/city-5.jpg",
		},
		{
			city: "Aja",
			noOfProperty: 34,
			locationImage: "/city/city-2.jpg",
		},
	];

	// Handle city selection
	const handleCityClick = (cityName) => {
		// Update the selected city in the context
		filterByCity(cityName);
		// Navigate to the properties page with the filtered results
		navigate("/properties");
	};

	return (
		<div className="w-screen py-32 ">
			<div className="container mx-auto px-7 md:px-20 grid grid-cols-2 md:grid-cols-3 gap-10">
				{location.map((city, index) => (
					<div
						key={`${city.city}-${index}`}
						className="flex flex-col md:flex-row h-90 md:h-56 w-full border-2 border-gray-200 rounded-xl hover:shadow-2xl hover:border-none transition-all duration-700 cursor-pointer"
						onClick={() => handleCityClick(city.city)}
					>
						<div className="w-full md:w-[50%] h-full ">
							<img
								src={city.locationImage}
								alt={`${city.city} city`}
								className="w-full h-full object-cover md:rounded-s-xl rounded-t-xl"
								loading="lazy"
							/>
						</div>
						<div className="w-full md:w-[50%] py-5 h-full flex flex-col justify-center items-start px-10">
							<p className="text-3xl font-semibold mb-2">{city.city}</p>
							<p className="text-xl">{city.noOfProperty} properties</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Cities;
