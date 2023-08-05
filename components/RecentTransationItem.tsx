import SuccessIcon from "@/assets/SuccessIcon";
import { TransactionItem } from "@/types/Transaction";
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
            Request Key{" "}
            <span className="text-ether-pink-1">
              {transactionItem.requestKey}
            </span>
          </div>
          <div className="text-ether-grey-5 text-sm">
            Chain <span className="text-white">{transactionItem.chain}</span>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-ether-grey-5 text-sm">
            From{" "}
            <span className="text-ether-pink-1">{transactionItem.from}</span>
          </div>
          <div className="text-ether-grey-5 text-sm">
            To <span className="text-ether-pink-1">{transactionItem.to}</span>
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
