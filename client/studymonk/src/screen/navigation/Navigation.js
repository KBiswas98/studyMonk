import React, { Component } from 'react'
import { BrowserRouter as Router, Switch,  Route } from 'react-router-dom'

import Login from '../login/Login'
import Register from '../register/Register'
import Home from '../home/Home'
import Dashbord from '../dashbord/Dashbord'



export default class Navigation extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/dashbord" component={Dashbord}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                </Switch>
            </Router>
        )
    }
}
