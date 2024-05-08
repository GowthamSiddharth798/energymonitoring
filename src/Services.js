import React from 'react'
import Nav2 from "./Nav2";
import './Services.css';
const Service = () => {
  return (
    <>
        
      <div className='background'>
        <Nav2/>
        <div><div className="services-container">
       <div className="heading54"><h1 >Our Services</h1><br></br></div>
      

      <div className="service">
        <h2>Real-time Tracking</h2>
        <p>
          We offer real-time tracking solutions to monitor your energy consumption and production.
        </p>
      </div>

      <div className="service">
        <h2>Remote Access</h2>
        <p>
          Gain remote access to your energy data anytime, anywhere, ensuring control and convenience.
        </p>
      </div>

      <div className="service">
        <h2>Environmental Impact Assessment</h2>
        <p>
          Assess and analyze the environmental impact of your energy usage with our advanced tools.
        </p>
      </div>

      <div className="service">
        <h2>Visualization and Analytics</h2>
        <p>
          Visualize and analyze your energy data through interactive charts and analytics for informed decision-making.
        </p>
      </div>
    </div>
    </div>
      </div>
    </>
  )
}

export default Service;