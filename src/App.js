
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/landingPage/LandingPage';
import Login from './components/login/Login'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Router>
                <div>
                    <Switch>
                        <Route exact path = '/' component={LandingPage}/>
                        <Route path = '/login' component={Login}/>
                    </Switch>
                </div>
            </Router>
         );
    }
}



export default App;