import React, { useState } from "react";
import ShortletCard from "./ShortletCard";
import { NavLink } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { shortletData } from "./shortletData";

const ShortletContent = () => {
	// Pagination state
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage] = useState(9);

	// Calculate total pages
	const totalPages = Math.ceil(shortletData.length / itemsPerPage);

	// Pagination functions
	function goToNextPage() {
		setCurrentPage((page) => Math.min(page + 1, totalPages));
		window.scrollTo({ top: 0, behavior: "smooth" });
	}

	function goToPreviousPage() {
		setCurrentPage((page) => Math.max(page - 1, 1));
		window.scrollTo({ top: 0, behavior: "smooth" });
	}

	function goToPage(pageNumber) {
		setCurrentPage(pageNumber);
		window.scrollTo({ top: 0, behavior: "smooth" });
	}

	return (
		<>
			<div className="w-full bg-blue-950 py-20 md:py-32 flex flex-col justify-center items-center mt-28 text-white">
				<h2 className="text-5xl mb-4 font-semibold">Home for Rent</h2>
				<p className="text-2xl">
					<a href="" className="text-yellow-700 ">
						<NavLink to="/">Home </NavLink>
					</a>
					/ Select your preferred home and go for it
				</p>
			</div>

			<ShortletCard limit={itemsPerPage} currentPage={currentPage} />

			{/* Pagination Controls */}
			<div className="flex justify-center items-center mt-8 mb-16 gap-2">
				<button
					className={`flex items-center justify-center w-10 h-10 rounded-md ${
						currentPage === 1
							? "bg-gray-200 text-gray-500 cursor-not-allowed"
							: "bg-blue-950 text-white hover:bg-blue-800"
					}`}
					onClick={goToPreviousPage}
					disabled={currentPage === 1}
				>
					<FaChevronLeft />
				</button>

				{/* Page Numbers */}
				{[...Array(totalPages)].map((_, index) => {
					const pageNumber = index + 1;
					// Show limited page numbers with ellipsis for better UX
					if (
						pageNumber === 1 ||
						pageNumber === totalPages ||
						(pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
					) {
						return (
							<button
								key={pageNumber}
								className={`w-10 h-10 rounded-md ${
									currentPage === pageNumber
										? "bg-red-500 text-white"
										: "bg-gray-200 hover:bg-gray-300"
								}`}
								onClick={() => goToPage(pageNumber)}
							>
								{pageNumber}
							</button>
						);
					} else if (
						(pageNumber === currentPage - 2 && currentPage > 3) ||
						(pageNumber === currentPage + 2 && currentPage < totalPages - 2)
					) {
						return (
							<span key={pageNumber} className="px-1">
								...
							</span>
						);
					}
					return null;
				})}

				<button
					className={`flex items-center justify-center w-10 h-10 rounded-md ${
						currentPage === totalPages
							? "bg-gray-200 text-gray-500 cursor-not-allowed"
							: "bg-blue-950 text-white hover:bg-blue-800"
					}`}
					onClick={goToNextPage}
					disabled={currentPage === totalPages}
				>
					<FaChevronRight />
				</button>
			</div>
		</>
	);
};

export default ShortletContent;
