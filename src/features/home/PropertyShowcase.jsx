import React from "react";
import { FaBath, FaBed, FaRulerCombined } from "react-icons/fa";
import { properties } from "../properties/propertiesData";

const PropertyShowcase = () => {
	// const properties = [
	// 	{
	// 		id: 1,
	// 		image: "/gallery/gallery-thum-01.jpg",
	// 		title: "Modern Apartment in City Center",
	// 		location: "123 Urban Street, Downtown",
	// 		price: "$1,250,000",
	// 		beds: 3,
	// 		baths: 2,
	// 		area: "1,200 sqft",
	// 		type: "For Sale",
	// 	},
	// 	{
	// 		id: 2,
	// 		image: "/gallery/gallery-thum-02.jpg",
	// 		title: "Luxury Villa with Ocean View",
	// 		location: "456 Coastal Road, Beachside",
	// 		price: "$2,500,000",
	// 		beds: 5,
	// 		baths: 4,
	// 		area: "3,500 sqft",
	// 		type: "For Sale",
	// 	},
	// 	{
	// 		id: 3,
	// 		image: "/gallery/gallery-thum-03.jpg",
	// 		title: "Cozy Studio in Historic District",
	// 		location: "789 Heritage Lane, Old Town",
	// 		price: "$950/month",
	// 		beds: 1,
	// 		baths: 1,
	// 		area: "650 sqft",
	// 		type: "For Rent",
	// 	},
	// 	{
	// 		id: 4,
	// 		image: "/gallery/gallery-thum-04.jpg",
	// 		title: "Family Home with Garden",
	// 		location: "101 Suburban Drive, Green Valley",
	// 		price: "$1,750,000",
	// 		beds: 4,
	// 		baths: 3,
	// 		area: "2,200 sqft",
	// 		type: "For Sale",
	// 	},
	// 	{
	// 		id: 5,
	// 		image: "/gallery/gallery-thum-05.jpg",
	// 		title: "Penthouse with City Skyline View",
	// 		location: "202 High Rise Avenue, Uptown",
	// 		price: "$3,200,000",
	// 		beds: 3,
	// 		baths: 3,
	// 		area: "2,800 sqft",
	// 		type: "For Sale",
	// 	},
	// 	{
	// 		id: 6,
	// 		image: "/gallery/gallery-thum-06.jpg",
	// 		title: "Modern Townhouse Near Park",
	// 		location: "303 Park View Road, Greenside",
	// 		price: "$1,450/month",
	// 		beds: 2,
	// 		baths: 2,
	// 		area: "1,100 sqft",
	// 		type: "For Rent",
	// 	},
	// ];

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

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{properties.slice(5, 10).map((property) => (
						<div
							key={property.id}
							className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-2"
							data-aos="fade-up"
						>
							<div className="relative">
								<img
									src={property.image}
									alt={property.title}
									className="w-full h-96 object-cover"
								/>
								<div className="absolute top-4 left-4 bg-blue-950 text-white text-xl px-4 py-3 rounded-xl">
									{property.type}
								</div>
								<div className="absolute bottom-4 right-4 text-white px-4 py-2 rounded-md font-bold text-4xl">
									{property.price}
								</div>
							</div>

							<div className="p-6">
								<h3 className="text-3xl  font-bold text-[#0B0B1F] mb-3">
									{property.title}
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
									{property.location}
								</p>

								<div className="flex justify-between bg-gray-100 text-gray-500 px-8 py-6 rounded-md text-2xl mt-8 mb-6">
									<div className="flex items-center ">
										<FaBed className="text-blue-950 mr-2" />
										<span>{property.beds} Beds</span>
									</div>
									<div className="flex items-center">
										<FaBath className="text-blue-950 mr-2" />
										<span>{property.baths} Baths</span>
									</div>
									<div className="flex items-center">
										<FaRulerCombined className="text-blue-950 mr-2" />
										<span>{property.area}</span>
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
