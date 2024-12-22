import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

const SubmitCaseModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [progress, setProgress] = useState(15);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      {/* Modal Container */}
      <div className="bg-white rounded-lg shadow-lg w-full max-w-[95%] md:max-w-[60%] h-[90%] overflow-auto p-6">
        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-500">
            <span>0%</span>
            <span>{progress}%</span>
            <span>100%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div
              className="bg-orange-500 h-2 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Modal Title */}
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Enter your case details
        </h2>

        {/* Form Fields */}
        <form className="space-y-4">
          <div className="md:flex gap-4">
            {/* Case Title */}
            <div className="flex flex-col md:w-[80%] mb-4 md:mb-0">
              <label
                htmlFor="case-title"
                className="text-sm text-gray-600 mb-1"
              >
                Case Title
              </label>
              <input
                type="text"
                id="case-title"
                placeholder="Enter a brief title for the case"
                className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Case Type */}
            <div className="flex flex-col">
              <label htmlFor="case-type" className="text-sm text-gray-600 mb-1">
                Case Type
              </label>
              <select
                id="case-type"
                className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="civil">Civil Case</option>
                <option value="criminal">Criminal Case</option>
                <option value="family">Family Case</option>
              </select>
            </div>
          </div>

          {/* Case Description */}
          <div className="flex flex-col">
            <label
              htmlFor="case-description"
              className="text-sm text-gray-600 mb-1"
            >
              Case Description
            </label>
            <textarea
              id="case-description"
              placeholder="Enter a brief description for the case"
              rows={4}
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
            ></textarea>
          </div>

          {/* Attach Documents */}
          <div className="flex flex-col">
            <label
              htmlFor="attach-documents"
              className="text-sm text-gray-600 mb-1"
            >
              Attach Documents
            </label>
            <div className="border-dashed border-2 border-gray-300 rounded-md p-6 text-center text-gray-500">
              <FaCloudUploadAlt className="text-3xl mx-auto mb-2" />
              <p>Upload documents</p>
              <input
                type="file"
                id="attach-documents"
                className="hidden"
                multiple
              />
            </div>
          </div>
        </form>

        {/* Buttons */}
        <div className="flex justify-end mt-6 space-x-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300 transition"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => setProgress((prev) => Math.min(prev + 15, 100))}
            className="px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-600 transition"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmitCaseModal;
