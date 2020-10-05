import React from 'react';
import logo from '../logo.svg'

class SignIn extends React.Component {
  render(){
    return (
      <div className='signInFrom'>
         <header className='signInForm-header'>
             <h3>Welcome to the Would you Rather App</h3>
             <span>Please Sign in to continue</span>
             <div className='signInFrom-box'>
                <img src={logo} alt='React Logo' width='200px'/>
                <h1>Sign In</h1>
                <form className='signInForm-form'>
                    <select className='signInForm-select'>
                        <option>Ibort</option>
                        <option>Unless</option>
                    </select>
                    <input className='signInForm-signInBtn' type='submit' value='Sign In'/>
                </form>
             </div>
         </header>
      </div>
    );
  }
}

export default SignIn;
