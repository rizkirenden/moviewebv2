import React from "react";
import { LiaUserEditSolid } from "react-icons/lia";
import { RiDeleteBinLine } from "react-icons/ri";
const Table = () => {
  return (
    <div className="mt-2 relative overflow-x-auto shadow-md sm:rounded-lg mx-2">
      <table className="w-full text-sm text-left  text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-900  dark:text-gray-400">
          <tr>
            <th scope="col" className="px-3 py-2">
              ID
            </th>
            <th scope="col" className="px-3 py-2">
              Nama Genre
            </th>
            <th scope="col" className="px-3 py-2">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-3 py-2">1</td>
            <td className="px-3 py-2 font-medium text-gray-900 dark:text-white whitespace-nowrap">
              Film Example
            </td>
            <td className="px-3 py-2">
              <button className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600">
                <LiaUserEditSolid className="w-5 h-5 text-black dark:text-white" />
              </button>
              <button className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600">
                <RiDeleteBinLine className="w-5 h-5 text-red-500" />
              </button>
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
