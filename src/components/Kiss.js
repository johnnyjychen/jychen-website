import React from 'react';
import user from '../images/kiss/kiss-user.png';
import survey from '../images/kiss/kiss-survey.png';
import compare from '../images/kiss/kiss-compare.png';
import heuristic from '../images/kiss/kiss-heuristic.png';

const Kiss = () => {
    return (
        <div className="project-container">
            <div className="project-section">
                <h1>KISS (Sexual Health Awareness)</h1>
            </div>

            <div className="project-section">
                <h2>Project Information</h2>
                <ul>
                    <li><span className='highlight-green'>Overview</span>: In this project, our team collaborated with KISS, a startup focused on promoting sexual health awareness and safer practices through its app, which features tools like anonymous notifications. 
                    We conducted comprehensive UX research to enhance the app's functionality, concentrating on enabling users to log their sexual activities and share health statuses with partners. 
                    Our work included user interviews, surveys, comparative analyses, heuristic evaluations, and usability testing.</li>
                    <li><span className='highlight-green'>Skills</span>: User Interview, Survey, Comparative Evaluation, Heuristic Evaluation, Usability Testing, Presentation</li>
                    <li><span className='highlight-green'>Duration</span>: 02/2024 - 04/2024</li>
                    <li><span className='highlight-green'>Type</span>: This is a group project.</li>
                </ul>
            </div>

            <div className="project-section">
                <h2>User Interviews</h2>
                <div className="three-column-section">
                    <div className="image-column">
                        <img src={user} alt="An image for user interviews" />
                    </div>
                    <div className="text-columns">
                        <p><span className='highlight-green'>What we did?</span> We interviewed five sexually active individuals to enhance the KISS app's usability and understand attitudes toward sexual health and the app's key features, such as QR code encounter registration and anonymous STI test result notifications.</p>
                        <p><span className='highlight-green'>What we got?</span> Participants preferred official STI test result verification over verbal assurances, which highlights the need for secure storage and sharing of medical results. Concerns about data safety, anonymity, and privacy control were prominent, alongside skepticism about self-submitted results. Recommendations include integrating verified result sharing, implementing robust data protection, customizable privacy settings, and a medical institution-linked verification system.</p>
                    </div>
                </div>
            </div>

            <div className="project-section">
                <h2>Surveys</h2>
                <div className="three-column-section">
                    <div className="image-column">
                        <img src={survey} alt="An image for surveys" />
                    </div>
                    <div className="text-columns">
                        <p><span className='highlight-green'>What we did?</span> We conducted a pilot survey using stratified sampling to understand attitudes toward STI prevention, testing habits, and anonymous notification systems. This included refining survey instruments through pilot testing and addressing issues like question clarity, response options, and usability.</p>
                        <p><span className='highlight-green'>What we got?</span> Participants highlighted concerns about data security, the authenticity of anonymous test results, and the effectiveness of anonymous notifications. Key insights include a preference for simplified response scales, clear navigation, and improved communication channels. These findings inform recommendations for enhancing the KISS app's features and usability.</p>
                    </div>
                </div>
            </div>

            <div className="project-section">
                <h2>Comparative Evaluations</h2>
                <div className="three-column-section">
                    <div className="image-column">
                        <img src={compare} alt="An image for comparative evaluations" />
                    </div>
                    <div className="text-columns">
                        <p><span className='highlight-green'>What we did?</span> We conducted a comparative analysis of the KISS app using SWOT analysis and feature comparisons with competitors like Sexual Activity, Kama, Nice, STD Triage, and SLog. The evaluation focused on privacy, user experience, educational content, and pricing strategies to identify areas for improvement.</p>
                        <p><span className='highlight-green'>What we got?</span> Key findings reveal that eliminating sign-up processes enhances privacy and ease of access, intuitive navigation (e.g., a floating 'plus' button) improves activity logging, and structured educational content boosts user engagement. Recommendations include simplifying account creation, redesigning navigation for accessibility, incorporating educational features, and introducing clinic-finding and online diagnosis functionalities.</p>
                    </div>
                </div>
            </div>

            <div className="project-section">
                <h2>Heuristic Evaluations</h2>
                <div className="three-column-section">
                    <div className="image-column">
                        <img src={heuristic} alt="An image for heuristic evaluations" />
                    </div>
                    <div className="text-columns">
                        <p><span className='highlight-green'>What we did?</span> We conducted heuristic analyses of the KISS app, focusing on usability evaluations of the "Main Page," "New Kiss," and "New Screening" pages to identify issues and recommend improvements.</p>
                        <p><span className='highlight-green'>What we got?</span> The app's structured user flow and system feedback provide a clear and intuitive experience, but limitations in editing records, confusing icons and titles, and a lack of minimalist design hinder usability. Recommendations include enhancing user control, clarifying navigation elements, and redesigning visual components for a cleaner, more user-friendly interface.</p>
                    </div>
                </div>
            </div>

            <div className="project-section">
                <h2>Usability Testing</h2>
                <div className="three-column-section">
                    <div className="image-column">
                        <img src={user} alt="An image for user testings" />
                    </div>
                    <div className="text-columns">
                        <p><span className='highlight-green'>What we did?</span> We conducted usability tests with five participants, each recruited by a team member, and used a structured testing protocol. This included pre- and post-questionnaires, background questions, and five tasks to evaluate the KISS app's features. A pilot test refined the process, adding a three-minute limit for tasks participants found difficult.</p>
                        <p><span className='highlight-green'>What we got?</span> Participants struggled with complex activity logging, unclear icons, and QR code navigation. Recommendations include streamlining activity addition with a clear "Add New" button, refining icons, and improving QR code accessibility. Additional issues with STI result checkboxes, facility selection, and notification processes led to suggestions for intuitive design updates, clearer messaging, and enhanced user feedback mechanisms.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Kiss;
