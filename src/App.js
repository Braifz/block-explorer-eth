import { Alchemy, Network } from "alchemy-sdk";
import { useEffect, useState } from "react";

import "./App.css";

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(settings);

function App() {
  const [blockNumber, setBlockNumber] = useState();
  const [transactions, setTransactions] = useState();

  const getBlockWithTransactions = async () => {
    const response = await alchemy.core.getBlockWithTransactions();
    setTransactions(response.transactions);
  };

  const getBlockNumber = async () => {
    setBlockNumber(await alchemy.core.getBlockNumber());
  };

  useEffect(() => {
    try {
      getBlockNumber();
      getBlockWithTransactions();
    } catch (e) {
      console.log(e);
    }
  }, []);

  console.log(transactions, "transactions");

  return (
    <div className="App">
      <h1>Block Number: {blockNumber}</h1>
      <ul>
        {transactions.length > 0
          ? transactions.map((tx) => <li key={tx.blockNumber}>{tx.hash}</li>)
          : null}
      </ul>
    </div>
  );
}

export default App;
