import React from "react";

const Totalfilm = () => {
  return (
    <div className="flex justify-center p-2">
      <div className="flex flex-col w-full h-full space-y-4">
        <div className="flex flex-nowrap w-full space-x-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden w-full">
            <div className="flex items-center bg-gray-900 h-12 px-4">
              <p className="text-white font-medium">Total Film</p>
            </div>
            <div className="p-4">
              <p className="text-2xl font-bold">1,245</p>
              <p className="text-gray-500 text-sm">Movies in database</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden w-full">
            <div className="flex items-center bg-gray-900 h-12 px-4">
              <p className="text-white font-medium">Total User</p>
            </div>
            <div className="p-4">
              <p className="text-2xl font-bold">5,678</p>
              <p className="text-gray-500 text-sm">Registered users</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden w-full">
            <div className="flex items-center bg-gray-900 h-12 px-4">
              <p className="text-white font-medium">Total Genre</p>
            </div>
            <div className="p-4">
              <p className="text-2xl font-bold">24</p>
              <p className="text-gray-500 text-sm">Different genres</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-full">
          <div className="flex items-center bg-gray-900 h-12 px-4">
            <p className="text-white font-medium">Monthly Growth</p>
          </div>
          <div className="p-4">
            <div className="relative h-80 w-full bg-gray-50 rounded-md">
              <div className="absolute inset-0 flex flex-col justify-between">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-px w-full bg-gray-200"></div>
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4">
                {[
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Agu",
                  "Sep",
                  "Okt",
                  "Nov",
                  "Des",
                ].map((month) => (
                  <span key={month} className="text-xs text-gray-500">
                    {month}
                  </span>
                ))}
              </div>
              <div className="absolute top-1/4 left-0 right-0 h-px bg-purple-500">
                <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-purple-500 rounded-full"></div>
              </div>
              <div className="absolute top-1/3 left-0 right-0 h-px bg-green-500">
                <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="absolute top-1/2 left-0 right-0 h-px bg-yellow-500">
                <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-yellow-500 rounded-full"></div>
              </div>
              <div className="absolute top-4 right-4 flex flex-col space-y-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                  <span className="text-xs text-gray-700">Films</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-xs text-gray-700">Users</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <span className="text-xs text-gray-700">Genres</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Totalfilm;
