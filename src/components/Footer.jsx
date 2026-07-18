import logo from "../image/logo.svg"
import Insta from "../image/f59bce44-7416-433f-814f-bcc8055c7b36.svg"
import twitter from "../image/96d9895b-e16c-4e13-8bb5-8c3a42083648.svg"
import facebook from "../image/8c4a7d21-1118-4983-857b-b93aa7ab2734.svg"

const Footer =()=>{
    return(
        <>
<footer className="bg-[#101010] text-white w-full">
  <div className="w-full max-w-6xl mx-auto px-6 relative pt-12 md:pt-16 pb-10 flex flex-col items-center md:items-start text-center md:text-left">
    
    <div className="absolute top-0 left-1/2 -translate-x-1/2 md:left-6 md:translate-x-0 w-24 h-1 bg-[#D87D4A]"></div>

    <div className="w-full flex flex-col lg:flex-row lg:justify-between items-center md:items-start lg:items-center gap-8 mb-12 mt-4">
      <img src={logo} alt="Audiophile logo" className="w-36" />
      
      <ul className="flex flex-col md:flex-row gap-4 md:gap-8 uppercase text-[13px] font-bold tracking-widest">
        <li><a href="#" className="hover:text-[#D87D4A] transition-colors">HOME</a></li>
        <li><a href="#" className="hover:text-[#D87D4A] transition-colors">HEADPHONES</a></li>
        <li><a href="#" className="hover:text-[#D87D4A] transition-colors">SPEAKERS</a></li>
        <li><a href="#" className="hover:text-[#D87D4A] transition-colors">EARPHONES</a></li>
      </ul>
    </div>

  
    <p className="text-white/50 text-[15px] font-light leading-relaxed max-w-[540px] mb-12">
      Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
    </p>


    <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-end gap-12 md:gap-0">
      <p className="text-white/50 font-bold text-[15px]">
        Copyright 2021. All Rights Reserved
      </p>
      
      <div className="socials flex gap-4">
        <img src={facebook} alt="Facebook" className="cursor-pointer hover:opacity-75 transition-opacity" />
        <img src={twitter} alt="Twitter" className="cursor-pointer hover:opacity-75 transition-opacity" />
        <img src={Insta} alt="Instagram" className="cursor-pointer hover:opacity-75 transition-opacity" />
      </div> 
    </div>

  </div>
</footer>
        
        </>
    )
}
export default Footer