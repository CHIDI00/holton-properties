import React from "react";
import HomeContent from "../features/home/HomeContent";
import HowToFindHome from "../features/home/HowToFindHome";
import WhyChooseUs from "../features/home/WhyChooseUs";
import BookingMadeEasy from "../features/home/BookingMadeEasy";
import DiscoverProperty from "../features/home/DiscoverProperty";

const Home = () => {
	return (
		<div className="w-full h-full">
			<HomeContent />
			<HowToFindHome />
			<WhyChooseUs />
			<BookingMadeEasy />
			<DiscoverProperty />
		</div>
	);
};

export default Home;
