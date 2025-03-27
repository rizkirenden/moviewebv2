import React from "react";
import Image from "next/image";

const footer = () => {
  return (
    <div className="w-full h-36 bg-black bg-opacity-70 flex justify-between items-center px-32">
      <div className="flex items-center space-x-6">
        <Image src={"/images/baverse.png"} alt="Logo" width={80} height={80} />
        <div className="text-white">BaVerse</div>
      </div>
      <div className="text-white">
        © Baverse Studio 2020 all rights reserved
      </div>
    </div>
  );
};

export default footer;
