import React from "react";
import Image from "next/image";
const Film = () => {
  return (
    <div className="m-4 h-auto w-48 bg-customBlue border border-gray-200 rounded-lg shadow-sm">
      <a href="#">
        <Image
          className="rounded-t-lg w-full"
          src="/images/warkop.jpg"
          alt="Film Poster"
          width={500}
          height={500}
        />
      </a>
      <div className="bg-customBlue p-5 rounded-bl-lg rounded-br-lg">
        <a href="#">
          <h5 className="text-xs font-bold tracking-tight text-white dark:text-white">
            Warkop
          </h5>
        </a>
        <div className="mt-4 mb-0 flex space-x-2 flex-nowrap justify-between">
          <button className="text-[10px] w-full h-6 bg-gray-500 p-1 rounded-xl text-white hover:bg-white hover:text-black transition-colors">
            Read
          </button>
          <button className="text-[10px] w-full h-6 bg-gray-500 p-1 rounded-xl text-white hover:bg-white hover:text-black transition-colors">
            Trailer
          </button>
          <button className="text-[10px] w-full h-6  bg-white p-1 rounded-xl text-black hover:bg-gray-500 transition-colors">
            Nonton
          </button>
        </div>
      </div>
    </div>
  );
};

export default Film;
