import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import HeaderBar from "./components/HeaderBar1";

import PageChart from "./components/RHpage";
import PageGear  from "./components/DGpage";
import HumanResourcesForm from './components/HumanResourcesForm';
import Investissement from "./components/investissement";
import './App.css';

// importe tes pages...

const App = () => {
  const [currentPage, setCurrentPage] = useState("gear"); // page par défaut

  const renderPage = () => {
    switch (currentPage) {
      case "gear":
        return <PageGear />;
      case "chart":
        return (
    <>
      <PageChart /> {/* Your friend's part at the top */}

      <div className="form-row">
        <div className="half">
          <HumanResourcesForm />
        </div>
        <div className="half">
          <Investissement />
        </div>
      </div>
    </>
  );

     
      // ajoute d’autres pages ici
      default:
        return <div>Page non trouvée</div>;
    }
  };

  return (
    <div className="container">
      <Sidebar onChangePage={setCurrentPage} />
      <div className="main-section">
        <HeaderBar />
        <div className="main-content">
          {renderPage()}
        </div>
      </div>
    </div>
  );
};

export default App;
