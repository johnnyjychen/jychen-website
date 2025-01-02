import React from 'react';
import hifi1 from '../images/hifi/hifi-1.png'
import hifi2 from '../images/hifi/hifi-2.png'
import hifi3 from '../images/hifi/hifi-3.png'
import hifi4 from '../images/hifi/hifi-4.png'

const SteadySyncHiFi = () => {
    return (
        <div className="project-container">
            <div className="project-section">
                <h1>SteadySync (High-Fi Prototyping)</h1>
            </div>

            <div className="project-section">
                <h2>Project Information</h2>
                <ul>
                    <li><span className='highlight-green'>Overview</span>: In this project, I developed high-fidelity prototypes for the hypothetical company SteadySync, based on the provided wireframes. 
                    I organized all components into atoms, molecules, and organisms to clearly illustrate the structure and function of each element.
                    Finally, I presented nine complete interfaces.</li>
                    <li><span className='highlight-green'>Duration</span>: 11/2024</li>
                    <li><span className='highlight-green'>Skills</span>: Figma, High-Fidelity Prototyping</li>
                </ul>
            </div>

            <div className="project-section">
                <h2>UI Design Concepts</h2>
                <div className="two-column-section">
                    <div>
                        <h3>Design Guidelines</h3>
                        <p>
                            I used a four-column layout, with each column further divided into two smaller columns.
                            All the spacing between elements is 8px or multiples of 8px to maintain harmony.
                        </p>
                    </div>

                    <div>
                        <h3>Typography</h3>
                        <p>
                            Roboto is ideal for the prototype design because it combines modern and aesthetics with great screen readability, which creates a user-friendly experiences.
                            I used different sizes and font weights to convey the importance of various text elements on the page, which allows users to quickly distinguish between different text hierarchies.
                        </p>
                    </div>

                    <div>
                        <h3>Visuals</h3>
                        <p>
                        I selected appropriate illustrations for different achievements, 
                        making it easy for users to understand what each achievement represents. 
                        In addition, I chose suitable avatars for various users, including professionals like therapists and fitness coaches, to better convey the intended message.
                        </p>
                    </div>

                    <div>
                        <h3>Colors</h3>
                        <p>
                        Regarding colors, I primarily chose to use aqua mint (#BCE2DC), white (#FFFFFF), and black (#000000) 
                        because it can give users a sense of relaxation and calmness and allow them to see the texts and images clearly.
                        </p>
                    </div>

                </div>
            </div>

            <div className="project-section">
                <h2>Atoms</h2>
                <div>
                    <div className="image-column">
                        <img src={hifi1} alt="User interface pages" />
                    </div>
                </div>
            </div>

            <div className="project-section">
                <h2>Molecules</h2>
                <div>
                    <div className="image-column">
                        <img src={hifi2} alt="User interface pages" />
                    </div>
                </div>
            </div>

            <div className="project-section">
                <h2>Organisms</h2>
                <div>
                    <div className="image-column">
                        <img src={hifi3} alt="User interface pages" />
                    </div>
                </div>
            </div>

            <div className="project-section">
                <h2>User Interface (High-Fidelity Prototypes)</h2>
                <div>
                    <div className="image-column">
                        <img src={hifi4} alt="User interface pages" />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SteadySyncHiFi;
