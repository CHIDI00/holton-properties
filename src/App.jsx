import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import Shortlets from "./pages/Shortlets";
import PropertyDetails from "./features/properties/PropertyDetails";
import ShortletDetails from "./features/shortlet/ShortletDetails";
import ContactUs from "./pages/ContactUs";

import AOS from "aos";
import "aos/dist/aos.css";
import AboutUs from "./pages/AboutUs";

// Import the LocationProvider
import { LocationProvider } from "./context/LocationContext";

function App() {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true,
		});
	}, []);

	return (
		<LocationProvider>
			<BrowserRouter>
				<Routes>
					<Route element={<AppLayout />}>
						<Route path="/" element={<Home />} />
						<Route path="/properties" element={<Properties />} />
						<Route
							path="/properties/:propertyId"
							element={<PropertyDetails />}
						/>
						<Route path="/shortlets" element={<Shortlets />} />
						<Route
							path="/shortlets/:shortletId"
							element={<ShortletDetails />}
						/>
						<Route path="/about-us" element={<AboutUs />} />
						<Route path="/contact-us" element={<ContactUs />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</LocationProvider>
	);
}

export default App;
