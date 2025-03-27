import React from "react";
import Image from "next/image";
const CardCarousel = () => {
  const progress = 50; // Persentase progres menonton (dalam %)

  return (
    <div className="relative w-full mx-auto p-4 overflow-hidden">
      <div className="flex">
        <div className="flex-none p-4" style={{ width: "20%" }}>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative w-full h-auto">
              <Image
                src="/images/warkop.jpg"
                alt="Warkop"
                className="w-full h-auto object-cover"
                width={500} // Tentukan lebar gambar
                height={300} // Tentukan tinggi gambar
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                <h3 className="font-bold">Warkop</h3>
              </div>
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-200 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 11l3-3-3-3m4 6l-3 3 3 3M10 5v14"
                  />
                </svg>
              </button>
              <div className="absolute bottom-10 left-0 right-0 w-full bg-gray-200 h-1 mt-2">
                <div
                  className="bg-blue-500 h-1"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
