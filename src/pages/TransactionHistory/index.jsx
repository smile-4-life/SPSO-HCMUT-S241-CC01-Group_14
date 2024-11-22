import React from "react";
import Header from "../../components/Header";

const TransactionHistoryPage = () => {
  return (
    <div className="flex flex-col space-y-5 bg-gray-100 p-6 w-full">
      <Header pageName="Transaction History" description="View your transaction history"/>
    </div>
  );
};

export default TransactionHistoryPage;