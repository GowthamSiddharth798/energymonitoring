import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { Card,Input } from 'react-rainbow-components';
import './Login.css';
const Login = () => {
  return (
    <>
        <div className='m-bg'> 
            <div>
                 <Card className='bg-c '>
                   <div class="Main-back">
                     <h1 className='card-text'>Login</h1>
                     <img src={'https://clipground.com/images/user-icon-vector-png-6.png'} height={20} class="user-logo1"/>
                     <p className='card-text1'>USER NAME</p>
                    <Input className='input1'/>
                    <p className='card-text2'>PASSWORD</p>
                    <Input className='input2'/>
                    <Link to="/Home"> <button className='bi' >Login</button></Link>

                   </div>
                 </Card>
            </div>
        </div>
       
       
    </>
  )
}
export  default Login;