import React from "react";
import './Pcc1.css';
import{Card,Input,Button} from 'react-rainbow-components'
import Header from './Header.js'
import Nav2 from "./Nav2";
import arrow from './arrow.png';
import stline from './stline.png';
import cross from './cross.jpg'


function Pcc1(){
   
    return(
        < >
        
          <div className="back-bg">
          <Nav2/>
          <center><h1><u>PCC-2</u></h1></center>
            <Card className="card-pcc1 flex">
           
                <div>
                         {/*                          */}
                 <div class="main">
                        <div class="flex">
                        <img src={stline} className="st-line-11"></img>
                        <img src={arrow} className="arrow-line-11" ></img>
                        <Button className="park-button" ><p >A/C's Metering</p></Button>
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
                        <Button className="stp-button" ><p >SVECW 'c' Block A/C's</p></Button>
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
                        <Button className="Geysers-button" ><p >SVECW 'B' Block A/C's</p></Button>
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
                        <Button className="ac-button" ><p >SVECW 'A' Block A/C's</p></Button>
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
                            <Button className="front-button" ><p >School Ground Supply</p></Button>
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
                            <Button className="annapurna-button" ><p >SVECW 'c' Block Lighting</p></Button>
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
                            <Button className="Hostels-button" ><p >SVECW'C'Block&LibraryLighting</p></Button>
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
                            <Button className="annapurna-lighting-button" ><p >SVECW 'A' Block Lighting</p></Button>
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
                            <Button className="d-button" ><p >PR-2 Supply</p></Button>
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
                            <Button className="a-canteen-button" ><p > Vishnu School Panel</p></Button>
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
                            <Button className="sbsp-button" ><p > Spare</p></Button>
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
                            <Button className="bvrc-button" ><p >1000 KVA Panel</p></Button>
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
                            <Button className="park-button" ><p >STL Supply</p></Button>
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
                            <Button className="d-block-button" ><p >VIT&VDC block-1 Lighting</p></Button>
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
                            <Button className="spare-button" ><p > VIT Library A/C's</p></Button>
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
                            <Button className="front-ac-button" ><p >Spare</p></Button>
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