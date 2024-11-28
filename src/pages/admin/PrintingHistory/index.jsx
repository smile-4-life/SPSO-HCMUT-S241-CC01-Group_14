import React, { useState } from "react";
import Header from "../../../components/Header";

import { ReactComponent as LookupSvg } from "../../../assets/svgs/lookup.svg";
import { ReactComponent as PersonalSvg } from "../../../assets/svgs/personal_icon.svg";
import { ReactComponent as PrinterSvg } from "../../../assets/svgs/printer.svg";
import { ReactComponent as BookSvg } from "../../../assets/svgs/book.svg";
import { ReactComponent as CopySvg } from "../../../assets/svgs/copy.svg";

import AdminPrintingHistoryItem from "../../../components/AdminPrintingHistoryItem";

const printedDocs = [
  { docName: "Capstone_Project_Autumn_2023.pdf", printTime: "20:16PM 13/10/2024", 
    studentName: "Tran Quoc Trung", copies: 10, place: "B1-01", studentId: "2252859" },
  { docName: "HK241-Assignment-2-Network-Design-For-A-Company.pdf", printTime: "20:16PM 13/10/2024", 
      studentName: "Tran Quoc Trung", copies: 10, place: "B1-01", studentId: "2252859" },
  { docName: "01-convexhull.pdf", printTime: "20:16PM 13/10/2024", 
      studentName: "Tran Quoc Hieu", copies: 1, place: "B1-03", studentId: "2252217" },
  { docName: "09_Ch9 Software Testing_ny.pdf", printTime: "20:16PM 13/10/2024", 
      studentName: "Truong Tuan Anh", copies: 10, place: "B1-01", studentId: "2252850" },
  { docName: "08_Ch8 Implementation.pdf", printTime: "20:16PM 13/10/2024", 
      studentName: "Tran Quoc Trung", copies: 10, place: "B1-01", studentId: "2252859" },
  { docName: "07_Ch7 Architectural Design.pdf", printTime: "20:16PM 13/10/2024", 
      studentName: "Tran Quoc Trung", copies: 7, place: "B1-01", studentId: "2252859" },
  { docName: "06_Ch6 System Modeling.pdf", printTime: "20:16PM 13/10/2024", 
      studentName: "Tran Quoc Hieu", copies: 10, place: "B1-01", studentId: "22522859" },
  { docName: "05_Ch5_Introduction_OOP.pdf", printTime: "20:16PM 13/10/2024", 
      studentName: "Tran Quoc Trung", copies: 10, place: "B1-01", studentId: "2252859" },
  { docName: "03_Ch3_4 Requirements Engineering.pdf", printTime: "20:16PM 13/10/2024", 
      studentName: "Tran Quoc Trung", copies: 10, place: "B1-01", studentId: "2252859" },
  { docName: "Capstone_Project_Autumn_2023.pdf", printTime: "20:16PM 13/10/2024", 
      studentName: "Tran Quoc Trung", copies: 10, place: "B1-01", studentId: "2252859" },    
]

const filterModeList = ["By area", "By printer", "All"];
const filterAreaList = ["B1", "A4", "B4", "C4", "C6", "B10"];
const filterPrinterList = ["B1-01", "B1-02", "B1-03", "B1-04", "B1-05", 
                            "A4-01", "A4-02", "A4-03", 
                            "B4-01", "B4-02", 
                            "C4-01", "C4-02", 
                            "C6-01", "B10-01"];
const filterTimeList = ["All", "Since 1 day", "Since 1 week", "Since 1 month", "Since 3 month", "Since 1 year"]

const PrintingHistoryPage = () => {
  const [filterMode, setFilterMode] = useState("By area");
  const [filterOptionList, setFilterOptionList] = useState(filterAreaList);
  const [filterOption, setFilterOption] = useState("B1");
  const [filterTime, setFilterTime] = useState("All");

  const [filterStudentId, setFilterStudentId] = useState("");

  const handleOnFilterMode = (event) => {
    setFilterMode(event.target.value);
    if (event.target.value === "By area") {
      setFilterOptionList(filterAreaList);
    } else if (event.target.value === "By printer") {
      setFilterOptionList(filterPrinterList);
    } else {
      setFilterOptionList([]);
    }
  }
  
  const handleOnFilterOption = (event) => {
    setFilterOption(event.target.value);
  }
  
  const handleOnFilterTime = (event) => {
    setFilterTime(event.target.value);
  }

  const handleStudentIdFilter = (event) => {
    setFilterStudentId(event.target.value);
  }

  return (
    <div className="flex flex-col space-y-5 bg-gray-100 p-6 w-full">
      <Header pageName="Printing History Page" description="Manage the printing history."/>
      
      <div className="flex flex-row space-x-6 w-full">
        <div className="flex flex-col space-y-6 w-[42%]">
          <div className="flex flex-col space-y-[10px] p-4 w-full items-start bg-white rounded-lg drop-shadow" >
            <p className="text-2xl font-bold text-blue">Display filter</p>
            <div className="flex flex-row items-center w-full space-x-2 border-b-[1px] border-gray pb-2">
              <text className="w-[30%] flex items-start text-base font-bold text-black">
                Printer filter:
              </text>
              <div className="w-[70%] flex items-start text-sm font-normal text-gray-dark space-x-2">
                <div className="w-[50%] flex flex-row items-center justify-between py-2 px-3 drop-shadow rounded-lg bg-white">
                  <select value={filterMode} onChange={handleOnFilterMode} className="w-full focus:outline-none">
                    {filterModeList.map((item, index) => (
                      <option className="w-full py-2 px-3" value={item}>{item}</option>
                    ))}
                  </select>
                </div>
                {
                  filterMode !== "All" &&
                  <div className="w-[50%] flex flex-row items-center justify-between py-2 px-3 drop-shadow rounded-lg bg-white">
                      <select value={filterOption} onChange={handleOnFilterOption} className="w-full focus:outline-none">
                      {filterOptionList.map((item, index) => (
                        <option className="w-full py-2 px-3" value={item}>{item}</option>
                      ))}
                    </select>
                  </div>
                }
              </div>
            </div>

            <div className="flex flex-row items-center w-full space-x-2 border-b-[1px] border-gray pb-2">
              <text className="w-[30%] flex items-start text-base font-bold text-black">
                Filter time:
              </text>
              <div className="w-[70%] flex items-start text-sm font-normal text-gray-dark space-x-2">
                <div className="w-[50%] flex flex-row items-center justify-between py-2 px-3 drop-shadow rounded-lg bg-white">
                      <select value={filterTime} onChange={handleOnFilterTime} className="w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                      {filterTimeList.map((item, index) => (
                        <option className="w-full py-2 px-3" value={item}>{item}</option>
                      ))}
                    </select>
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center w-full space-x-2 border-b-[1px] border-gray pb-2">
              <text className="w-[30%] flex items-start text-base font-bold text-black">
                Filter student Id:
              </text>
              <div className="w-[70%] flex flex-row items-center justify-between py-2 px-3 bg-white rounded-lg drop-shadow">
                <input
                  onChange={handleStudentIdFilter}
                  value={filterStudentId}
                  placeholder="Enter Student Id..."
                  className="text-sm font-normal text-gray-dark focus:outline-none"
                />
                <LookupSvg className="w-5 h-5" fill="#808080" />
              </div>
            </div>

          </div>

          <div className="flex flex-col space-y-5 p-4 w-full items-start bg-white drop-shadow rounded-lg">
            <p className="text-2xl font-bold text-blue">Usage statistic</p>
            
            <div className="flex flex-row justify-between items-center p-6 w-full bg-white rounded-lg drop-shadow" >
              <div className="flex flex-col space-y-1 items-start">
                <p className="text-lg font-semibold text-blue">Number of users</p>
                <p className="text-xl font-bold text-black">2357</p>
              </div>
              <PersonalSvg className="w-[60px] h-[60px]" fill="#0388B4" />
            </div>
            
            <div className="flex flex-row justify-between items-center p-6 w-full bg-white rounded-lg drop-shadow" >
              <BookSvg className="w-[60px] h-[60px]" fill="#0388B4" />
              <div className="flex flex-col space-y-1 items-end">
                <p className="text-lg font-semibold text-blue">Number of upload documents</p>
                <p className="text-xl font-bold text-black">1369</p>
              </div>
            </div>

            <div className="flex flex-row justify-between items-center p-6 w-full bg-white rounded-lg drop-shadow" >
              <div className="flex flex-col space-y-1 items-start">
                <p className="text-lg font-semibold text-blue">Number of users</p>
                <p className="text-xl font-bold text-black">2357</p>
              </div>
              <PrinterSvg className="w-[60px] h-[60px]" fill="#0388B4" />
            </div>
            
            <div className="flex flex-row justify-between items-center p-6 w-full bg-white rounded-lg drop-shadow" >
              <CopySvg className="w-[60px] h-[60px]" fill="#0388B4" />
              <div className="flex flex-col space-y-1 items-end">
                <p className="text-lg font-semibold text-blue">Number of users</p>
                <p className="text-xl font-bold text-black">2357</p>
              </div>
            </div>
          </div>
        
        </div>

        <div className="flex flex-col space-y-3 items-start h-[840px] flex-nowrap overflow-y-scroll w-[58%] p-3 bg-white rounded-lg drop-shadow">
          <p className="text-2xl font-bold text-blue">Printing History</p>
          {printedDocs.map((item, index) => (
            <AdminPrintingHistoryItem {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrintingHistoryPage;