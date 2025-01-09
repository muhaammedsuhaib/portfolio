import { FaLock } from "react-icons/fa";
import { getConfigData } from "../data/configReader";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useState } from "react";
import Modal from "./Modal";
import { IoLinkSharp } from "react-icons/io5";
import { handleWhatsAppClick } from "./whatsapp";

export default function Card() {
  const configData = getConfigData();
  const projects = configData.products;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const onClose = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  const onOpen = (project) => {
    setIsOpen(true);
    setSelectedProject(project);
  };

  return (
    <>
      <div className="p-6 bg-gray-50 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <img
                src={project["products-image-url"]}
                alt={project["products-name"]}
                className="w-full h-48 object-cover rounded-t-xl"
                onClick={() => onOpen(project)}
              />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  {" "}
                  <p className="text-gray-600 mb-4">
                    <span className="font-bold text-gray-900">
                      {project["products-name"]}
                    </span>
                    <a
                      href={project["products-link"]}
                      className="ml-5 text-gray-900"
                    >
                      <IoLinkSharp className="text-2xl" />
                    </a>
                  </p>
                  <button
                    className="flex items-center gap-2 bg-gradient-to-r from-black to-black hover:from-blue-900 hover:to-blue-600 text-white font-semibold py-2 px-5 rounded-full shadow-md transform hover:scale-105 transition-all"
                    onClick={() =>
                      handleWhatsAppClick(project["products-name"])
                    }
                  >
                    <FaIndianRupeeSign />
                    {project["products-price"]}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isOpen && selectedProject && (
        <Modal onClose={onClose} project={selectedProject} />
      )}
    </>
  );
}
