import React, {Component} from 'react';

class AdminLogin extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:'',
            password:'',
            errorMessage: false
         }
    }

    signIn = () => {
        
    }

    render() { 
        return ( 
            <div>
                <input onChange={(e)=>{this.setState({username: e.target.value})}}/>

                <input onChange={(e)=>{this.setState({password: e.target.value})}}/>

                <button onClick={()=>this.signIn()}>Submit</button>
            </div>
         );
    }
}

export default AdminLogin;