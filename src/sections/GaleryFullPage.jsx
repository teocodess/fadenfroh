// GaleryFullPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { galery } from '../constants';
import ImageCard from '../components/ImageCard';

const GaleryFullPage = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className='w-full mt-[8%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
      {galery.map((item) => (
        <ImageCard
          key={item.id}
          imgUrl={item.imgUrl}
          date={item.date}
          title={item.title}
          description={item.description}
          onClick={() => handleCardClick(item.id)}
        />
      ))}
    </div>
  );
};

export default GaleryFullPage;
