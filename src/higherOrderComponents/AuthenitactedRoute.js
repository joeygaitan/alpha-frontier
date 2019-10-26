import React, { Component } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom'

class AuthenitactedRoute extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        const {user, pending} = this.props
        if (user && !pending){
            return( <div>...pending</div>)
        }
        else if (user){
            return <Route render = { component => ( 
                <>
                    <Component component = {component} />
                </>
            )}/>
            }else{
                return <Redirect to = '/login'/>
            }
        }
}
 
export default AuthenitactedRoute;