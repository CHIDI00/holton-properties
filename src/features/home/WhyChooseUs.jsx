import React from "react";
import { HiCheckCircle } from "react-icons/hi";

const WhyChooseUs = () => {
	return (
		<section className="flex flex-col justify-center items-center bg-[#0B0B1F] text-white py-16">
			<h2 className="text-[4rem] font-bold" data-aos="fade-up">
				Why{" "}
				<span className="text-blue-600">
					<em>Choose</em>
				</span>{" "}
				Us?
			</h2>
			<div className="container mx-auto px-4">
				<div className="flex flex-wrap items-center">
					{/* Left side - Image */}
					<div className="w-full lg:w-1/2 mb-10 lg:mb-0">
						<img
							src="/gallery/gallery-thum-06.jpg"
							alt="Luxury Property View"
							className="rounded-lg w-full"
						/>
					</div>

					{/* Right side - Content */}
					<div className="w-full py-32 lg:w-1/2 lg:pl-16">
						<div className="space-y-8">
							{/* Best Price */}
							<div className="flex items-start gap-4">
								<div className=" text-blue-600 p-2 mt-1">
									<HiCheckCircle size={40} />
								</div>
								<div>
									<h3 className="text-4xl font-semibold mb-2">Best Price</h3>
									<p className="text-gray-400  text-3xl">
										We pride ourselves on offering the best prices for premium
										properties in the market.
									</p>
								</div>
							</div>

							{/* High-Quality Standards */}
							<div className="flex items-start gap-4">
								<div className="text-blue-600 p-2 rounded-full mt-1">
									<HiCheckCircle size={40} />
								</div>
								<div>
									<h3 className="text-4xl font-semibold mb-2">
										High-Quality Standards
									</h3>
									<p className="text-gray-400 text-3xl">
										Property featured on our platform undergoes rigorous quality
										checks to meet the standards.
									</p>
								</div>
							</div>

							{/* Local market Insights */}
							<div className="flex items-start gap-4">
								<div className=" text-blue-600 p-2 rounded-full mt-1">
									<HiCheckCircle size={40} />
								</div>
								<div>
									<h3 className="text-4xl font-semibold mb-2">
										Local market Insights
									</h3>
									<p className="text-gray-400 text-3xl">
										Using our expertise and knowledge, we guide our clients
										through the property search process.
									</p>
								</div>
							</div>

							{/* Trusted Reputation */}
							<div className="flex items-start gap-4">
								<div className=" text-blue-600 p-2 rounded-full mt-1">
									<HiCheckCircle size={40} />
								</div>
								<div>
									<h3 className="text-4xl font-semibold mb-2">
										Trusted Reputation
									</h3>
									<p className="text-gray-400 text-3xl">
										We have built a solid reputation for integrity,
										professionalism, and customer satisfaction.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUs;
