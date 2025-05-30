import React from 'react';
import bg from '../images/parking/parking-background.png';
import renter1 from '../images/parking/renter1.png';
import renter2 from '../images/parking/renter2.png';
import renter3 from '../images/parking/renter3.png';
import host1 from '../images/parking/host1.png';
import host2 from '../images/parking/host2.png';
import host3 from '../images/parking/host3.png';

const Parking = () => {
  return (
    <div className="project-container">
      <div className="project-section">
        <h1>OpenSpot (Parking App)</h1>
      </div>

      <div className="project-section">
        <h2>Project Information</h2>
        <ul>
          <li><span className='highlight-green'>Overview</span>: In this project, our team collaboratively addressed parking challenges in Ann Arbor, Michigan, particularly during major events.
            We investigated the difficulties residents face when renting out private parking spaces and explored ways to improve parking accessibility for both visitors and locals.</li>
          <li><span className='highlight-green'>Skills</span>: Surveys, Interviews, Wireframing, High-Fi Prototyping, Figma, Adobe Photoshop</li>
          <li><span className='highlight-green'>Duration</span>: 01/2025 - 04/2025</li>
          <li><span className='highlight-green'>Type</span>: This is a group project.</li>
        </ul>
      </div>

      <div className="project-section">
        <h2>Research Background</h2>
        <div className="three-column-section">
          <div className="image-column">
            <img src={bg} alt="Background" />
          </div>
          <div className="text-columns">
            <p>In the United States, parking is often quite challenging, whether in major cities like New York and Chicago or in university-centered cities like Ann Arbor.
              The high volume of traffic, especially during major events like football games, often exacerbates the issue.
              In addition, many individuals with private parking spaces lack a convenient way to rent out their unused spots, which leads to wasted space and missed financial opportunities. <span className='highlight-green'>Since parking regulations differ widely across U.S. cities, this project focuses specifically on major events in Ann Arbor, Michigan. </span>
              With additional time and resources, the scope could be expanded to include other cities or states.
            </p>
          </div>
        </div>
      </div>

      <div className="project-section">
        <h2>Formative Study</h2>
        <h3>Procedures</h3>
        <p>1. <span className='highlight-green'>Surveys</span>: We launched a Google Forms survey to understand parking challenges and preferences among Michigan visitors (renters) and space owners in Ann Arbor, yielding early but insightful responses that informed our follow-up interviews.</p>
        <p>2. <span className='highlight-green'>Interviews</span>: To deepen our understanding of event parking challenges in Ann Arbor, we conducted eight interviews, four with Michigan visitors (renters) and four with parking space owners, to uncover deeper insights into their parking experiences, needs, and concerns during large events in Ann Arbor. 
        These interviews revealed key challenges and preferences that surveys alone couldn't capture and are now informing our app design.</p>
        <h3>Results</h3>
        <p>1. <span className='highlight-green'>Surveys</span>: Our survey revealed that Michigan visitors (renters) in Ann Arbor face significant parking challenges, including high costs, long walking distances, and limited availability, while parking space owners expressed concerns about security and liability but showed interest in renting if the process were safe and easy to manage. These insights highlight the demand for a secure, user-friendly platform that supports advance reservations and verified listings.</p>
        <p>2. <span className='highlight-green'>Interviews</span>: Our interviews reinforced the survey findings by revealing personal stories of parking stress from Michigan visitors (renters) and hesitations from space owners, emphasizing the importance of trust, security, and convenience in a private parking rental app. These insights will guide the development of core features like verified listings, secure payments, and clear rental terms.</p>
      </div>

      <div className="project-section">
        <h2>Primary Feature Lists</h2>
        <p>1. <span className='highlight-green'>Event-Based Search and Booking</span>: Users can search for parking by event name, time, or location. Listings display nearby available
          spots along with estimated walking distance to the event and detailed information on amenities,
          such as different types of parking, lighting, and vehicle size compatibility.</p>
        <p>2. <span className='highlight-green'>Real-Time Availability and Reservations</span>: Our platform offers real-time updates on available parking spots. Users can reserve a spot in
          advance and receive turn-by-turn navigation through an integrated map. This reduces
          last-minute circling and offers peace of mind even before they get in the car.</p>
        <p>3. <span className='highlight-green'>Trust & Safety Verification</span>: All hosts and renters are verified through profiles, ratings, and reviews. Listings labeled as
          “Verified” have passed basic checks to ensure authenticity. Users can also view neighborhood
          safety ratings and parking spot photos to make more informed decisions.</p>
        <p>4. <span className='highlight-green'>Streamlined Payment & Communication</span>: In-app payments are supported via Venmo, Apple Pay, and credit cards. Hosts and renters can
          communicate directly through the app to coordinate arrival times, directions, or other details.
          Our app maintains a transparent record of all bookings and allows hosts to set their own cancellation policies.</p>
        <p>5. <span className='highlight-green'>Reporting System after Checking Out</span>: Renters are prompted to upload a photo when leaving the spot. If the space is still occupied, the
          host or next renter can report the issue. Penalties may be applied, and nearby alternatives will be suggested to the affected user.</p>
      </div>

      <div className="project-section">
        <h2>High-Fidelity Prototypes</h2>
        <div>
          <h3>Sign Up/Log In</h3>
          <img src={renter1} alt="High-fidelity " />
        </div>
        <div>
          <h3>Sign Up/Log In</h3>
          <img src={renter2} alt="High-fidelity " />
        </div>
        <div>
          <h3>Sign Up/Log In</h3>
          <img src={renter3} alt="High-fidelity " />
        </div>
        <div>
          <h3>Sign Up/Log In</h3>
          <img src={host1} alt="High-fidelity " />
        </div>
        <div>
          <h3>Home (Adding a New Task)</h3>
          <img src={host2} alt="High-fidelity " />
        </div>
        <div>
          <h3>Home Page (View/Edit/Delete)</h3>
          <img src={host3} alt="High-fidelity Home Page" />
        </div>
      </div>
    </div>
  );
}

export default Parking;