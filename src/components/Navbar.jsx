import React ,{useState}from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
    const [nav,setNav]=useState(false)
    const handleNav=()=>{
        setNav(!nav)
    }
  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px]  px-4 mx-auto px-4">
      <h1 className="w-full text-3xl font-bold  text-[#00df9a]">
        ATLANTIC NERDS
      </h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineMenu size={20}/>:<AiOutlineClose size={20} />}
      </div>
      
      <div className={!nav ?' fixed h-full left-0 top-0 w-[60%] border-r-gray-900 bg-[#00300] ease-in-out':'fixed left-[-100%]'}>
      <h1 className="w-full text-3xl font-bold m-4 text-[#00df9a]">
        ATLANTIC NERDS
      </h1>
        <ul className="pt-4 uppercase
        ">
          <li className="p-4 border-gray-600">Home</li>
          <li className="p-4 border-gray-600">Company</li>
          <li className="p-4 border-gray-600">Resources</li>
          <li className="p-4 border-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
