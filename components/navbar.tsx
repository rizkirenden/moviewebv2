import React from "react";
import Image from "next/image";
import { FiAirplay, FiTv } from "react-icons/fi";
import { IoLogOut } from "react-icons/io5";
import { PiUserListLight } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 p-6 bg-gray-900 w-64 h-[calc(100vh-16px)] rounded-xl flex flex-col border-r mt-2 ml-2 mb-2 border-gray-800">
      {/* Logo Section */}
      <div className="flex items-center justify-center space-x-3 mb-12">
        <Image
          src={"/images/baverse.png"}
          alt="Baverse Logo"
          width={40}
          height={40}
        />
        <p className="text-white font-semibold text-xl">Baverse</p>
      </div>
      <nav className="flex flex-col space-y-4 flex-grow">
        <a
          href="/dashboard"
          className="text-gray-300 hover:bg-blue-600 hover:text-white px-4 py-3 rounded-lg transition-all duration-200 flex items-center space-x-3 group"
        >
          <FiAirplay className="text-xl group-hover:scale-110 transition-transform" />
          <span>Home</span>
        </a>
        <a
          href="#"
          className="text-gray-300 hover:bg-blue-600 hover:text-white px-4 py-3 rounded-lg transition-all duration-200 flex items-center space-x-3 group"
        >
          <FiTv className="text-xl group-hover:scale-110 transition-transform" />
          <span>Film</span>
        </a>
        <a
          href="#"
          className="text-gray-300 hover:bg-blue-600 hover:text-white px-4 py-3 rounded-lg transition-all duration-200 flex items-center space-x-3 group"
        >
          <PiUserListLight className="text-xl group-hover:scale-110 transition-transform" />
          <span>User</span>
        </a>
        <div className="flex-grow"></div>
        <a
          href="#"
          className="text-gray-300 hover:bg-red-600 hover:text-white px-4 py-3 rounded-lg transition-all duration-200 flex items-center space-x-3 group mt-auto"
        >
          <IoLogOut className="text-xl group-hover:scale-110 transition-transform" />
          <span>Logout</span>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
