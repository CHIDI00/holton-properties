import React from "react";

const DiscoverProperty = () => {
	return (
		<section className="w-screen h-auto py-24">
			<div className="container flex flex-col items-center justify-between h-full w-full  mx-auto px-4 ">
				<div
					className="w-full h-[30%] md:h-[20%]  flex flex-col justify-between items-end gap-6 md:gap36 mb-11 md:flex-row "
					data-aos="fade-up"
				>
					<h2 className="w-full text-6xl font-bold text-[#0B0B1F] md:w-[50%] md:text-8xl">
						Discover Your <br /> Perfect Home
					</h2>
					<p className="w-full md:w-[50%] ">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
						nulla non in praesentium quo natus pariatur, illum magnam mollitia
						voluptatem corrupti. Dolore voluptatibus laboriosam culpa quidem
						fugiat quasi eveniet velit. Lorem ipsum dolor sit amet consectetur,
					</p>
				</div>

				<div className="w-full min-h-[500px] border-2 flex flex-col justify-center items-center md:flex-row gap-6">
					{/* Left container */}
					<div
						className="w-full h-[300px] md:h-[500px] bg-[url('/gallery/gallery-14.jpg')] bg-cover bg-center bg-no-repeat rounded-md"
						data-aos="fade-up"
					></div>
					{/* Right container */}
					<div className="flex flex-col w-full h-[300px] md:h-[500px] gap-6">
						{/* Top Right container */}
						<div className="flex gap-6 w-full h-1/2" data-aos="fade-up">
							<div className="w-1/2 h-full bg-[url('/gallery/gallery-15.jpg')] bg-cover bg-center bg-no-repeat rounded-md"></div>
							<div className="w-1/2 h-full bg-[url('/gallery/gallery-16.jpg')] bg-cover bg-center bg-no-repeat rounded-md"></div>
						</div>
						{/* Bottom Right container */}
						<div
							className="w-full h-1/2 bg-[url('/gallery/gallery-17.jpg')] bg-cover bg-center bg-no-repeat rounded-md"
							data-aos="fade-up"
						></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DiscoverProperty;
