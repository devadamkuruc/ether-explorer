import React from "react";
import { Button, RecentTransationItem } from "@/components";

const transactionItem = {
  requestKey: "Q-KZS5A...u9IAT4",
  chain: 8,
  from: "k:16c2s...e3094f",
  to: "k:f9bc1...ae6952",
  status: "Success",
  date: "2022-10-04 06:37:20",
};

const transactionItems = [
  transactionItem,
  transactionItem,
  transactionItem,
  transactionItem,
  transactionItem,
  transactionItem,
];

const RecentTransactions = () => {
  return (
    <div className=" flex-1 bg-ether-grey-1 rounded-3xl">
      <div className="flex justify-between py-7 px-6 border-b-2 border-solid border-ether-grey-2">
        <h2 className="flex items-center text-white font-semibold text-lg">
          Recent Transactions
        </h2>
        <Button title="View All" classStyles="hover:bg-ether-grey-3" />
      </div>

      <div className="px-6 pb-6 h-544 overflow-y-scroll">
        {transactionItems.map((item, index) => (
          <RecentTransationItem transactionItem={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
