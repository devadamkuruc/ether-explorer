import Link from "next/link";

import { RecentTransationItem } from "@/components";

const transactionItem = {
  txHash: "0x61b01ed45108e34bd9eab853c48bd16f424453869a055c8093ff21ed8f234816",
  chain: 8,
  from: "0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5",
  to: "0xeEE27662c2B8EBa3CD936A23F039F3189633e4C8",
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
        <Link
          className="hover:bg-ether-grey-3 py-2 px-4 bg-ether-grey-2 rounded-lg text-white cursor-pointer text-sm font-semibold"
          href="/txs"
        >
          View All
        </Link>
      </div>

      <div className="px-6 mb-6 h-544 overflow-y-scroll">
        {transactionItems.map((item, index) => (
          <RecentTransationItem transactionItem={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
