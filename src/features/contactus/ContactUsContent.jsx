import { Mail, MapPin, PhoneCall } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const ContactUsContent = () => {
	return (
		<>
			<div className="w-full bg-blue-950 py-20 md:py-32 flex flex-col justify-center items-center mt-28 text-white">
				<h2 className="text-5xl mb-4 font-semibold">Contact Us</h2>
				<p className="text-2xl">
					<a href="" className="text-yellow-700 ">
						<NavLink to="/">Home </NavLink>
					</a>
					/ Contact Us
				</p>
			</div>

			<div className="container flex flex-col md:flex-row gap-8 mx-auto py-20 p-7">
				<div className="w-full md:w-[50%] border-2 border-gray-200">
					<h1 className="mx-9 py-11 text-4xl font-bold border-b-2 border-gray-200">
						Get in touch
					</h1>
					<form className="w-full p-9 bg-white rounded-md">
						{/* <div className="w-full"> */}
						<label className="text-2xl font-semibold" htmlFor="">
							Your name
						</label>
						<input
							type="text"
							placeholder="Your name"
							className="w-full px-5 py-6 bg-gray-100 focus:ring-2 focus:ring-blue-950 focus:bg-white transition-all duration-300 rounded-md text-2xl mb-8"
						/>
						{/* </div> */}

						<label className="text-2xl font-semibold" htmlFor="">
							Your email
						</label>
						<input
							type="text"
							placeholder="Your email"
							className="w-full px-5 py-6 bg-gray-100 focus:ring-2 focus:ring-blue-950 focus:bg-white transition-all duration-300 rounded-md text-2xl mb-8"
						/>

						<label className="text-2xl font-semibold" htmlFor="">
							Your phone number
						</label>
						<input
							type="text"
							placeholder="Your Phone number"
							className="w-full px-5 py-6 bg-gray-100 focus:ring-2 focus:ring-blue-950 focus:bg-white transition-all duration-300 rounded-md text-2xl mb-8"
						/>

						<label className="text-2xl font-semibold" htmlFor="">
							subject
						</label>
						<input
							type="text"
							placeholder="Subject"
							className="w-full px-5 py-6 bg-gray-100 focus:ring-2 focus:ring-blue-950 focus:bg-white transition-all duration-300 rounded-md text-2xl mb-8"
						/>
						<textarea
							name="yes i'm interested"
							placeholder="yes i'm interested"
							id=""
							className="w-full h-[15rem] px-5 py-6 bg-gray-100 focus:ring-2 focus:ring-blue-950 focus:bg-white transition-all duration-300 rounded-md text-2xl mb-8 resize-none"
						></textarea>

						<button className="w-full bg-blue-950 text-white text-2xl font-semibold py-7 px-5 rounded-md cursor-pointer">
							SEND MESSAGE
						</button>
					</form>
				</div>

				<div className="w-full md:w-[50%]">
					<h1 className="mx-9 py-11 text-4xl font-bold">Contact Us</h1>
					<div className="w-full">
						<div className="w-full flex flex-col gap-10">
							<div className="flex justify-start items-center w-full gap-4">
								<PhoneCall
									style={{
										padding: "10px",
										border: "1px solid #ccc",
										color: "blue",
										borderRadius: "8px",
									}}
									size={40}
								/>
								<div className="">
									<h1 className="text-3xl font-semibold pb-2">Call us at</h1>
									<p className="text-2xl">+234 9038664777, +234 8023874832</p>
								</div>
							</div>
							<div className="flex justify-start items-center w-full gap-4">
								<Mail
									style={{
										padding: "10px",
										border: "1px solid #ccc",
										color: "blue",
										borderRadius: "8px",
									}}
									size={40}
								/>
								<div className="">
									<h1 className="text-3xl font-semibold pb-2">Email us</h1>
									<p className="text-2xl">holtonrealty@gmail.com</p>
								</div>
							</div>
							<div className="flex justify-start items-center w-full gap-4">
								<MapPin
									style={{
										padding: "10px",
										border: "1px solid #ccc",
										color: "blue",
										borderRadius: "8px",
									}}
									size={40}
								/>
								<div className="">
									<h1 className="text-3xl font-semibold pb-2">Location</h1>
									<p className="text-2xl">Lekki, Phase 2, Lagos State.</p>
								</div>
							</div>
						</div>
					</div>
					{/* Map */}
					<div className="w-full p-7 bg-white rounded-md my-10">
						<p className="text-4xl font-semibold mb-10">Find us on</p>
						<div className="w-full h-[300px] md:h-[400px]">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7277813442757!2d3.4701!3d6.4345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjYnMDQuMiJOIDPCsDI4JzEyLjQiRQ!5e0!3m2!1sen!2sng!4v1624981887673!5m2!1sen!2sng"
								width="100%"
								height="100%"
								style={{ border: 0 }}
								allowFullScreen=""
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							></iframe>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactUsContent;
