import React from "react";

const NavBar = () => {
	return (
		<div className="bg-white shadow-sm text-2xl">
			<div className="container mx-auto px-4 py-6 flex justify-between items-center">
				<img src="/HOLTONicon-dark.png" alt="Holton Logo" className="h-20" />

				<nav className="hidden lg:block">
					<ul className="flex space-x-8 items-center text-gray-700">
						<li>
							<a href="index.html" className="hover:text-[#0B0B1F] font-medium">
								Home
							</a>
						</li>
						<li className="relative group">
							<a
								href="javascript:void(0);"
								className="flex items-center hover:text-[#0B0B1F] font-medium"
							>
								Listing
								<svg
									className="w-4 h-4 ml-1"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</a>
							<ul
								className="absolute left-0 bottom-[-150px] border-t-2 border-t-[#0B0B1F] mt-2 py-2 w-56 gap-9 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
								// data-aos="fade-up"
							>
								<li>
									<a
										href="buy-property-grid.html"
										className="block px-4 py-2 text-xl hover:bg-gray-100 hover:text-[#0B0B1F]"
									>
										Buy Property Grid
									</a>
								</li>
								<li>
									<a
										href="buy-property-list.html"
										className="block px-4 py-2 text-xl hover:bg-gray-100 hover:text-[#0B0B1F]"
									>
										Buy Property List
									</a>
								</li>
								<li>
									<a
										href="rent-property-grid.html"
										className="block px-4 py-2 text-xl hover:bg-gray-100 hover:text-[#0B0B1F]"
									>
										Rent Property Grid
									</a>
								</li>
								<li>
									<a
										href="rent-property-list.html"
										className="block px-4 py-2 text-xl hover:bg-gray-100 hover:text-[#0B0B1F]"
									>
										Rent Property List
									</a>
								</li>
							</ul>
						</li>
						<li className="relative group">
							<a
								href="javascript:void(0);"
								className="flex items-center hover:text-[#0B0B1F] font-medium"
							>
								Agent
								<svg
									className="w-4 h-4 ml-1"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</a>
							<ul className="absolute left-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
								<li>
									<a
										href="agent-grid.html"
										className="block px-4 py-2 text-xl hover:bg-gray-100 hover:text-[#0B0B1F]"
									>
										Agent Grid
									</a>
								</li>
								<li>
									<a
										href="agent-list.html"
										className="block px-4 py-2 text-xl hover:bg-gray-100 hover:text-[#0B0B1F]"
									>
										Agent List
									</a>
								</li>
								<li>
									<a
										href="agent-details.html"
										className="block px-4 py-2 text-xl hover:bg-gray-100 hover:text-[#0B0B1F]"
									>
										Agent Details
									</a>
								</li>
							</ul>
						</li>
						<li className="relative group">
							<a
								href="javascript:void(0);"
								className="flex items-center hover:text-[#0B0B1F] font-medium"
							>
								Agency
								<svg
									className="w-4 h-4 ml-1"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</a>
							<ul className="absolute left-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
								<li>
									<a
										href="agency-grid.html"
										className="block px-4 py-2 text-xl hover:bg-gray-100 hover:text-[#0B0B1F]"
									>
										Agency Grid
									</a>
								</li>
								<li>
									<a
										href="agency-list.html"
										className="block px-4 py-2 text-xl hover:bg-gray-100 hover:text-[#0B0B1F]"
									>
										Agency List
									</a>
								</li>
								<li>
									<a
										href="agency-details.html"
										className="block px-4 py-2 text-xl hover:bg-gray-100 hover:text-[#0B0B1F]"
									>
										Agency Details
									</a>
								</li>
							</ul>
						</li>
						<li className="relative group">
							<a
								href="javascript:void(0);"
								className="flex items-center hover:text-[#0B0B1F] font-medium"
							>
								Pages
								<svg
									className="w-4 h-4 ml-1"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</a>
							<ul className="absolute left-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
								<li>
									<a
										href="about-us.html"
										className="block px-4 py-2 text-xl hover:bg-gray-100 hover:text-[#0B0B1F]"
									>
										About Us
									</a>
								</li>
								<li>
									<a
										href="faq.html"
										className="block px-4 py-2 text-xl hover:bg-gray-100 hover:text-[#0B0B1F]"
									>
										FAQ
									</a>
								</li>
								<li>
									<a
										href="pricing.html"
										className="block px-4 py-2 text-xl hover:bg-gray-100 hover:text-[#0B0B1F]"
									>
										Pricing
									</a>
								</li>
								<li>
									<a
										href="terms-condition.html"
										className="block px-4 py-2 text-xl hover:bg-gray-100 hover:text-[#0B0B1F]"
									>
										Terms & Conditions
									</a>
								</li>
								<li>
									<a
										href="privacy-policy.html"
										className="block px-4 py-2 text-xl hover:bg-gray-100 hover:text-[#0B0B1F]"
									>
										Privacy Policy
									</a>
								</li>
							</ul>
						</li>
						<li className="relative group">
							<a
								href="javascript:void(0);"
								className="flex items-center hover:text-[#0B0B1F] font-medium"
							>
								Blog
								<svg
									className="w-4 h-4 ml-1"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</a>
							<ul className="absolute left-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
								<li>
									<a
										href="blog-grid.html"
										className="block px-4 py-2 text-xl hover:bg-gray-100 hover:text-[#0B0B1F]"
									>
										Blog Grid
									</a>
								</li>
								<li>
									<a
										href="blog-list.html"
										className="block px-4 py-2 text-xl hover:bg-gray-100 hover:text-[#0B0B1F]"
									>
										Blog List
									</a>
								</li>
								<li>
									<a
										href="blog-details.html"
										className="block px-4 py-2 text-xl hover:bg-gray-100 hover:text-[#0B0B1F]"
									>
										Blog Details
									</a>
								</li>
							</ul>
						</li>
						<li>
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
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default NavBar;
