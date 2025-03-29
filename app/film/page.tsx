import React from "react";
import Table from "@/components/film/table";
import Navbar from "@/components/navbar";
const page = () => {
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

export default page;
