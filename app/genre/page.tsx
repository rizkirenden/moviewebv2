import React from "react";
import Table from "@/components/genre/table";
import Navbar from "@/components/navbar";
import Btn from "@/components/genre/btn";
import Header from "@/components/genre/header";
import Pagination from "@/components/genre/pagination";
const Genre = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="ml-[265px]">
        <div className="flex justify-between flex-nowrap">
          <Header />
          <Btn />
        </div>
        <Table />
        <Pagination />
      </div>
    </>
  );
};

export default Genre;
