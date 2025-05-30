import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import News from './components/News';
import Publications from './components/Publications';
import Portfolio from './components/Portfolio';
import T1Design from './components/T1Design';
import Parking from './components/Parking';
import FocusSphere from './components/FocusSphere';
import SteadySyncLogo from './components/SteadySyncLogo';
import SteadySyncHighFi from './components/SteadySyncHighFi';
import Kiss from './components/Kiss';
import Water from './components/Water';
import GreenJob from './components/GreenJob';
import './styles/App.css';

const App = () => {

  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'news':
        return <News setCurrentPage={setCurrentPage} />;
      case 'portfolio':
        return <Portfolio setCurrentPage={setCurrentPage} />;
      case 'publication':
        return <Publications setCurrentPage={setCurrentPage} />;
      case 't1design':
        return <T1Design setCurrentPage={setCurrentPage} />;
      case 'parking':
        return <Parking setCurrentPage={setCurrentPage} />;
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
      case 'greenjob':
        return <GreenJob setCurrentPage={setCurrentPage} />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      <a
        href="#maincontent"
        className="skip-link"
        onClick={(e) => {
          e.preventDefault();
          const mainContent = document.getElementById('maincontent');
          if (mainContent) {
            mainContent.setAttribute('tabindex', '-1');
            mainContent.focus();
          }
        }}
      >
        Skip to Main Content
      </a>

      <Navbar setCurrentPage={setCurrentPage} />
      <div id="maincontent" className="main-content">
        {renderPage()}
      </div>

      <footer className="footer">
        <p>Last updated in 2025</p>
      </footer>
    </div>
  );
};

export default App;
