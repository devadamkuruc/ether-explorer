"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import { LineChart } from "@/components";

const data = [
  32000, 33000, 35000, 42000, 46000, 54000, 62000, 45000, 38000, 56000, 73000,
  68000, 65000, 58000,
];

const HeroSection = () => {
  const [ethMarketCapUsd, setEthMarketCapUsd] = useState("");

  const getEthMarketCap = async () => {
    try {
      const response = await axios.get("http://localhost:5001/getethmarketcap");
      if (response) {
        setEthMarketCapUsd(response.data);
      }
    } catch (error) {
      console.log(`Something went wrong requesting eth market cap: ${error}`);
    }
  };

  const getBlockInfo = async () => {
    try {
      const response = await axios.get("http://localhost:5001/getblockinfo");

      console.log(response);
    } catch (error) {
      console.log(`Something went wrong requesting eth block info: ${error}`);
    }
  };

  useEffect(() => {
    getEthMarketCap();
    getBlockInfo();
  }, []);

  return (
    <div className="flex w-full gap-6 mt-18 h-228">
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
          <p className="text-white text-2xl font-semibold">
            ${(Number(ethMarketCapUsd) / 1000000000).toFixed(2)} B
          </p>
        </div>
        <div className="flexCenterStart flex-col bg-ether-grey-1 rounded-3xl p-12">
          <p className="text-ether-grey-6 text-sm">Avg Gas Price</p>
          <p className="text-white text-2xl font-semibold">$0.0002</p>
        </div>
      </div>
      <div className="w-1/2 bg-ether-grey-1 rounded-3xl p-6 relative">
        <LineChart data={data} />
      </div>
    </div>
  );
};

export default HeroSection;
