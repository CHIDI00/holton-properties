import { useState, useEffect } from "react";

export const useProperties = () => {
	const [properties, setProperties] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchProperties = async () => {
			// try {
			// 	const response = await fetch("/public/data/properties.json");
			// 	const data = await response.json();
			// 	// Access the properties data from the JSON structure
			// 	const propertiesData = data[2].data[0];

			// 	// Parse the JSON strings in the data
			// 	const formattedProperty = {
			// 		...propertiesData,
			// 		price: JSON.parse(propertiesData.price),
			// 		features: JSON.parse(propertiesData.features),
			// 		images: JSON.parse(propertiesData.images),
			// 		location: JSON.parse(propertiesData.location),
			// 		plan: JSON.parse(propertiesData.plan),
			// 	};

			// 	setProperties([formattedProperty]);
			// 	setIsLoading(false);
			// } catch (err) {
			// 	setError(err.message);
			// 	setIsLoading(false);
			// }

			useEffect(() => {
				// Use the service to fetch property data
				propertyService
					.fetchProperties()
					.then((data) => {
						setProperties(data); // Set the fetched data in state
						setIsLoading(false); // Set loading state to false
					})
					.catch((err) => {
						setError("Failed to fetch data"); // Handle the error
						setIsLoading(false); // Set loading state to false
					});
			}, []);
		};

		fetchProperties();
	}, []);

	return { properties, isLoading, error };
};
