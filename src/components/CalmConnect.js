import React from 'react';
import timeline from '../images/cc/cc-timeline.png';
import persona from '../images/cc/cc-persona.png';
import journey from '../images/cc/cc-journey.png';

const CalmConnect = () => {
    return (
        <div className="project-container">
            <div className="project-section">
                <h1>CalmConnect</h1>
            </div>

            <div className="project-section">
                <h2>Project Information</h2>
                <ul>
                    <li><span className='highlight-green'>Overview</span>: In this project, I conducted a literature review, surveys, and interviews with participants from a bank in China.
                        I designed an app to help individuals with high neuroticism improve their communication in the workplace.</li>
                    <li><span className='highlight-green'>Skills</span>: User Interview, Survey, Figma, Adobe Photoshop, Qualitative Analysis, Quantitative Analysis</li>
                    <li><span className='highlight-green'>Duration</span>: 09/2022 - 12/2022</li>
                    <li><span className='highlight-green'>Type</span>: This is an individual project.</li>
                </ul>
            </div>

            <div className="project-section">
                <h2>Background Information</h2>
                <h3>Definition</h3>
                <p><span className='highlight-green'>Big 5 Personality Traits</span>: The Big Five personality traits are broad dimensions of personality used to describe human behavior.</p>
                <ul className='indent-disc'>
                    <li><span className='highlight-green'>Openness</span>: Creativity and willingness to try new experiences.</li>
                    <li><span className='highlight-green'>Conscientiousness</span>: Organization, responsibility, and self-discipline.</li>
                    <li><span className='highlight-green'>Extraversion</span>: Sociability, energy, and assertiveness.</li>
                    <li><span className='highlight-green'>Agreeableness</span>: Kindness, empathy, and cooperation.</li>
                    <li><span className='highlight-green'>Neuroticism</span>: Emotional instability, anxiety, and sensitivity to stress.</li>
                </ul>
                <p><span className='highlight-green'>Job Satisfaction</span>: Job satisfaction is traditionally defined
                    as a pleasurable or positive emotional state that results from one's appraisal of one's job or job aspects.</p>

                <h3>Conclusion</h3>
                <p>The correlation between neuroticism and job satisfaction is negative. However, the correlation between other personality traits and job satisfaction is varied in different industries.</p>

                <h3>Timeline</h3>
                <img src={timeline} alt="Timeline of the study" />
            </div>

            <div className="project-section">
                <h2>Research Process</h2>
                <h3>Purpose</h3>
                <p>Most of the previous research was done in the United States, so I indended to replicate a study in China.
                    I chose employees of a Chinese bank.</p>
                <h3>Methods</h3>
                <p>I used the <span className='highlight-green'>Big Five Inventory</span> to assess participants' personality traits,
                    the <span className='highlight-green'>Minnesota Satisfaction Questionnaire</span> to measure their current job satisfaction,
                    and conducted <span className='highlight-green'>interviews</span> to gather additional insights.</p>
                <h3>Results</h3>
                <p><span className='highlight-green'>Surveys</span>: 109 participants (bank employees) completed two surveys. The correlation between neuroticism and job satisfaction is negative.</p>
                <p><span className='highlight-green'>Interviews</span>: I interviewed five employees and two HR representatives.
                    I conducted interviews with five employees and two HR representatives. Based on the employees' responses, I concluded that work stress is perceived as the most significant factor affecting job satisfaction, followed by salary levels, supervisor attitudes, relationships with colleagues, and other factors.
                    Additionally, the HR representatives acknowledged that, while they understand personality plays a crucial role, they have not utilized any scientific tools to gain deeper insights into their employees.</p>
            </div>

            <div className="project-section">
                <h2>Persona</h2>
                <img src={persona} alt="Persona" />
            </div>

            <div className="project-section">
                <h2>Journey Map (An Liu)</h2>
                <img src={journey} alt="Journey Map" />
            </div>

            <div className="project-section">
                <h2>Primary Features</h2>
                <p>1. <span className='highlight-green'>Stress Tracking and Management</span></p>
                <p className='indent'>a. Daily Stress Check-In: A quick, simple questionnaire for users to log their stress levels and identify triggers.</p>
                <p className='indent'>b. Personalized Stress Insights: Visual analytics showing stress patterns over time to help users recognize trends.</p>

                <p>2. <span className='highlight-green'>Structured Templates and Rephrasing Tools</span></p>
                <p className='indent'>a. Template: Polite and professional templates for common workplace scenarios.</p>
                <p className='indent'>b. Rephrasing Tool: A tool that reviews the user's draft messages and suggests edits to make them more professional,</p>

                <p>3. <span className='highlight-green'>AI Assistant for Conflict Resolution</span>: Users can have conversations with the AI. They can share their negative emotions and the situations they believe caused them.
                    The AI can help analyze the situations and provide comfort and suggestions in a peaceful and supportive manner.</p>

                <p>4. <span className='highlight-green'>Workplace Emojis and Stickers</span>: A library of fun and relatable workplace-themed emojis and stickers.</p>
            </div>
        </div>
    );
}

export default CalmConnect;
