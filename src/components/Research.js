import bg from '../images/parking/parking-background.png';

const Research = () => {
    return (
        <div className="project-container">
            <div className="project-section">
                <h1>Research</h1>
            </div>

            <div className="project-section">
                <h2>Conversational Agents for Older Adults</h2>
                <div className="three-column-section">
                    <div className="image-column">
                        <img src={bg} alt="Background" />
                    </div>
                    <div className="text-columns">
                        <p>
                            My research focuses on designing and evaluating conversational agents, such as social robots and virtual agents, to support the well-being of older adults. I am particularly interested in understanding how different communication styles of these agents can influence user perceptions, engagement, and health outcomes. Through a combination of user-centered design, experimental studies, and field deployments, I aim to develop effective and empathetic technologies that can enhance the quality of life for older adults.
                        </p>
                    </div>

                </div>
                <h3>Related Publications</h3>
                <ul className='research-pub'>
                    <li>
                        (CHI 2026). Chen, J., Chalifoux, C., Du N., Zhang, Q.
                        <span className="publication-ttle"> Who Needs What? The Interaction Between Empathy Communication and Trait Empathy in a Home-Based Virtual Healthcare Robotic Agent for Older Adults. </span>
                        [<a href='' target="_blank">doi</a>] [<a href='' target="_blank">pdf</a>]
                    </li>
                </ul>
            </div>


            <div className="project-section">
                <h2>Collaborative Health Tracking for Children and Parents</h2>
                <div className="three-column-section">
                    <div className="image-column">
                        <img src={bg} alt="Background" />
                    </div>
                    <div className="text-columns">
                        <p>
                            My research focuses on designing and evaluating collaborative health tracking technologies for children and parents. I am particularly interested in understanding how these technologies can facilitate shared understanding, privacy, and long-term engagement in health-tracking scenarios. Through a combination of user-centered design, experimental studies, and field deployments, I aim to develop effective and empathetic technologies that can enhance the quality of life for families.
                        </p>
                    </div>

                </div>
                <h3>Related Publications</h3>
                <ul className='research-pub'>
                    <li>
                        (CHI 2025). Cha, Y. J., Chen, J., Gunal, Y., Zhu, Q., Newman, M. W., and Park, S. Y.
                        <span className="publication-ttle"> Collaborative Health-Tracking Technologies for Children and Parents: A Review of Current Studies and Directions for Future Research. </span>
                        [<a href='' target="_blank">doi</a>] [<a href='' target="_blank">pdf</a>]
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Research;
