import Bring from "../../components/Bring"
import Product from "../../components/Products"
// import { SlidingNumber } from '@/components/animate-ui/primitives/texts/sliding-number';



const Headphone = () => {
  return (
    <>
 <h1 className="bg-[#191919] text-white h-[28vh] p-15 text-6xl font-bold flex justify-center items-center">
          HEADPHONES
        </h1> 
    <Product/>
    <Bring/>
    {/* <SlidingNumber /> */}
    
    </>
  )
}

export default Headphone