import React, { useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

const InteractiveDot = ({info}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState({top: 0, left: 0}); //modify so it starts AFTER nav 
    const [showDot, setShowDot] = useState(true);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const randomTop = Math.random()*80;
        const randomLeft = Math.random()*80;
        setPosition({top:`${randomTop}vh`, left: `${randomLeft}vw`})
    }, [])

    
  // Track scroll and hide/show dots based on section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroSectionHeight = window.innerHeight; // Assuming each section takes full screen height
      
      const treshold = heroSectionHeight*0.5;

      // Only show dots in the first section (HeroCalculator)
      if (scrollPosition < treshold) {
        setShowDot(true);
      } else {
        setShowDot(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    showDot && (<div className='relative'>

      {/*the dot*/}
      <div
      onClick={toggleOpen}
        className = "fixed cursor-pointer z-50"
        style={{
          top: position.top,
          left: position.left,
        }}
      >
        <span className="relative flex h-5 w-5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#212121] opacity-95"></span>
        <span className="relative inline-flex rounded-full h-5 w-5 bg-[#212121]"></span>
</span>

</div>

      {/* Info box that expands */}
      {isOpen && (
        <div
          className={`fixed overflow-hidden bg-white text-black p-4 shadow-lg rounded-lg max-w-xs transition-opacity ${
    isOpen ? 'opacity-100' : 'opacity-0'
  }`}
          style={{
            left: position.left,
            top: position.top,
            opacity: 2,
            zIndex: 10,
          }}
        >
          <button onClick={toggleOpen} className="absolute top-2 right-2 text-gray-500">
            x
          </button>
          <div>{info}</div>
        </div>
      )}
    </div>
    )
  )
}

export default InteractiveDot
