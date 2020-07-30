import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import Facebook from './Components/Facebook';

export class App extends Component {

  responseGoogle=(response)=>{
    console.log(response);
    console.log(response.profileObj);
    
    
  }
  render() {
    return (
      <div>
        <GoogleLogin
        clientId="676827053885-l28q13lsa1snu3qm80c408ektc0hqk45.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        cookiePolicy={'single_host_origin'}/>

        
        <Facebook/>
      </div>
    )
  }
}

export default App