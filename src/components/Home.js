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
                            HCI / HRI / Human Factors Engineering internships for Summer 2027
                        </span>{' '}
                        and would love to connect :&#41;
                    </p>
                </div>

                <div className="home-intro">
                    <p>
                        Hi, I go by Johnny, though I publish under the name Jiongyu Chen. I am currently a <span className='highlight-text'>second-year Ph.D. student in Human Systems Engineering</span> at Arizona State University's Ira A. Fulton Schools of Engineering, where I am advised by <a href='https://qiaoning-zhang.github.io/' target="_blank" rel="noopener noreferrer">Dr. Qiaoning (Carol) Zhang</a>.
                    </p>

                    <p>
                        My research focuses on <span className='highlight-text'>communication-centered human-AI interaction</span>, particularly how conversational and robotic agents communicate with people, frame their contributions, adapt to interaction contexts, and shape user perceptions and behavioral responses. 
                        I am especially interested in designing AI systems that support <span className='highlight-text'>older adults in healthcare and everyday settings</span>, while also exploring broader questions related to AI assistants and automated systems where communication, coordination, and trust calibration are critical.
                    </p>

                    <p>
                        I use <span className='highlight-text'>mixed-methods approaches</span>, including online experiments, surveys, interviews, co-design, usability evaluation, statistical modeling, and qualitative analysis, to translate insights about human behavior into <span className='highlight-text'>design recommendations for trustworthy and user-centered AI systems</span>.
                    </p>

                    <p>
                        Before starting my Ph.D., I earned my M.S. in Information from the University of Michigan, where I worked on child-parent health technologies, AI-supported creativity tools, and human-AI interaction. I also hold a B.S. in Psychological Sciences and a B.A. in Sociology from Purdue University.
                    </p>

                    <p>
                        I am interested in collaborating on <span className='highlight-text'>human-centered AI systems</span> that require careful attention to <span className='highlight-text'>user trust, communication, and engagement</span>, especially systems that involve conversational agents, AI-mediated decision-making, or collaborative human-AI interaction.
                    </p>

                    <p>
                        <span className='highlight-text'>Contact:</span> jchen429 [at] asu [dot] edu | johnnyuchen [at] gmail [dot] com
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