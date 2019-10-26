import React, { Component } from 'react';
import './styles/nonSignedInLandingPage.css'

class Nabbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <div id='navBar'>
                    <h5 className='h5Tags'>Contact Info</h5>
                    <h5 className='h5Tags'>About Us</h5>
                    <h5 className='h5Tags'>Sign Up</h5>
                    <h5 className='h5Tags'>Sign In</h5>
                </div>
            </>
         );
    }
}
 
export default Nabbar;