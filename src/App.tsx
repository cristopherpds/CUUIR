import React, { useState } from "react";
import { Route, BrowserRouter, Routes, RouteProps } from "react-router-dom";
import Home from "./components/Home";
import PageNotFound from "./components/404Page";
import WorkInProgressModal from "./components/WorkInProgressModal";

const App: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(true);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Define la interfaz específica para el componente WorkInProgressModal
  interface WorkInProgressModalElement {
    onClose: () => void;
  }

  const ModalRoute: React.FC<RouteProps & { element: React.ReactElement<WorkInProgressModalElement> }> = ({ element }) => {
    return (
      <>
        {showModal && <WorkInProgressModal onClose={handleCloseModal} />}
        {React.cloneElement(element, { onClose: handleCloseModal })}
      </>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ModalRoute element={<Home />} />} />
        <Route path="/home" element={<ModalRoute element={<Home />} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
