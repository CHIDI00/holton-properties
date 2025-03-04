import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import Shortlets from "./pages/Shortlets";
import PropertyDetails from "./features/properties/PropertyDetails";
import ShortletDetails from "./features/shortlet/ShortletDetails";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true,
		});
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route element={<AppLayout />}>
					<Route path="/" element={<Home />} />
					<Route path="/properties" element={<Properties />} />
					<Route path="/properties/:propertyId" element={<PropertyDetails />} />
					<Route path="/shortlets" element={<Shortlets />} />
					<Route path="/shortlets/:shortletId" element={<ShortletDetails />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
