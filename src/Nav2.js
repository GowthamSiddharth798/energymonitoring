import React from 'react'
import Menu from './Menu'
import { Link } from 'react-router-dom/cjs/react-router-dom';
import './Nav2.css'

const Nav2 = () => {

    const linkStyle = {
        float: 'left',
        display: 'block',
        color: 'white',
        textAlign: 'center',
        padding: '20px 16px',
        textDecoration: 'none',
        
    };

  return (
    <>
               

             <div className="flex">
        <Menu class="menu-min" />
        <div>
                <nav className="colour-txt">
                <div className="animated-title">
      <Link to="/Home" style={linkStyle} >
        <p className='under-txt sm'>Home</p>
      </Link>
      <Link to="/Data analysis" style={linkStyle}>
        <p className='under5 '>Data Analysis</p>
      </Link>
      
      <Link to="/Livegraphs" style={linkStyle} >
        <p className='under4 '>Graphs</p>
      </Link>
      
     
      <Link to="/Services" style={linkStyle} >
        <p className="under3 ">Services</p>
      </Link>
      <Link to="/Info" style={linkStyle} >
        <p className='under2 '>About</p>
      </Link>
    </div>
                        <img src="https://i.ibb.co/YZw8yxS/Iot-logo.jpg" class="Iot-logo img-a" />
                        <p className='Iot-txt'>GREEN FUSION IoT SOLUTIONS</p>
                </nav>
              
        </div>
    </div>
    </>
  )
}

export  default Nav2;
