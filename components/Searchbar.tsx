import SearchIcon from "@/assets/SearchIcon";
import React from "react";

const Searchbar = () => {
  return (
    <div className="flex flex-2 flexCenter rounded-2xl bg-ether-gray-1">
      <input
        className="bg-transparent w-full rounded-2xl outline-none text-white p-4 text-sm"
        placeholder="Search by Address / Request Key / Event / Block Height / Code"
      />
      <div className="rounded-2xl m-1 p-4 bg-ether-pink-1 cursor-pointer">
        <SearchIcon />
      </div>
    </div>
  );
};

export default Searchbar;
