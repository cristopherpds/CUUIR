import React from "react";

interface WorkInProgressModalProps {
  onClose: () => void;
}

const WorkInProgressModal: React.FC<WorkInProgressModalProps> = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-opacity-70 bg-gray-900 flex items-center justify-center">
      <div className="bg-blue-900 p-8 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Work in Progress</h2>
        <p>Esta aplicación está actualmente en desarrollo. <br />
          Esta aplicacion aun no tiene los <br /> datos actualizados para <br /> hacer los calculos necesarios.
        </p>
        <img src="https://media.tenor.com/12DuAMmK3dwAAAAM/sofakingdoge.gif" alt="Trabajo en Progreso" />
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default WorkInProgressModal;


