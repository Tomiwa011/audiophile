import logo from "../image/logo.svg";
import cart from "../image/icon-cart.svg";
import { NavLink } from "react-router-dom"; 

const Nav = () => {
  
  const getLinkStyle = ({ isActive }) =>
    `hover:text-[#D87D4A] hover-underline-animation ${
      isActive ? "text-[#D87D4A]" : ""
    }`;

  return (
    <div className="nav w-full bg-[#191919] pt-2">
      <nav className="flex items-center justify-between w-full lg:w-[75%] mx-auto pt-2 pb-8 px-6 lg:px-0 border-b border-[rgba(255,255,255,0.12)]">
        
        <div className="lg:hidden text-white text-2xl cursor-pointer">
          ☰
        </div>
<NavLink to="/">
        <img src={logo} width={100} alt="Audiophile logo" className="nav-logo cursor-pointer h-6 w-auto" /></NavLink>
        
        <div className="nav-links hidden lg:flex gap-8 text-white text-sm font-bold tracking-widest">
       
          <NavLink to="/" className={getLinkStyle}>
            HOME
          </NavLink>
          <NavLink to="/headphones" className={getLinkStyle}>
            HEADPHONES
          </NavLink>
          <NavLink to="/speakers" className={getLinkStyle}>
            SPEAKERS
          </NavLink>
          <NavLink to="/earphones" className={getLinkStyle}>
            EARPHONES
          </NavLink>
        </div>

        <img src={cart} alt="cart" className="cursor-pointer" />
      </nav>
    </div>
  );
};

export default Nav;