import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/landingPage/nonSignedInLandingPage/LandingPage';
import UserLogin from './components/Userlogin/UserLogin';
import AdminLogin from './components/AdminLogin/AdminLogin';

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
                        <Route path = '/login' component={UserLogin}/>
                        <Route path='/admin-login' component={AdminLogin}/>
                        <AuthenitactedRoute />
                    </Switch>
                </div>
            </Router>
         );
    }
}



export default App;