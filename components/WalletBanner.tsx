import EtherLogo from "@/assets/EtherLogo";
import EtherLogoBlack from "@/assets/EtherLogoBlack";
import EtherLogoPurple from "@/assets/EtherLogoPurple";
import QRCode from "@/assets/QRCode";
import React from "react";

const WalletBanner = () => {
  return (
    <div className="flex h-128 w-324 eth-gradient-2 rounded-3xl">
      <div className="flex flex-1 flex-col flexCenter m-4">
        <EtherLogo height={45} width={30} />
        <p className="font-extrabold text-white text-xl font-nunito">
          ether wallet
        </p>
        <p className="text-xs text-white font-light ">
          Available on iOS, Android
        </p>
      </div>
      <div className="flexCenter flex-1">
        <QRCode />
      </div>
    </div>
  );
};

export default WalletBanner;
