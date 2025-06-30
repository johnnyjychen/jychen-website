import React from 'react';
import { FaLinkedin, FaEnvelope, FaGoogleScholar } from 'react-icons/fa6';
import myProfileImage from '../images/myprofile.png';
import '../styles/App.css';

const Home = ({ setCurrentPage }) => {
    return (
        <div className="home-container">
            <div className="home-image">
                <img src={myProfileImage} alt="Profile" />
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/johnny-yu-chen/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="icon linkedin" />
                    </a>

                    <a href="https://scholar.google.com/citations?user=M7GwXuQAAAAJ&hl=en" target="_blank">
                        <FaGoogleScholar className="icon scholar" />
                    </a>

                    <a href="mailto:johnnyuchen@gmail.com">
                        <FaEnvelope className="icon email" />
                    </a>
                </div>
            </div>

            <div className="home-intro">
                <h1>Hi, I'm Johnny Chen</h1>
                <h2 className='h2-title'>UX Researcher in Human-Computer Interaction & Human-Robot Interaction</h2>
                <p>
                    I am currently a Ph.D. student majoring in <span className='highlight-green'>Human Systems Engineering</span> at the Ira A. Fulton Schools of Engineering, Arizona State University, advised by <a href='https://qiaoning-zhang.github.io/' target="_blank">Dr. Qiaoning Carol Zhang</a>.
                    Previously, I earned my Master's degree in Information from the University of Michigan and
                    Bachelor's degrees in Psychological Sciences and Sociology from Purdue University.
                </p>

                <p>
                    My research interests include Human-Computer Interaction (HCI), Human-Robot Interaction (HRI), Applied Cognitive Science, and User Experience Design.
                    My primary work focuses on:
                </p>
                <ul>
                    <li className='indent'>1. <span className=' highlight-green'>Human-Robot Interaction</span>: Examining how different conversational styles used by robots influence people's perceptions during interactions.</li>
                    <li className='indent'>2. <span className=' highlight-green'>Child-Computer Interaction</span>: Investigating how children with Type 1 Diabetes and their parents can work collaboratively to track and manage the child's health data.</li>
                    <li className='indent'>3. <span className=' highlight-green'>Human-AI Co-Creation</span>: Exploring how AI-generated visuals may influence the creative brainstorming process for students who are proficient in digital art creation.</li>
                </ul>

                <p>
                    My goal is to take a holistic approach to improving user experiences across the research areas I am passionate about.
                    I seek to understand users' needs through both <span className='highlight-green'>qualitative</span> (e.g., interviews, workshops, thematic analysis) and <span className='highlight-green'>quantitative</span> (e.g., R, Stata, Python) methods.
                    Using these insights, I <span className='highlight-green'>design</span> (e.g., Figma, Adobe Creative Suite) and <span className='highlight-green'>develop</span> (e.g., React, Firebase) accessible systems that align with user requirements.
                </p>

                <p>
                    Thank you for browsing my website!
                    I am always excited to collaborate with researchers from diverse backgrounds who share similar research interests.
                    If you are interested in connecting, feel free to reach out to me via email (<span className='highlight-green'>johnnyuchen [at] gmail [dot] com</span>).
                </p>

                <div className='margin-top'>
                    <h2>Recent news <span className='h2-paragraph clickable' onClick={() => setCurrentPage('news')}> [View all] </span></h2>
                    <ul>
                        <li>[May, 2025] Graduated from UM and excited to start my next chapter at ASU this Fall!</li>
                        <li>[April, 2025] Our <a href='https://dl.acm.org/doi/full/10.1145/3706598.3713596' target="_blank">CHI 2025 paper</a> got accepted!</li>
                    </ul>
                </div>

                <div className='margin-top'>
                    <h2>Awards and Honors</h2>
                    <ul>
                        <li>[Feburary, 2025] Received Fulton Fellowship from Arizona State University</li>
                        <li>[March, 2023] Received Merit-Based UMSI Half Tuition Scholarship from the University of Michigan</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Home;