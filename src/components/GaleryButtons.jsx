import {Heart, Bookmark, Share} from 'react-feather';

const GaleryButtons = () => {
  return (
    <div className="space-x-4 mt-4"> 
    <button className="btn">
    <Heart/>
    </button>
    <button className="btn">
    <Bookmark/>
    </button>
    <button className="btn">
    <Share/>
    </button>
  </div>
  )
}

export default GaleryButtons
