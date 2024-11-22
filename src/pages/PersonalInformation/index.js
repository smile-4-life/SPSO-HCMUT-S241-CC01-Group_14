import React from "react";
import Header from "../../components/Header";

const PersonalInformationPage = () => {
  return (
    <div className="flex flex-col space-y-5 bg-gray-100 p-6 w-full">
      <Header pageName="Personal Information" description="This is your main page."/>
    </div>
  );
};

export default PersonalInformationPage;