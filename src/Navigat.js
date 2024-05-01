import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Pcc1 from './Pcc1.js';
import Body from './Body.js';
import Pcc2 from './Pcc2.js';
import Pcc3 from './Pcc3.js';
import Pcc4 from './Pcc4.js';
import Menu from './Menu.js';
import  Myaccounts  from './Myaccount.js';
import Livegraphs from './Livegraphs.js';
import Layout from './Layout.js';
import Info from './Information.js'
import { Park } from './Pages/Park.js';
import DataAnalysis from './DataAnalysis.js'
import Login from './Pages/Login.js';
import Service from './Services.js';
 const Navigat = () => {
  return (
    <Router>   
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/Home" exact component={Body} />
        <Route path="/Pcc1" exact component={Pcc1} />
        <Route path="/Pcc2" exact component={Pcc2} />
        <Route path="/Pcc3" exact component={Pcc3} />
        <Route path="/Pcc4" exact component={Pcc4} />
        <Route path="/Pcc1/Park Light D.B's"  exact component={Park}/>
        <Route path="/Pcc1/Stp"  exact component={Park}/>
        <Route path="/Myaccounts" exact component={Myaccounts}/>
        <Route path="/Livegraphs" exact component={Livegraphs}/>
        <Route path="/Layout" exact component={Layout}/>
        <Route path="/Info" exact component={Info}/>
        <Route path="/Data Analysis" exact component={DataAnalysis}/>
        <Route path="/Services" exact component={Service}/>
      </Switch>
    </Router>
  )
}
export default Navigat;
