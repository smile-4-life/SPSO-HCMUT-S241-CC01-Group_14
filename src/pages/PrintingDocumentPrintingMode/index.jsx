import React, { useState } from "react";
import Header from "../../components/Header";
import PDFViewing from "../../assets/images/PDF_Viewing.png"
import PDFFile from "../../assets/images/W5_RelationalAlgebra.pdf"
import WaitingItem from "../../components/WaitingItem";
import { formatDateTime } from "../../utils/functions"

const PrintDocumentPage = () => {
  const [selectedPageRange, setSelectedPageRange] = useState([2, 5]);
  const [selectedPageSize, setSelectedPageSize] = useState("A4");
  const [ChooseSide, setChooseSide] = useState("1")
  const [selectedCopies, setSelectedCopies] = useState(1);
  const [selectedBuilding, setSelectedBuilding] = useState("");
  const [selectedPrinter, setSelectedPrinter] = useState("");
  const buildingToPrinterMapping = {
    C04: ["C4-01", "C4-02", "C4-03", "C4-04", "C4-05"],
    C05: ["B5-01", "B5-02", "B5-03"],
    C06: ["B6-01", "B6-02"],
    A04: ["A4-01", "A4-02"],
    B04: ["B4-01", "B4-02", "B4-03", "B4-04", "B4-05"],
  };
  const filteredPrinters = buildingToPrinterMapping[selectedBuilding] || [];
  const handlePrint = () => {
    console.log("Printing with settings:", {
      pageRange: selectedPageRange,
      pageSize: selectedPageSize,
      copies: selectedCopies,
      printer: selectedPrinter,
    });
  };

  return (
    <div className="flex flex-col space-y-5 bg-gray-100 p-6 w-full overflow-y-auto h-screen max-h-screen ">
      {/* Header */}
      <Header pageName="Print Document" description="Uploaded document for printing."/>
      {/* Main Content */}
      <div className="flex h-full space-x-4 rounded-lg justify-start overflow">
        {/* File Preview Section */}
        <div className="flex flex-col w-3/5 bg-white p-4 rounded-md shadow-md overflow-hidden relative">
          <h2 className="text-blue font-bold text-xl ">Xem trước tài liệu</h2>
          <p className="font-bold text-black text-sm">Capstone_Project_Autumn_2023.pdf</p>
          <div className="relative w-full h-[80vh] overflow-auto bg-gray-100">
            <embed
              src={PDFFile}
              alt="Document preview"
              className="h-full w-full mt-4 rounded-md object-contain"
            />
          </div>
        </div>

        {/* File Attributes and Printing Details */}
        <div className="flex flex-col gap-2 h-[100vh] w-2/5 h-full space-y-2">
          {/* File Attributes */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-blue font-bold text-xl">File Attributes</h2>
            <p className="font-bold text-black text-sm"><span>File name:</span> <span className="font-normal text-gray-dark text-sm">Capstone_Project_Autumn_2023.pdf</span></p>
            <p className="font-bold text-black text-sm"><span>Size:</span> <span className="font-normal text-gray-dark text-sm">40.2 KB</span></p>
            <p className="font-bold text-black text-sm"><span>Number of Pages:</span> <span className="font-normal text-gray-dark text-sm">6</span></p>
          </div>

          {/* Printing Info */}
          <div className="flex flex-col gap-2 bg-white p-4 rounded-md shadow-md">
            <h2 className="text-blue font-bold text-xl ">Thông tin in</h2>
              {/* 1 page or both side */}
              <div className="flex items-center space-x-2">
                <h2 className="font-bold text-lg">Số mặt in:</h2>
                <span></span>
                <div className="flex items-center mt-2 space-x-4">
                  <button
                    className={`px-4 py-2 rounded-md ${
                      ChooseSide === "1"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                    onClick={() => setChooseSide("1")}
                  >
                    1
                  </button>
                  <button
                    className={`px-4 py-2 rounded-md ${
                      ChooseSide === "2"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                    onClick={() => setChooseSide("2")}
                  >
                    2
                  </button>
                </div>
              </div>
              {/* Print From */}
              <div className="flex items-center space-x-2">
                <h2 className="font-bold text-lg">In từ:</h2>
                <span></span>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    value={selectedPageRange[0]}
                    onChange={(e) => setSelectedPageRange([e.target.value, selectedPageRange[1]])}
                    className="w-16 p-1 border rounded-md"
                  />
                  <span>-</span>
                  <input
                    type="number"
                    value={selectedPageRange[1]}
                    onChange={(e) => setSelectedPageRange([selectedPageRange[0], e.target.value])}
                    className="w-16 p-1 border rounded-md"
                  />
                </div>
              </div>
              {/* Page Size */}
              <div className="flex items-center space-x-2">
                <h2 className="font-bold text-lg">Cỡ trang in:</h2>
                <span>  </span>
                <div className="flex items-center mt-2 space-x-4">
                  <button
                    className={`px-4 py-2 rounded-md ${
                      selectedPageSize === "A3"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                    onClick={() => setSelectedPageSize("A3")}
                  >
                    A3
                  </button> 
                  
                  <button
                    className={`px-4 py-2 rounded-md ${
                      selectedPageSize === "A4"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                    onClick={() => setSelectedPageSize("A4")}
                  >
                    A4
                  </button>
                </div>
              </div>

              {/* Copies */}
              <div>
                <label className="font-bold text-lg ">Số bản:</label>
                <input
                  type="number"
                  value={selectedCopies}
                  onChange={(e) => setSelectedCopies(Number(e.target.value))}
                  className="w-16 p-1 border rounded-md ml-6"
                  min={1}
                />
              </div>
            </div>
            {/* Printer Selection */}
            <div className="bg-white p-4 rounded-md shadow-md">
              <h2 className="text-blue font-bold text-xl ">Chọn máy in</h2>
              <div className="flex items-center space-x-2">
                <h2 className="font-bold text-lg">Chọn khu vực</h2>
                <span></span>
                <select
                  value={selectedBuilding}
                  onChange={(e) => setSelectedBuilding(e.target.value)}
                  className="w-48 p-1 border rounded-md"
                >
                  {Object.keys(buildingToPrinterMapping).map((building) => (
                    <option key={building} value={building}>
                      {building}
                    </option>
                  ))}
                </select>
              </div>
              {/* Buttons for Printer Selection */}
              <div className="grid grid-cols-3 gap-2 mt-4">
                  {filteredPrinters.map((printer) => (
                    <button
                      key={printer}
                      className={`px-4 py-2 text-sm rounded-md ${
                        selectedPrinter === printer
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-700"
                      }`}
                      onClick={() => setSelectedPrinter(printer)}
                    >
                      {printer}
                    </button>
                  ))}
                </div>
              {/* Display Selected Values */}
              <div className="mt-4">
                <p>
                  <strong>Selected Building:</strong> {selectedBuilding}
                </p>
                <p>
                  <strong>Selected Printer:</strong> {selectedPrinter}
                </p>
              </div>
              
              
              
            </div>

            {/* Print Action */}
            <div className="flex justify-between items-center">
              <p className="text-sm text-red-500">Số trang A4 cần để in: 4</p>
              <button
                className="px-6 py-2 bg-blue-500 text-white rounded-md shadow-md"
                onClick={handlePrint}
              >
                In tài liệu
              </button>
            </div>
          </div>
        </div>
          </div>

          
  );
};

export default PrintDocumentPage;
