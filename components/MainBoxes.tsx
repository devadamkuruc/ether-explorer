import React from "react";

const MainBoxes = () => {
  return (
    <div className="flex w-full gap-3 mt-18 minmd:w-4/5 h-228">
      <div className="w-1/2 grid gap-3 grid-cols-2 grid-rows-2">
        <div className="bg-ether-gray-3 rounded-3xl"></div>
        <div className="bg-ether-gray-3 rounded-3xl"></div>
        <div className="bg-ether-gray-3 rounded-3xl"></div>
        <div className="bg-ether-gray-3 rounded-3xl"></div>
      </div>
      <div className="w-1/2 bg-ether-gray-3 rounded-3xl"></div>
    </div>
  );
};

export default MainBoxes;
