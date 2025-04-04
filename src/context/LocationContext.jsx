import React, { createContext, useState, useContext } from "react";

// Create a context for location filtering
const LocationContext = createContext();

// Custom hook to use the location context
export const useLocation = () => useContext(LocationContext);

// Provider component to wrap around components that need access to location state
export const LocationProvider = ({ children }) => {
	// State to track the selected city for filtering
	const [selectedCity, setSelectedCity] = useState(null);

	// Function to update the selected city
	const filterByCity = (city) => {
		setSelectedCity(city);
	};

	// Function to clear the city filter
	const clearCityFilter = () => {
		setSelectedCity(null);
	};

	// Value object to be provided to consumers
	const value = {
		selectedCity,
		filterByCity,
		clearCityFilter,
	};

	return (
		<LocationContext.Provider value={value}>
			{children}
		</LocationContext.Provider>
	);
};
