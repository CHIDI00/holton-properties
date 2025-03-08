import axios from "axios";

const API_URL = "https://api.example.com/api"; // Replace with your actual API URL

export const propertyService = {
	// Get all properties
	getAllProperties: async () => {
		try {
			const response = await axios.get(`${API_URL}/properties`);
			return response.data.data; // Accessing the data array from your JSON structure
		} catch (error) {
			console.error("Error fetching properties:", error);
			throw error;
		}
	},

	// Get single property by ID
	getPropertyById: async (id) => {
		try {
			const response = await axios.get(`${API_URL}/properties/${id}`);
			return response.data.data[0]; // Assuming single property data structure
		} catch (error) {
			console.error("Error fetching property:", error);
			throw error;
		}
	},

	// For development/testing - using local data
	getMockProperties: async () => {
		try {
			// Simulating API delay
			await new Promise((resolve) => setTimeout(resolve, 1000));

			// Mock data structure matching your JSON
			return {
				data: [
					{
						id: "6",
						title: "Princewill Manor",
						size: "ofjfosjo",
						price: JSON.parse(
							'[{"amount":"2000","description":"1  year"},{"amount":"5000","description":"2 years"},{"amount":"12000","description":"3 years"},{"amount":"1000","description":"4 years"}]'
						),
						features: JSON.parse(
							'[{"name":"All Room En-suite","icon":"BedDouble"},{"name":"Fitted Kitchen","icon":"Utensils"},{"name":"POP Ceiling","icon":"Home"},{"name":"Open Terrace","icon":"Expand"},{"name":"Walk-In Closet","icon":"Shirt"},{"name":"Walk-In Shower","icon":"ShowerHead"},{"name":"Chandelier","icon":"Lightbulb"},{"name":"TV Console","icon":"Monitor"},{"name":"Ample Parking Space","icon":"ParkingSquare"},{"name":"Stamp Concrete","icon":"Building2"},{"name":"CCTV","icon":"Camera"},{"name":"24/7 Security","icon":"ShieldCheck"}]'
						),
						images: JSON.parse(
							'["screenshot-2024-10-03-102515bO1aF.png","screenshot-2024-10-02-230837bO1aF.png","screenshot-2024-10-02-214051bO1aF.png","screenshot-2024-10-03-113341bO1aF.png","screenshot-2024-10-03-111709bO1aF.png","screenshot-2024-10-03-105625bO1aF.png"]'
						),
						location: JSON.parse('{"lat":"0.384838","long":"48.48838"}'),
						loctext: "293, Herbert Macaulay way, Yaba.",
						plan: JSON.parse(
							'[{"icon":"bed-icon.svg","description":"3 Bedrooms"},{"icon":"bath-icon.svg","description":"4 Bathrooms"},{"icon":"garage-icon.svg","description":"2 Garages"},{"icon":"building-icon.svg","description":"35000sqft"},{"icon":"calender-icon.svg","description":"2023"}]'
						),
						slug: "princewill-manor",
						uniqId: "bO1aF",
						document: "C of O",
						description: "Good road frontage on a paved county road...", // Shortened for brevity
						sold: "0",
						type: "Sale",
						status: "1",
					},
					// Add more properties as needed
				],
			};
		} catch (error) {
			console.error("Error fetching mock properties:", error);
			throw error;
		}
	},
};

// Fetch data from the local JSON file and return the processed result
const fetchProperties = async () => {
	try {
		// Fetch the JSON data from the public directory (assuming it's in the public folder)
		const response = await fetch("/public/data/properties.json");

		if (!response.ok) {
			throw new Error("Failed to fetch property data");
		}

		const data = await response.json();

		// Extract property data from the JSON structure
		const tableData = data.find((item) => item.type === "table")?.data || [];

		// Process the data if necessary
		// For example, you can parse JSON strings within the data (price, features, images, etc.)
		const processedData = tableData.map((property) => ({
			...property,
			price:
				typeof property.price === "string"
					? JSON.parse(property.price)
					: property.price,
			features: Array.isArray(property.features)
				? property.features
				: JSON.parse(property.features),
			images:
				typeof property.images === "string"
					? JSON.parse(property.images)
					: property.images,
			location:
				typeof property.location === "string"
					? JSON.parse(property.location)
					: property.location,
			plan: Array.isArray(property.plan)
				? property.plan
				: JSON.parse(property.plan),
		}));

		return processedData;
	} catch (error) {
		// Handle any errors during the fetch
		console.error("Error fetching property data:", error);
		throw error; // Re-throw error so the component can handle it
	}
};

export default {
	fetchProperties,
};
