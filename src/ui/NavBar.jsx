import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
	const [isSticky, setIsSticky] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsSticky(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	return (
		<div
			className={`bg-white shadow-sm text-2xl fixed w-full top-0 z-50 transition-all duration-300 ${
				isSticky ? "shadow-md" : ""
			}`}
		>
			<div className="container mx-auto px-4 py-6 flex justify-between items-center">
				<img src="/HOLTONicon-dark.png" alt="Holton Logo" className="h-20" />

				{/* Mobile menu button */}
				<button
					type="button"
					className="lg:hidden text-gray-700 focus:outline-none relative z-[60]"
					onClick={toggleMobileMenu}
					aria-label="Toggle mobile menu"
				>
					<svg
						className="w-8 h-8"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						{mobileMenuOpen ? (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						) : (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						)}
					</svg>
				</button>

				{/* Desktop navigation */}
				<nav className="hidden lg:block">
					<ul className="flex space-x-8 items-center text-gray-700">
						<li>
							<a className="hover:text-[#0B0B1F] text-3xl mx-10">
								<NavLink to="/">Home</NavLink>
							</a>
						</li>
						<li className="relative group">
							<a className="flex items-center hover:text-[#0B0B1F] text-3xl mx-10">
								<NavLink to="/properties">Properties</NavLink>
							</a>
						</li>
						<li className="relative group">
							<a className="flex items-center hover:text-[#0B0B1F] text-3xl mx-10">
								<NavLink to="/shortlets">Shortlets</NavLink>
							</a>
						</li>
						<li className="relative group">
							<a className="flex items-center hover:text-[#0B0B1F] text-3xl mx-10">
								<NavLink to="/about-us">About us</NavLink>
							</a>
						</li>
						<li className="relative group">
							<a className="flex items-center hover:text-[#0B0B1F] text-3xl mx-10">
								<NavLink to="/contact-us">Contact Us</NavLink>
							</a>
						</li>
						{/* <li className="relative group">
							<a className="flex items-center hover:text-[#0B0B1F] font-medium">
								<NavLink to="/properties">Blog</NavLink>
							</a>
						</li> */}
						{/* <li>
							<a
								href="contact-us.html"
								className="hover:text-[#0B0B1F] font-medium"
							>
								Contact Us
							</a>
						</li>
						<li className="ml-8">
							<a
								href="login.html"
								className="text-[#0B0B1F] hover:text-[#0B0B1F] font-medium"
							>
								Sign Up
							</a>
						</li>
						<li>
							<a
								href="register.html"
								className="bg-[#0B0B1F] text-white px-4 py-2 rounded-md hover:bg-[#0B0B1F] transition-colors font-medium"
							>
								Sign In
							</a>
						</li> */}
					</ul>
				</nav>
			</div>

			{/* Mobile navigation menu */}
			<div
				className={`lg:hidden bg-white fixed overflow-y-auto shadow-lg transition-all duration-300 transform  ${
					mobileMenuOpen
						? "translate-x-0 translate-y-0"
						: "translate-x-full translate-y-[-100%]"
				} ${
					/* For tablet screens (md), menu comes from top */
					"md:top-0 md:left-0 md:right-0 md:w-full md:h-auto md:max-h-[80vh] " +
					/* For mobile screens (below md), menu comes from right */
					"top-28 right-0 h-full w-3/4 "
				}`}
			>
				<nav className="container   mx-auto px-4 py-4">
					<ul className="md:grid md:grid-cols-2 space-y-4 text-gray-700">
						<li>
							<NavLink
								to="/"
								className="block hover:text-[#0B0B1F] font-medium py-2 text-4xl mb-9 text-center"
								onClick={() => setMobileMenuOpen(false)}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/properties"
								className="block hover:text-[#0B0B1F] font-medium py-2 text-4xl mb-9 text-center"
								onClick={() => setMobileMenuOpen(false)}
							>
								Properties
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/shortlets"
								className="block hover:text-[#0B0B1F] font-medium py-2 text-4xl mb-9 text-center"
								onClick={() => setMobileMenuOpen(false)}
							>
								Shortlets
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/about-us"
								className="block hover:text-[#0B0B1F] font-medium py-2 text-4xl mb-9 text-center"
								onClick={() => setMobileMenuOpen(false)}
							>
								About us
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/contact-us"
								className="block hover:text-[#0B0B1F] font-medium py-2 text-4xl mb-9 text-center"
								onClick={() => setMobileMenuOpen(false)}
							>
								Contact Us
							</NavLink>
						</li>
						{/* <li className="pt-4 border-t border-gray-200">
							<a
								href="login.html"
								className="block text-[#0B0B1F] hover:text-[#0B0B1F] font-medium py-2"
								onClick={() => setMobileMenuOpen(false)}
							>
								Sign Up
							</a>
						</li>
						<li>
							<a
								href="register.html"
								className="block bg-[#0B0B1F] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors font-medium text-center mt-2"
								onClick={() => setMobileMenuOpen(false)}
							>
								Sign In
							</a>
						</li> */}
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default NavBar;
