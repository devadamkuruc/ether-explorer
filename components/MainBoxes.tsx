import React from "react";

const MainBoxes = () => {
  return (
    <div className="flex w-full gap-6 mt-18 minmd:w-4/5 h-228">
      <div className="w-1/2 grid gap-3 grid-cols-2 grid-rows-2">
        <div className="flexCenterStart flex-col bg-ether-grey-1 rounded-3xl p-12">
          <p className="text-ether-grey-6 text-sm">Circulating Supply</p>
          <p className="text-white text-2xl font-semibold">198.05 M</p>
        </div>
        <div className="flexCenterStart flex-col bg-ether-grey-1 rounded-3xl p-12">
          <p className="text-ether-grey-6 text-sm">Transactions</p>
          <p className="text-white text-2xl font-semibold">272.55 M</p>
        </div>
        <div className="flexCenterStart flex-col bg-ether-grey-1 rounded-3xl p-12">
          <p className="text-ether-grey-6 text-sm">Market Cap</p>
          <p className="text-white text-2xl font-semibold">$3.1 B</p>
        </div>
        <div className="flexCenterStart flex-col bg-ether-grey-1 rounded-3xl p-12">
          <p className="text-ether-grey-6 text-sm">Avg Gas Price</p>
          <p className="text-white text-2xl font-semibold">$0.0002</p>
        </div>
      </div>
      <div className="w-1/2 bg-ether-grey-1 rounded-3xl"></div>
    </div>
  );
};

export default MainBoxes;
