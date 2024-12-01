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
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Lịch bảo trì</h2>
        <ul className="space-y-3 overflow-y-auto max-h-60">
          {maintenancePlans.length === 0 ? (
            <li className="text-gray-500">Chưa có kế hoạch bảo trì nào.</li>
          ) : (
            maintenancePlans.map((plan, index) => (
              <li
                key={index}
                className="flex flex-col space-y-2 bg-gray-50 p-4 rounded-lg shadow-sm"
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
                <div className="flex space-x-4 text-gray-600 text-sm">
                  <span><strong>Bắt đầu từ:</strong> {plan.startDate}</span>
                  <span><strong>Thời gian bảo trì:</strong> {plan.duration} giờ</span>
                </div>

                {/* Nội dung */}
                <div className="bg-gray-100 p-2 rounded-md text-gray-700 text-sm">
                  {plan.content}
                </div>
              </li>
            ))
          )}
        </ul>
      </div>

      {/* Form Thêm Kế Hoạch Bảo Trì */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Thêm kế hoạch bảo trì</h2>
        <div className="space-y-3">
          {/* Tiêu đề */}
          <div className="flex items-center space-x-2">
            <label className="w-1/1 text-gray-700">Tiêu đề:</label>
            <input
              type="text"
              value={newPlan.title}
              onChange={(e) => setNewPlan({ ...newPlan, title: e.target.value })}
              className="w-3/4 p-1 border border-gray-300 rounded-md"
            />
          </div>

          {/* Bắt đầu từ và Thời gian bảo trì */}
          <div className="flex space-x-4">
            <div className="flex items-center space-x-2 w-1/2">
              <label className="w-1/1 text-gray-700">Bắt đầu từ:</label>
              <input
                type="text"
                value={newPlan.startDate}
                onChange={(e) => setNewPlan({ ...newPlan, startDate: e.target.value })}
                className="w p-1 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex items-center space-x-2 w-1/2">
              <label className="w-1/1 text-gray-700">Thời gian bảo trì:</label>
              <input
                type="number"
                value={newPlan.duration}
                onChange={(e) => setNewPlan({ ...newPlan, duration: e.target.value })}
                className="w p-1 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          {/* Nội dung */}
          <div className="flex items-center space-x-2">
            <label className="w-1/1 text-gray-700">Nội dung:</label>
            <textarea
              value={newPlan.content}
              onChange={(e) => setNewPlan({ ...newPlan, content: e.target.value })}
              className="w-3/4 p-1 border border-gray-300 rounded-md"
              rows="1"
            />
          </div>

          {/* Nút Thêm */}
          <div className="flex justify-end">
            <button
              onClick={handleAddPlan}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
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
