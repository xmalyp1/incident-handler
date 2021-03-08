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
    Route
} from "react-router-dom";
import Footer from "./components/Footer";
import Incident from "./components/Incident";
import Help from "./components/Help";
import Home from "./components/Home";

class App extends React.Component{

    componentDidMount() {
        document.title = 'TEXT';
    }

    render() {
        return (
            <Router>
                <Navigation/>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route path="/help">
                        <Help></Help>
                    </Route>
                    <Route path="/Incident">
                        <Incident></Incident>
                    </Route>
                </Switch>
                <Footer/>
            </Router>
        );
    }
}
ReactDOM.render(<App />, document.querySelector('#app'));
