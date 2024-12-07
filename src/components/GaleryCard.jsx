// GaleryCard.js
import React, { useState } from 'react';

const GaleryCard = ({ images }) => {
  const [imageState, setImageState] = useState(0);

  return (
    <div className='flex items-center gap-4'>
      <div className='flex flex-col gap-2'>
        {images.map((img, index) => (
          <img 
            key={index} 
            src={img} 
            width={150} 
            height={150} 
            onMouseOver={() => setImageState(index)} 
          />
        ))}
      </div>
      <div>
        <img src={images[imageState]} width={600} height={600} />
      </div>
    </div>
  );
};

export default GaleryCard;
