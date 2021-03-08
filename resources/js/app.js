/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

import Navigation from "./components/Navigation";

require('./bootstrap');
import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation
} from "react-router-dom";
import Footer from "./components/Footer";
import Incident from "./components/Incident";
import Help from "./components/Help";
import Home from "./components/Home";

class App extends React.Component{

    componentDidMount(){
//        document.title ;
    }

    render() {
        return (
            <Router>
                <Navigation/>
                <Switch>
                    <Route exact path="/">
                        <Home title="Domov"></Home>
                    </Route>
                    <Route path="/help">
                        <Help title="Pomoc"></Help>
                    </Route>
                    <Route path="/Incident">
                        <Incident title="Úraz"></Incident>
                    </Route>
                </Switch>
                <Footer/>
            </Router>
        );
    }
}
ReactDOM.render(<App />, document.querySelector('#app'));
