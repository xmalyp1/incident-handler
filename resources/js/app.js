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
import Incident from "./pages/Incident";
import Help from "./pages/Help";
import Home from "./pages/Home";
import CookieMessage from "./components/CookieMessage";

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
                        <Help title="Podpora"></Help>
                    </Route>
                    <Route path="/Incident">
                        <Incident title="Úraz"></Incident>
                    </Route>
                </Switch>
                <Footer/>
                <CookieMessage/>
            </Router>
        );
    }
}
ReactDOM.render(<App />, document.querySelector('#app'));
