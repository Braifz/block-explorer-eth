import { alchemy } from "../App";
import { useState, useEffect } from "react";
import axios from "axios";

const ALCHEMY_URL = process.env.REACT_APP_ALCHEMY_API_KEY;

const Blocks = () => {
  const [latestBlock, setLatestBlock] = useState();
  const [blocks, setBlocks] = useState([]);

  // get the latest block number
  const getLatestBlock = async () => {
    const response = await alchemy.core.getBlock();
    setLatestBlock(response.number);
  };

  const latestBlocksArr = [];

  // save the latest 10 blocks into an array
  for (let i = 9; i >= 0; i--) {
    latestBlocksArr.push(latestBlock - i);
  }

  const querys = [];

  latestBlocksArr.map((block, index) =>
    querys.push({
      jsonrpc: "2.0",
      id: index,
      method: "eth_getBlockByNumber",
      params: [block, true],
    })
  );

  console.log(querys);

  const getLatestBlocks = async () => {
    try {
      const response = await axios.post(ALCHEMY_URL, querys[0]);
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    // getLatestBlock();
    // getLatestBlocks();
  }, []);

  return (
    <div>
      <h1>Latest Block:</h1>
      {/* <p>{blocks}</p> */}
    </div>
  );
};

export default Blocks;
