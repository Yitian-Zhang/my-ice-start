import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Button} from "@alifd/next";

const LoginButton = (props) => {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  )
};

// function LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Logout
//     </button>
//   )
// };

const LogoutButton = (props) => {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  )
};

const Greeting = (props) => {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />
  } else {
    return <GuestGreeting />
  }
};

const UserGreeting = () => {
  return <label>Welcome back!</label>
};

const GuestGreeting = () => {
  return <label>Please Login!</label>
};

class LoginControl extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }

  handleLoginClick = () => {
    this.setState({
      isLoggedIn: true,
    })
  };

  handleLogoutClick = () => {
    this.setState({
      isLoggedIn: false
    })
  };


  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LoginButton onClick={this.handleLogoutClick}/>
    } else {
      button = <LogoutButton onClick={this.handleLoginClick}/>
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn}/>
        {button}
      </div>
    );
  }
}

export default LoginControl;
