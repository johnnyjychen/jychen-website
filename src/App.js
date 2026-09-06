import { useState, useLayoutEffect, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import News from './components/News';
import Awards from './components/Awards';
import Services from './components/Services';
import Research from './components/Research';
import Publications from './components/Publications';
import Portfolio from './components/Portfolio';
import Parking from './components/Parking';
import FocusSphere from './components/FocusSphere';
import SteadySyncLogo from './components/SteadySyncLogo';
import SteadySyncHighFi from './components/SteadySyncHighFi';
import Kiss from './components/Kiss';
import Water from './components/Water';
import T1Design from './components/T1Design';
import CursorHalo from './components/CursorHalo';
import './styles/App.css';

const App = () => {

  const [currentPage, setCurrentPageState] = useState(() => {
    return window.history.state?.currentPage || 'home';
  });

  const setCurrentPage = (page) => {
    window.history.replaceState(
      { currentPage: page },
      '',
      window.location.href
    );

    setCurrentPageState(page);
  };

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    return () => {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);


    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;

      case 'news':
        return <News setCurrentPage={setCurrentPage} />;

      case 'awards':
        return <Awards setCurrentPage={setCurrentPage} />;

      case 'services':
        return <Services setCurrentPage={setCurrentPage} />;

      case 'portfolio':
        return <Portfolio setCurrentPage={setCurrentPage} />;

      case 'research':
        return <Research setCurrentPage={setCurrentPage} />;

      case 'publication':
        return <Publications setCurrentPage={setCurrentPage} />;

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

      case 't1design':
        return <T1Design setCurrentPage={setCurrentPage} />;

      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="app-container">
      <CursorHalo />
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

      <div
        id="maincontent"
        className="main-content"
      >
        {renderPage()}
      </div>

      <footer className="footer">
        <p>© Jiongyu Chen. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default App;