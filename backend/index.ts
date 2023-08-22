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

    const wrappedEtherObject = response.result.find(
      (item) => item.rank === 1 && item.tokenSymbol === "WETH"
    );

    return res.status(200).json(wrappedEtherObject?.marketCapUsd);
  } catch (error) {
    console.log(`Something went wrong with market cap: ${error}`);
    return res.status(400).json();
  }
});

app.get("/getblockinfo", async (req, res) => {
  try {
    const latestBlock = await Moralis.EvmApi.block.getDateToBlock({
      date: new Date(Date.now()),
      chain: ethChain,
    });

    let blockNrOrParentHash: number | string = latestBlock.raw.block;
    let previousBlockInfo = [];

    for (let i = 0; i < 5; i++) {
      console.log(i);
      console.log(blockNrOrParentHash);
      const previousBlockNrs = await Moralis.EvmApi.block.getBlock({
        chain: ethChain,
        blockNumberOrHash: blockNrOrParentHash.toString(),
      });

      let parentHash = previousBlockNrs?.raw.parent_hash;

      if (parentHash !== undefined) {
        blockNrOrParentHash = parentHash;
        console.log(blockNrOrParentHash);
      }

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
        blockNumber: previousBlockNrs?.raw.number,
        totalTransactions: previousBlockNrs?.raw.transaction_count,
        gasUsed: previousBlockNrs?.raw.gas_used,
        miner: previousBlockNrs?.raw.miner,
        time: previousBlockNrs?.raw.timestamp,
      });
    }

    const response = {
      latestBlock: latestBlock.raw.block,
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
