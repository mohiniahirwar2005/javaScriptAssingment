import React from "react";
import { Link } from "react-router-dom";
import { FaStore } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <div className="bg-blue-500 flex justify-between p-3">
         <div className="text-primary fs-4 fw-bold"><FaStore className=" text-2xl text-white" /></div>
          
          <div className="flex gap-4 ">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/products"}>Products</Link>
            <Link to={"/contact"}>Contact</Link>
          </div>
      </div>
    </>
  );
};

export default Header;
