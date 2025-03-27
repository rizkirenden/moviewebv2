import React from "react";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="absolute left-0 top-0 p-4 bg-black w-52 h-screen">
      <div className="flex flex-nowrap items-center space-x-6">
        <Image src={"/images/baverse.png"} alt="Logo" width={50} height={50} />
        <p className="text-white font-sans">Baverse</p>
      </div>
    </div>
  );
};

export default Navbar;
