import React from "react";

const DiscoverProperty = () => {
	return (
		<section className="w-screen py-24">
			<div className="container  h-[60rem] md:h-[60rem] mx-auto px-4 ">
				<div className="w-full md:h-[20%]  flex flex-col justify-between items-end gap-6 md:gap36 mb-11 md:flex-row ">
					<h2 className="w-full text-6xl font-bold text-[#0B0B1F] md:w-[50%] md:text-8xl">
						Discover Your <br /> Perfect Home
					</h2>
					<p className="w-full md:w-[50%] ">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
						nulla non in praesentium quo natus pariatur, illum magnam mollitia
						voluptatem corrupti. Dolore voluptatibus laboriosam culpa quidem
						fugiat quasi eveniet velit. Lorem ipsum dolor sit amet consectetur,
						adipisicing elit. Nulla molestiae voluptas blanditiis quas amet
						eligendi sunt fugiat harum, sint nisi dolore earum inventore
						adipisci placeat voluptatibus quis alias rem fugit? Lorem ipsum,
						dolor sit amet consectetur adipisicing elit. Voluptates vero earum
						ipsa molestiae veniam quasi? Eligendi assumenda enim temporibus
						dignissimos, harum odio. Numquam eligendi quidem aspernatur expedita
						consectetur cupiditate veniam harum cumque sapiente. Exercitationem
						fugiat facilis dolor, illo nulla nihil, cumque iste temporibus
						asperiores enim mollitia nisi dolores quidem. Minus!
					</p>
				</div>
				<div className="w-full h-full md:h-[80%]  borer-2 flex flex-col justify-center items-center md:flex-row gap-6">
					{/* Left container */}
					<div className="w-full h-[50%] md:h-[100%] bg-[url('/gallery/gallery-14.jpg')] bg-cover bg-center bg-no-repeat rounded-md"></div>
					{/* Right container */}
					<div className="flex flex-col w-full h-[50%] md:h-full gap-6">
						{/* Top Right container */}
						<div className="flex gap-6  w-full h-1/2 ">
							<div className="w-1/2 h-full bg-[url('/gallery/gallery-15.jpg')] bg-cover bg-center bg-no-repeat rounded-md"></div>
							<div className="w-1/2 h-full bg-[url('/gallery/gallery-16.jpg')] bg-cover bg-center bg-no-repeat rounded-md"></div>
						</div>
						{/* Bottom Right container */}
						<div className="w-full h-1/2 bg-[url('/gallery/gallery-17.jpg')] bg-cover bg-center bg-no-repeat rounded-md"></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DiscoverProperty;
