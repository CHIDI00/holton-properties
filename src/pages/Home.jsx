import React from "react";
// import HomeContent from "../features/home/HomeContent";
import HowToFindHome from "../features/home/HowToFindHome";
// import WhyChooseUs from "../features/home/WhyChooseUs";
import BookingMadeEasy from "../features/home/BookingMadeEasy";
// import DiscoverProperty from "../features/home/DiscoverProperty";
import PropertyShowcase from "../features/home/PropertyShowcase";
import ShortListShowcase from "../features/home/ShortListShowcase";
import Cities from "../features/home/Cities";
import { HelmetProvider, Helmet } from "react-helmet-async";

import { lazy, Suspense } from "react";

const HomeContent = lazy(() => import("../features/home/HomeContent"));

const Home = () => {
	return (
		<HelmetProvider>
			<Helmet>
				<title>Luxury Homes for Sale | Affordable Real Estate Deals</title>
				<meta
					name="description"
					content="Find luxury homes and affordable real estate properties in your desired location. Get the best deals with trusted agents."
				/>

				{/* Open Graph (For Facebook, LinkedIn, etc.) */}
				<meta
					property="og:title"
					content="Luxury Homes for Sale | Affordable Real Estate Deals"
				/>
				<meta
					property="og:description"
					content="Find luxury homes and affordable real estate properties in your desired location. Get the best deals with trusted agents."
				/>
				<meta
					property="og:image"
					content="https://yourwebsite.com/preview-image.jpg"
				/>
				<meta property="og:url" content="https://yourwebsite.com/" />
				<meta property="og:type" content="website" />

				{/* Twitter Card */}
				<meta
					name="twitter:title"
					content="Luxury Homes for Sale | Affordable Real Estate Deals"
				/>
				<meta
					name="twitter:description"
					content="Find luxury homes and affordable real estate properties in your desired location. Get the best deals with trusted agents."
				/>
				<meta
					name="twitter:image"
					content="https://yourwebsite.com/preview-image.jpg"
				/>
				<meta name="twitter:card" content="summary_large_image" />
			</Helmet>

			<div className="w-full h-full">
				<Suspense>
					<HomeContent />
				</Suspense>
				{/* <WhyChooseUs /> */}
				<PropertyShowcase />
				<ShortListShowcase />
				<Cities />
				<BookingMadeEasy />
				{/* <DiscoverProperty />s */}
				<HowToFindHome />
			</div>
		</HelmetProvider>
	);
};

export default Home;
