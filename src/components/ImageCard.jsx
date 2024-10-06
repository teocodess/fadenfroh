
const ImageCard = (props) => {
  return (
    <div className="relative w-[400px] h-[500px] max-w-xs
    overflow-hidden rounded-2xl shadow-lg
    group">
    <img
        src = {props.imgUrl}
        alt={props.title}
        className= "w-full h-full object-cover transition-transform group-hover:scale-110 duration-200"/>
    <div className="absolute inset-0 flex items-end
    bg-gradient-to-t from-black/60 to-transparent">
    <div className='p-4 text-white'>
        <p>{props.date}</p>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
    </div>
    
    </div>
  )
}

export default ImageCard
