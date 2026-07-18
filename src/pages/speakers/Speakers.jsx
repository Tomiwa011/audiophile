import Bring from "../../components/Bring"
import Btn from "../../components/Btn"
import Product from "../../components/Products"
import SpeakerPng from "../../image/image-speakers.png"


const Speakers = () => {
  return (
    <>
<div className="e-hero">
        <h1 className="bg-[#191919] text-white h-[28vh] p-15 text-6xl font-bold flex justify-center items-center">
          SPEAKERS
        </h1>
        
       
        <div className="e-card w-full max-w-6xl mx-auto mt-20 flex justify-center items-center gap-10 mb-20">
         
          <div className="e-img h-140.5 w-1/2 bg-[#F1F1F1] flex justify-center items-center rounded-lg">
            <img className="w-[150%] max-w-none" src={SpeakerPng} alt="YX1 Wireless Earphones" />
          </div>

         
          <div className="e-text w-1/2 flex flex-col justify-center px-10">
            <div className="new text-[#D87D4A] tracking-[10px] text-sm uppercase mb-4">
              NEW PRODUCT
            </div>
            <div className="head text-black text-5xl font-bold uppercase mb-8">
              ZX9 Speaker
            </div>
            <p className="text-gray-500 mb-10 leading-relaxed">
              Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity 
              -- creating new possibilities for more pleasing and practical audio setups. </p>
            <div>
              <Btn />
            </div>
          </div>

        </div>
        <div className="e-card w-full max-w-6xl mx-auto mt-20 flex justify-center items-center gap-10 mb-20">
         
        

         
          <div className="e-text w-1/2 flex flex-col justify-center px-10">
            <div className="new text-[#D87D4A] tracking-[10px] text-sm uppercase mb-4">
              NEW PRODUCT
            </div>
            <div className="head text-black text-5xl font-bold uppercase mb-8">
              ZX7 Speaker
            </div>
            <p className="text-gray-500 mb-10 leading-relaxed">
              Stream high quality sound wirelessly with minimal to no loss.
               The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.
            </p>
            <div>
              <Btn />
            </div>
          </div>
            <div className="e-img h-140.5 w-1/2 bg-[#F1F1F1] flex justify-center items-center rounded-lg">
            <img className="w-[150%] max-w-none" src={SpeakerPng} alt="YX1 Wireless Earphones" />
          </div>

        </div>
        <Product/>
        <Bring/>

      </div>
    
    </>
  )
}

export default Speakers