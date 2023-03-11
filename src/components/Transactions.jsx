import { alchemy } from "../App";
import { useState, useEffect } from "react";
// import { ethers } from "ethers";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  const getBlockWithTransactions = async () => {
    const response = await alchemy.core.getBlockWithTransactions();
    setTransactions(response.transactions);
    // console.log(response.transactions);
  };

  useEffect(() => {
    getBlockWithTransactions();
  }, []);

  return (
    <div className="flex align-center justify-center flex-col">
      <h1 className="text-3xl font-bold underline	">Transactions</h1>
      <table className="table-auto overflow-x-auto  border-collapse border border-slate-500 m-5">
        <tr>
          <th className="border border-slate-600">Block Number</th>
          <th className="border border-slate-600">block Hash</th>
          <th className="border border-slate-600">From</th>
          <th className="border border-slate-600">To</th>
          <th className="border border-slate-600">Value</th>
        </tr>
        {transactions.length >= 1
          ? transactions.map((tx) => (
              <tr key={tx.hash}>
                <td className="border border-slate-600 p-2">
                  {tx.blockNumber}
                </td>
                <td className="border border-slate-600 p-2">{tx.blockHash}</td>
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
