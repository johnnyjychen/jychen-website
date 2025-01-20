import React from 'react';
import forest from '../images/fs/ca-forest.png'
import ticktick from '../images/fs/ca-ticktick.png'
import notes from '../images/fs/ca-notes.png'
import persona1 from '../images/fs/persona-1.png'
import persona2 from '../images/fs/persona-2.png'
import userflow from '../images/fs/userflow.png';
import paper1 from '../images/fs/fs-paper1.png';
import paper2 from '../images/fs/fs-paper2.png';
import paper3 from '../images/fs/fs-paper3.png';
import paper4 from '../images/fs/fs-paper4.png';
import paper5 from '../images/fs/fs-paper5.png';
import wireframe1 from '../images/fs/fs-wireframe1.png';
import wireframe2 from '../images/fs/fs-wireframe2.png';
import wireframe3 from '../images/fs/fs-wireframe3.png';
import wireframe4 from '../images/fs/fs-wireframe4.png';
import wireframe5 from '../images/fs/fs-wireframe5.png';
import palette from '../images/fs/color-palette.png';
import hifi1 from '../images/fs/fs-hifi1.png';
import hifi2 from '../images/fs/fs-hifi2.png';
import hifi3 from '../images/fs/fs-hifi3.png';
import hifi4 from '../images/fs/fs-hifi4.png';
import hifi5 from '../images/fs/fs-hifi5.png';

const FocusSphere = () => {
  return (
    <div className="project-container">
      <div className="project-section">
        <h1>FocusSphere</h1>
      </div>

      <div className="project-section">
        <h2>Project Information</h2>
        <ul>
          <li><span className='highlight-green'>Overview</span>: I contributed to a project focused on designing a mobile app to help individuals with attention-deficit/hyperactivity disorder (ADHD) better prioritize and manage their daily tasks.
            Our work included conducting research and creating both wireframes and high-fidelity prototypes for the app.</li>
          <li><span className='highlight-green'>Skills</span>: Competitive Analysis, User Interview, Heuristic Evaluation, User Flow, Wireframing, Low-fi/High-fi Prototyping, Figma, Adobe Photoshop</li>
          <li><span className='highlight-green'>Duration</span>: 09/2023 - 12/2023</li>
          <li><span className='highlight-green'>Type</span>: This is a group project.</li>
        </ul>
      </div>

      <div className="project-section">
        <h2>Research Background</h2>
        <p><span className='highlight-green'>Background</span>: To gain insight into the challenges faced by individuals with ADHD and evaluate existing solutions, we conducted a literature review. 
        Our findings revealed that they often struggle with working memory—the ability to retain information for immediate use—which impacts their ability to complete many daily tasks. 
        They also face difficulties concentrating on tasks and prioritizing them effectively. This highlights the importance of designing a product to help them manage tasks more efficiently.</p>
        <p><span className='highlight-green'>Existing Solutions</span>: We identified several existing methods to help individuals with ADHD improve their memory, including the use of visual aids and electronic reminders. 
        Visual aids are particularly beneficial as they assist individuals with ADHD in understanding, remembering, and following the information they receive. 
        However, finding effective visual aids that suit different situations can often be a challenge for them.</p>
      </div>

      <div className="project-section">
        <h2>Competitive Analysis</h2>
        <h3>Analogous Competitor (Forest)</h3>
        <div className="three-column-section">
          <div className="image-column">
            <img src={forest} alt="Analogous Competitor (Forest)" />
          </div>
          <div className="text-columns">
            <p className='highlight-green'>Pros</p>
            <ol>
              <li>Phones overwhelm us with information, disrupting focus. This feature aims to block distractions, promoting immersion in tasks.</li>
              <li>It includes a reward system to motivate users by offering incentives for task completion, encouraging repeated productivity.</li>
            </ol>
            <p className='highlight-green'>Cons</p>
            <ol>
              <li>It lacks task recording, which may hinder users with ADHD,
                as environmental distractions can affect memory and focus even without phone interference.</li>
            </ol>
          </div>
        </div>

        <h3>Direct Competitor (TickTick)</h3>
        <div className="three-column-section">
          <div className="image-column">
            <img src={ticktick} alt="Direct Competitor (TickTick)" />
          </div>
          <div className="text-columns">
            <p className='highlight-green'>Pros</p>
            <ol>
              <li>Quickly add tasks via voice input, email conversion, Siri, widgets, or Quick Ball.</li>
              <li>Organize tasks with tags, deadlines, priorities, and sort by time or importance.</li>
              <li>Ensure deadlines are met with multiple reminders, smart parsing, and location-based alerts.</li>
              <li>Motivate users with achievement scores, statistics, and task summaries.</li>
            </ol>
            <p className='highlight-green'>Cons</p>
            <ol>
              <li>The app's numerous features may overwhelm users with ADHD,
                as they can struggle to process excessive information in a single platform.</li>
            </ol>
          </div>
        </div>

        <h3>Partial Competitor (Notes - IOS system)</h3>
        <div className="three-column-section">
          <div className="image-column">
            <img src={notes} alt="Partial Competitor (Notes - IOS system)" />
          </div>
          <div className="text-columns">
            <p className='highlight-green'>Pros</p>
            <ol>
              <li>Intuitive interface simplifies creating, editing, and organizing notes, helpful for users with ADHD.</li>
              <li>Seamless compatibility across Apple devices makes accessing notes convenient.</li>
              <li>Drawing and doodling on iPad aids ADHD users in expressing and organizing thoughts.</li>
            </ol>
            <p className='highlight-green'>Cons</p>
            <ol>
              <li>Limited to Apple devices, excluding non-Apple users.</li>
              <li>Lacks built-in templates for quick record-keeping, making its simplicity a drawback.</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="project-section">
        <h2>User Interview</h2>
        <p>To further confirm the problem individuals with ADHD were facing, we recruited five interviewees from social media and conducted interviews on them.
          All of them were Asian adult women. Based on their responses, we found that they all had difficulties in prioritizing their tasks.
          The followings were some valuable insights:</p>
        <div className="three-column-section">
          <div className='interview-point'>
            <h3>Tools' Pros & Cons and Their Affordability</h3>
            <p>Participants use various apps like calendars and task managers. They find mobile apps convenient for syncing tasks across platforms.
              However, one noted, “Opening an app is distracting and affects my short-term memory.”</p>
          </div>
          <div className='interview-point'>
            <h3>Reminders are Particularly Beneficial</h3>
            <p>Some participants reported forgetting tasks before opening the software meant to record them. Individuals with ADHD often rely on external prompts rather than memory.
              They also struggle with prioritization, viewing tasks like cleaning as equally important as studying, making reminders from others particularly helpful.</p>
          </div>
          <div className='interview-point'>
            <h3>Our Design Should Not Be a Burden</h3>
            <p>Our goal is to help users complete daily tasks without adding burden, so every feature must be easy to use.
              One participant noted that overlapping tasks caused trouble in her life.
              Allowing users to input daily tasks like ordering takeout and setting automatic reminders would simplify their experience.</p>
          </div>
        </div>
      </div>

      <div className="project-section">
        <h2>Persona</h2>
        <h3>Wenxi Wang</h3>
        <p>Wenxi Wang, a 28-year-old woman working in tech, struggles with managing daily tasks. She starts her mornings with coffee and drives to work.
          Recently, she ran out of coffee and forgot her car keys, causing her to be late. Besides, she missed closing her windows before a rainstorm.
          Frustrated by these oversights, which were actually listed in her phone's to-do list, Wenxi wishes for a more effective way to track and complete her daily tasks.</p>
        <img src={persona1} alt="Persona-1: Wenxi Wang" />
        <h3>Jingyan Wu</h3>
        <p>Jingyan Wu, an international student with self-diagnosed ADHD, struggled with managing tasks in her first week in the U.S. She forgot to pick up essential bedding items and faced a dilemma between studying for an exam and cleaning her messy room.
          After reaching out to friends for advice and receiving late responses, she realized her dependency on others for decision-making and wished for more timely assistance.</p>
        <img src={persona2} alt="Persona-2: Jingyan Wu" />
      </div>

      <div className="project-section">
        <h2>User Flow</h2>
        <div className="full-bleed">
          <img src={userflow} alt="User flow" />
        </div>
      </div>

      <div className="project-section">
        <h2>Paper Prototypes</h2>
        <div>
          <h3>Sign Up/Log In</h3>
          <img src={paper1} alt="Paper Prototypes Sign up/log in" />
        </div>
        <div>
          <h3>Home (Adding a New Task)</h3>
          <img src={paper2} alt="Paper Prototypes Adding a New Task" />
        </div>
        <div>
          <h3>Home Page (View/Edit/Delete)</h3>
          <img src={paper3} alt="Paper Prototypes Home Page" />
        </div>
        <div>
          <h3>Profile Page</h3>
          <img src={paper4} alt="Paper Prototypes Profile Page" />
        </div>
        <div>
          <h3>Report Page</h3>
          <img src={paper5} alt="Paper Prototypes Report Page" />
        </div>
      </div>

      <div className="project-section">
        <h2>Wireframes</h2>
        <div>
          <h3>Sign Up/Log In</h3>
          <img src={wireframe1} alt="Wireframes Sign up/log in" />
        </div>
        <div>
          <h3>Home (Adding a New Task)</h3>
          <img src={wireframe2} alt="Wireframes Adding a New Task" />
        </div>
        <div>
          <h3>Home Page (View/Edit/Delete)</h3>
          <img src={wireframe3} alt="Wireframes Home Page" />
        </div>
        <div>
          <h3>Profile Page</h3>
          <img src={wireframe4} alt="Wireframes Profile Page" />
        </div>
        <div>
          <h3>Report Page</h3>
          <img src={wireframe5} alt="Wireframes Report Page" />
        </div>
      </div>

      <div className="project-section">
        <h2>Color Palette</h2>
        <div className="full-bleed">
          <img src={palette} alt="Color Palette" />
        </div>
      </div>

      <div className="project-section">
        <h2>High-Fidelity Prototypes</h2>
        <div>
          <h3>Sign Up/Log In</h3>
          <img src={hifi1} alt="High-fidelity Sign up/log in" />
        </div>
        <div>
          <h3>Home (Adding a New Task)</h3>
          <img src={hifi2} alt="High-fidelity Adding a New Task" />
        </div>
        <div>
          <h3>Home Page (View/Edit/Delete)</h3>
          <img src={hifi3} alt="High-fidelity Home Page" />
        </div>
        <div>
          <h3>Profile Page</h3>
          <img src={hifi4} alt="High-fidelity Profile Page" />
        </div>
        <div>
          <h3>Report Page</h3>
          <img src={hifi5} alt="High-fidelity Report Page" />
        </div>
      </div>
    </div>
  );
}

export default FocusSphere;
