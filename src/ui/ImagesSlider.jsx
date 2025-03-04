import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function ImageSlider({ imageList }) {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	// Handle the case when imageList is not provided or doesn't have detailImages
	const images = imageList && Array.isArray(imageList) ? imageList : [];

	return (
		<>
			<Swiper
				style={{
					"--swiper-navigation-color": "#fff",
					"--swiper-pagination-color": "#fff",
				}}
				loop={true}
				spaceBetween={10}
				navigation={true}
				thumbs={{ swiper: thumbsSwiper }}
				modules={[FreeMode, Navigation, Thumbs]}
				className="mySwiper2 h-[400px] rounded-lg overflow-hidden mb-2"
			>
				{images.map((image, index) => (
					<SwiperSlide key={index} className="bg-white">
						<img
							src={image}
							alt={`Property image ${index + 1}`}
							className="w-full h-full object-cover rounded-xl cursor-grab"
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<Swiper
				onSwiper={setThumbsSwiper}
				loop={true}
				spaceBetween={5}
				slidesPerView={4}
				freeMode={true}
				watchSlidesProgress={true}
				modules={[FreeMode, Navigation, Thumbs]}
				className="w-full h-[65px] md:h-[100px] mt-2"
			>
				{images.map((image, index) => (
					<SwiperSlide
						key={index}
						className="text-center bg-white rounded-md overflow-hidden"
					>
						<img
							src={image}
							alt={`Thumbnail ${index + 1}`}
							className="w-full h-full object-cover rounded-xl"
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
