import React from 'react'
// import Navbar from "./Navmain";
import Nav2 from "./Nav2";
// import BarChart from './Pages/Charts/Chart1';
import './Livegraphs.css';
// import  { useState } from 'react';
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Chart from './Pages/Charts/Chart1';
// import {ReactApexChart} from 'apexcharts';
const Livegraphs = () => {
  // const [selectedDate, setSelectedDate] = useState(null);

  // const handleDateChange = date => {
  //   setSelectedDate(date);
  // };
  return (
    <>
      <div className="background-graphs">
          
          <Nav2/>
          <div className='last'>      
              <img src='https://cdn4.iconfinder.com/data/icons/seo-and-web-2/151/90-1024.png' className='graph-logo img-a'/>
              <p className='t5' >Live Graph Analysis</p>
          </div>
          <br/>
          <br/>
          <div className='gp'>
             <Chart/>
          </div>
          {/* <div>
      <h2>Select a Date</h2>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy" // Customize date format if needed
      />
      {selectedDate && (
        <p>You selected: {selectedDate.toLocaleDateString()}</p>
      )}
    </div> */}
      </div>
      
    </>
  )
}
export default Livegraphs;