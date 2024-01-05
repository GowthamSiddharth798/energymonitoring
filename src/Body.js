import React from "react";
import './body.css';
// import{Card} from 'react-bootstrap';
import { Input,Button,Card,ProgressCircular } from "react-rainbow-components";
import { Link } from 'react-router-dom';
// import Navigations from './Navigations';
import Header from "./Header";
import  { useState, useEffect } from 'react';
import axios from 'axios';



   

function Body(){
   
    const [current,setCurrent] =useState();
    const [power,setPower] =useState();
    const [energy,setEnergy] =useState();

    // const [current2,setCurrent2] =useState();
    // const [power2,setPower2] =useState();
    // const [energy2,setEnergy2] =useState();


    useEffect(() => {
        setInterval(() => {
            fetch("http://localhost:8000/api/sensordata")
                .then(async result => {
                    const data = await result.json();
                    setCurrent(data.current);
                    setPower(data.power);
                    setEnergy(data.energy);
                    console.log(data);
                })
                .catch(error => {
                    console.error(error);
                });
        }, 2000);
    }, []);

    return(
    <>
   
    <div className="background">
     <Header/>
       <center><h3 className="txt-main">VISHNU ENERGY MONITORING SYSTEM</h3></center>
      <div class="flex">
                <div>
                    <Card className="card flex">
                        <div class="main">
                            {/* pcc1 */}
                        <div class="flex">
                        <img src="https://art.pixilart.com/e4c4e29906724a1.png" className="st-line-11"></img>
                        <img src="https://www.downloadclipart.net/large/12584-right-black-arrow-design.png" className="arrow-line-11" ></img>
                       
                        
                        <Link to="/Pcc1">
                            <Button className="button txt-in" type="link" > 
                            <h6 className="txt-in">PCC-1</h6>
                            </Button> 
                            
                        </Link>
                        <div className="flex inputs">
                            <div >
                                <b class="inp"> Current(A):</b>
                                <Input  className="disabled-cursor1  input" value={current}  />                      
                            </div>
                            
                            <div>
                                <b class="inp"> Power(W):</b>
                                <Input  className="disabled-cursor1 input " value={power} />
                            </div>
                            <div >
                                <b class="inp">Energy(Kwh):</b>
                                <Input  className="disabled-cursor1 input " value={energy} />
                            </div>
                        </div>
                        </div>
                        {/* pcc2  */}
                        <div className="flex">
                        <img src="https://art.pixilart.com/e4c4e29906724a1.png" className="st-line-12"></img>
                        <img src="https://www.downloadclipart.net/large/12584-right-black-arrow-design.png" className="arrow-line-12" ></img>
                        <Link to="/Pcc2"> <Button className="button2" ><h6 className="txt-in">PCC-2</h6> </Button> </Link>
                        <div className="flex inputs2">
                            <div >
                                <b class="inp"> Current(A):</b>
                                <Input  className="disabled-cursor1 input " value={current}  />                      
                            </div>
                            
                            <div>
                                <b class="inp"> Power(W):</b>
                                <Input  className="disabled-cursor1 input " value={power}/>
                            </div>
                            <div >
                                <b class="inp">Energy(Kwh):</b>
                                <Input  className="disabled-cursor1 input " value={energy}/>
                            </div>
                        </div>
                        </div>
                        {/* pcc3 */}
                        <div className="flex">
                        <img src="https://art.pixilart.com/e4c4e29906724a1.png" className="st-line-13"></img>
                        <img src="https://www.downloadclipart.net/large/12584-right-black-arrow-design.png" className="arrow-line-13" ></img>
                        <Link to="/Pcc3"><Button className="button3" ><h6 className="txt-in" >PCC-3</h6></Button></Link>
                        <div className="flex inputs3">
                            <div >
                                <b class="inp"> Current(A):</b>
                                <Input  className="disabled-cursor1 input " value={current}/>                      
                            </div>
                            
                            <div>
                                <b class="inp"> Power(W):</b>
                                <Input  className="disabled-cursor1 input " value={power} />
                            </div>
                            <div >
                                <b class="inp">Energy(Kwh):</b>
                                <Input  className="disabled-cursor1 input "  value={energy}/>
                            </div>
                        </div>
                        </div>
                        {/* pcc4 */}
                        <div className="flex">
                        <img src="https://art.pixilart.com/e4c4e29906724a1.png" className="st-line-141"></img>
                        <img src="https://www.downloadclipart.net/large/12584-right-black-arrow-design.png" className="arrow-line-14" ></img>
                        <Link to="/Pcc4"><Button className="button4" ><h6 className="txt-in" >PCC-4</h6></Button></Link>
                        <div className="flex inputs4">
                            <div >
                                <b class="inp"> Current(A):</b>
                                <Input  className="disabled-cursor1 input "  value={current}/>                      
                            </div>
                            
                            <div>
                                <b class="inp"> Power(W):</b>
                                <Input  className="disabled-cursor1 input " value={power} />
                            </div>
                            <div >
                                <b class="inp">Energy(Kwh):</b>
                                <Input  className="disabled-cursor1 input " value={energy}/>
                            </div>
                        </div>
                        </div>
                        </div>
                    </Card> 
                </div>

                <div class="card2">
                  <Card className="card-txt" >
                        <p >Vishnu Trust</p>
                        <div >
                               <div>
                                   <ProgressCircular value={75.3} variant="success"/>
                               </div>
                                <div  >
                                    <b > Total Energy(Kwh):</b>
                                    <Input disabled className="disabled-cursor2 input " />                      
                                </div>
                                
                                <div>
                                    <b> Power Factor:</b>
                                    <Input disabled className="disabled-cursor2 input " />
                                </div>
                                {/* <div >
                                    <b >Energy(Kwh):</b>
                                    <Input disabled className="disabled-cursor2 input " />
                                </div> */}
                                <div >
                                    <b > Reactive Power(KVA):</b>
                                    <Input disabled className="disabled-cursor2 input " />                      
                                </div>
                                
                                <div>
                                    <b>Active Power:</b>
                                    <Input disabled className="disabled-cursor2 input " />
                                </div>
                        </div>
                                           
                </Card> 
                </div>

                <div class="card3">
                <Card className="card-txt" >
                        <div >
                            <div>
                            <ProgressCircular value={55} variant="success"/>

                            </div>
                                <div  >
                                    <b > Total Energy(Kwh):</b>
                                    <Input disabled className="disabled-cursor2 input " />                      
                                </div>
                                
                                <div>
                                    <b> Power Factor:</b>
                                    <Input disabled className="disabled-cursor2 input " />
                                </div>
                                {/* <div >
                                    <b >Energy(Kwh):</b>
                                    <Input disabled className="disabled-cursor2 input " />
                                </div> */}
                                <div >
                                    <b > Reactive Power(KVA):</b>
                                    <Input disabled className="disabled-cursor2 input " />                      
                                </div>
                                
                                <div>
                                    <b>Active Power:</b>
                                    <Input disabled className="disabled-cursor2 input " />
                                </div>
                        </div>
                </Card> 
                </div>

      </div>
    
    </div>
    </>
    );
}

export default Body;