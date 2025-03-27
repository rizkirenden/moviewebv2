import React from "react";
import Image from "next/image";
const Carousel = () => {
  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
      <div className="flex transition-transform duration-500 ease-in-out">
        <div className="min-w-full">
          <Image
            src="/images/deepwater.jpg"
            alt="Slide 1"
            height={500}
            width={2000}
            className="w-full h-screen object-cover"
          />
        </div>
      </div>
      <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white px-6 py-4 max-w-lg">
        <h2 className="text-4xl font-bold">Deepwater Horizon</h2>
        <p className="text-lg italic">Genre: Action, Drama, Thriller</p>
        <p className="text-lg">Duration: 1h 47m</p>
        <p className="text-md mt-2">
          On April 20, 2010, an explosion occurred on the BP-operated Deepwater
          Horizon oil rig off the coast of Louisiana. The disaster triggered one
          of the largest man-made environmental disasters in history, while also
          testing the courage and resolve of the workers who tried to prevent
          the rig from sinking and leaking millions of gallons of oil into the
          Gulf of Mexico.
        </p>
        <div className="mt-4">
          <button className="bg-white p-3 rounded-xl text-black hover:bg-gray-500 transition-colors mr-2">
            Nonton Sekarang
          </button>
          <button className="bg-gray-500 p-3 rounded-xl text-white hover:bg-white hover:text-black transition-colors">
            Nonton Trailer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
