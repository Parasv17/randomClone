import {useState, react}from "react";
import "../index.css";
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";

export default function Navbar() {
    const [sideShow, setSideShow] = useState(false);

    const enableSide = () => {
        setSideShow(true);
      
    }
    const disableSide = () => {
        setSideShow(false);
        
    }


  return (
    <div className="navbar flex justify-between items-center min-h-[4rem] m-auto p-5">
      <div className="text-[#00df9a] text-3xl font-extrabold">LOGO.</div>

      <ul className="mainNav hidden md:flex">
        <li className="text-[1.175rem] font-semibold px-4">Home</li>
        <li className="text-[1.175rem] font-semibold px-4">Account</li>
        <li className="text-[1.175rem] font-semibold px-4">SignIn</li>
        <li className="text-[1.175rem] font-semibold px-4">
          <button className=" bg-">Get Started</button>
        </li>
      </ul>
      <div  className="block md:hidden">
        {!sideShow ?<BiArrowFromLeft onClick= {()=>{enableSide()}}size="3rem" /> : <BiArrowFromRight onClick={()=>{disableSide()}} size="3rem" />}
        
      </div>

      <div className={!sideShow ? "hidden" :"sideNav absolute top-0 left-0 w-[60%] h-[98%] border-r border-r-gray-700 bg-[#000300]" } style={{transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',transitionDuration:"500"}}>
        <div className="text-[#00df9a] text-3xl font-extrabold m-4">LOGO.</div>
        <ul className="pt-4 uppercase text-[1rem]">
          <li className="p-4 border-b  border-b-gray-400">Home</li>
          <li className="p-4 border-b border-b-gray-400">Account</li>
          <li className="p-4 border-b border-b-gray-400">Sign In</li>
          <li className="p-4 border-b border-b-gray-400">
            <button className=" bg-">Get Started</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
