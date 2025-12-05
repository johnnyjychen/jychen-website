import problem from '../images/water/water-problem.png';
import background from '../images/water/water-background.png';
import affinity from '../images/water/water-affinity-wall.png';
import future from '../images/water/water-future.png';

const Water = () => {
    return (
        <div className="project-container">
            <div className="project-section">
                <h1>Aging Water Infrastructures in Michigan</h1>
            </div>

            <div className="project-section">
                <h2>Project Information</h2>
                <ul>
                    <li><span className='highlight-green'>Overview</span>: In this project, our group spent three months studying Michigan municipalities' challenges in collecting, analyzing, and sharing data.
                        We outlined our research questions, methods, key insights, and the limitations of existing solutions, and then proposed potential improvements with unlimited resources.
                        Finally, we summarized the critical findings of our study.</li>
                    <li><span className='highlight-green'>Skills</span>: Qualitative Research, Thematic Analysis (Miro), Google Products</li>
                    <li><span className='highlight-green'>Duration</span>: 09/2023 - 12/2023</li>
                    <li><span className='highlight-green'>Type</span>: This is a group project.</li>
                </ul>
            </div>

            <div className="project-section">
                <h2>Problem Statement</h2>
                <div className="three-column-section">
                    <div className="image-column">
                        <img src={problem} alt="User Interviews" />
                    </div>
                    <div className="text-columns">
                        <p>Michigan lacks a standardized system for reviewing and reporting water infrastructure data across municipalities, which leads to inconsistencies, unknowns, and lost information when assessing quality at scale. 
                            This impacts citizens' access to clean, safe water and hinders investigative agents' ability to analyze infrastructure risks effectively. Additionally, funding allocation for infrastructure projects is challenged by inadequate tools and poor record-keeping, compounded by outdated systems and limited inter-municipal communication. These issues, coupled with insufficient funding, accelerate the deterioration of Michigan's water infrastructure.
                        </p>
                    </div>
                </div>
            </div>

            <div className="project-section">
                <h2>Background Research</h2>
                <div className="three-column-section">
                    <div className="image-column">
                        <img src={background} alt="Surveys" />
                    </div>
                    <div className="text-columns">
                        <p>Michigan's water infrastructure is known to be in poor condition, but its exact state remains largely unknown due to inadequate record-keeping before digital systems were established (Lupher, Schneider, & Dennis, 2023, p. 3). 
                            This lack of data complicates efforts to address current issues like aging pipes and their adverse effects on residents' health. Michigan also lacks the capability and authority to gather comprehensive data on its water system's financial health (Walton, 2022). 
                            Detailed information on aging infrastructure is crucial for addressing these challenges (Rath, 2023, p. 11), but poor communication between municipalities further hinders progress (Lupher et al., 2023, p. 17). 
                            Prolonged inaction accelerates infrastructure deterioration, which occurs at an increasingly rapid rate over time (Vedachalam et al., 2015, p. 872; Lupher et al., 2023, p. 17).
                        </p>
                    </div>
                </div>
            </div>

            <div className="project-section">
                <h2>Research Questions</h2>
                <p><span className='highlight-green'>Question 1</span>: What are the methods different municipalities are using to assess water infrastructure quality, including maintenance and replacement needs? Where is this succeeding or failing?</p>
                <p><span className='highlight-green'>Question 2</span>: In the process of collecting data on water infrastructure, how can the measuring and sharing of information between different municipalities be enhanced? If so, what is it?</p>
            </div>

            <div className="project-section">
                <h2>Process</h2>
                <p><span className='highlight-green'>Step 1</span>: Conducted research on Google Scholar and water service websites, identified ten sources, and summarized findings in a Google Sheet to pinpoint key issues and overlapping themes.</p>
                <p><span className='highlight-green'>Step 2</span>: Reviewed SME video interviews individually, analyzed relevant ideas on aging water infrastructure, and practiced interview techniques by asking questions and taking notes.</p>
                <p><span className='highlight-green'>Step 3</span>: Conducted SME Zoom interviews: Johnny interviewed Molly Maciejewski, Dawn interviewed Noah Urban, and the rest of the group interviewed Evan Pratt. Explored relevant topics and newly discovered points, including water infrastructure consolidation.</p>
                <p><span className='highlight-green'>Step 4</span>: Conducted interviews with professional stakeholders from the City of Ann Arbor and EGLE using a prepared protocol. All team members attended a contextual interview with a City of Ann Arbor water plant employee, while Dawn and Aishah interviewed EGLE staff.</p>
                <p><span className='highlight-green'>Step 5</span>: Organized collected data using an affinity wall on Miro by categorizing ideas, summarizing each category, and iteratively refining the categorization process with color-coded sticky notes to identify common themes and important insights.</p>
                <img src={affinity} alt="The affinity wall" />
            </div>

            <div className="project-section">
                <h2>Findings</h2>
                <p><span className='highlight-green'>Finding 1</span>: Michigan collects robust water infrastructure data, including system status, quality testing, and equipment records, but lacks comprehensive analysis and faces gaps in data such as locations and statuses of all infrastructure. Enhanced analysis is needed to maximize utility from the data.</p>
                <p><span className='highlight-green'>Finding 2</span>: Standardization of water infrastructure data has potential benefits, such as informing systematic maintenance, but the contextual interview highlighted the need for flexibility due to project-specific requirements. A balance between standardization and customization is crucial.</p>
                <p><span className='highlight-green'>Finding 3</span>: Infrastructure maintenance and repair decisions are based on priority, using failure indicators like main breaks or water quality issues. Cost analysis determines whether to repair or replace infrastructure based on financial considerations.</p>
                <p><span className='highlight-green'>Finding 4</span>: Communication across municipalities is supported by databases from the Water Research Foundation and American Waterworks Foundation, which provide shared research resources. Municipalities can also consult individual engineers and consultants for expertise.</p>
                <p><span className='highlight-green'>Finding 5</span>: EGLE advocates for consolidating water infrastructure to support financially struggling municipalities, but risks include higher costs and the potential for larger-scale impacts from single failures. Consolidation requires careful evaluation of financial benefits versus risks.</p>
            </div>

            <div className="project-section">
                <h2>Next Steps</h2>
                <div className="three-column-section">
                    <div className="image-column">
                        <img src={future} alt="Surveys" />
                    </div>
                    <div className="text-columns">
                        <p>Our project revealed significant insights but was not extensive enough to provide concrete recommendations.
                            If given more time and resources, we'd conduct more interviews with a broader range of stakeholders to resolve conflicting opinions and understand different perspectives better.
                            In addition, we aim to access and delve deeper into two key databases, the American Water Works Association and the Water Research Foundation, to improve our interview questions. 
                            Lastly, exploring how transparency in infrastructure data affects funding decisions would help us gain a deeper understanding of the issues from all stakeholders' viewpoints.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Water;
