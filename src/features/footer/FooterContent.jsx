import { Facebook, Instagram, Linkedin } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const FooterContent = () => {
	return (
		<div className="w-screen py-5 bg-blue-950">
			<div className="container mx-auto">
				<img
					src="/HOLTONicon-dark.png"
					alt="logo"
					className="w-[50%] md:w-[20%]"
				/>

				<div className="w-full flex flex-col">
					<div className="w-full  flex flex-col md:flex-row">
						<div className="w-full md:w-[50%] p-7 flex flex-wrap justify-between  gap-6">
							<div className="text-gray-300">
								<p className="text-white text-4xl font-semibold mb-4">Pages</p>
								<ul>
									<li className="text-2xl mb-6">
										<NavLink to="/">Home</NavLink>
									</li>
									<li className="text-2xl mb-6">
										<NavLink to="/properties">Properties</NavLink>
									</li>
									<li className="text-2xl mb-6">
										<NavLink to="/shortlets">Shortlets</NavLink>
									</li>
									<li className="text-2xl mb-6">
										<NavLink to="/about-us">About Us</NavLink>
									</li>
									<li className="text-2xl mb-6">
										<NavLink to="/contact-us">Contact Us</NavLink>
									</li>
								</ul>
							</div>
							<div className="text-gray-300 ">
								<p className="text-white text-4xl font-semibold mb-4">Pages</p>
								<ul>
									<li className="text-2xl mb-6">
										<NavLink to="/">Support</NavLink>
									</li>
									<li className="text-2xl mb-6">
										<NavLink to="/">FAQ</NavLink>
									</li>
								</ul>
							</div>
							<div className="text-gray-300 ">
								<p className="text-white text-4xl font-semibold mb-4">Office</p>
								<p className="text-2xl mb-6">
									Lekki, Phase 2, Lagos State, Nigeria.
								</p>
							</div>
						</div>

						<div className="px-7 w-full md:w-[50%] flex justify-end items-start">
							<div className="w-full md:w-[70%] flexflex-col">
								<p className="text-white text-3xl font-semibold mb-4">
									Subscribe for latest update
								</p>
								<input
									type="text"
									placeholder="Enter you email"
									className="w-full  p-4 text-2xl rounded-lg"
								/>
								<button className="p-4 w-full bg-red-400 hover:bg-red-500 transition-all my-5 rounded-lg text-2xl font-semibold text-white">
									Subscribe
								</button>
							</div>
						</div>
					</div>

					<div className="w-full p-7 flex flex-col-reverse justify-between items-center md:flex-row border-t-2 border-blue-900 gap-7">
						<p className="text-white text-xl font-semibold mb-4">
							Holton Realty &copy; 2025{" "}
						</p>

						<div className=" flex gap-10 justify-center items-center">
							<button className="h-20 w-20 bg-white flex justify-center items-center rounded-full hover:bg-red-500 hover:text-white transition-all">
								<Facebook />
							</button>
							<button className="h-20 w-20 bg-white flex justify-center items-center rounded-full hover:bg-red-500 hover:text-white transition-all">
								<Instagram />
							</button>
							<button className="h-20 w-20 bg-white flex justify-center items-center rounded-full hover:bg-red-500 hover:text-white transition-all">
								<Linkedin />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FooterContent;
