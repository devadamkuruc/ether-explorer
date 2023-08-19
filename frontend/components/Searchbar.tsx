"use client";

import { ChangeEvent, useState } from "react";
import axios from "axios";

import SearchIcon from "@/assets/SearchIcon";

const Searchbar = () => {
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = async () => {
    if (!searchInput.trim()) {
      return;
    }

    try {
      const response = await axios.get("http://localhost:5001/address", {
        params: { address: searchInput },
      });

      setResult(response.data.result);
      setShowResult(true);
    } catch (error) {
      console.log(`Something went wrong: ${error}`);
    }

    setSearchInput("");
  };

  return (
    <div className="flex flex-2 flexCenter rounded-2xl bg-ether-grey-3">
      <input
        className="bg-transparent w-full rounded-2xl outline-none text-white p-4 text-sm"
        placeholder="Search by Address / Txn Hash / Block / Token / Domain Name"
        onChange={changeHandler}
        maxLength={120}
        required
        value={searchInput}
      />
      <button
        className="rounded-2xl m-1 p-4 bg-ether-pink-1 cursor-pointer border-0"
        onClick={handleSearch}
      >
        <SearchIcon />
      </button>
    </div>
  );
};

export default Searchbar;
