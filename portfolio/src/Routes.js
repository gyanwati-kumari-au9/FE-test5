import React from 'react';
import {Route, Switch,} from "react-router-dom";
import './index.css';
import Home from './Pages/home';
import Contactus from './Pages/contact';


class Routes extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
    render() {
      return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact-us" exact component={Contactus} />
            {/* <Route path="*" component={NotFound} /> */}
        </Switch>
        
      );
    }
};

export default Routes;