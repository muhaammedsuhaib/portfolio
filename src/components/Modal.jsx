import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { handleWhatsAppClick } from "./whatsapp";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { IoLinkSharp } from "react-icons/io5";

const Modal = ({ onClose, project }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full p-6 relative">
        {/* Modal Content */}
        <img
          src={project["products-image-url"]}
          alt={project["products-name"]}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          {project["products-name"]}
        </h2>

        <p className="text-gray-600 ">{project["products-desc"]}</p>
        <a href={project["products-link"]} className=" text-gray-900">
          <IoLinkSharp className="text-2xl" />
        </a>
        <p className="text-lg font-semibold text-gray-900 mb-4">
          ₹{project["products-price"]}
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {project?.features?.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-end gap-4">
          <button
            className="bg-gradient-to-r from-black to-black hover:from-blue-900 hover:to-blue-600 text-white font-semibold py-2 px-5 rounded-full shadow-md transform hover:scale-105 transition-all"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="flex items-center gap-2 bg-gradient-to-r from-black to-black hover:from-blue-900 hover:to-blue-600 text-white font-semibold py-2 px-5 rounded-full shadow-md transform hover:scale-105 transition-all"
            onClick={() => handleWhatsAppClick(project["products-name"])}
          >
            <FaIndianRupeeSign />
            {project["products-price"]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
