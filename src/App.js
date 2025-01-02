import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import FocusSphere from './components/FocusSphere';
import SteadySyncLogo from './components/SteadySyncLogo';
import SteadySyncHighFi from './components/SteadySyncHighFi';
import Kiss from './components/Kiss';
import Water from './components/Water';
import './styles/App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'portfolio':
        return <Portfolio setCurrentPage={setCurrentPage} />;
      case 'focussphere':
        return <FocusSphere setCurrentPage={setCurrentPage} />;
      case 'steadysynclogo':
        return <SteadySyncLogo setCurrentPage={setCurrentPage} />;
      case 'steadysynchighfi':
        return <SteadySyncHighFi setCurrentPage={setCurrentPage} />;
      case 'kiss':
        return <Kiss setCurrentPage={setCurrentPage} />;
      case 'water':
        return <Water setCurrentPage={setCurrentPage} />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Navbar setCurrentPage={setCurrentPage} />
      <div className="main-content">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
