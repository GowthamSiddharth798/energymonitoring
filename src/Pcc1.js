import React from "react";
import './Pcc1.css';
import{Card,Input,Button} from 'react-rainbow-components'
import Header from './Header.js'
import { Link } from "react-router-dom/cjs/react-router-dom.js";
import Navbar from "./Navmain.js";
import Menu from "./Menu.js";
import Nav2 from "./Nav2";
import arrow from './arrow.png';
import stline from './stline.png';
import cross from './cross.jpg'


function Pcc1(){
    const linkStyle = {
        float: 'left',
        display: 'block',
        color: 'white',
        textAlign: 'center',
        padding: '20px 16px',
        textDecoration: 'none',
        
    };
    return(
        < >
        
          <div className="back-bg">
            
             <Nav2/>
         
          <center><h1><u>PCC-1</u></h1></center>
            <Card className="card-pcc1 flex">
           
                <div>
                         {/*                          */}
                 <div class="main">
                        <div class="flex">
                        <img src={stline} className="st-line-11"></img>
                        <img src={arrow} className="arrow-line-11" ></img>
                        <Link to="/Pcc1/Park Light D.B's"> <Button className="park-button" ><p >Park Light D.B's</p></Button></Link>
                        
                        <div className="flex inputs-pcc1">
                            <div >
                                <b > Current(A):</b>
                                <Input disabled className="disabled-cursor1 input " />                      
                            </div>
                            
                            <div className="normal">
                                <b> Power(W):</b>
                               <Input disabled className="disabled-cursor1 input " />
                            </div>
                            <div className="ener">
                                <b className="let"> Energy Meter(KWh):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                            <div  className="ener2">
                                <b >Energy(Kwh):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                        </div>
                        </div>
                        
                        <div className="flex">
                        {/* <img src={stline} className="st-line-12"></img> */}
                        <img src={arrow} className="arrow-line-12" ></img>
                       <Link to="/Pcc1/Stp"> <Button className="stp-button" ><p >STP 2&3 Kaveri,Seeta Hostel</p></Button></Link>
                        <div className="flex inputs2-pcc1">
                        <div >
                                <b > Current(A):</b>
                                <Input disabled className="disabled-cursor1 input " />                      
                            </div>
                            
                            <div className="normal">
                                <b> Power(W):</b>
                               <Input disabled className="disabled-cursor1 input " />
                            </div>
                            <div className="ener">
                                <b className="let"> Energy Meter(KWh):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                            <div  className="ener2">
                                <b >Energy(Kwh):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                        </div>
                        </div>

                        <div className="flex">
                        {/* <img src={stline} className="st-line-13"></img> */}
                        <img src={arrow} className="arrow-line-13" ></img>
                        <Button className="Geysers-button" ><p >8 Hostels Geysers</p></Button>
                        <div className="flex inputs3-pcc1">
                            <div >
                                <b > Current(A):</b>
                                <Input disabled className="disabled-cursor1 input " />                      
                            </div>
                            
                            <div className="normal">
                                <b> Power(W):</b>
                               <Input disabled className="disabled-cursor1 input " />
                            </div>
                            <div className="ener">
                                <b className="let"> Energy Meter(KWh):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                            <div  className="ener2">
                                <b >Energy(Kwh):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                        </div>
                        </div>

                        <div className="flex">
                        {/* <img src={stline} className="st-line-14"></img> */}
                        <img src={arrow} className="arrow-line-14" ></img>
                        <Button className="ac-button" ><p >53 Rooms A/C's</p></Button>
                        <div className="flex inputs4-pcc1">
                            <div >
                                <b > Current(A):</b>
                                <Input disabled className="disabled-cursor1 input " />                      
                            </div>
                            
                            <div className="normal">
                                <b> Power(W):</b>
                               <Input disabled className="disabled-cursor1 input " />
                            </div>
                            <div className="ener">
                                <b className="let"> Energy Meter(KWh):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                            <div  className="ener2">
                                <b >Energy(Kwh):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                        </div>
                        </div>
                 </div>

                          {/*                          */}
                 <div className="new">
                     <div class="main">
                            <div class="flex">
                            <img src={stline} className="st-line-11"></img>
                            <img src={arrow} className="arrow-line-11" ></img>
                            <Button className="front-button" ><p >FrontCampusPanel</p></Button>
                            <div className="flex inputs-pcc1">
                               <div >
                                <b > Current(A):</b>
                                <Input disabled className="disabled-cursor1 input " />                      
                            </div>
                            
                            <div className="normal">
                                <b> Power(W):</b>
                               <Input disabled className="disabled-cursor1 input " />
                            </div>
                            <div className="ener">
                                <b className="let"> Energy Meter(KWh):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                            <div  className="ener2">
                                <b >Energy(Kwh):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                            </div>
                            </div>
                            
                            <div className="flex">
                            {/* <img src={stline} className="st-line-12"></img> */}
                            <img src={arrow} className="arrow-line-12" ></img>
                            <Button className="annapurna-button" ><p >Annapurna Canteen A/C's</p></Button>
                            <div className="flex inputs2-pcc1">
                               <div >
                                <b > Current(A):</b>
                                <Input disabled className="disabled-cursor1 input " />                      
                            </div>
                            
                            <div className="normal">
                                <b> Power(W):</b>
                               <Input disabled className="disabled-cursor1 input " />
                            </div>
                            <div className="ener">
                                <b className="let"> Energy Meter(KWh):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                            <div  className="ener2">
                                <b >Energy(Kwh):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                            </div>
                            </div>

                            <div className="flex">
                            {/* <img src={stline} className="st-line-13"></img> */}
                            <img src={arrow} className="arrow-line-13" ></img>
                            <Button className="Hostels-button" ><p > Hostels (RRSV&GVVS)</p></Button>
                            <div className="flex inputs3-pcc1">
                               <div >
                                <b > Current(A):</b>
                                <Input disabled className="disabled-cursor1 input " />                      
                            </div>
                            
                            <div className="normal">
                                <b> Power(W):</b>
                               <Input disabled className="disabled-cursor1 input " />
                            </div>
                            <div className="ener">
                                <b className="let"> Energy Meter(KWh):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                            <div  className="ener2">
                                <b >Energy(Kwh):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                            </div>
                            </div>

                            <div className="flex">
                            <img src={stline} className="st-line-14"></img>
                            <img src={arrow} className="arrow-line-14" ></img>
                            <Button className="annapurna-lighting-button" ><p >Annapurna Canteen Lighting</p></Button>
                            <div className="flex inputs4-pcc1">
                               <div >
                                <b > Current(A):</b>
                                <Input disabled className="disabled-cursor1 input " />                      
                            </div>
                            
                            <div className="normal">
                                <b> Power(W):</b>
                               <Input disabled className="disabled-cursor1 input " />
                            </div>
                            <div className="ener">
                                <b className="let"> Energy Meter(KWh):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                            <div  className="ener2">
                                <b >Energy(Kwh):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                            </div>
                            </div>
                     </div>
                 </div>

{/*   Cross mark             */}

                 <div >
                        <img src={cross} height={23} className="cross-mark" />
                        <h5 className="CROSS-TXT">BUS COUPLER</h5>
                    </div>
                    <br/>
                    <br/>


                  {/*                         */}
                 <div className="new3">
                     <div class="main">
                            <div class="flex">
                            <img src={stline} className="st-line-11"></img>
                            <img src={arrow} className="arrow-line-11" ></img>
                            <Button className="d-button" ><p > SVECW'D' Block</p></Button>
                            <div className="flex inputs-pcc1">
                               <div >
                                <b > Current(A):</b>
                                <Input disabled className="disabled-cursor1 input " />                      
                            </div>
                            
                            <div className="normal">
                                <b> Power(W):</b>
                               <Input disabled className="disabled-cursor1 input " />
                            </div>
                            <div className="ener">
                                <b className="let"> Energy Meter(KWh):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                            <div  className="ener2">
                                <b >Energy(Kwh):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                            </div>
                            </div>
                            
                            <div className="flex">
                            {/* <img src={stline} className="st-line-12"></img> */}
                            <img src={arrow} className="arrow-line-12" ></img>
                            <Button className="a-canteen-button" ><p >Annapurna Canteen Blowers</p></Button>
                            <div className="flex inputs2-pcc1">
                               <div >
                                <b > Current(A):</b>
                                <Input disabled className="disabled-cursor1 input " />                      
                            </div>
                            
                            <div className="normal">
                                <b> Power(W):</b>
                               <Input disabled className="disabled-cursor1 input " />
                            </div>
                            <div className="ener">
                                <b className="let"> Energy Meter(KWh):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                            <div  className="ener2">
                                <b >Energy(Kwh):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                            </div>
                            </div>

                            <div className="flex">
                            {/* <img src={stline} className="st-line-13"></img> */}
                            <img src={arrow} className="arrow-line-13" ></img>
                            <Button className="sbsp-button" ><p > SBSP Block</p></Button>
                            <div className="flex inputs3-pcc1">
                               <div >
                                <b > Current(A):</b>
                                <Input disabled className="disabled-cursor1 input " />                      
                            </div>
                            
                            <div className="normal">
                                <b> Power(W):</b>
                               <Input disabled className="disabled-cursor1 input " />
                            </div>
                            <div className="ener">
                                <b className="let"> Energy Meter(KWh):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                            <div  className="ener2">
                                <b >Energy(Kwh):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                            </div>
                            </div>

                            <div className="flex">
                            <img src={stline} className="st-line-14"></img>
                            <img src={arrow} className="arrow-line-14" ></img>
                            <Button className="bvrc-button" ><p >BVRC New Block Lighting</p></Button>
                            <div className="flex inputs4-pcc1">
                               <div >
                                <b > Current(A):</b>
                                <Input disabled className="disabled-cursor1 input " />                      
                            </div>
                            
                            <div className="normal">
                                <b> Power(W):</b>
                               <Input disabled className="disabled-cursor1 input " />
                            </div>
                            <div className="ener">
                                <b className="let"> Energy Meter(KWh):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                            <div  className="ener2">
                                <b >Energy(Kwh):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                            </div>
                            </div>
                     </div>
                 </div>

                  {/*                        */}
                 <div className="new4">
                     <div class="main">
                            <div class="flex">
                            <img src={stline} className="st-line-11"></img>
                            <img src={arrow} className="arrow-line-11" ></img>
                            <Button className="park-button" ><p >Street Lights D.B</p></Button>
                            <div className="flex inputs-pcc1">
                               <div >
                                <b > Current(A):</b>
                                <Input disabled className="disabled-cursor1 input " />                      
                            </div>
                            
                            <div className="normal">
                                <b> Power(W):</b>
                               <Input disabled className="disabled-cursor1 input " />
                            </div>
                            <div className="ener">
                                <b className="let"> Energy Meter(KWh):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                            <div  className="ener2">
                                <b >Energy(Kwh):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                            </div>
                            </div>
                            
                            <div className="flex">
                            <img src={stline} className="st-line-12"></img>
                            <img src={arrow} className="arrow-line-12" ></img>
                            <Button className="d-block-button" ><p >SVECW 'D' Block A/C's</p></Button>
                            <div className="flex inputs2-pcc1">
                               <div >
                                <b > Current(A):</b>
                                <Input disabled className="disabled-cursor1 input " />                      
                            </div>
                            
                            <div className="normal">
                                <b> Power(W):</b>
                               <Input disabled className="disabled-cursor1 input " />
                            </div>
                            <div className="ener">
                                <b className="let"> Energy Meter(KWh):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                            <div  className="ener2">
                                <b >Energy(Kwh):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                            </div>
                            </div>

                            <div className="flex">
                            <img src={stline} className="st-line-133"></img>
                            <img src={arrow} className="arrow-line-13" ></img>
                            <Button className="spare-button" ><p >Spare</p></Button>
                            <div className="flex inputs3-pcc1">
                               <div >
                                <b > Current(A):</b>
                                <Input disabled className="disabled-cursor1 input " />                      
                            </div>
                            
                            <div className="normal">
                                <b> Power(W):</b>
                               <Input disabled className="disabled-cursor1 input " />
                            </div>
                            <div className="ener">
                                <b className="let"> Energy Meter(KWh):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                            <div  className="ener2">
                                <b >Energy(Kwh):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                            </div>
                            </div>

                            <div className="flex">
                            <img src={stline} className="st-line-14"></img>
                            <img src={stline} className="st-line-144"></img>
                            <img src={arrow} className="arrow-line-14" ></img>
                            <Button className="front-ac-button" ><p >Front Campus A/C's</p></Button>
                            <div className="flex inputs4-pcc1">
                               <div >
                                <b > Current(A):</b>
                                <Input disabled className="disabled-cursor1 input " />                      
                            </div>
                            
                            <div className="normal">
                                <b> Power(W):</b>
                               <Input disabled className="disabled-cursor1 input " />
                            </div>
                            <div className="ener">
                                <b className="let"> Energy Meter(KWh):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                            <div  className="ener2">
                                <b >Energy(Kwh):</b>
                                <Input disabled className="disabled-cursor1 input " />
                            </div>
                            </div>
                            </div>
                     </div>
                 </div>




                </div>

            </Card> 
          </div>
      
      
      </>
    );
}

export default Pcc1;