import empathy from '../images/research/research-empathy.jpg';
import curiosity from '../images/research/research-curiosity.jpg';
import politeness from '../images/research/research-politeness.jpg';
import t1d from '../images/research/research-t1d.jpg';

const Research = () => {
    return (
        <div className="project-container research-page">
            <h1>Research</h1>

            <div className="project-section">
                <h2>Empathic Communication in Conversational Agents</h2>

                <div className="research-row">
                    <div className="research-icon">
                        <img src={empathy} alt="Empathy" />
                    </div>
                    <div className="research-text">
                        <p>
                            Empathy plays a critical role in healthcare communication for older adults and can be expressed through two distinct strategies: affective empathy, which responds to users' emotions, and cognitive empathy, which focuses on understanding users' perspectives.
                            This line of research investigates how these strategies shape older adults' perceptions of healthcare conversational agents, such as perceived empathy, trust, and personality. 
                        </p>
                    </div>
                </div>

                <h3>Related Publications</h3>
                <ul className='research-pub'>
                    <li>
                        (CHI 2026).
                        <span className="publication-title"> Who Needs What? The Interaction Between Empathy Communication and Trait Empathy in a Home-Based Virtual Healthcare Robotic Agent for Older Adults. </span>
                        [<a href='https://doi.org/10.1145/3772363.3798526' target="_blank">doi</a>] [<a href='https://dl.acm.org/doi/pdf/10.1145/3772363.3798526' target="_blank">pdf</a>]
                        <br />
                        Authors: <span className='highlight-text'>Jiongyu Chen</span>, Camille Chalifoux, Na Du, Qiaoning Zhang.
                    </li>

                    <li>
                        (HFES 2026).
                        <span className="publication-title"> "I Feel You" vs. "I Understand You": How Distinct Empathic Strategies Shape Robot Personality and Trust for Older Adults. </span>
                        [<a href='' target="_blank">doi</a>] [<a href='' target="_blank">pdf</a>]
                        <br />
                        Authors: <span className='highlight-text'>Jiongyu Chen</span>, Qiaoning Zhang.
                    </li>
                </ul>
            </div>

            <div className="project-section">
                <h2>Politeness Strategies and Face-Threatening Behaviors</h2>

                <div className="research-row">
                    <div className="research-icon">
                        <img src={politeness} alt="Politeness" />
                    </div>
                    <div className="research-text">
                        <p>
                            Interruptions are common face-threatening behaviors in human-agent interactions with older adults, especially when agents proactively provide information or deliver reminders.
                            Drawing on Brown and Levinson's politeness theory, this line of research examines how different politeness strategies, including bald on-record, positive politeness, negative politeness, and off-record strategies, shape older adults' perceptions and behavioral responses to system-initiated verbal interruptions from robots and voice assistants.
                        </p>
                    </div>
                </div>

                <h3>Related Publications</h3>
                <ul className='research-pub'>
                    <li>
                        (Under Review at IJHCI 2026).
                        <span className="publication-title"> Title temporarily withheld for review. </span>
                        {/* [<a href='' target="_blank">doi</a>] [<a href='' target="_blank">pdf</a>] */}
                        <br />
                        Authors: <span className='highlight-text'>Jiongyu Chen</span>, Qiaoning Zhang.
                    </li>
                </ul>
            </div>

            <div className="project-section">
                <h2>Collaborative Health Tracking for Children and Parents</h2>

                <div className="research-row">
                    <div className="research-icon">
                        <img src={t1d} alt="Type 1 Diabetes" />
                    </div>
                    <div className="research-text">
                        <p>
                            Children and parents often have different needs and preferences when using health-tracking technologies, creating challenges for the design of collaborative health-tracking systems.
                            This line of research examines how children and parents track health data, drawing on prior work from 2010 to 2024 as well as co-design workshops with children with Type 1 diabetes and their parents.
                            Together, this work aims to inform the design of family-centered health-tracking technologies that better support children's health management.
                        </p>
                    </div>
                </div>

                <h3>Related Publications</h3>
                <ul className='research-pub'>
                    <li>
                        (Under Review at IJHCI 2026).
                        <span className="publication-title"> Title temporarily withheld for review. </span>
                        {/* [<a href='' target="_blank">doi</a>] [<a href='' target="_blank">pdf</a>] */}
                        <br />
                        Authors: Yoon Jeong Cha, <span className="highlight-text">Jiongyu Chen</span>, Melissa Wang, Allison Liu, Hanning Li, Joyce Lee, Mark W. Newman, Sun Young Park.
                    </li>

                    <li>
                        (CHI 2025).
                        <span className="publication-title"> Collaborative Health-Tracking Technologies for Children and Parents: A Review of Current Studies and Directions for Future Research. </span>
                        [<a href='https://doi.org/10.1145/3772363.3798526' target="_blank">doi</a>] [<a href='https://dl.acm.org/doi/pdf/10.1145/3706598.3713596' target="_blank">pdf</a>]
                        <br />
                        Authors: Yoon Jeong Cha, <span className='highlight-text'>Jiongyu Chen</span>, Yasemin Gunal, Qiying Zhu, Mark W. Newman, Sun Young Park.
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Research;
