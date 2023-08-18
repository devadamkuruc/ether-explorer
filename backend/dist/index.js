"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const moralis_1 = __importDefault(require("moralis"));
const common_evm_utils_1 = require("@moralisweb3/common-evm-utils");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)());
const MORALIS_API_KEY = process.env.MORALIS_API_KEY;
const address = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
const ethChain = common_evm_utils_1.EvmChain.ETHEREUM;
app.get("/getethprice", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield moralis_1.default.EvmApi.token.getTokenPrice({
            address: address,
            chain: ethChain,
        });
        return res.status(200).json(response);
    }
    catch (error) {
        console.log(`Something went wrong: ${error}`);
        return res.status(400).json();
    }
}));
app.get("/getblockinfo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const latestBlock = yield moralis_1.default.EvmApi.block.getDateToBlock({
            date: Date.now().toString(),
            chain: ethChain,
        });
        let blockNrOrParentHash = latestBlock.toJSON().block;
        let previousBlockInfo = [];
        for (let i = 0; i < 5; i++) {
            const previousBlockNrs = yield moralis_1.default.EvmApi.block.getBlock({
                chain: ethChain,
                blockNumberOrHash: blockNrOrParentHash.toString(),
            });
            blockNrOrParentHash = Number(previousBlockNrs === null || previousBlockNrs === void 0 ? void 0 : previousBlockNrs.toJSON().parent_hash);
            if (i == 0) {
                previousBlockInfo.push({
                    transactions: previousBlockNrs === null || previousBlockNrs === void 0 ? void 0 : previousBlockNrs.toJSON().transactions.map((i) => {
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
                blockNumber: previousBlockNrs === null || previousBlockNrs === void 0 ? void 0 : previousBlockNrs.toJSON().number,
                totalTransactions: previousBlockNrs === null || previousBlockNrs === void 0 ? void 0 : previousBlockNrs.toJSON().transaction_count,
                gasUsed: previousBlockNrs === null || previousBlockNrs === void 0 ? void 0 : previousBlockNrs.toJSON().gas_used,
                miner: previousBlockNrs === null || previousBlockNrs === void 0 ? void 0 : previousBlockNrs.toJSON().miner,
                time: previousBlockNrs === null || previousBlockNrs === void 0 ? void 0 : previousBlockNrs.toJSON().timestamp,
            });
        }
        const response = {
            latestBlock: latestBlock.toJSON().block,
            previousBlockInfo,
        };
        return res.status(200).json(response);
    }
    catch (error) {
        console.log(`Something went wrong ${error}`);
        return res.status(400).json();
    }
}));
app.get("/address", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { query } = req;
        const chain = ethChain;
        if (typeof query.address === "string") {
            const response = yield moralis_1.default.EvmApi.transaction.getWalletTransactionsVerbose({
                address: query.address,
                chain,
            });
            return res.status(200).json(response);
        }
        else {
            return res.status(400).json({ error: "Invalid address format" });
        }
    }
    catch (error) {
        console.log(`Something went wrong ${error}`);
        return res.status(500).json({ error: "Internal server error" });
    }
}));
moralis_1.default.start({
    apiKey: MORALIS_API_KEY,
}).then(() => {
    app.listen(port, () => {
        console.log(`Listening for API Calls on port: ${port}`);
    });
});
