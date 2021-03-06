import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './home';
import Contact from './contact';
import Gallery from './gallery';

const Pages = () => {
    return(
        <Router>
            <Route exact path="/" component= {Home} />
            <Route path = "/contact" component = {Contact} />
            <Route path = "/gallery" component = {Gallery} />
        </Router>
    );
};
export default Pages;