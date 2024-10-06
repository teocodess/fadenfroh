import React from 'react';
import { galery } from '../constants/index';
import ImageCard from '../components/ImageCard';
import { Swiper, SwiperSlide } from 'swiper/react';  // Import Swiper and SwiperSlide
import { Navigation, Pagination } from 'swiper/modules';  // Import required modules
import '../CustomSwiper.css';  // Import Swiper styles

const Galery = () => {
  return (
    <div className="relative w-full flex flex-col justify-center items-center min-h-screen md:my-10 z-10">
      
      {/* Swiper Carousel */}
      <Swiper
        spaceBetween={20}  // Space between slides
        slidesPerView={1}   // Default to 1 slide
        navigation={true}   // Enable arrows for navigation
        pagination={{ clickable: true }}  // Enable pagination (dots)
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          // 768: {
          //   slidesPerView: 3,
          //   spaceBetween: 30,
          // },
          // 1024: {
          //   slidesPerView: 4,
          //   spaceBetween: 40,
          // }
        }}
        modules={[Navigation, Pagination]}  // Enable navigation and pagination modules
        className="w-full h-3/4 flex flex-row md:flex-row items-center justify-center px-10 md:w-[90%] pb-6 md:mb-10 md:pb-3"  // Swiper width and height
      >
        {galery.map((item, index) => (
          <SwiperSlide key={index}>
            <ImageCard
              imgUrl={item.imgUrl}
              date={item.date}
              title={item.title}
              description={item.description}
              className="mx-auto mb-4"
            />
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default Galery;



// import React, {useState} from 'react';
// import {galery} from '../constants/index';
// import GaleryButtons from "../components/GaleryButtons";
// import ImageCard  from "../components/ImageCard"
// import Button from  '../components/Button';
// import {arrowDown, arrowRight} from "../assets"

// const Galery = () => {

//   //state to track how many items to display
//   const [visibleItems, setVisibleItems] = useState(3);

//   //function to handle "See more" button click
//   const handleSeeMore = () => {
//     setVisibleItems(prevVisibleItems => prevVisibleItems + 3);
//   };

//   return (
//     <div className='relative w-full flex
//    xl:flex-col flex-col justify-center items-center p-2
//    min-h-screen gap-20 max-container z-10'>
//     <div className="w-full flex flex-row
//     xl:flex-row justify-center flex-wrap
//     gap-2 max-container">

//     {galery.slice(0, visibleItems).map((item) => (
  
//   <ImageCard className="flex-25%"
//     key = {item.index}
//     imgUrl = {item.imgUrl}
//     date = {item.date}
//     title = {item.title}
//     description = {item.description}

//   />
//       ))}
//     </div>

//     {/* <div className="flex flex-col w-full sm:gap-6
//     gap-4 self-end items-center max-sm:px-6">
//     {visibleItems < galery.length && (
//     <button className="underline p-2 mt-3 rounded hover:bg-slate-50"
//     onClick={handleSeeMore}>
//     SEE MORE
//     </button>
//     )}
//     </div> */}
//     {/* <Button label="galery" iconURL={arrowRight} />
//     <img 
//       src={arrowDown}
//       className='animate-bounce w-8 h-8'
//     /> */}
//     </div>
//   )
// }

// export default Galery
