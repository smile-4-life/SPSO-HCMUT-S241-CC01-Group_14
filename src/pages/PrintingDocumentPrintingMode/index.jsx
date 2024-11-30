import React, { useState } from "react";
import Header from "../../components/Header";
import WaitingItem from "../../components/WaitingItem";
import { formatDateTime } from "../../utils/functions"

const PrintDocumentPage = () => {
  const [selectedPageRange, setSelectedPageRange] = useState([2, 5]);
  const [selectedPageSize, setSelectedPageSize] = useState("A4");
  const [selectedCopies, setSelectedCopies] = useState(1);
  const [selectedPrinter, setSelectedPrinter] = useState("B4-01");

  const handlePrint = () => {
    console.log("Printing with settings:", {
      pageRange: selectedPageRange,
      pageSize: selectedPageSize,
      copies: selectedCopies,
      printer: selectedPrinter,
    });
  };

  return (
    <div className="flex flex-col space-y-5 bg-gray-100 p-6 w-full overflow-y-auto max-h-screen h-screen">
      {/* Header */}
      <Header pageName="Print Document" description="Uploaded document for printing."/>
      {/* Main Content */}
      <div className="flex flex-1 flex-row space-x-4 p-4 overflow-y-auto">
        {/* File Preview Section */}
        <div className="flex flex-col w-3/5 bg-white p-4 rounded-md shadow-md">
          <h2 className="font-bold text-lg">Xem trước tài liệu</h2>
          <img
            src="D:\AssCNPM\SPSO-HCMUT-S241-CC01-Group_14\src\assets\images\PDF_Viewing.png" // Replace with actual PNG file path
            alt="Document preview"
            className="h-full w-full mt-4 rounded-md"
          />
        </div>

        {/* File Attributes and Printing Details */}
        <div className="flex flex-col w-2/5 space-y-4">
          {/* File Attributes */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-blue font-bold text-xl">File Atrributes</h2>
            <p className="font-normal text-gray-dark text-sm">File name: Capstone_Project_Autumn_2023.pdf</p>
            <p className="font-normal text-gray-dark text-sm">Size: 40.2 KB</p>
            <p className="font-normal text-gray-dark text-sm">Number of Pages: 6</p>
          </div>

          {/* Printing Info */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="font-bold text-lg">Thông tin in</h2>
            <div className="mt-4 space-y-4">
              {/* Page Range */}
              <div>
                <label className="font-medium">Số mặt in:</label>
                <div className="flex items-center mt-2 space-x-2">
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
              <div>
                <label className="font-medium">Cỡ trang:</label>
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
                <label className="font-medium">Số bản:</label>
                <input
                  type="number"
                  value={selectedCopies}
                  onChange={(e) => setSelectedCopies(Number(e.target.value))}
                  className="w-16 p-1 border rounded-md mt-2"
                  min={1}
                />
              </div>
            </div>
          </div>

          {/* Printer Selection */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="font-bold text-lg">Chọn máy in</h2>
            <div className="grid grid-cols-3 gap-2 mt-4">
              {["B4-01", "B4-02", "B4-03", "B4-04", "B4-05"].map((printer) => (
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