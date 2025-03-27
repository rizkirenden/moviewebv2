import React from "react";
import Image from "next/image";
const News = () => {
  return (
    <div className="relative w-full mx-auto p-2 overflow-hidden">
      <div className="grid grid-cols-2 gap-1">
        <div className="flex flex-wrap justify-center">
          <div
            className="flex-none p-2 hover:scale-105 transition-transform duration-300"
            style={{ width: "60%", minWidth: "600px" }}
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src=""
                alt="sasa"
                className="w-full h-48 object-cover"
                width={100}
                height={100}
              />
              <div className="p-4">
                <h2 className="font-bold text-xl mb-2">Berita 1</h2>
                <p className="text-gray-700 text-base">testBerikta</p>
                <a
                  href=""
                  className="mt-4 inline-block bg-customBlue text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
                >
                  Baca Selengkapnya
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
