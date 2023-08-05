import BannerBackground from "@/assets/BannerBackground";
import EtherLogo from "@/assets/EtherLogo";
import QRCode from "@/assets/QRCode";
import React from "react";

const WalletBanner = () => {
  return (
    <div className="relative overflow-hidden flex h-128 w-324 eth-gradient-2 rounded-3xl">
      <BannerBackground />
      <div className="flex flex-1 flex-col flexCenter m-4 z-20">
        <EtherLogo height={45} width={30} />
        <p className="font-extrabold text-white text-xl font-nunito">
          ether wallet
        </p>
        <p className="text-xs text-white font-light ">
          Available on iOS, Android
        </p>
      </div>
      <div className="flexCenter flex-1 z-20">
        <QRCode />
      </div>
    </div>
  );
};

export default WalletBanner;
