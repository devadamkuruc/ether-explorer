"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";

import EtherLogo from "@/assets/EtherLogo";
import EtherLogoBlack from "@/assets/EtherLogoBlack";

const Navbar = () => {
  const [ethPrice, setEthPrice] = useState<number | null>(null);
  const [percentChange, setPercentChange] = useState<string | null>(null);

  const getEtherPrice = async () => {
    try {
      axios
        .get(
          "https://deep-index.moralis.io/api/v2/erc20/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2/price?chain=eth&include=percent_change",
          {
            method: "GET",
            headers: {
              accept: "application/json",
              "X-API-Key": process.env.NEXT_PUBLIC_MORALIS_API_KEY,
            },
          }
        )
        .then((response) => {
          if (response) {
            setEthPrice(response.data.usdPrice);
            setPercentChange(response.data["24hrPercentChange"]);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEtherPrice();
  }, []);

  return (
    <nav className="flex justify-center px-28 py-6 z-10">
      <div className="flex justify-between w-full items-center">
        <div className="flexStartCenter">
          <Link href="/" className="text-white font-semibold text-2xl">
            Ether Explorer
          </Link>
          <div className="flex items-center ml-12 text-white">
            <EtherLogo />
            <div className="ml-2 font-semibold">
              ETH{" "}
              <span className="ml-2 font-normal">
                ${ethPrice ? ethPrice.toFixed(2) : ""}
              </span>
              <span
                className={`ml-1 font-normal ${
                  Number(percentChange) < 0 ? "text-red-500" : "text-green-500"
                } `}
              >
                ({Number(percentChange).toFixed(2)}%)
              </span>
            </div>
          </div>
        </div>

        <div className="text-white">Sign in</div>
      </div>
    </nav>
  );
};

export default Navbar;
