import speakerBig from "../../../image/image-speaker-zx9.png";
import earphone from "../../../image/image-earphones-yx1.jpg.jpeg";

import tabSpeaker from "../../../image/image-speaker-zx7.jpg_2.jpeg";

const Cards = () => {
  return (
    <>
      <div
        id="experience"
        className="section w-full max-w-6xl mx-auto px-6 flex flex-col gap-8 md:gap-12 mb-32"
      >
        <div className="bg-[#D87D4A] rounded-lg overflow-hidden flex flex-col lg:flex-row items-center text-center lg:text-left py-14 px-6 lg:px-24 gap-8 lg:gap-32">
          <img src={speakerBig} alt="ZX9 speaker" className="w-40 md:w-80" />
          <div className="flex flex-col items-center lg:items-start max-w-87.5">
            <h2 className="text-white text-4xl md:text-6xl font-bold uppercase mb-6 leading-tight">
              ZX9 <br /> SPEAKER
            </h2>
            <p className="text-white/75 mb-8 text-[15px] leading-relaxed">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <button className="bg-black hover:bg-[#4C4C4C] text-white uppercase tracking-widest text-[13px] px-8 py-4 font-bold transition-colors">
              SEE PRODUCT
            </button>
          </div>
        </div>

        <div
          style={{ backgroundImage: `url(${tabSpeaker})` }}
          className="rounded-lg h-80 bg-cover bg-center bg-no-repeat flex flex-col justify-center items-start px-6 md:px-24"
        >
          <h2 className="text-black text-3xl md:text-4xl font-bold uppercase mb-8">
            ZX7 SPEAKER
          </h2>
          <button className="border border-black hover:bg-black hover:text-white text-black uppercase tracking-widest text-[13px] px-8 py-4 font-bold transition-colors">
            SEE PRODUCT
          </button>
        </div>

        {/* 3. YX1 Earphones (Split View) */}
        {/* Mobile: Stacks. Desktop (md): Splits 50/50 horizontally */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          <img
            src={earphone}
            alt="YX1 earphones"
            className="w-full md:w-1/2 rounded-lg object-cover h-50 md:h-80"
          />
          <div className="bg-[#F1F1F1] rounded-lg w-full md:w-1/2 h-50 md:h-80 flex flex-col justify-center items-start px-6 md:px-24">
            <h2 className="text-black text-3xl font-bold uppercase mb-8">
              YX1 EARPHONES
            </h2>
            <button className="border border-black hover:bg-black hover:text-white text-black uppercase tracking-widest text-[13px] px-8 py-4 font-bold transition-colors">
              SEE PRODUCT
            </button>
          </div>
        </div>

       
      </div>
    </>
  );
};
export default Cards;
