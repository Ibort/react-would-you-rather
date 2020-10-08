import React from 'react';
import logo from '../logo.svg'
import { setAuthedUser } from '../actions/authedUser';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class SignIn extends React.Component {
  state = {
    user: ''
  }

  handleChange = (e) => {
    this.setState({
      user: e.target.value
  })
  }

  handleLogin = (e) => {
      e.preventDefault();
      const { dispatch, location } = this.props;
      const { user } = this.state;

      dispatch(setAuthedUser(user));
      this.props.history.push(location.pathname)
      this.setState({
          user: ''
      })
      
  }

  render(){
    const { users } = this.props;

    return (
      <div className='signInFrom'>
         <header className='signInForm-header'>
             <h3>Welcome to the Would you Rather App</h3>
             <span>Please Sign in to continue</span>
             <div className='signInFrom-box'>
                <img src={logo} alt='React Logo' width='200px'/>
                <h1>Sign In</h1>
                <form className='signInForm-form'> 
                    <select className='signInForm-select' onChange={this.handleChange}>
                        <option value=''></option>
                        {Object.keys(users).map((user) => (
                            <option key={user} value={users[user].id}>{users[user].name}</option>
                        ))}
                    </select>
                    <input className='signInForm-signInBtn' type='submit' value='Sign In' onClick={this.handleLogin} disabled={this.state.user === ''}/>
                </form>
             </div>
         </header>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users }){
  return {
    authedUser,
    users
  }
}

export default withRouter(connect(mapStateToProps)(SignIn));
