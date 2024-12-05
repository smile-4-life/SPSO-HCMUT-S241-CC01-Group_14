import React, { useState } from "react";
import Header from "../../../components/Header";
import { TrashIcon } from '@heroicons/react/outline'; // Biểu tượng thùng rác

const SystemManagementPage = () => {
  const [maintenancePlans, setMaintenancePlans] = useState([]);
  const [newPlan, setNewPlan] = useState({
    title: "",
    startDate: "",
    duration: "",
    content: "",
  });

  // Hàm xử lý thêm kế hoạch bảo trì vào đầu danh sách
  const handleAddPlan = () => {
    if (
      newPlan.title.trim() !== "" &&
      newPlan.startDate.trim() !== "" &&
      newPlan.duration.trim() !== "" &&
      newPlan.content.trim() !== ""
    ) {
      setMaintenancePlans([newPlan, ...maintenancePlans]); // Thêm kế hoạch vào đầu danh sách
      setNewPlan({ title: "", startDate: "", duration: "", content: "" }); // Reset ô nhập
    }
  };

  // Hàm xử lý xóa kế hoạch bảo trì
  const handleDeletePlan = (index) => {
    const updatedPlans = maintenancePlans.filter((_, i) => i !== index);
    setMaintenancePlans(updatedPlans);
  };

  return (
    <div className="flex flex-col space-y-5 bg-gray-100 p-6 w-full">
      {/* Header */}
      <Header pageName="System Management Page" description="Configure, manage and track the printing system." />

      {/* Lịch bảo trì */}
      <div className="bg-white p-3 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-blue mb-2">Lịch bảo trì</h2>
        <ul className="space-y-1 overflow-y-auto max-h-80">
          {maintenancePlans.length === 0 ? (
            <li className="text-gray-500">Chưa có kế hoạch bảo trì nào.</li>
          ) : (
            maintenancePlans.map((plan, index) => (
              <li
                key={index}
                className="flex flex-col space-y-2 bg-gray-50 p-1 rounded-lg shadow-xl"
              >
                {/* Tiêu đề và thông tin */}
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-800">{plan.title}</span>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDeletePlan(index)}
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>

                {/* Thông tin "Bắt đầu từ" và "Thời gian bảo trì" */}
                <div className="flex justify-between text-xs">
                  <span><strong>Nội dung</strong></span>
                  <span className="w-20"></span>
                  <span className="w-20"></span>
                  <span className="w-20"></span>
                  <span className="w-20"></span>
                  <span className="w-20"></span>
                  <span className="italic text-gray-400">20:00PM </span> <span className="italic text-gray-400 inline"> {plan.startDate}</span> {/* Đặt lớp tailwind vào đây */}
                  <span><strong>Tạo bởi:</strong></span> <span className="text-gray-400 inline">Tran Quoc Trung</span>
                  <span><strong>Tình trạng:</strong></span> <span className="text-gray-400 inline"> Chưa bắt đầu</span>
                  <span><strong>  Thời gian bảo trì:</strong></span> <span className="text-gray-400 inline"> {plan.duration} giờ</span>
                </div>


                {/* Nội dung */}
                <div className="bg-gray-200 p-1 text-gray-700 text-sm">
                  {plan.content}
                </div>
              </li>
            ))
          )}
        </ul>
      </div>

      {/* Form Thêm Kế Hoạch Bảo Trì */}
      <div className="bg-white p-2 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-blue mb-2">Thêm kế hoạch bảo trì</h2>
        <div className="space-y-3">
          {/* Tiêu đề */}
          <div className="flex items-center space-x-2">
            <label className="w-3/7 text-gray-700"><strong>Tiêu đề:</strong></label>
            <span className="w-6"></span>
            <input
              type="text"
              value={newPlan.title}
              onChange={(e) => setNewPlan({ ...newPlan, title: e.target.value })}
              className="w-3/4 h-7 p-2 border border-gray-300 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập tiêu đề..."
            />
          </div>

          {/* Bắt đầu từ và Thời gian bảo trì */}
          <div className="flex space-x-1">
            <div className="flex items-center space-x-2 w-1/2">
              <label className="w-1/1 text-gray-700"><strong>Bắt đầu từ:</strong></label>
              <span className="w-0.05"></span>
              <input
                type="date"
                value={newPlan.startDate}
                onChange={(e) => setNewPlan({ ...newPlan, startDate: e.target.value })}
                className="w h-7 p-2 border border-gray-300 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <span className="w-10"></span>
            <div className="flex items-center space-x-2 w-1/2">
              <label className="w-1/1 text-gray-700"><strong>Thời gian bảo trì:</strong></label>
              <span className="w-5"></span>
              <input
                type="number"
                value={newPlan.duration}
                onChange={(e) => setNewPlan({ ...newPlan, duration: e.target.value })}
                className="w h-7 p-2 border border-gray-300 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Nội dung */}
          <div className="flex items-center space-x-2">
            <label className="w-1/1 text-gray-700"><strong>Nội dung:</strong></label>
            <span className="w-2.5"></span>
            <textarea
              value={newPlan.content}
              onChange={(e) => setNewPlan({ ...newPlan, content: e.target.value })}
              className="w-3/4 h-10 p-2 border border-gray-300 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="Nhập nội dung..."
            />
          </div>

          {/* Nút Thêm */}
          <div className="flex justify-end">
            <button
              onClick={handleAddPlan}
              className="px-6 py-1 bg-blue text-white rounded-md hover:bg-blue"
            >
              Tạo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemManagementPage;
