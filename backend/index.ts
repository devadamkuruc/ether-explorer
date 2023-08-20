import express, { Express, Request, Response } from "express";
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());

const MORALIS_API_KEY = process.env.MORALIS_API_KEY;
const address = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
const ethChain = EvmChain.ETHEREUM;

app.get("/getethprice", async (req, res) => {
  try {
    const response = await Moralis.EvmApi.token.getTokenPrice({
      address: address,
      chain: ethChain,
    });

    return res.status(200).json(response);
  } catch (error) {
    console.log(`Something went wrong: ${error}`);
    return res.status(400).json();
  }
});

app.get("/getethmarketcap", async (req, res) => {
  try {
    const response =
      await Moralis.EvmApi.marketData.getTopERC20TokensByMarketCap();

    console.log(response);
  } catch (error) {}
});

app.get("/getblockinfo", async (req, res) => {
  try {
    const latestBlock = await Moralis.EvmApi.block.getDateToBlock({
      date: Date.now().toString(),
      chain: ethChain,
    });

    let blockNrOrParentHash = latestBlock.toJSON().block;
    let previousBlockInfo = [];

    for (let i = 0; i < 5; i++) {
      const previousBlockNrs = await Moralis.EvmApi.block.getBlock({
        chain: ethChain,
        blockNumberOrHash: blockNrOrParentHash.toString(),
      });

      blockNrOrParentHash = Number(previousBlockNrs?.toJSON().parent_hash);

      if (i == 0) {
        previousBlockInfo.push({
          transactions: previousBlockNrs?.toJSON().transactions.map((i) => {
            return {
              transactionHash: i.hash,
              time: i.block_timestamp,
              fromAddress: i.from_address,
              toAddress: i.to_address,
              value: i.value,
            };
          }),
        });
      }
      previousBlockInfo.push({
        blockNumber: previousBlockNrs?.toJSON().number,
        totalTransactions: previousBlockNrs?.toJSON().transaction_count,
        gasUsed: previousBlockNrs?.toJSON().gas_used,
        miner: previousBlockNrs?.toJSON().miner,
        time: previousBlockNrs?.toJSON().timestamp,
      });
    }

    const response = {
      latestBlock: latestBlock.toJSON().block,
      previousBlockInfo,
    };

    return res.status(200).json(response);
  } catch (error) {
    console.log(`Something went wrong ${error}`);
    return res.status(400).json();
  }
});

app.get("/address", async (req, res) => {
  try {
    const { query } = req;
    const chain = ethChain;

    if (typeof query.address === "string") {
      const response =
        await Moralis.EvmApi.transaction.getWalletTransactionsVerbose({
          address: query.address,
          chain,
        });

      return res.status(200).json(response);
    } else {
      return res.status(400).json({ error: "Invalid address format" });
    }
  } catch (error) {
    console.log(`Something went wrong ${error}`);
    return res.status(500).json({ error: "Internal server error" });
  }
});

Moralis.start({
  apiKey: MORALIS_API_KEY,
}).then(() => {
  app.listen(port, () => {
    console.log(`Listening for API Calls on port: ${port}`);
  });
});
