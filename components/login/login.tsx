import React from "react";
import Image from "next/image";

const Loginpage = () => {
  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: 'url("/images/loginbg1.jpg")',
      }}
    >
      <div className="justify-center flex flex-col items-center w-auto h-auto rounded-lg ">
        <Image
          src={"/images/baverse.png"}
          alt="logo"
          width={100}
          height={100}
        />
        <div className="flex flex-col items-center">
          <h2 className="text-white font-bold py-6 text-3xl">Login</h2>
        </div>
        <div className="flex flex-col mb-6 items-center">
          <div className="flex justify-center items-center ">
            <input
              type="text"
              placeholder="Enter username"
              className="text-center w-96 h-10 rounded-full bg-white bg-opacity-60 shadow-md mt-6 text-black bg-transparent border-none outline-none placeholder-white px-3 py-2  focus:ring-2 focus:ring-black"
            />
          </div>
        </div>
        <div className="flex flex-col mb-6 items-center">
          <div className="flex justify-center items-center ">
            <input
              type="password"
              placeholder="Password"
              className="text-center w-96 h-10 rounded-full bg-white bg-opacity-60 shadow-md mt-6 text-black bg-transparent border-none outline-none placeholder-white px-3 py-2  focus:ring-2 focus:ring-black"
            />
          </div>
        </div>
        <div className="flex flex-nowrap space-x-5 items-center ml-auto">
          <div className="flex justify-start items-center">
            <button className="bg-white bg-opacity-60 text-black hover:bg-black rounded-full px-4 py-2 mt-6">
              <a className="text-white">Login</a>
            </button>
          </div>
          <div className="fles justify-center items-center">
            <button className="bg-white bg-opacity-60 text-black hover:bg-black rounded-full px-4 py-2 mt-6">
              <a href="" className="text-white">
                Kembali
              </a>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center mt-20">
          <p className="text-white">
            {" "}
            © Baverse Studio 2020 all rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
