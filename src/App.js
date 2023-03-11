import { Alchemy, Network } from "alchemy-sdk";
import { useEffect, useState } from "react";
import Transactions from "./components/Transactions";
import Blocks from "./components/Blocks";
import InputAddress from "./components/InputAddress";
import Layout from "./components/Layout";

import { useContext } from "react";
import { ThemeContext } from "./context/theme";

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
export const alchemy = new Alchemy(settings);

function App() {
  const [blockNumber, setBlockNumber] = useState();

  const { state } = useContext(ThemeContext);

  const getBlockNumber = async () => {
    setBlockNumber(await alchemy.core.getBlockNumber());
  };

  useEffect(() => {
    try {
      getBlockNumber();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div className={`App ${state.darkMode ? "dark-theme" : "light-theme"}`}>
      <Layout>
        <h1>Current theme: {state.darkMode ? "dark" : "light"}</h1>
        <h1>Block Number: {blockNumber}</h1>
        <Blocks />
        <InputAddress />
        <Transactions />
      </Layout>
    </div>
  );
}

export default App;
