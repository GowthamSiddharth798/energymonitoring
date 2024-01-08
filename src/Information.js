import React from 'react'
import Nav2 from "./Nav2";
import './Information.css';
const Info = () => {
  return (

    <>
        
      <div className='bs'>
        <Nav2/>
        <div>

        <div class="mfm-container">
    
    <div class="feature-overview">
      <p>The MFM384 is a state-of-the-art Multi-Function Meter designed for comprehensive energy monitoring. It offers the following key features:</p>
      <ul>
           <li>Real-time Tracking</li>
           <li>Remote Access</li>
          <li>Environmental Impact Assessment</li>
            <li>Visualization and Analytics</li>
        <li> 
                <strong>Multifaceted Measurements:</strong>
                The MFM384 is equipped to measure various parameters crucial for understanding energy dynamics.
                This includes voltage, current, power factor, frequency, and energy consumption.
                This comprehensive set of measurements allows users to gain a holistic view of their energy profile.
        </li>
        <br/>
        {/* <img src='https://5.imimg.com/data5/RY/IR/DI/SELLER-70299938/1503557757-bd4903894972d30cd44230ca541f69d7-1000x1000.png'/> */}
        <li> 
              <strong>Real-Time Monitoring:</strong> 
              With real-time monitoring capabilities, the MFM384 provides instant and accurate data on energy metrics.
              This feature enables users to track fluctuations as they happen, empowering them to respond promptly to
              any irregularities and optimize energy efficiency in real-time.
        </li>
        <br/>
        <li>
              <strong>Data Logging:</strong> The device has robust data logging capabilities, storing historical data over time.
              Users can analyze trends, identify patterns, and make informed decisions for optimizing energy efficiency based on
              past performance. This historical data is valuable for long-term energy management strategies.
        </li>
        <br/>
        <li>
              <strong>Communication Interfaces:</strong> The MFM384 supports various communication interfaces such as Modbus or 
              RS485. This facilitates seamless integration with other systems and devices, enabling enhanced data exchange and control. 
              Integration capabilities make the MFM384 a versatile component of a larger energy monitoring and management ecosystem.
        </li>
        <br/>
        <li>
              <strong>User-Friendly Interface:</strong> The MFM384 features a user-friendly interface designed for accessibility and 
              ease of use. Regardless of technical expertise, users can easily navigate and interpret energy data. Intuitive controls and 
              visualizations make the MFM384 a practical tool for both experts and non-experts in energy management.
      </li> 
      </ul>
    </div>
  </div>
        </div>
      </div>
    </>
    
  )
}
export default Info;