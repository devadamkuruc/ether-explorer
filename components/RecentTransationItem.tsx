import SuccessIcon from "@/assets/SuccessIcon";
import { TransactionItem } from "@/types/Transaction";
import { shortenAddress } from "@/utils";
import Link from "next/link";
import React from "react";

interface Props {
  transactionItem: TransactionItem;
}

const RecentTransationItem = ({ transactionItem }: Props) => {
  return (
    <div className="flex justify-between py-6 border-b-2 border-solid border-ether-grey-2">
      <div className="flex flex-col gap-y-4 flex-2">
        <div className="flex justify-between">
          <div className="text-ether-grey-5 text-sm">
            Transaction Hash{" "}
            <Link
              href={`/tx/${transactionItem.txHash}`}
              className="text-ether-pink-1"
            >
              {shortenAddress(transactionItem.txHash)}
            </Link>
          </div>
          <div className="text-ether-grey-5 text-sm">
            Chain <span className="text-white">{transactionItem.chain}</span>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-ether-grey-5 text-sm">
            From{" "}
            <Link
              href={`/address/${transactionItem.from}`}
              className="text-ether-pink-1"
            >
              {shortenAddress(transactionItem.from)}
            </Link>
          </div>
          <div className="text-ether-grey-5 text-sm">
            To{" "}
            <Link
              href={`/address/${transactionItem.to}`}
              className="text-ether-pink-1"
            >
              {shortenAddress(transactionItem.to)}
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 flex-1">
        <div className="flexEndCenter text-sm">
          <SuccessIcon />
          <span className="text-white ml-2">{transactionItem.status}</span>
        </div>
        <div className="flex justify-end text-ether-grey-5 text-sm">
          {transactionItem.date}
        </div>
      </div>
    </div>
  );
};

export default RecentTransationItem;
