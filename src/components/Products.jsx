import headphones from '../image/image-headphones.png'
import arrRight from '../image/icon-arrow-right.svg'
import speaker from "../image/image-speakers.png"
import earphones from "../image/image-earphones.png"
const Product =()=>{
return(
     <div>
   <div className="p-cont w-full max-w-6xl mx-auto px-6 mt-32 md:mt-40 mb-24 flex flex-col md:flex-row gap-16 md:gap-8 justify-center items-center">
   
    <div className="p-card bg-[#F1F1F1] rounded-lg w-full flex flex-col justify-center items-center pb-8 pt-0 mt-12 md:mt-0 relative">
        
        <img src={headphones} alt="Headphones" className="w-36 md:w-40 -mt-16 mb-4 drop-shadow-xl" />
        <h6 className="title text-black font-bold uppercase tracking-widest text-[15px] mb-4">
            Headphones
        </h6>
        <a href="#" className="flex flex-row items-center gap-3 text-gray-500 hover:text-[#D87D4A] text-[13px] font-bold tracking-widest transition-colors">
            SHOP <img src={arrRight} alt="arrow right" /> 
        </a>
    </div>
    
    <div className="p-card bg-[#F1F1F1] rounded-lg w-full flex flex-col justify-center items-center pb-8 pt-0 mt-12 md:mt-0 relative">
        <img src={speaker} alt="Speakers" className="w-36 md:w-40 -mt-16 mb-4 drop-shadow-xl" />
        <h6 className="title text-black font-bold uppercase tracking-widest text-[15px] mb-4">
            Speakers
        </h6>
        <a href="#" className="flex flex-row items-center gap-3 text-gray-500 hover:text-[#D87D4A] text-[13px] font-bold tracking-widest transition-colors">
            SHOP <img src={arrRight} alt="arrow right" /> 
        </a>
    </div>
    
    <div className="p-card bg-[#F1F1F1] rounded-lg w-full flex flex-col justify-center items-center pb-8 pt-0 mt-12 md:mt-0 relative">
        <img src={earphones} alt="Earphones" className="w-36 md:w-40 -mt-16 mb-4 drop-shadow-xl" />
        <h6 className="title text-black font-bold uppercase tracking-widest text-[15px] mb-4">
            Earphones
        </h6>
        <a href="#" className="flex flex-row items-center gap-3 text-gray-500 hover:text-[#D87D4A] text-[13px] font-bold tracking-widest transition-colors">
            SHOP <img src={arrRight} alt="arrow right" /> 
        </a>
    </div>
    
</div>
    </div>
)
}
export default Product