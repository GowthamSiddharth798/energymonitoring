import {  Card,Button} from 'react-rainbow-components';
import './Header.css';

function Header(){
    return(
        <>

            <Card className="head-main shining-move">
                <div className="in-line ">
              {/* <div >
                 <img src='https://clipground.com/images/white-home-icon-transparent-png-6.png'  className='h-123'/>
              </div> */}
                <img src="https://i.ibb.co/YZw8yxS/Iot-logo.jpg" class="main-logo" />
                <h4 className="main-heading">GREEN FUSION IoT SOLUTIONS</h4> 
                <div className="title"> <h4 class="txt-1"><b>ENERGY MONITORING</b></h4></div>
                <div >
                    <img src="https://i.ibb.co/Cm04CR4/vishnu-logo.jpg" class="vit-logo "/>
                </div>
                <h1  class="heading">VISHNU INSTITUTE OF TECHNOLOGY</h1>   
                <Button className='logout'>Logout</Button>                                      
             </div>
    </Card>
        
        </>
    );

}
export default Header;