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
                        HCI / HRI / Human Factors Engineering internships for <span className='highlight-text'>Summer 2027
                        </span>{' '} and would love to connect :&#41;
                    </p>
                </div>

                <div className="home-intro">
                    <p>
                        Hi, I go by Johnny, though I publish under the name Jiongyu Chen. I am currently a <span className='highlight-text'>second-year Ph.D. student in Human Systems Engineering</span> at Arizona State University's Ira A. Fulton Schools of Engineering, where I am advised by <a href='https://qiaoning-zhang.github.io/' target="_blank" rel="noopener noreferrer">Dr. Qiaoning (Carol) Zhang</a>.
                    </p>

                    <p>
                        My research focuses on <span className='highlight-text'>communication-centered human-AI interaction</span>, especially how conversational agents and social robots communicate with people, respond to social and interaction contexts, and shape users' perceptions, trust, and behavior.
                        Much of my current work examines these questions with <span className='highlight-text'>older adults</span> in healthcare and everyday settings, while also exploring broader issues in AI assistants and collaborative systems where communication, coordination, and appropriate trust are central to the interaction.
                    </p>

                    <p>
                        I use <span className='highlight-text'>mixed-methods approaches</span>, including controlled experiments, surveys, interviews, co-design, field studies, statistical modeling, and qualitative analysis. My goal is to understand how people experience and respond to AI systems across different contexts and turn those findings into practical, evidence-based design guidance for technologies that are more trustworthy, empathic, supportive, and context-aware.
                    </p>
                    <p>
                        Before starting my Ph.D., I earned an M.S. in Information from the University of Michigan, where I worked on child-parent health technologies and human-AI interaction. I also hold a B.S. in Psychological Sciences and a B.A. in Sociology from Purdue University.
                    </p>

                    <p>
                        I am always happy to connect with people working on human-centered AI, conversational agents, social robotics, digital health, and AI for older adults. Feel free to reach out if you are interested in related research or collaboration.
                    </p>

                    <p>
                        Contact: jchen429 [at] asu [dot] edu | johnnyuchen [at] gmail [dot] com
                    </p>

                </div>
            </div>

            <div className="home-content">

                <div className="home-section-divider"></div>

                <div className="home-info-grid">

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

                </div>

                <div className="margin-top service-home">
                    <h2>
                        Services{" "}
                        <span
                            className="h2-paragraph clickable"
                            onClick={() => setCurrentPage("services")}
                        >
                            [View all]
                        </span>
                    </h2>

                    <div className="service-home-grid">
                        {serviceData.map((section, sectionIndex) => (
                            <div key={sectionIndex}>
                                <h3>{section.title}</h3>

                                <ul>
                                    {section.items.slice(0, 4).map((item, index) => (
                                        <li key={index}>
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: item.content
                                                }}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;
