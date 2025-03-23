import React from "react";
import HomeContent from "../features/home/HomeContent";
import HowToFindHome from "../features/home/HowToFindHome";
// import WhyChooseUs from "../features/home/WhyChooseUs";
import BookingMadeEasy from "../features/home/BookingMadeEasy";
// import DiscoverProperty from "../features/home/DiscoverProperty";
import PropertyShowcase from "../features/home/PropertyShowcase";
import ShortListShowcase from "../features/home/ShortListShowcase";
import Cities from "../features/home/Cities";

const Home = () => {
	return (
		<div className="w-full h-full">
			<HomeContent />
			{/* <WhyChooseUs /> */}
			<PropertyShowcase />
			<ShortListShowcase />
			<Cities />
			<BookingMadeEasy />
			{/* <DiscoverProperty />s */}
			<HowToFindHome />
		</div>
	);
};

export default Home;
