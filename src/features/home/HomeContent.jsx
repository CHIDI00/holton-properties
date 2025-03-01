import { useState, useEffect } from "react";

const HomeContent = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const backgroundImages = [
		"/gallery/gallery-01.jpg",
		"/gallery/gallery-02.jpg",
		"/gallery/gallery-03.jpg",
		"/gallery/gallery-04.jpg",
		"/gallery/gallery-05.jpg",
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex((prevIndex) =>
				prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
			);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<section
				className="relative w-full h-[78vh] bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
				style={{
					backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
				}}
			>
				<div className="absolute inset-0 bg-black bg-opacity-50"></div>
				<div className="relative z-10 w-[70%] h-full container flex flex-col gap-7 items-center justify-center mx-auto px-4 py-24">
					<div className="flex flex-wrap -mx-4">
						<div className="w-full  px-4">
							<div
								className="flex flex-col w-[70%] text-left  justify-center align-sub- mb-12"
								data-aos="fade-down"
							>
								<h1 className="text-6xl  lg:text-[6rem] font-bold text-white mb-4">
									Find Your Best Dream House for{" "}
									<span className="text-blue-900">Rental, Buy & Sell...</span>
								</h1>
								<p className="text-gray-200 text-[2rem]">
									Properties for buy / rent in in your location. We have more
									than 3000+ listings for you to choose
								</p>
							</div>
						</div>
					</div>
					<div className="flex flex-wrap bg-slate-600">
						<div className="w-full px-4 py-8">
							<div
								className="bg-white rounded-lg shadow-lg p-10"
								data-aos="fade-down"
							>
								<div className="mb-6">
									<ul className="flex border-b" role="tablist">
										<li className="mr-4" role="presentation">
											<a
												className="flex items-center px-4 py-2 text-xl font-medium text-blue-600 border-b-2 border-blue-600"
												id="buy-property"
												data-bs-toggle="tab"
												href="#buy_property"
												role="tab"
												aria-controls="buy_property"
												aria-selected="true"
											>
												<img
													src="/icons/buy-icon.svg"
													alt="icon"
													className="w-5 h-5 mr-2"
												/>
												Buy a Property
											</a>
										</li>
										<li className="mr-4" role="presentation">
											<a
												className="flex items-center px-4 py-2 text-xl font-medium text-gray-500 hover:text-blue-600 hover:border-blue-600 border-b-2 border-transparent"
												id="rent-property"
												data-bs-toggle="tab"
												href="#rent_property"
												role="tab"
												aria-controls="rent_property"
												aria-selected="false"
											>
												<img
													src="/icons/rent-icon.svg"
													alt="icon"
													className="w-5 h-5 mr-2"
												/>
												Rent a Property
											</a>
										</li>
									</ul>
								</div>
								<div className="tab-content" id="bannerTabContent">
									<div
										className="block"
										id="buy_property"
										role="tabpanel"
										aria-labelledby="buy-property"
									>
										<div className="w-full">
											<form action="#">
												<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
													<div className="lg:col-span-1">
														<input
															type="text"
															className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
															placeholder="Enter Keyword"
														/>
													</div>
													<div className="lg:col-span-1">
														<select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
															<option value="0">Property Type</option>
															<option value="1">Buy Property</option>
															<option value="2">Rent Property</option>
														</select>
													</div>
													<div className="lg:col-span-1">
														<input
															type="text"
															className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
															placeholder="Enter Address"
														/>
													</div>
													<div className="lg:col-span-1">
														<input
															type="text"
															className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
															placeholder="Min Price"
														/>
													</div>
													<div className="lg:col-span-1">
														<input
															type="text"
															className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
															placeholder="Max Price"
														/>
													</div>
													<div className="lg:col-span-1">
														<a
															href="buy-property-grid.html"
															className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
														>
															<i className="feather-search mr-2"></i>
															Search
														</a>
													</div>
												</div>
											</form>
										</div>
									</div>
									<div
										className="hidden"
										id="rent_property"
										role="tabpanel"
										aria-labelledby="rent-property"
									>
										<div className="w-full">
											<form action="#">
												<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
													<div className="lg:col-span-1">
														<input
															type="text"
															className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
															placeholder="Enter Keyword"
														/>
													</div>
													<div className="lg:col-span-1">
														<select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
															<option value="0">Property Type</option>
															<option value="1">Buy Property</option>
															<option value="2">Rent Property</option>
														</select>
													</div>
													<div className="lg:col-span-1">
														<input
															type="text"
															className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
															placeholder="Enter Address"
														/>
													</div>
													<div className="lg:col-span-1">
														<input
															type="text"
															className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
															placeholder="Min Price"
														/>
													</div>
													<div className="lg:col-span-1">
														<input
															type="text"
															className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
															placeholder="Max Price"
														/>
													</div>
													<div className="lg:col-span-1">
														<a
															href="rent-property-grid.html"
															className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
														>
															<i className="feather-search mr-2"></i>
															Search
														</a>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default HomeContent;
