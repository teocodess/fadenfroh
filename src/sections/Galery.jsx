import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { galery } from '../constants';
import 'swiper/css';
import 'swiper/css/pagination';
import './swiper.css';

import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { arrowRight } from '../assets/index';

const Galery = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/gallery');
  };

  return (
    <div className='flex flex-col md:flex-row items-center justify-between md:h-screen p-10 md:mt-[5%] lg:mt-0 gap-8'>
      <div className='flex flex-col items-center justify-center w-full md:w-[40%]'>
        <h1 className='uppercase text-2xl mb-5'>Newly Added</h1>
        <Button
          className="z-20 bg-gray-800 bg-opacity-70 text-white border border-white rounded-md px-4 py-2 shadow-lg hover:bg-gray-600 transition duration-200"
          label="Gallery"
          iconURL={arrowRight}
          onClick={handleButtonClick}
        />
      </div>

      <div className='flex items-center justify-center w-full md:w-[50%] h-3/4'>
        <Swiper
          modules={[Pagination, Autoplay]}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1} // Display 1 image at a time
          spaceBetween={30} // Adjust space between slides
          pagination={false}
          autoplay={{
            delay: 5000, // Auto-slide every 4 seconds
            disableOnInteraction: false, // Keep autoplaying even if user interacts
          }}
          className='swiper swiper-h h-full w-full rounded-lg'
        >
          {galery.map((item, index) => (
            <SwiperSlide key={index}>
              {/* Image wrapper to contain the image fully */}
              <div className='w-full h-full flex justify-center items-center'>
                <img
                  src={item.imgUrl}
                  alt={`slide-${index}`}
                  className="object-fit w-full h-auto rounded-lg" // Contain within max width and height
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
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
