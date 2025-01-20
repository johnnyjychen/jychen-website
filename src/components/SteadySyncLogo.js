import React from 'react';
import logo1 from '../images/logo/logo-1.png'
import logo2 from '../images/logo/logo-2.png'
import logo3 from '../images/logo/logo-3.png'
import logo4 from '../images/logo/logo-4.png'
import logo5 from '../images/logo/logo-5.png'
import logo6 from '../images/logo/logo-6.png'
import logo7 from '../images/logo/logo-7.png'
import logo8 from '../images/logo/logo-8.png'

const SteadySyncLogo = () => {
    return (
        <div className="project-container">
            <div className="project-section">
                <h1>SteadySync (Logo Design)</h1>
            </div>

            <div className="project-section">
                <h2>Project Information</h2>
                <ul>
                    <li><span className='highlight-green'>Overview</span>: In this project, I designed a logo for a hypothetical company named SteadySync, 
                    which primarily provides AI-driven insights and personalized notifications that support lifestyle improvement and a balanced work-life dynamic.
                    I explained the rationale behind my choices and the meanings of each element used in the logo.</li>
                    <li><span className='highlight-green'>Skills</span>: Adobe Illustrator, Adobe Photoshop, Gestalt Principles, Color Harmonies</li>
                    <li><span className='highlight-green'>Duration</span>: 11/2024</li>
                    <li><span className='highlight-green'>Type</span>: This is an individual project.</li>
                </ul>
            </div>

            <div className="project-section">
                <h2>Logotype</h2>
                <div>
                    <div className="image-column">
                        <img src={logo1} alt="Logotype" />
                    </div>
                </div>
            </div>

            <div className="project-section">
                <h2>Logotype - Layout Variations</h2>
                <div>
                    <div className="image-column">
                        <img src={logo2} alt="Logotype - Layout Variations" />
                    </div>
                </div>
            </div>

            <div className="project-section">
                <h2>Typeface</h2>
                <div>
                    <div className="image-column">
                        <img src={logo3} alt="Typeface" />
                    </div>
                </div>
            </div>

            <div className="project-section">
                <h2>Scalability</h2>
                <div>
                    <div className="image-column">
                        <img src={logo4} alt="Scalability" />
                    </div>
                </div>
            </div>

            <div className="project-section">
                <h2>Free Space</h2>
                <div>
                    <div className="image-column">
                        <img src={logo5} alt="Free Space" />
                    </div>
                </div>
            </div>

            <div className="project-section">
                <h2>Color Variation</h2>
                <div>
                    <div className="image-column">
                        <img src={logo6} alt="Color Variation" />
                    </div>
                </div>
            </div>

            <div className="project-section">
                <h2>Photography Assets</h2>
                <div>
                    <div className="image-column">
                        <img src={logo7} alt="Photography Assets" />
                    </div>
                </div>
            </div>

            <div className="project-section">
                <h2>Apparel</h2>
                <div>
                    <div className="image-column">
                        <img src={logo8} alt="Apparel" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SteadySyncLogo;
