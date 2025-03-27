import React from "react";
import Image from "next/image";
const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-50 p-4">
      <div className="flex justify-between items-center mx-16">
        <div className="flex items-center">
          <Image src="/images/baverse.png" alt="Logo" className="h-12" />
          <h1 className="flex items-center font-sans ml-4">
            <span className="text-white">Ba</span>
            <span style={{ color: "#4b70db" }}>Verse</span>
          </h1>
        </div>
        <div className="bg-black bg-opacity-50 m-4 p-2 rounded-xl">
          <ul className="flex space-x-10 items-center justify-center flex-grow">
            <li>
              <a className="text-white hover:text-customBlue" href="">
                Home
              </a>
            </li>
            <li>
              <a className="text-white hover:text-customBlue" href="">
                Product
              </a>
            </li>
            <li>
              <a className="text-white hover:text-customBlue" href="">
                Service
              </a>
            </li>
            <li>
              <a className="text-white hover:text-customBlue" href="">
                About Us
              </a>
            </li>
            <li>
              <a className="text-white hover:text-customBlue" href="">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <button className="text-white bg-customBlue px-4 py-2 rounded-xl hover:bg-blue-700">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
