import React from "react";
import Navbar from "@/components/navbar";
import Totalfilm from "@/components/dashboard/totalfilm";
const dashboard = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="ml-[265px]">
        <Totalfilm />
      </div>
    </>
  );
};

export default dashboard;
