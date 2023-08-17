import Link from "next/link";

import { BlockItem } from "@/types/Block";

interface Props {
  blockItem: BlockItem;
}

const RecentBlockItem = ({ blockItem }: Props) => {
  return (
    <div className="flex justify-between py-6 border-b-2 border-solid border-ether-grey-2">
      <div className="flex flex-col gap-y-4 flex-2">
        <div className="flex justify-between">
          <Link
            href={`/block/${blockItem.block}`}
            className="text-ether-grey-5 text-sm"
          >
            Block <span className="text-ether-pink-1">{blockItem.block}</span>
          </Link>
          <div className="text-ether-grey-5 text-sm">
            Chain <span className="text-white">{blockItem.chain}</span>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-ether-grey-5 text-sm">
            Hash <span className="text-ether-pink-1">{blockItem.hash}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 flex-1">
        <Link
          href={`/txs?block=${blockItem.block}`}
          className="flexEndCenter text-sm text-ether-pink-1"
        >
          {blockItem.transactions}
          <span className=" ml-2">txns</span>
        </Link>
        <div className="flex justify-end text-ether-grey-5 text-sm">
          {blockItem.date}
        </div>
      </div>
    </div>
  );
};

export default RecentBlockItem;
