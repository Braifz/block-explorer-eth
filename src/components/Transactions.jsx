import { alchemy } from "../config/alchemyConfig";
import { useState, useEffect } from "react";
// import { ethers } from "ethers";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const getBlockWithTransactions = async () => {
    try {
      const response = await alchemy.core.getBlockWithTransactions();
      setTransactions(response.transactions);
      // console.log(response.transactions);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getBlockWithTransactions();
  }, []);

  if (loading)
    return (
      <div className="">
        <p>Loading...</p>
      </div>
    );

  return (
    <div className="flex align-center justify-center flex-col ">
      <h1 className="text-3xl text-center font-bold underline	">Transactions</h1>
      <table className="table-auto overflow-auto border-collapse border border-slate-500 m-5 shadow-lg shadow-black">
        <tr>
          {/* <th className="border border-slate-600">Block Number</th>
          <th className="border border-slate-600">block Hash</th> */}
          <th className="border border-slate-600">From</th>
          <th className="border border-slate-600">To</th>
          <th className="border border-slate-600">Value</th>
        </tr>
        {transactions.length >= 1
          ? transactions.map((tx) => (
              <tr key={tx.hash}>
                {/* <td className="border border-slate-600 p-2">
                  {tx.blockNumber}
                </td> */}
                {/* <td className="border border-slate-600 p-2">{tx.blockHash}</td> */}
                <td className="border border-slate-600 p-2">{tx.from}</td>
                <td className="border border-slate-600 p-2">{tx.to}</td>
                <td className="border border-slate-600 p-2">
                  {parseInt(tx.value)}
                </td>
              </tr>
            ))
          : null}
      </table>
    </div>
  );
};

export default Transactions;
