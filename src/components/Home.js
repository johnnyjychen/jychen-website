import { FaLinkedin, FaEnvelope, FaGoogleScholar, FaGraduationCap } from 'react-icons/fa6';
import myProfileImage from '../images/myprofile.png';
import newsData from "./newsData";
import serviceData from "./serviceData";
import awardsData from "./awardsData";
import '../styles/App.css';

const Home = ({ setCurrentPage }) => {
    return (
        <div className="home-container">

            <div className="home-top">
                <div className="home-image">
                    <img src={myProfileImage} alt="Profile" />

                    <h1 className='intro-left'>Johnny Chen</h1>

                    <h2 className='h2-title intro-left-nomargin'>
                        UX Researcher in HCI & HRI
                    </h2>

                    <div className="intro-left">
                        <a
                            href="https://www.linkedin.com/in/johnny-yu-chen/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin className="icon linkedin" />
                        </a>

                        <a
                            href="https://scholar.google.com/citations?user=M7GwXuQAAAAJ&hl=en"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGoogleScholar className="icon scholar" />
                        </a>

                        <a href="mailto:johnnyuchen@gmail.com">
                            <FaEnvelope className="icon email" />
                        </a>
                    </div>

                    <p className='posting'>
                        💼 I am seeking{' '}
                        <span className='highlight-text'>
                            HCI / HRI / Human Factors Engineering internships for Summer 2026
                        </span>{' '}
                        and would love to connect :&#41;
                    </p>
                </div>

                <div className="home-intro">
                    <p>
                        Hi, I go by Johnny, though I publish under the name Jiongyu Chen. I am currently a first-year Ph.D. student in <span className='highlight-text'>Human Systems Engineering</span> at Arizona State University's Ira A. Fulton Schools of Engineering, where I am advised by <a href='https://qiaoning-zhang.github.io/' target="_blank" rel="noopener noreferrer">Dr. Qiaoning (Carol) Zhang</a>.
                    </p>

                    <p>
                        My research focuses on designing and evaluating <span className="highlight-text">human-centered AI systems</span>, especially conversational and robotic agents. 
                        I study how these systems communicate with users and how different <span className="highlight-text">communication strategies</span> shape user <span className="highlight-text">trust</span>, <span className="highlight-text">experiences</span>, and <span className="highlight-text">behavioral outcomes</span> across healthcare and everyday contexts.
                    </p>

                    <p>
                        My interdisciplinary background spans psychology, sociology, information, and engineering, allowing me to approach complex human-AI interaction problems from both theoretical and applied perspectives. 
                        Before starting my Ph.D., I earned my M.S. in Information (Specialization in UX Research and Design) from the University of Michigan, where I worked with Dr. Sun Young Park, Dr. X. Jessie Yang, and Dr. Kentaro Toyama on projects including health technologies for children and older adults and AI-supported creative systems. 
                        I previously completed my B.S. in Psychological Sciences and B.A. in Sociology at Purdue University, working with Dr. Robert Proctor and Dr. Q. Chelsea Song on human performance and experimental methods.
                    </p>

                    <p>
                        Across these experiences, I use <span className="highlight-text">mixed-methods approaches</span> to translate insights about human behavior into <span className="highlight-text">actionable design implications</span> for real-world systems.
                    </p>

                    <p>
                        I am particularly interested in collaborating on human-centered AI systems that require careful consideration of user trust, communication, and engagement.
                        If you are interested in my work or potential collaborations, feel free to reach out at jchen429 [at] asu [dot] edu or johnnyuchen [at] gmail [dot] com.
                    </p>

                </div>
            </div>

            <div className="home-content">

                <div className="home-section-divider"></div>

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
                        {newsData.slice(0, 4).map((news, index) => (
                            <li key={index}>
                                [{news.date}]{" "}
                                <span dangerouslySetInnerHTML={{ __html: news.content }} />
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
                        {awardsData.slice(0, 4).map((awards, index) => (
                            <li key={index}>
                                [{awards.date}]{" "}
                                <span dangerouslySetInnerHTML={{ __html: awards.content }} />
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
                                {section.items.slice(0, 4).map((item, index) => (
                                    <li key={index}>
                                        <span dangerouslySetInnerHTML={{ __html: item.content }} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* <div className="margin-top">
                    <h2>
                        Education
                    </h2>

                    <ul className="education">
                        <li>
                            <div className="edu-header">
                                <FaGraduationCap className="edu-icon" />
                                <span>
                                    Arizona State University, 2025 - 2029 &#40;expected&#41;
                                </span>
                            </div>
                            <div className="degree">
                                Ph.D. in Human Systems Engineering
                            </div>
                        </li>

                        <li>
                            <div className="edu-header">
                                <FaGraduationCap className="edu-icon" />
                                <span>
                                    University of Michigan, 2023 - 2025
                                </span>
                            </div>
                            <div className="degree">
                                M.S. in Information
                            </div>
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
                </div> */}
            </div>

        </div>
    );
}

export default Home;