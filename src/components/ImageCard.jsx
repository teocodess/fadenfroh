import React from 'react';

const ImageCard = ({ imgUrl, date, title, description, onClick }) => {
  return (
    <div onClick={onClick} className="relative rounded-2xl group">
    <img
        src = {imgUrl}
        alt={title}
        className= "w-full h-full object-cover rounded-2xl transition-transform group-hover:scale-110 duration-200"/>
      <div className="absolute inset-0 rounded-2xl flex items-end
    bg-gradient-to-t from-black/40 to-transparent group">
    <div className='p-4 text-white'>
        <p>{date}</p>
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
    </div>
    
    </div>
  )
}

export default ImageCard
