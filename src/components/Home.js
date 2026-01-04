import { FaLinkedin, FaEnvelope, FaGoogleScholar, FaGraduationCap } from 'react-icons/fa6';
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
                <p className='posting'>💼 I am seeking <span className='highlight-green'>HCI / HRI / Human Factors Engineering internships for Summer 2026</span> and would love to connect :&#41;</p>
            </div>

            <div className="home-intro">
                <p>
                    Hi, I go by Johnny, though I publish under the name Jiongyu Chen. I am currently a Ph.D. student majoring in <span className='highlight-green'>Human Systems Engineering</span> at Arizona State University's Ira A. Fulton Schools of Engineering, where I am advised by <a href='https://qiaoning-zhang.github.io/' target="_blank">Prof. Qiaoning Carol Zhang</a>.
                    My research lies at the intersection of <span className='highlight-green'>Human-Computer Interaction (HCI)</span>, <span className='highlight-green'>Human-Robot Interaction (HRI)</span>, and <span className='highlight-green'>Health Informatics</span>. Driven by a passion for improving everyday well-being through technology, my current work investigates how the communication styles of social robots shape user perceptions and behaviors in healthcare settings, particularly for older adults.
                </p>

                <p>
                    My interdisciplinary approach is rooted in a diverse academic background, bridging insights from psychology, sociology, information, and engineering.
                    During my Master's at the University of Michigan, I collaborated with Prof. Sun Young Park, Prof. Kentaro Toyama, and Prof. X. Jessie Yang on projects ranging from mHealth tools for family-based chronic disease management to AI-driven platforms for creative brainstorming.
                    This followed my foundational training at Purdue University, where I worked with Prof. Robert Proctor and Prof. Chelsea Song to explore human performance and psychological methods.
                </p>

                <p>
                    Across these diverse domains, I employ rigorous <span className='highlight-green'>mixed-methods research</span> to translate complex human insights into accessible, user-centered designs.
                    I am always eager to collaborate with researchers and practitioners who are passionate about the future of human-centered technology.
                    If you are interested in my work or potential collaborations, please feel free to reach out.
                </p>

                <p>
                    Email: jchen429 [at] asu [dot] edu; johnnyuchen [at] gmail [dot] com
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

                <div className="margin-top">
                    <h2>
                        Education
                    </h2>
                    <ul className="education">
                        <li>
                            <div className="edu-header">
                                <FaGraduationCap className="edu-icon" />
                                <span>
                                    Arizona State University, 2025 - 2029 (expected)
                                </span>
                            </div>
                            <div className="degree">Ph.D. in Human Systems Engineering</div>
                        </li>

                        <li>
                            <div className="edu-header">
                                <FaGraduationCap className="edu-icon" />
                                <span>
                                    University of Michigan, 2023 - 2025
                                </span>
                            </div>
                            <div className="degree">M.S. in Information</div>
                        </li>

                        <li>
                            <div className="edu-header">
                                <FaGraduationCap className="edu-icon" />
                                <span>
                                    Purdue University, 2019 - 2022
                                </span>
                            </div>
                            <div className="degree">
                                B.S. in Psychological Sciences and B.A. in Sociology
                            </div>
                        </li>
                    </ul>

                </div>

            </div>
        </div>
    );
}

export default Home;