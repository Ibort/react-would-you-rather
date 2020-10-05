import React from 'react';
import HeaderNav from './HeaderNav';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
//import LeaderBoard from './LeaderBoard';
//import Question from './Question';
//import SignIn from './SignIn';
//import Home from './Home';


class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render(){
    return (
      <div>
        <header className='appHeader'>Would you Rather...</header>
        <HeaderNav/>
      </div>
    );
  }
}

export default connect()(App);
