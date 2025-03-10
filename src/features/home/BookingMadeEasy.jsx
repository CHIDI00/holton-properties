import React from "react";
import { cn } from "../../lib/utils";

const BookingMadeEasy = () => {
	const steps = [
		{
			number: "1",
			title: "Discover A Property",
			description:
				"Explore our curated selection of properties on our user-friendly website or mobile app. Utilize advanced search filters to narrow down options based on location, price range, amenities, and more.",
		},
		{
			number: "2",
			title: "Schedule A Visit",
			description:
				"Once you've found a property that interests you, contact our dedicated team of real estate experts to schedule a visit. Receive instant confirmation of your scheduled visit, ensuring a hassle-free.",
		},
		{
			number: "3",
			title: "Physical/Virtual Tour",
			description:
				"Embark on a personalized tour of your potential new home, either in person or virtually. Our knowledgeable agents will guide you through each property, providing insights and answering any questions.",
		},
		{
			number: "4",
			title: "Finalize The Deal",
			description:
				"Once you've found the perfect home, our team will assist you in finalizing the deal. From negotiating the best terms to ensuring a smooth transaction process, we'll support you every step.",
		},
	];

	return (
		<div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
			<h2
				className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center"
				// data-aos="fade-up"
			>
				Booking Your Home
				<br />
				<span className="text-blue-600">Now Made Easy.</span>
			</h2>

			<div className="relative container mx-auto px-6 flex flex-col space-y-8">
				{/* Vertical timeline line */}
				<div className="absolute z-0 w-2 h-full bg-blue-800 shadow-md inset-0 left-13 md:mx-auto md:right-0 md:left-0 "></div>

				{/* Steps */}
				{steps.map((step, index) => (
					<div className="relative z-10" data-aos="fade-up">
						{/* Number circle */}
						<div className="timeline-number">{step.number}</div>
						{/* Content box */}
						<div
							className={cn(
								"timeline-container",
								index % 2 === 0
									? "timeline-container"
									: "timeline-container-left"
							)}
						>
							<div
								className={cn(
									"timeline-pointer",
									index % 2 === 0 ? "timeline-pointer" : "timeline-pointer-left"
								)}
								aria-hidden="true"
							></div>
							<div className=" bg-blue-950 p-6 rounded-md shadow-md">
								<p
									className="text-3xl text-white mb-3"
									style={{ fontWeight: "bold" }}
								>
									{step.title}
								</p>
								<p className="text-2xl text-gray-400">{step.description}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default BookingMadeEasy;
