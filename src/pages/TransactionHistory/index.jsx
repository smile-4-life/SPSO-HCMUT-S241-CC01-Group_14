import React, { useState, useEffect, useRef } from "react";
import Header from "../../components/Header";
import "./fonts.css";
import TransactionCard from "./TransactionCard";
import { useLocation } from "react-router-dom";

const TransactionHistoryPage = () => {
  const { state } = useLocation();
  const { selectedOption } = state || {};

  // Initialize state from local storage or as an empty array
  const [transactionData, setTransactionData] = useState(() => {
    const savedTransactions = localStorage.getItem("transactionData");
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    if (selectedOption && selectedOption.quantity && selectedOption.price) {
      const newTransaction = {
        transactionId: Date.now(),
        time: new Date().toLocaleTimeString(),
        date: new Date().toLocaleDateString(),
        amount: Number(selectedOption.price).toLocaleString(), // Format amount
        currency: "VND",
        number: selectedOption.quantity,
        transactionType: `Buying Papers (${selectedOption.quantity} papers)`,
      };

      setTransactionData((prevData) => {
        const updatedData = [newTransaction, ...prevData];
        localStorage.setItem("transactionData", JSON.stringify(updatedData)); // Save to local storage
        return updatedData;
      });
    }
  }, [selectedOption]);

  // Calculate totals
  const totalA4Papers = transactionData.reduce((total, transaction) => total + transaction.number, 0);
  const totalTransactions = transactionData.length;

  return (
    <div className="flex flex-col space-y-5 bg-gray-100 p-6 w-full">
      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6">
        <Header pageName="Transaction History" description="View your transaction history" className="mb-4" />

        {/* Totals */}
        <div className="flex flex-row justify-between space-x-4 mt-6">
          {/* Total A4 Papers */}
          <div className="flex flex-row items-center bg-white p-4 rounded-md shadow-xl w-2/5">
            <div className="flex flex-col items-end flex-grow">
              <div className="text-blue font-bold text-xl mb-3">Number of A4</div>
              <div className="text-gray-600 text-3xl font-bold">{totalA4Papers}</div>
            </div>
          </div>
          {/* Total Transactions */}
          <div className="flex flex-row items-center bg-white p-4 rounded-md shadow-xl w-2/5">
            <div className="flex flex-col items-end flex-grow">
              <div className="text-blue font-bold text-xl mb-3">Number of transactions</div>
              <div className="text-gray-600 text-3xl font-bold">{totalTransactions}</div>
            </div>
          </div>
        </div>

        {/* Transaction History List */}
        <div className="bg-white p-6 shadow-xl rounded-md mt-6">
          <h3 className="text-2xl text-blue font-bold mb-3">History list</h3>
          <div className="space-y-3 max-h-[520px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400">
            {transactionData.length === 0 ? (
              <p className="text-gray-600">No transactions found</p>
            ) : (
              transactionData.map((transaction) => (
                <div key={transaction.transactionId} className="flex flex-row justify-between">
                  <TransactionCard
                    key={transaction.transactionId}
                    date={transaction.date}
                    time={transaction.time}
                    description={transaction.transactionType}
                    amount={transaction.amount}
                    transactionId={transaction.transactionId}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistoryPage;
