"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

import EtherLogo from "@/assets/EtherLogo";
import EtherLogoBlack from "@/assets/EtherLogoBlack";

const Navbar = () => {
  const [ethPrice, setEthPrice] = useState("");

  return (
    <nav className="flex justify-center px-28 py-4 z-10">
      <div className="flexStartCenter w-full minmd:w-4/5">
        <Link href="/" className="text-white font-semibold text-2xl">
          Ether Explorer
        </Link>
        <div className="flex items-center ml-12 text-white">
          <EtherLogo />
          <div className="ml-2 font-semibold">
            ETH <span className="ml-2 font-normal">$23.8</span>
            <span className="ml-1 font-normal text-green-500">(+1.85%)</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
