import React from 'react'
// import Navbar from "./Navmain";
import Nav2 from "./Nav2";
import './Layout.css';
 const Layout = () => {
  return (
    <>
        
      <div className='background'>
        <Nav2/>
        <div>
             <div className='grid-box'>
                 <h3>Grid</h3>
             </div>
             <div>
                 <div className='line-grid'></div>
                 <div className='line-1'></div>
             </div>
        </div>
      </div>
    </>
  )
}
export default Layout;