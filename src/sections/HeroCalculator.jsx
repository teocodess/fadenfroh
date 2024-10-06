
import {calcScreen, calcScreen1, calcScreen2, arrowRight} from "../assets";
import Button from '../components/Button';
import {statistics} from '../constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules'; // Import Swiper modules
import '../CustomSwiper.css';
import InteractiveDot from "../components/InteractiveDot";
import { useNavigate } from "react-router-dom";




const HeroCalculator = () => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/calculator');
  }

    const infoTexts = [ 
    'This calculator helps resize patterns to your specifications.',
    'Supports all common yarn sizes and crochet types!',
    'Instant calculations for fast pattern adjustments.'
    ];
    
    

  return (
    <div
    className="relative w-full flex
    flex-col justify-center items-center p-2 mt-[30%]
   min-h-screen gap-20 max-container z-10">
    {/* Dots Section - positioned randomly within the container*/}
    
    <h1 className="flex flex-col text-center md:text-left text-[42px] md:text-[52px] lg:text-[72px] font-bold text-[#212121]">Crochet Calculator
   <br/>
   <span className="text-[28px] md:text-[32px] md:text-right font-bold uppercase">
    Resize <span className="text-coral-red
    inline-block">ANY </span>
    pattern!
    </span>
    </h1>

    <Button label="calculate" iconURL={arrowRight} onClick={handleButtonClick}/>
  

        <InteractiveDot key="1" 
        info={statistics.map((item) => (
        <div key={statistics.label}>
        <p className="text-lg
         font-palanquin font-bold">{item.value}</p>
        <p className="leading-7 font-montserrat
      text-slate-gray">{item.label}</p>
         </div>
        ))}/>

        <InteractiveDot key="2"
        info={(
          <ul>
          {infoTexts.map((text, index) => (
            <li key={index}>{text}</li>
        ))}
        </ul>
        )}
        />

        <InteractiveDot key="3"
          info={(
          <div className="object-cover w-full p-4">
   <Swiper
     spaceBetween={30}
     pagination={{ clickable: true }}
     navigation={true}
     modules={[Pagination, Navigation]}
     className="w-full h-full"
   >
     <SwiperSlide>
       <img src={calcScreen} alt="Calculator Screenshot 1" className="h-full w-full object-fit" />
     </SwiperSlide>
     <SwiperSlide>
       <img src={calcScreen1} alt="Calculator Screenshot 2" className="h-full w-full object-fit" />
     </SwiperSlide>
     <SwiperSlide>
       <img src={calcScreen2} alt="Calculator Screenshot 3" className="h-full w-full object-fit" />
     </SwiperSlide>
   </Swiper>
   </div>
)}
        />
  </div>
  );
  }


export default HeroCalculator;
