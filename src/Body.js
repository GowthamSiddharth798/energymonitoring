import React from "react";
import './body.css';
import { Card } from "react-rainbow-components";
import { Link } from 'react-router-dom';
import Navbar from "./Navmain";


   

function Body(){
   
  
    return(
    <>
        <div className="back-main">
            {/* Nav bar */}
            <Navbar/>

            {/* body */}

            <Card className="content flex img-a">
                    <div className="img">
                        <h1>ENERGY MONITORING</h1>
                    </div>
                    <div className="list">
                        <h3>Traits Available:</h3>
                        <ul >
                            <li>Real-time Tracking</li>
                            <li>Remote Access</li>
                            <li>Environmental Impact Assessment</li>
                            <li>Visualization and Analytics</li>
                        </ul>
                    </div>
                    <div/>
                   <img src="https://www.iotconnect.io/images/energy_diagram.png"  className="back-i"/>

            </Card>
            <div>
                <div className="b2"></div>
            </div>

        </div>
   
    </>
    );
}

export default Body;