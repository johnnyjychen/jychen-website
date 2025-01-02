import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import myProfileImage from '../images/myprofile.png';
import '../styles/App.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-image">
                <img src={myProfileImage} alt="Profile" />
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/johnny-yu-chen/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="icon linkedin" />
                    </a>
                    <a href="mailto:johnnyuchen@gmail.com">
                        <FaEnvelope className="icon email" />
                    </a>
                </div>
            </div>

            <div className="home-intro">
                <h1>Hello, I'm Johnny Chen</h1>
                <p>
                    I am currently pursuing my Master's degree in <span className='highlight-green'>Information</span> with a specialization in <span className='highlight-green'>UX Research and Design</span> at the University of Michigan, where I also serve as a graduate research assistant. 
                    My goal is to become a UX Researcher & Designer with expertise in both qualitative and quantitative methods.
                </p>
                <p>
                    My primary research interests lie in the fields of <span className='highlight-green'>Human-Computer Interaction, Health Informatics, Cognitive Science, and Learning Science</span>.
                    I am passionate about using mixed research methods to deeply understand users' needs and creating designs that align with those needs.
                </p>
                <p>
                    Beyond my academic and professional pursuits, I find joy in music and have a growing collection of albums that inspire me. 
                    I also love traveling with friends and bonding over movies or shows. 
                    Playing with cats and dogs is one of my favorite ways to unwind:&#41;
                </p>
                <p>
                    If you'd like to connect or collaborate, feel free to reach out to me via email.
                </p>


                <h2>Education</h2>
                <ul>
                    <li>M.S. in <span className='highlight-green'>Information</span>, University of Michigan-Ann Arbor, 2023-2025</li>
                    <li>B.S. in <span className='highlight-green'>Psychological Sciences</span>, Purdue University, 2019-2022</li>
                    <li>B.A. in <span className='highlight-green'>Sociology</span>, Purdue University, 2019-2022</li>
                </ul>

                <h2>Skills</h2>
                <ul>
                    <li><span className='highlight-green'>Technical Skills</span>: Stata, R, Python, HTML/CSS, JavaScript, React.js, Native React, SQL</li>
                    <li><span className='highlight-green'>Research Skills</span>: Qualitative Methods, Quantitative Methods</li>
                    <li><span className='highlight-green'>Design Skills</span>: Figma, Adobe Creative Suites, Wireframing, Low-Fidelity/High-Fidelity Prototyping</li>
                    <li><span className='highlight-green'>Soft Skills</span>: Communication, Teamwork</li>
                </ul>


            </div>
        </div>
    );
}

export default Home;
