import React from 'react'
import Navbar from "./Navmain";
import Nav2 from "./Nav2";
import BarChart from './Pages/Charts/Chart1';
import './Livegraphs.css';
// import './Pages/Charts/Chart1';
// import {ReactApexChart} from 'apexcharts';
const Livegraphs = () => {
  return (
    <>
      {/* <Navbar/> */}
      <div className="background-graphs">
          
          <Nav2/>
          <div className='last'>
             
              <img src='https://cdn4.iconfinder.com/data/icons/seo-and-web-2/151/90-1024.png' className='graph-logo img-a'/>
              <p className='t5' >Live Graph Analysis</p>
          </div>
          <br/>
          <br/>
          <div className='gp'>
             <BarChart/>
          </div>
      </div>
     
    </>
  )
}
export default Livegraphs;