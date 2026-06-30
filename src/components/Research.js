import verbal from '../images/research/research-verbal.jpg';
import t1d from '../images/research/research-t1d.jpg';

const Research = () => {
    return (
        <div className="project-container research-page">
            <h1>Research</h1>


            <div className="project-section">
                <h2>Verbal Communication Design for Older Adults in Robotic Agents</h2>

                <div className="research-row">
                    <div className="research-icon">
                        <img src={verbal} alt="Verbal Communication" />
                    </div>
                    <div className="research-text">
                        <p>
                            Healthcare interactions rely not only on information exchange but also on how information is communicated. This research investigates how verbal communication strategies, including politeness and empathy, influence older adults' perceptions of healthcare conversational agents.
                            By examining outcomes such as trust, perceived empathy, perceived personality, and intention to use, this work contributes to the design of conversational and robotic agents that better support the communication needs and preferences of older adults.
                        </p>
                    </div>
                </div>

                <h3>Related Publications</h3>
                <ul className='research-pub'>
                    <li>
                        (International Journal of Human-Computer Interaction, 2026).
                        <span className="publication-title"> Interrupting politely: Robot-initiated interruptions and politeness strategies in home healthcare interactions with older adults. </span>
                        {/* [<a href='#' target="_blank">doi</a>] [<a href='#' target="_blank">pdf</a>] */}
                        <br />
                        Authors: <span className='highlight-text'>Jiongyu Chen</span>, Qiaoning Zhang.
                    </li>
                    <li>
                        (HFES 2026).
                        <span className="publication-title"> "I feel you" vs. "I understand you": How distinct empathic strategies shape robot personality and trust for older adults. </span>
                        {/* [<a href='#' target="_blank">doi</a>] [<a href='#' target="_blank">pdf</a>] */}
                        <br />
                        Authors: <span className='highlight-text'>Jiongyu Chen</span>, Qiaoning Zhang.
                    </li>
                    <li>
                        (CHI EA 2026).
                        <span className="publication-title"> Who Needs What? The Interaction Between Empathy Communication and Trait Empathy in a Home-Based Virtual Healthcare Robotic Agent for Older Adults. </span>
                        [<a href='https://doi.org/10.1145/3772363.3798526' target="_blank">doi</a>] [<a href='https://dl.acm.org/doi/pdf/10.1145/3772363.3798526' target="_blank">pdf</a>]
                        <br />
                        Authors: <span className='highlight-text'>Jiongyu Chen</span>, Camille Chalifoux, Na Du, Qiaoning Zhang.
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
                            This line of research combines findings from a literature review of children's health-tracking research published between 2010 and 2024 and a co-design study involving children with Type 1 diabetes and their parents. 
                            Together, these studies provide insights for designing family-centered health-tracking technologies that better support children's health management.
                        </p>
                    </div>
                </div>

                <h3>Related Publications</h3>
                <ul className='research-pub'>
                    <li>
                        (Under Review at International Journal of Human-Computer Interaction, 2026).
                        <span className="publication-title"> Title temporarily withheld for review. </span>
                        {/* [<a href='' target="_blank">doi</a>] [<a href='' target="_blank">pdf</a>] */}
                        <br />
                        Authors: Yoon Jeong Cha, <span className="highlight-text">Jiongyu Chen</span>, Melissa Wang, Allison Liu, Hanning Li, Joyce Lee, Mark W. Newman, Sun Young Park.
                    </li>

                    <li>
                        (CHI 2025).
                        <span className="publication-title"> Collaborative Health-Tracking Technologies for Children and Parents: A Review of Current Studies and Directions for Future Research. </span>
                        [<a href='https://doi.org/10.1145/3706598.3713596' target="_blank">doi</a>] [<a href='https://dl.acm.org/doi/pdf/10.1145/3706598.3713596' target="_blank">pdf</a>]
                        <br />
                        Authors: Yoon Jeong Cha, <span className='highlight-text'>Jiongyu Chen</span>, Yasemin Gunal, Qiying Zhu, Mark W. Newman, Sun Young Park.
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Research;
