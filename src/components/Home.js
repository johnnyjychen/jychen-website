import { FaLinkedin, FaEnvelope, FaGoogleScholar } from 'react-icons/fa6';
import myProfileImage from '../images/myprofile.png';
import newsData from "./newsData";
import serviceData from "./serviceData";
import awardsData from "./awardsData";
import '../styles/App.css';

const Home = ({ setCurrentPage }) => {
    return (
        <div className="home-container">
            <div className="home-image">
                <img src={myProfileImage} alt="Profile" />
                <h1 className='intro-left'>Johnny Chen</h1>
                <h2 className='h2-title intro-left-nomargin'>UX Researcher in HCI & HRI</h2>
                <div className="intro-left">
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
                <p>
                    Hi, I go by Johnny, though I publish under the name Jiongyu Chen. I am currently a Ph.D. student majoring in <span className='highlight-green'>Human Systems Engineering</span> at the Ira A. Fulton Schools of Engineering, Arizona State University, advised by <a href='https://qiaoning-zhang.github.io/' target="_blank">Dr. Qiaoning Carol Zhang</a>.
                    Before ASU, I completed my Master's degree in Information at the University of Michigan and dual Bachelor's degrees in Psychological Sciences and Sociology at Purdue University.
                    Along the way, I have conducted research across several labs and disciplines, including with Dr. Sun Young Park, Dr. Kentaro Toyama, and Dr. X. Jessie Yang at UM, as well as Dr. Robert Proctor and Dr. Chelsea Song at Purdue.
                    These diverse experiences fuel my interest in bridging psychology, sociology, information, and engineering to better understand human factors and system design.
                </p>

                <p>
                    I work across <span className='highlight-green'>Human-Computer Interaction (HCI)</span>, <span className='highlight-green'>Human-Robot Interaction (HRI)</span>, and <span className='highlight-green'>Health Informatics</span>, to understand and improve how people interact with technology in their everyday lives. 
                    My current work focuses on supporting older adults' well-being with social robots, especially how different robot communication styles shape users' perceptions and behaviors in healthcare settings. 
                    Previously, I studied how children with Type 1 Diabetes (T1D) and their parents use mHealth tools to collaboratively track and manage health data, and how AI-based creative platforms can enhance digital artists' brainstorming in art-making processes.
                    Across these projects, I employed quantitative, qualitative, or mixed methods to understand users' experiences from multiple angles and translate those insights into accessible, user-centered designs and technologies.
                </p>

                {/* <p>
                    My research interests lie in Human-Computer Interaction (HCI), Human-Robot Interaction (HRI), Health Informatics, and User Experience Design.
                    My work centers on applying these areas to improve people's health and well-being.
                    Currently, I am focusing on how <span class='highlight-green'>social robots can support older adults' well-being</span> by examining how different communication styles used by robots influence their perceptions and behavioral responses in healthcare contexts.
                    In my previous work, I studied <span class='highlight-green'>mHealth technologies for children with Type 1 Diabetes (T1D)</span> and their parents, exploring how children with T1D and their parents collaboratively track and manage the children's health data.
                    In addition, I have explored how AI-based platforms can support digital artists' art creation by <span class='highlight-green'>integrating AI into their artistic brainstorming process</span>.
                </p>

                <p>
                    I take a holistic and evidence-driven approach to understanding and improving user experiences.
                    I combine <span class='highlight-green'>quantitative</span> techniques (e.g., Python, R) to analyze people's perceptions and behavioral patterns, with <span class='highlight-green'>qualitative</span> methods (e.g., interviews, workshops) to uncover their deeper needs and expectations.
                    Building on these insights, I use <span class='highlight-green'>prototyping and design</span> tools (e.g., Figma, Adobe Creative Suite) and <span class='highlight-green'>development</span> frameworks (e.g., React, Firebase) to create accessible and user-centered systems.
                </p> */}

                <p>
                    Thank you for browsing my website!
                    I am always excited to collaborate with researchers from diverse backgrounds who share similar research interests.
                    If you are interested in connecting, feel free to reach out to me via email.
                </p>

                <p>
                    Email: jchen429 [at] asu [dot] edu; johnnyuchen [at] gmail [dot] com
                    {/* Email: <span className='highlight-green'>jchen429 [at] asu [dot] edu</span>; <span className='highlight-green'>johnnyuchen [at] gmail [dot] com</span> */}
                </p>

                <div className="margin-top">
                    <h2>
                        News{" "}
                        <span
                            className="h2-paragraph clickable"
                            onClick={() => setCurrentPage("news")}
                        >
                            [View all]
                        </span>
                    </h2>
                    <ul>
                        {newsData.slice(0, 2).map((news, index) => (
                            <li key={index}>
                                [{news.date}] <span dangerouslySetInnerHTML={{ __html: news.content }} />
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="margin-top">
                    <h2>
                        Awards & Honors{" "}
                        <span
                            className="h2-paragraph clickable"
                            onClick={() => setCurrentPage("awards")}
                        >
                            [View all]
                        </span>
                    </h2>
                    <ul>
                        {awardsData.slice(0, 2).map((awards, index) => (
                            <li key={index}>
                                [{awards.date}] <span dangerouslySetInnerHTML={{ __html: awards.content }} />
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="margin-top">
                    <h2>
                        Services{" "}
                        <span
                            className="h2-paragraph clickable"
                            onClick={() => setCurrentPage("services")}
                        >
                            [View all]
                        </span>
                    </h2>

                    {serviceData.map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                            <h3>{section.title}</h3>
                            <ul>
                                {section.items.slice(0, 2).map((item, index) => (
                                    <li key={index}>
                                        [{item.date}]{" "}
                                        <span
                                            dangerouslySetInnerHTML={{ __html: item.content }}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Home;