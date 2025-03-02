import React from "react";

const HowToFindHome = () => {
	return (
		<section className="py-32 px-4 bg-white">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-5xl font-bold text-[#1c347c] mb-4">
						How It Works
					</h2>
					<div className="flex items-center justify-center gap-2 mb-4">
						<span className="w-40 h-2 bg-blue-800 rounded-full  "></span>
						{/* <span className="w-2 h-1 bg-red-500"></span> */}
					</div>
					<p className="text-gray-500 text-2xl">
						Follow these 3 steps to book your place
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{/* Card 1 */}
					<div
						className="bg-white p-8 rounded-lg shadow-lg text-center"
						// data-aos="fade-up"
					>
						<div className="w-36 h-36 bg-[#6c5ce7] rounded-full flex items-center justify-center mx-auto mb-10">
							<img
								src="/icons/work-icon-1.svg"
								alt="icon"
								className="w-15 h-15 "
							/>
						</div>
						<h4 className="text-3xl font-bold text-[#1c347c] mb-4">
							01. Search for Location
						</h4>
						<p className="text-gray-500 text-2xl mb-6">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
							mollis et sem sed sollicitudin. Donec non odio…
						</p>
					</div>

					{/* Card 2 */}
					<div
						className="bg-white p-8 rounded-lg shadow-lg text-center"
						// data-aos="fade-up"
					>
						<div className="w-36 h-36 bg-[#ff6b6b] rounded-full flex items-center justify-center mx-auto mb-10">
							<img
								src="/icons/work-icon-2.svg"
								alt="icon"
								className="w-15 h-15"
							/>
						</div>
						<h4 className="text-4xl font-bold text-[#1c347c] mb-4">
							02. Select Property Type
						</h4>
						<p className="text-gray-500 text-2xl mb-6">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
							mollis et sem sed sollicitudin. Donec non odio…
						</p>
					</div>

					{/* Card 3 */}
					<div
						className="bg-white p-10 rounded-lg shadow-lg text-center"
						// data-aos="fade-up"
					>
						<div className="w-36 h-36 bg-[#2ecc71] rounded-full flex items-center justify-center mx-auto mb-10">
							<img
								src="/icons/work-icon-3.svg"
								alt="icon"
								className="w-15 h-15"
							/>
						</div>
						<h4 className="text-4xl font-bold text-[#1c347c] mb-4">
							03. Book Your Property
						</h4>
						<p className="text-gray-500 text-2xl mb-6">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
							mollis et sem sed sollicitudin. Donec non odio…
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HowToFindHome;
