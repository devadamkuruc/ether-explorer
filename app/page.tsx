import { Searchbar, WalletBanner } from "@/components";
import React from "react";

const Home = () => {
  return (
    <div className=" flex justify-center p-4">
      <div className="flexBetween w-full mt-18 gap-28">
        <Searchbar />
        <WalletBanner />
      </div>
    </div>
  );
};

export default Home;
