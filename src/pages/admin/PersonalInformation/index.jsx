import React from "react";
import Header from "../../../components/Header";
import { ReactComponent as AvtSvg } from "../../../assets/svgs/Avatar.svg";
import { ReactComponent as PrinterSvg } from "../../../assets/svgs/printer.svg";
import { ReactComponent as BookSvg } from "../../../assets/svgs/book.svg";
import { ReactComponent as CloseSvg } from "../../../assets/svgs/close-circle.svg"

import PrintingHistoryItem from "../../../components/PrintingHistoryItem";
import { useNavigate, useSearchParams } from "react-router-dom";

const AdminPersonalInformationPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const name = searchParams.get("name");
  const id = searchParams.get("id");

  const email = "trung.tranquoc2004@hcmut.edu.vn";
  const falculty = "Computer Science";
  const numberOfA4 = 32;
  const numberOfPrinted = 16;

  const AvatarImage = AvtSvg;

  return (
    <div className="flex flex-col space-y-5 bg-gray-100 p-6 w-full h-full">
      <Header pageName="Personal Information" description="This is your main page."/>
      <div className="flex flex-row space-x-6 w-full">
        <div className="flex flex-col space-y-8 w-[42%]">
          <div className="flex flex-col space-y-3 p-4 w-full items-center bg-white rounded-lg drop-shadow">
            <div className="flex flex-row w-full justify-between items-start">
              <div className="flex flex-row space-x-3 w-full justify-start items-center">
                <AvatarImage fill="#679F38" className="w-28 h-28"/>
                <p className="text-2xl font-bold text-blue">{name}</p>
              </div>
              <CloseSvg className="w-8 h-8 cursor-pointer" fill="#0388B4" onClick={() => navigate("/admin/printing_history")}/>
            </div>
            <div className="flex flex-col w-full justify-start space-y-2">
              <p className="text-xl font-bold text-black">Student Id</p>
              <text className="bg-gray rounded-lg text-gray-dark font-normal px-3 py-[10px] w-full justify-start text-base">
                {id}
              </text>
            </div>
            
            <div className="flex flex-col w-full justify-start space-y-2">
              <p className="text-xl font-bold text-black">Email</p>
              <text className="bg-gray rounded-lg text-gray-dark font-normal px-3 py-[10px] w-full justify-start text-base">
                {email}
              </text>
            </div>
            
            <div className="flex flex-col w-full justify-start space-y-2">
              <p className="text-xl font-bold text-black">Falculty</p>
              <text className="bg-gray rounded-lg text-gray-dark font-normal px-3 py-[10px] w-full justify-start text-base">
                {falculty}
              </text>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center p-6 w-full bg-white rounded-lg drop-shadow" >
            <PrinterSvg className="w-20 h-20" fill="#0388B4" />
            <div className="flex flex-col space-y-[6px] items-end">
              <p className="text-xl font-bold text-blue">Number of A4 left</p>
              <p className="text-3xl font-bold text-black">{numberOfA4}</p>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center p-6 w-full bg-white rounded-lg drop-shadow" >
            <div className="flex flex-col space-y-[6px] items-start">
              <p className="text-xl font-bold text-blue">Number of printed documents</p>
              <p className="text-3xl font-bold text-black">{numberOfPrinted}</p>
            </div>
            <BookSvg className="w-20 h-20" fill="#0388B4" />
          </div>
        </div>

        <div className="flex flex-col space-y-6 items-start h-[740px] flex-nowrap overflow-y-scroll w-[58%] p-4 bg-white rounded-lg drop-shadow">
          <p className="text-2xl font-bold text-blue">Printing History</p>
          <PrintingHistoryItem printTime="20:16PM 13/10/2024" docName="Capstone_Project_Autumn_2023.pdf"
                                page="5" place="B4-01" copies="5" />
          <PrintingHistoryItem printTime="20:16PM 13/10/2024" docName="Capstone_Project_Autumn_2023.pdf"
                                page="5" place="B4-01" copies="5" />
          <PrintingHistoryItem printTime="20:16PM 13/10/2024" docName="Capstone_Project_Autumn_2023.pdf"
                                page="5" place="B4-01" copies="5" />
          <PrintingHistoryItem printTime="20:16PM 13/10/2024" docName="Capstone_Project_Autumn_2023.pdf"
                                page="5" place="B4-01" copies="5" />
          <PrintingHistoryItem printTime="20:16PM 13/10/2024" docName="Capstone_Project_Autumn_2023.pdf"
                                page="5" place="B4-01" copies="5" />
          <PrintingHistoryItem printTime="20:16PM 13/10/2024" docName="Capstone_Project_Autumn_2023.pdf"
                                page="5" place="B4-01" copies="5" />
              
          <PrintingHistoryItem printTime="20:16PM 13/10/2024" docName="Capstone_Project_Autumn_2023.pdf"
                                page="5" place="B4-01" copies="5" />
          <PrintingHistoryItem printTime="20:16PM 13/10/2024" docName="Capstone_Project_Autumn_2023.pdf"
                                page="5" place="B4-01" copies="5" />
                                    
              
        </div>
      </div>
    </div>
  );
};

export default AdminPersonalInformationPage;