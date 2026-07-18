
import bring from "../image/image-best-gear.jpg_1.jpeg";
const Bring = () => {
  return (
    <div>
         <div className="flex flex-col-reverse lg:flex-row items-center text-center lg:text-left gap-12 mt-16 lg:mt-32 section w-full max-w-6xl mx-auto px-6  md:gap-12 mb-32">
          <div className="flex-1 max-w-125 flex flex-col items-center lg:items-start">
            <h2 className="text-black text-3xl md:text-4xl font-bold uppercase mb-8 leading-tight">
              Bringing you the <span className="text-[#D87D4A]">best</span>{" "}
              audio gear
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
          <div className="flex-1 w-full">
            <img
              src={bring}
              alt="Best audio gear"
              className="w-full rounded-lg object-cover"
            />
          </div>
        </div>
    </div>
  )
}

export default Bring