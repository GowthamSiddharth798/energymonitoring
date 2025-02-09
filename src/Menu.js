import { useState } from 'react';
import {Offcanvas }from 'react-bootstrap';
import { Link } from "react-router-dom";
import'./Menu.css';
import hamburger from './hamburger.jpg'
function Menu() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <img src={hamburger} className='menu-button'  onClick={handleShow}/>
      <Offcanvas show={show} onHide={handleClose} class="offcanvas">
        <Offcanvas.Header closeButton >
          <Offcanvas.Title>  </Offcanvas.Title>
        </Offcanvas.Header>
        
        <Offcanvas.Body className='position'>
        <div >
              <Link to="/Myaccounts"> <button class="button-menu"><p className='menu-b-in-txt'>My Accounts</p></button></Link>
              <Link to="/Livegraphs"><button class="button-menu2"><p className='menu-b-in-txt'>Live Graphs</p></button></Link>
              <Link to="/Layout"><button class="button-menu3"><p className='menu-b-in-txt'>Layout</p></button></Link>
              <Link to="/Info"><button class="button-menu4"><p className='menu-b-in-txt'>Info !</p></button></Link>
        </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Menu;