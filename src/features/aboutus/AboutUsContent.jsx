import React from "react";
import { NavLink } from "react-router-dom";

const AboutUsContent = () => {
	return (
		<>
			<div className="w-full bg-blue-950 py-20 md:py-32 flex flex-col justify-center items-center mt-28 text-white">
				<h2 className="text-5xl mb-4 font-semibold">About Us</h2>
				<p className="text-2xl">
					<a href="" className="text-yellow-700 ">
						<NavLink to="/">Home </NavLink>
					</a>
					/ About us
				</p>
			</div>

			<div className="container mx-auto py-10 px-10">
				<div className="w-full">
					<p className="text-2xl text-blue-950 font-semibold mb-5">
						About Holton Properties
					</p>
					<h1 className="text-4xl md:text-6xl font-bold mb-8">
						We connect building with <br /> people
					</h1>
					<p className="text-2xl text-gray-500 mb-5">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
						quis ligula eu lectus vulputate porttitor sed feugiat nunc. Mauris
						ac consectetur ante,
					</p>

					<p className="text-2xl text-gray-500 mb-5">
						congue, sed luctus lectus congue. Integer convallis condimentum sem.
						Duis elementum tortor eget condimentum tempor. Praesent sollicitudin
						lectus ut pharetra pulvinar. Donec et libero ligula. Vivamus semper
						at orci at placerat.Placeat Lorem ipsum dolor sit amet.
					</p>
				</div>

				<div className="w-full h-[70rem] md:h-[60rem] flex flex-col justify-between items-center md:flex-row gap-3 md:gap-5 my-20 ">
					<div className="w-full h-1/3 md:h-full ">
						<img
							src="/about-us/about-us-01.jpg "
							alt=""
							className="w-full h-full rounded-3xl object-cover "
						/>
					</div>
					<div className="w-full h-1/3 md:h-full ">
						<img
							src="/about-us/about-us-02.jpg "
							alt=""
							className="w-full h-full rounded-3xl object-cover "
						/>
					</div>
					<div className="w-full h-1/3 md:h-full ">
						<img
							src="/about-us/about-us-03.jpg "
							alt=""
							className="w-full h-full rounded-3xl object-cover "
						/>
					</div>
				</div>
			</div>

			<div className="w-screen bg-blue-950">
				<div className="container w-full mx-auto px-10 py-12 flex flex-wrap flex-col md:flex-row justify-between items-center">
					<div className="md:w-[50%] flex flex-col justify-center items-center ">
						<h1 className="text-white text-5xl md:text-6xl font-bold text-center mb-8">
							Ready to book your home?
						</h1>
						<div className="w-full md:w-[80%] border-[10px] border-white">
							<img src="/about-us/about-us-04.jpg " alt="" className="w-full" />
						</div>
					</div>

					<div className="md:w-[50%] my-7">
						<p className="text-2xl text-white mb-16">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
							quis ligula eu lectus vulputate porttitor sed feugiat nunc. Mauris
							ac consectetur ante,
						</p>
						<p className="text-2xl text-white mb-16">
							congue, sed luctus lectus congue. Integer convallis condimentum
							sem. Duis elementum tortor eget condimentum tempor. Praesent
							sollicitudin lectus ut pharetra pulvinar. Donec et libero ligula.
							Vivamus semper at orci at placerat.Placeat Lorem ipsum dolor sit
							amet. congue, sed luctus lectus congue. Integer convallis
							condimentum sem. Duis elementum tortor eget condimentum tempor.
							Praesent sollicitudin lectus ut pharetra pulvinar. Done congue,
							sed luctus lectus congue. Integer convallis condimentum sem. Duis
							elementum tortor eget condimentum tempor. Praesent sollicitudin
							lectus ut pharetra pulvinar. Done Lorem ipsum dolor sit amet,
							consectetur adipiscing elit. Quisque quis ligula eu lectus
							vulputate porttitor sed feugiat nunc. Mauris ac consectetur ante,
						</p>
						<p className="text-2xl text-white mb-16">
							congue, sed luctus lectus congue. Integer convallis condimentum
							sem. Duis elementum tortor eget condimentum tempor. Praesent
							sollicitudin lectus ut pharetra pulvinar. Donec et libero ligula.
							Vivamus semper at orci at placerat.Placeat Lorem ipsum dolor sit
							amet.
						</p>
					</div>
				</div>
			</div>

			<div className="w-screen bg-gray-100 py-32">
				<div className="container mx-auto flex flex-col flex-wrap md:flex-row justify-center items-center px-10 bg-gray-100 gap-5">
					<div className="p-10 bg-white w-[40rem] md:w-[27rem] flex flex-col justify-center items-center rounded-3xl hover:bg-blue-950 hover:text-white transition-all">
						<img src="/icons/counter-icon-1.svg" alt="" className="" />
						<h1 className="text-6xl font-bold my-3 mt-10 ">11k</h1>
						<p className="text-3xl font-semibold text-gray-400">
							Shorlets added
						</p>
					</div>
					<div className="p-10 bg-white w-[40rem] md:w-[27rem] flex flex-col justify-center items-center rounded-3xl hover:bg-blue-950 hover:text-white transition-all">
						<img src="/icons/counter-icon-2.svg" alt="" className="" />
						<h1 className="text-6xl font-bold my-3 mt-10 ">2465+</h1>
						<p className="text-3xl font-semibold text-gray-400">
							Property Added
						</p>
					</div>
					<div className="p-10 bg-white w-[40rem] md:w-[27rem] flex flex-col justify-center items-center rounded-3xl hover:bg-blue-950 hover:text-white transition-all">
						<img src="/icons/counter-icon-3.svg" alt="" className="" />
						<h1 className="text-6xl font-bold my-3 mt-10 ">965+</h1>
						<p className="text-3xl font-semibold text-gray-400">
							Sales Completed
						</p>
					</div>
					<div className="p-10 bg-white w-[40rem] md:w-[27rem] flex flex-col justify-center items-center rounded-3xl hover:bg-blue-950 hover:text-white transition-all">
						<img src="/icons/counter-icon-4.svg" alt="" className="" />
						<h1 className="text-6xl font-bold my-3 mt-10 ">3726+</h1>
						<p className="text-3xl font-semibold text-gray-400">Users</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutUsContent;
