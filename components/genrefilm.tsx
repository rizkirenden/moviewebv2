import React from "react";

const Genrefilm = () => {
  return (
    <div className="flex items-center justify-between bg-customBlue m-2 rounded-lg h-10 border-5 border-white">
      <ul className="flex space-x-2 items-center justify-center flex-grow">
        <li className="border-r-2 border-white text-white text-sm m-2  hover:scale-125 hover:translate-z-[10px] hover:shadow-xl transition-all duration-300">
          <a className="text-white text-sm mr-2" href="#">
            Comedy ❤
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Genrefilm;
