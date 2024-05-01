import React from 'react'
import { Link } from 'react-router-dom';
import './Navmain.css';
import Menu from './Menu';
const Navbar = () => {

    const linkStyle = {
        float: 'left',
        display: 'block',
        color: 'white',
        textAlign: 'center',
        padding: '20px 16px',
        textDecoration: 'none',  
    };
  return (
    <div className="Dash flex">
    <Menu/>
    <div style={{ height: '100vh', overflow: 'hidden' }}>
<nav className="colour-txt">
    <Link to="/Home" style={linkStyle} id="Home">Home</Link>
    <Link  to="/Data analysis" style={linkStyle}>Data Analysis</Link>
    <Link  to="/Livegraphs" style={linkStyle}>Graphs</Link>
    <Link to="/services" style={linkStyle}>Services</Link>
    <Link to="/Info" style={linkStyle}>About</Link>
</nav>
     </div>
</div>
  )
}
export  default Navbar;