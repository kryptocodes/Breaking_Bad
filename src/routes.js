import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from './App';
import Info from './info';

const Routes = () => {
    return(
    <Router>
        <Route exact path="/" component={App} />
        <Route exact path="/:id" component={Info} />
    </Router> )
}




export default Routes