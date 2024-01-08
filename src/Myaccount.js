import React from 'react'
import {  Card} from 'react-rainbow-components';
import'./Myaccount.css';
import Navbar from "./Navmain";

 const Myaccounts = () => {
  return (
    <>
        <div className='account-bg'>
            <Navbar/>
            <Card className='myaccount-card account-bg-in'>
              <div className='Header-flex'>
                <img src='https://pluspng.com/img-png/png-user-icon-icons-logos-emojis-users-2400.png' height={50} className='user'/>
                <h6 className='user-txt'>User</h6>
              </div>

            </Card>
        </div>
    
    </>
  )
}
export default Myaccounts;