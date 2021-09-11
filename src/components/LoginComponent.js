import Greeting from './Greeting';
import React from 'react';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';
class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
      if (isLoggedIn) {
          button = <LogoutButton onClick={this.handleLogoutClick} />;
      } else {
          button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </>
    );
  }
}
export default LoginComponent;