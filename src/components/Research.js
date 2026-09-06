import workshop from '../images/research/workshop.png';
import verbal from '../images/research/research-verbal.png';

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
                            Older adults may experience conversational agents differently depending on how these systems communicate, making communication strategy an essential design consideration in human-AI interaction.
                            Strategies such as curiosity, empathy, and politeness can shape how older adults perceive an agent's interest, warmth, appropriateness, and trustworthiness, as well as their willingness to engage with it.
                            This line of research examines how different verbal communication strategies influence older adults' experiences with conversational and robotic agents across controlled experiments and interactive settings.
                            Together, these studies provide insights for designing conversational AI that communicates with older adults in ways that are engaging and responsive to their needs.
                        </p>

                        <div className="research-publications">
                            <p className="research-publications-title">Related Publications</p>
                            <ul className="research-pub">
                                <li>"I feel you" vs. "I understand you": How distinct empathic strategies shape robot personality and trust for older adults. (HFES 2026) [<a href="#" target="_blank" rel="noopener noreferrer">doi</a>]</li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>


            <div className="project-section">
                <h2>Collaborative Health Tracking for Children and Parents</h2>

                <div className="research-row">
                    <div className="research-icon">
                        <img src={workshop} alt="Type 1 Diabetes" />
                    </div>
                    <div className="research-text">
                        <p>
                            Children and parents often have different needs and preferences when using health-tracking technologies, creating challenges for the design of collaborative health-tracking systems.
                            These differences can affect children's autonomy, parents' caregiving preferences, parent-child collaboration, and how families coordinate health-tracking tasks and decisions together.
                            This line of research combines findings from a literature review of children's health-tracking research published between 2010 and 2024 and a co-design study involving children with Type 1 diabetes and their parents.
                            Together, these studies provide insights for designing family-centered health-tracking technologies that better support shared monitoring, communication, and collaborative health management.
                        </p>


                        <div className="research-publications">
                            <p className="research-publications-title">Related Publications</p>
                            <ul className="research-pub">
                                <li>Collaborative health-tracking technologies for children and parents: A review of current studies and directions for future research. (CHI 2026) [<a href="https://doi.org/10.1145/3706598.3713596" target="_blank" rel="noopener noreferrer">doi</a>]</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Research;
