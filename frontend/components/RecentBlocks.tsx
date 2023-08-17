import Link from "next/link";

import { RecentBlockItem } from "@/components";

const blockItem = {
  block: 3081316,
  chain: 2,
  hash: "HV2Ud8Cx53....n_se3LMcTc",
  transactions: 32,
  date: "2022-10-04 06:37:20",
};

const blockItems = [
  blockItem,
  blockItem,
  blockItem,
  blockItem,
  blockItem,
  blockItem,
];

const RecentBlocks = () => {
  return (
    <div className=" flex-1 bg-ether-grey-1 rounded-3xl">
      <div className="flex justify-between py-7 px-6 border-b-2 border-solid border-ether-grey-2">
        <h2 className="flex items-center text-white font-semibold text-lg">
          Recent Blocks
        </h2>
        <Link
          className="hover:bg-ether-grey-3 py-2 px-4 bg-ether-grey-2 rounded-lg text-white cursor-pointer text-sm font-semibold"
          href="/blocks"
        >
          View All
        </Link>
      </div>

      <div className="px-6 mb-6 h-544 overflow-y-scroll">
        {blockItems.map((item, index) => (
          <RecentBlockItem blockItem={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default RecentBlocks;
