import { useNavigate } from "react-router-dom";

const Button = ( {label, iconURL, onClick}) => {
  return (
    <div>
      <button type="submit"
      className="flex justify-center items-center
      gap-2 px-7 py-4 font-montserrat text-lg leading-none bg-[#212121] bg-opacity-3
       text-white border-2 border-white"
       onClick={onClick}>
        {label}

        <img 
            src={iconURL}
            alt="arrow right icon"
            className="ml-2 rounded-full w-5 h-5"
        />
      </button>
    </div>
  )
}

export default Button
