import React from "react";
import './DataAnalysis.css';
import { Input,Button,Card,ProgressCircular } from "react-rainbow-components";
import { Link } from 'react-router-dom';
import Nav2 from "./Nav2";
import { Progress, Space} from 'antd';
import  { useState, useEffect } from 'react';
import arrow from './arrow.png';
import stline from './stline.png';
// const formatProgress = (percent) => '${percent}';
const getColorEffi = (percent) => {
  if (percent >= 75) {
    return 'green';
  } else if (percent >= 50) {
    return 'blue';
  } else {
    return 'red';
  }
};
 const DataAnalysis = () => {

    const [current,setCurrent] =useState();
    const [power,setPower] =useState();
    const [Power_factor,setPower_factor] =useState();
    const [energy,setEnergy] =useState();
    const [Energy_Meter,setEnergy_Meter] =useState();
    const [Active_power,setActive_power] =useState();
    const [Reactive_power,setReactive_Power] =useState();
    const [Voltage,setVoltage] =useState();
    
    useEffect(() => {
        setInterval(() => {
            fetch("https://energybackend.onrender.com/api/sensordata")
                .then(async result => {
                    const data = await result.json();
                    setCurrent(data.current);
                    setPower(data.power);
                    setPower_factor(data.Power_factor);
                    setEnergy_Meter(data.Energy_Meter);
                    setActive_power(data.Active_power);
                    setReactive_Power(data.Reactive_power);
                    setPower_factor(data.Power_factor);
                    setEnergy(data.energy);
                    setVoltage(data.Voltage);

                    console.log(data);
                })
                .catch(error => {
                    console.error(error);
                });
        }, 1000);
    }, []);

 
    

    
  const limit = current;
  const limit2 = power;
  const limit3 = energy;

  const handleInputChange = (event) => {
    const newValue = parseFloat(event.target.value);
    setCurrent(newValue);
  };

  const handleInput2Change = (event) => {
    const newValue = parseFloat(event.target.value);
    setPower(newValue);
  };

  const handleInput3Change = (event) => {
    const newValue = parseFloat(event.target.value);
    setPower(newValue);
  };

  const getButtonStyle = () => {
    return {
      backgroundColor:  current > 350 || power>50000 || energy>15000 ? 'red' : 'rgb(0.26, 817, 185)', 
      color: 'green',
      height:40,
      width:100,
      padding:10,
      borderradius:10,
    };
  };



  

  return (
   
    <div className="background">
    <div>
      <Nav2 />
    </div>
    <center className="flex">
      <h3 className="txt-main glow-text">
        <img src="https://i.ibb.co/qkdZwY2/vit2.png" className="vi img-a" />
        VISHNU ENERGY MONITORING SYSTEM
      </h3>
    </center>
    <div className="flex">
      <div>
        
        <Card className="card flex">
          <div className="main">
            {/* pcc1 */}
            <div className="flex">
              <img src={stline} className="st-line-11" />
              <img src={arrow} className="arrow-line-11" />
  
              <Link to="/Pcc1">
                <Button className="button txt-in" type="link" id="actionButton" style={getButtonStyle()}>
                  <h6 className="t123">PCC-1</h6>
                </Button>
              </Link>
              <div className="flex inputs">
                <div>
                  <b className="t2 inp"> Current(A):</b>
                  <Input className="disabled-cursor1 input" value={current !== undefined ? current.toFixed(2) : ''} onChange={handleInputChange} />
                </div>
  
                <div>
                  <b className="inp"> Power(W):</b>
                  <Input className="disabled-cursor1 input" value={power !== undefined ? power.toFixed(2) : ''} onChange={handleInput2Change} />
                </div>
                {/* <div>
                  <b> Energy Meter(W):</b>
                  <Input className="disabled-cursor1 input" value={energy !== undefined ? energy.toFixed(2) : ''} onChange={handleInput3Change} />
                </div> */}
                <div>
                  <b className="inp">Energy(Kwh):</b>
                  <Input className="disabled-cursor1 input" value={energy !== undefined ? energy.toFixed(2) : ''} onChange={handleInput3Change} />
                </div>
              </div>
            </div>
            {/* pcc2 */}
            <div className="flex">
              <img src={stline} className="st-line-12" />
              <img src={arrow} className="arrow-line-12" />
              <Link to="/Pcc2">
                <Button className="button2 txt-in" type="link" id="actionButton" style={getButtonStyle()}>
                  <h6 className="txt-in">PCC-2</h6>
                </Button>
              </Link>
  
              <div className="flex inputs2">
                <div>
                  <b className="inp"> Current(A):</b>
                  <Input className="disabled-cursor1 input" value={current !== undefined ? current.toFixed(2) : ''} onChange={handleInputChange} />
                </div>
  
                <div>
                  <b className="inp"> Power(W):</b>
                  <Input className="disabled-cursor1 input" value={power !== undefined ? power.toFixed(2) : ''} onChange={handleInput2Change} />
                </div>
                {/* <div>
                  <b> Energy Meter(W):</b>
                  <Input className="disabled-cursor1 input" value={energy !== undefined ? energy.toFixed(2) : ''} onChange={handleInput3Change} />
                </div> */}
                <div>
                  <b className="inp">Energy(Kwh):</b>
                  <Input className="disabled-cursor1 input" value={energy !== undefined ? energy.toFixed(2) : ''} onChange={handleInput3Change} />
                </div>
              </div>
            </div>
            {/* pcc3 */}
            <div className="flex">
              <img src={stline} className="st-line-13" />
              <img src={arrow} className="arrow-line-13" />
              <Link to="/Pcc3">
                <Button className="button3 txt-in" type="link" id="actionButton" style={getButtonStyle()}>
                  <h6 className="txt-in">PCC-3</h6>
                </Button>
              </Link>
              <div className="flex inputs3">
                <div>
                  <b className="inp"> Current(A):</b>
                  <Input className="disabled-cursor1 input" value={current !== undefined ? current.toFixed(2) : ''} />
                </div>
  
                <div>
                  <b className="inp"> Power(W):</b>
                  <Input className="disabled-cursor1 input" value={power !== undefined ? power.toFixed(2) : ''} onChange={handleInput2Change} />
                </div>
                {/* <div>
                  <b> Energy Meter(W):</b>
                  <Input className="disabled-cursor1 input" value={energy !== undefined ? energy.toFixed(2) : ''} onChange={handleInput3Change} />
                </div> */}
                <div>
                  <b className="inp">Energy(Kwh):</b>
                  <Input className="disabled-cursor1 input" value={energy !== undefined ? energy.toFixed(2) : ''} onChange={handleInput3Change} />
                </div>
              </div>
            </div>
            {/* pcc4 */}
            <div className="flex">
              <img src={stline} className="st-line-141" />
              <img src={arrow} className="arrow-line-14" />
              <Link to="/Pcc4">
                <Button className="button4" type="link" id="actionButton" style={getButtonStyle()}>
                  <h6 className="txt-in">PCC-4</h6>
                </Button>
              </Link>
              <div className="flex inputs4">
                <div>
                  <b className="inp"> Current(A):</b>
                  <Input className="disabled-cursor1 input" value={current !== undefined ? current.toFixed(2) : ''} onChange={handleInputChange} />
                </div>
  
                <div>
                  <b className="inp"> Power(W):</b>
                  <Input className="disabled-cursor1 input" value={power !== undefined ? power.toFixed(2) : ''} onChange={handleInput2Change} />
                </div>
                {/* <div>
                  <b> Energy Meter(W):</b>
                  <Input className="disabled-cursor1 input" value={energy !== undefined ? energy.toFixed(2) : ''} onChange={handleInput3Change} />
                </div> */}
                <div>
                  <b className="inp">Energy(Kwh):</b>
                  <Input className="disabled-cursor1 input" value={energy !== undefined ? energy.toFixed(2) : ''} onChange={handleInput3Change} />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
  
      <div className="card2">
        <Card className="card-txt">
          <div className="flex-Card2 flex">
            <div className="part1">
              <div>
                <b className="inp2">Power(Kw):</b>
  
                <Space Wrap className="part1">
                  <Progress type="circle" strokeColor={getColorEffi(power)} percent={power} />
                </Space>
              </div>
              <div>
                <b className="inp2"> Voltage(v):</b>
                <Input className="disabled-cursor2 input"  value={Voltage !== undefined ? Voltage.toFixed(2) : ''} />
              </div>{' '}
              <br />
              <div>
                <b className="inp2">Energy_Consumption(Kwh):</b>
                <Input className="disabled-cursor2 input" value={Energy_Meter !== undefined ? Energy_Meter.toFixed(2) : ''} />
              </div>{' '}
              <br />
              <div>
                <b className="inp2"> Power Factor (COS φ):</b>
                <Input className="disabled-cursor2 input"  value={Power_factor !== undefined ? Power_factor.toFixed(2) : ''}/>
              </div>
            </div>
  
            <div className="part2">
              <div>
                <b className="inp2">Apparent Power:</b>
                <Input className="disabled-cursor2 input"  value={Active_power !== undefined ? Active_power.toFixed(2) : ''}/>
              </div>{' '}
              <br />
              <div>
                <b className="inp2"> Reactive_Power(KVA):</b>
                <Input className="disabled-cursor2 input"  value={Reactive_power !== undefined ? Reactive_power.toFixed(2) : ''} />
              </div>{' '}
              <br />
              <div>
                <b className="inp2">Energy_Meter(Kwh):</b>
                <Input className="disabled-cursor2 input" value={energy !== undefined ? energy.toFixed(2) : ''} />
              </div>{' '}
              <br />
              <div>
                <b className="inp2">Monthly_Energy(Kwh):</b>
                <Input className="disabled-cursor2 input"value={Energy_Meter !== undefined ? Energy_Meter.toFixed(2) : ''}/>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </div>
  
    
    
  );
}

export default DataAnalysis;