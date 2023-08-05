import {
  MainBoxes,
  RecentBlocks,
  RecentTransactions,
  Searchbar,
  WalletBanner,
} from "@/components";
import React from "react";

const Home = () => {
  return (
    <div className=" flex-col flexCenter p-4 ">
      <div className="flexBetween w-full mt-14 gap-28 minmd:w-4/5">
        <Searchbar />
        <WalletBanner />
      </div>

      <div className="w-full flex justify-center flex-col mt-16">
        <MainBoxes />

        <div className="flex gap-3 mt-16">
          <RecentTransactions />
          <RecentBlocks />
        </div>
      </div>
    </div>
  );
};

export default Home;
