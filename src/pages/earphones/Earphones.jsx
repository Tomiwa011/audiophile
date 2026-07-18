import Bring from "../../components/Bring";
import Btn from "../../components/Btn"
import Product from "../../components/Products";
import earPng from "../../image/image-earphones.png"

const Earphones = () => {
  return (
    <>
      <div className="e-hero">
        <h1 className="bg-[#191919] text-white h-[28vh] p-15 text-6xl font-bold flex justify-center items-center">
          Earphones
        </h1>
        
       
        <div className="e-card w-full max-w-6xl mx-auto mt-20 flex justify-center items-center gap-10 mb-20">
         
          <div className="e-img h-140.5 w-1/2 bg-[#F1F1F1] flex justify-center items-center rounded-lg">
            <img className="w-[150%] max-w-none" src={earPng} alt="YX1 Wireless Earphones" />
          </div>

         
          <div className="e-text w-1/2 flex flex-col justify-center px-10">
            <div className="new text-[#D87D4A] tracking-[10px] text-sm uppercase mb-4">
              NEW PRODUCT
            </div>
            <div className="head text-black text-5xl font-bold uppercase mb-8">
              YX1 Wireless <br/> Earphones
            </div>
            <p className="text-gray-500 mb-10 leading-relaxed">
              Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones.
              Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.
            </p>
            <div>
              <Btn />
            </div>
          </div>

        </div>
        <Product/>
        <Bring/>

      </div>
    </>
  )
}

export default Earphones;