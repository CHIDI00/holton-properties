import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Properties from "./pages/Properties";

import AOS from "aos";
import "aos/dist/aos.css";
import Shortlets from "./pages/Shortlets";

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
					<Route path="/shortlets" element={<Shortlets />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
