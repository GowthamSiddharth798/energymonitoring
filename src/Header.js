import {  Card,Button} from 'react-rainbow-components';
import './Header.css';
import Menu from './Menu.js';
function Header(){
    return(
        <>

            <div >
                <div className='Header-flex'>
                        <div>
                            <Menu/>
                        </div>
                        <img src="https://i.ibb.co/YZw8yxS/Iot-logo.jpg" class="Iot-logo" />
                        <p className='Iot-txt'>GREEN FUSION IoT SOLUTIONS</p>
                        <h5 className='vishnu-txt Iot-txt '>VISHNU ENERGY MONITORING</h5>
                        <div className='Vit-logo'>
                            <img src='https://i.ibb.co/Cm04CR4/vishnu-logo.jpg' className='Vit-logo'/>
                        </div>
                        <p className='Vit-txt'> VISHNU INSTITUTE OF Technology</p>
                </div>
            </div>
        
        </>
    );

}
export default Header;