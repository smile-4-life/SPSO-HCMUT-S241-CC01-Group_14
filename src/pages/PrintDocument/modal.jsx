import React from "react"

const ConfirmModal = ({closeModal, confimMessage, isDelete = false, onConfirmClick}) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">Confirm {isDelete && "Deletion"}</h2>
            <p className="text-gray-700 mb-6">
                {confimMessage}
                {/* Are you sure you want to delete this item? This action cannot be undone. */}
            </p>
            <div className="flex justify-end space-x-4">
                {/* Cancel Button */}
                <button
                onClick={closeModal}
                className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
                >
                Cancel
                </button>
                {isDelete ?
                <button
                onClick={onConfirmClick}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                >
                Delete
                </button> :
                <button
                onClick={onConfirmClick}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                >
                Confirm
                </button>
                }
            </div>
            </div>
        </div>
    )
}

export default ConfirmModal;