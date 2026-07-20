import bghero from "../../image/image-hero.jpg.jpeg";

import Cards from "./components/Card";
import Bring from "../../components/Bring";
import Btn from "../../components/Btn";
import Product from "../../components/Products";


const Hero = () => {
  return (
    <>
      <section
        className="hero-section bg-[#191919] h-[85vh] p-4 bg-cover bg-position-[75%_center] md:bg-center bg-no-repeat flex flex-col"
        style={{ backgroundImage: `url(${bghero})` }}
      >
        <div className="hero-main w-full max-w-[80%] mx-auto flex-1 flex items-center justify-center lg:max-w-none lg:justify-start">
          <div className="hero-content flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl mx-auto lg:mx-0 lg:ml-48 mt-16 p-8 lg:p-0">
            <p className="eyebrow text-[14px] text-gray-400 tracking-[10px] uppercase mb-4">
              New product
            </p>

            <h1 className="text-white text-4xl sm:text-2xl md:text-6xl font-bold uppercase mb-6 leading-tight">
              XX99 Mark II <br /> Headphones
            </h1>
            <p className="text-white/75 text-[15px] font-light leading-relaxed mb-8">
              Experience natural, life like audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>

           <Btn/>
          </div>
        </div>
      </section>

     <Product/>
      <Cards />
      <Bring/>
    </>
  );
};

export default Hero;
