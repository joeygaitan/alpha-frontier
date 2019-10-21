import React, { Component } from 'react'

//navbar component
import Navbar from '../../higherOrderComponents/Navbar/navbar';

//images
import Header from '../../assets/header/0.jpg'

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
        <div>
            <Navbar/>
            <div className='headerImage'>
                <img src ={Header}/>
            </div>
            <div className ='bodyItems'>        
                    {/* {this.props.items.map((item)=>{
                        return (
                        <div> 

                        </div>)
                    })} */}
            </div>
        </div> );
    }
}
 


export default LandingPage;