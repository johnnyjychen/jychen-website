import bg from '../images/t1d/t1d_background.png';
import workshop from '../images/t1d/Workshop.png';
import hifi_1 from '../images/t1d/t1d-hifi1.png';
import hifi_2 from '../images/t1d/t1d-hifi2.png';
import hifi_3_1 from '../images/t1d/t1d-hifi3_1.png';
import hifi_3_2 from '../images/t1d/t1d-hifi3_2.png';
import hifi_4 from '../images/t1d/t1d-hifi4.png';
import hifi_4_1 from '../images/t1d/t1d-hifi4_1.png';
import hifi_4_2 from '../images/t1d/t1d-hifi4_2.png';

const T1Design = () => {
  return (
    <div className="project-container">
      <h1 className="page-title">Co-Designing a Collaborative Health Tracking Chatbot for Children with T1D and Their Parents</h1>

      <div className="project-section">
        <h2>Project Information</h2>
        <ul>
          <li><span className='highlight-text'>Overview</span>: In this project, our research team conducted two rounds of co-design workshops with children with Type 1 Diabetes (T1D) and their parents to better understand their needs and explore designs for collaborative health tracking.</li>
          <li><span className='highlight-text'>Skills</span>: Workshops, Wireframing, Prototyping, Figma, Adobe Photoshop, Thematic Analysis, Scientific Writing</li>
          <li><span className='highlight-text'>Duration</span>: 06/2024 - 09/2025</li>
          <li><span className='highlight-text'>Type</span>: This is a group project.</li>
        </ul>
      </div>

      <div className="project-section">
        <h2>Research Background</h2>
        <div className="three-column-section">
          <div className="image-column">
            <img src={bg} alt="Background" />
          </div>
          <div className="text-columns">
            <p>Chatbots have increasingly been explored as tools for health management, demonstrating their potential to support health monitoring, information sharing, and user engagement.
              However, existing chatbot-based systems are predominantly designed for individual users, with limited attention given to collaborative health data collection and management within family settings.
              As health tracking often involves multiple family members, particularly parents and children, there remains a need to better understand how chatbots can support family-based collaboration around health data.
              Exploring the role of chatbots in this context may reveal opportunities to address the needs of both children and parents and facilitate more effective family-centered health tracking practices.
            </p>
          </div>
        </div>
      </div>

      <div className="project-section">
        <h2>Research Goals</h2>
        <div className="three-column-section">
          <div className="image-column">
            <img src={workshop} alt="Research Goals" />
          </div>
          <div className="text-columns">
            <p>This project explores how a chatbot can support collaborative health tracking between children with T1D and their parents. We aim to understand how conversational agents can facilitate communication, coordination, and shared engagement in family-based health management.</p>

            <p>To investigate this question, we conducted two rounds of co-design workshops with 20 participants (10 child-parent pairs), with each session lasting approximately 90 minutes:</p>

            <ul className='indent-disc'>
              <li><strong>Workshop 1: Exploratory Co-Design: </strong>Explored participants' ideas, expectations, and needs for a chatbot that supports T1D management. Through drawing activities and group discussions, we identified potential chatbot roles, interaction styles, and early design concepts.</li>

              <li><strong>Workshop 2: Prototype Feedback and Refinement: </strong>Gathered feedback on prototypes developed from the first workshop. Participants reviewed proposed designs, shared reactions, and provided suggestions to refine chatbot features and better support collaborative health tracking.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="project-section">
        <h2>Prototypes Used in Second-Round Workshops</h2>
        <div>
          <h3>1. Introducing an In-App Chatbot</h3>
          <img src={hifi_1} alt="High-fidelity" />
        </div>
        <div>
          <h3>2. Supporting Data Logging</h3>
          <img src={hifi_2} alt="High-fidelity" />

        </div>
        <div>
          <h3>3. Handling Data Mismatches</h3>
          <h4>3.1. Child Interface</h4>
          <img src={hifi_3_1} alt="High-fidelity" />

          <h4>3.2. Parent Interface</h4>
          <img src={hifi_3_2} alt="High-fidelity" />
        </div>
        <div>
          <h3>4. Facilitating Discussions on Collected Data</h3>
          <img src={hifi_4} alt="High-fidelity" />

          <h4>4.1. Child Interface</h4>
          <img src={hifi_4_1} alt="High-fidelity" />

          <h4>4.2. Parent Interface</h4>
          <img src={hifi_4_2} alt="High-fidelity" />
        </div>
      </div>

    </div>
  );
}

export default T1Design;
