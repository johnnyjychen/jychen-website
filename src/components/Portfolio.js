import React, { useState } from 'react';
import '../styles/App.css';
import t1d from '../images/portfolio/t1d.jpg';
import parking from '../images/portfolio/parking.png';
import focussphere from '../images/portfolio/focussphere.png';
import kiss from '../images/portfolio/kiss.png';
import ss_logo from '../images/portfolio/ss-logo.png';
import ss_hifi from '../images/portfolio/ss-hifi.png';
import water from '../images/portfolio/water.jpg';
import green from '../images/portfolio/green.jpg';

// The projects are stored in an array called projects
const Portfolio = ({ setCurrentPage }) => {
  const projects = [
    { id: 1, year: 2025, img: t1d, name: 'T1D Health Data Tracking App', type: 'UX Research & Design', description: 'Description of T1D Design.' },
    { id: 2, year: 2025, img: parking, name: 'OpenSpot (Parking App)', type: 'UX Research & Design', description: 'Description of Parking app.' },
    { id: 3, year: 2023, img: focussphere, name: 'FocusSphere (Task Management App)', type: 'UX Research & Design', description: 'Description of FocusSphere.' },
    { id: 4, year: 2024, img: ss_logo, name: 'SteadySync (Logo Design)', type: 'UI Design', description: 'Description of SteadySync Logo Design.' },
    { id: 5, year: 2024, img: ss_hifi, name: 'SteadySync (High-Fi Prototyping)', type: 'UI Design', description: 'Description of SteadySync High-Fi Prototyping.' },
    { id: 6, year: 2024, img: kiss, name: 'KISS (Sexual Health Awareness)', type: 'UX Research', description: 'Description of KISS UX Research.' },
    { id: 7, year: 2023, img: water, name: 'Aging Water Infrastructures', type: 'Qualitative Research', description: 'Description of Aging Water Infrastructures.' },
    { id: 8, year: 2025, img: green, name: 'Sustainability Career and Job Satisfaction', type: 'Quantitative Research', description: 'Description of Quantitative Research.' },
  ];

  // Used useState to store the current values for year and type filters
  const [filters, setFilters] = useState({ year: '', type: '' });

  // When the user types in the year or type fields, it updates the filters state to match what the user typed
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const filteredProjects = projects.filter((project) => {
    const matchYear =
      filters.year.trim() === '' ||
      project.year.toString().includes(filters.year.trim());

    const matchType =
      filters.type.trim() === '' ||
      project.type.toLowerCase().includes(filters.type.trim().toLowerCase());

    return matchYear && matchType;
  });

  const getProjectTypeClass = (type) => {
    const lowerType = type.toLowerCase();
    if (lowerType.includes('ux research & design')) {
      return 'ux-research-design-type';
    } else if (lowerType.includes('ux research')) {
      return 'ux-research-type';
    } else if (lowerType.includes('ui design')) {
      return 'ui-design-type';
    } else if (lowerType.includes('qualitative research')) {
      return 'qualitative-research-type';
    } else if (lowerType.includes('quantitative research')) {
      return 'quantitative-research-type';
    } else {
      return '';
    }
  };

  const handleProjectClick = (id) => {
    switch (id) {
      case 1:
        setCurrentPage('t1design');
        break;
      case 2:
        setCurrentPage('parking');
        break;
      case 3:
        setCurrentPage('focussphere');
        break;
      case 4:
        setCurrentPage('steadysynclogo');
        break;
      case 5:
        setCurrentPage('steadysynchighfi');
        break;
      case 6:
        setCurrentPage('kiss');
        break;
      case 7:
        setCurrentPage('water');
        break;
      case 8:
        setCurrentPage('greenjob');
        break;
      default:
        setCurrentPage('portfolio');
    }
  };

  return (
    <div className="portfolio-container">
      <h1>My Projects</h1>

      <div className="filter-container">
        <span className="filter-label">Filters:</span>
        <span className="filter-label">Year:</span>
        <input
          name="year"
          value={filters.year}
          onChange={handleFilterChange}
          className="filter-input"
        />
        <span className="filter-label">Type:</span>
        <input
          name="type"
          value={filters.type}
          onChange={handleFilterChange}
          className="filter-input"
        />
      </div>

      {filteredProjects.length > 0 ? (
        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div
              className="project-card"
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
            >
              <img src={project.img} alt={project.name} />
              <span className={`project-type ${getProjectTypeClass(project.type)}`}>{project.type}</span>
              <h2 className="card-header">{project.name}</h2>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-results-message">Sorry, there are no matching projects.</p>
      )}
    </div>
  );
};

export default Portfolio;
