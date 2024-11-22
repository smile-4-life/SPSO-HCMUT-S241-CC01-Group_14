import React from "react";
import Header from "../../../components/Header";

const SystemManagementPage = () => {
  return (
    <div className="flex flex-col space-y-5 bg-gray-100 p-6 w-full">
      <Header pageName="System Management Page" description="Configure, manage and track the printing system."/>
    </div>
  );
};

export default SystemManagementPage;