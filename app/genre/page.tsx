import React from "react";
import Table from "@/components/genre/table";
import Navbar from "@/components/navbar";
const Genre = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="ml-[265px]">
        <Table />
      </div>
    </>
  );
};

export default Genre;
