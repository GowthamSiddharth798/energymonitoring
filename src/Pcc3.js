import React from "react";
import './Pcc1.css';
import{Card,Input,Button} from 'react-rainbow-components'
import Nav2 from "./Nav2";
import arrow from './arrow.png';
import stline from './stline.png';
import cross from './cross.jpg'


function Pcc3(){
   
    return(
        < >
        
          <div className="back-bg">
          <Nav2/>
          <center><h1><u>PCC-3</u></h1></center>
            <Card className="card-pcc1 flex">
           
                <div>
                         {/*                          */}
                 <div class="main">
                        <div class="flex">
                        <img src={stline} className="st-line-11"></img>
                        <img src={arrow} className="arrow-line-11" ></img>
                        <Button className="park-button" ><p >VDC Block 2&3 Lighting</p></Button>
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
                        <Button className="stp-button" ><p >150 KVAR Capcitor Bank</p></Button>
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
                        <Button className="Geysers-button" ><p > VDC Block 2 & 3 A/C's</p></Button>
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
                        <Button className="ac-button" ><p >Mini Auditorium A/C's</p></Button>
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
                            <Button className="front-button" ><p >VDC Girls Hostel</p></Button>
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
                            <Button className="annapurna-button" ><p >VDC Library A/c's</p></Button>
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
                            <Button className="Hostels-button" ><p >SVECW Library A/C's</p></Button>
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
                            <Button className="annapurna-lighting-button" ><p >Seetha Auditorium A/C's </p></Button>
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
                            <Button className="d-button" ><p >VDC Block 1 A/C's </p></Button>
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
                            <Button className="a-canteen-button" ><p >Hostels Geysers(6-N.o's)</p></Button>
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
                            <Button className="sbsp-button" ><p > VDC Hostels A/C's</p></Button>
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
                            <Button className="bvrc-button" ><p >53 Rooms Geysers</p></Button>
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
                            <Button className="park-button" ><p >VDC Hostels Geysers </p></Button>
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
                            <Button className="d-block-button" ><p >Medha Hostel Lighting</p></Button>
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
                            <Button className="spare-button" ><p >Medha Hostel Geysers</p></Button>
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
                            <Button className="front-ac-button" ><p >CSSD Building Lighting</p></Button>
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

export default Pcc3;