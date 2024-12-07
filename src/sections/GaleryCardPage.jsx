import React from 'react';
import { useParams } from 'react-router-dom';
import { galery } from '../constants';
import GaleryCard from '../components/GaleryCard';
import Button from '../components/Button';
import { arrowRight } from '../assets/index';

const GaleryCardPage = () => {
  const { id } = useParams();
  const product = galery.find((item) => item.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className='flex flex-row justify-between items-center w-full h-screen gap-4 p-10 bg-slate-200'>
      <GaleryCard images={product.extraImages} />
      <div className='flex flex-col gap-4 text-center justify-center w-[50%] items-center'>
        <h1 className='uppercase font-bold text-2xl'>{product.title}</h1>
        <p className='text-xl text-center'>{product.details}</p>
        <Button label="Shop" iconURL={arrowRight} onClick={() => window.open(product.shopLink, '_blank')} />
      </div>
    </div>
  );
};

export default GaleryCardPage;
