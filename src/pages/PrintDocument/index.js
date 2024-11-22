import React from "react";
import Header from "../../components/Header";

const PrintDocumentPage = () => {
  return (
    <div className="flex flex-col space-y-5 bg-gray-100 p-6 w-full">
      <Header pageName="Print Document" description="Upload and print document here."/>
    </div>
  );
};

export default PrintDocumentPage;