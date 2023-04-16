import { useEffect, useState } from "react";
import Transactions from "./components/Transactions";
import Blocks from "./components/Blocks";
import InputAddress from "./components/InputAddress";
import Layout from "./components/Layout";

import { alchemy } from "./config/alchemyConfig";

import { useContext } from "react";
import { ThemeContext } from "./context/theme";

import "./App.css";

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
    <Layout>
      <div
        className={`App ${
          state.darkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <h1>Current theme: {state.darkMode ? "dark" : "light"}</h1>
        <h1>Block Number: {blockNumber}</h1>
        <Blocks />
        <InputAddress />
        <Transactions />
      </div>
    </Layout>
  );
}

export default App;
