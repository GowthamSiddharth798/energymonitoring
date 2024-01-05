import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Pcc1 from './Pcc1.js';
import Body from './Body.js';
import Pcc2 from './Pcc2.js';
import Pcc3 from './Pcc3.js';
import Pcc4 from './Pcc4.js';
import { Park } from './Pages/Park.js';
 const Navigat = () => {
  return (
    <Router>   
      <Switch>
        <Route path="/" exact component={Body} />
        <Route path="/Pcc1" exact component={Pcc1} />
        <Route path="/Pcc2" exact component={Pcc2} />
        <Route path="/Pcc3" exact component={Pcc3} />
        <Route path="/Pcc4" exact component={Pcc4} />
        <Route path="/Pcc1/Park Light D.B's"  exact component={Park}/>
      </Switch>
    </Router>
  )
}
export default Navigat;
