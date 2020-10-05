import React from 'react';
import HeaderNav from './HeaderNav';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
//import LeaderBoard from './LeaderBoard';
//import Question from './Question';
//import SignIn from './SignIn';
import NewQuestion from './NewQuestion';
import Home from './Home';
import LoadingBar from 'react-redux-loading';


class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render(){
    return (
      <div>
        <LoadingBar />
        <header className='appHeader'>Would you Rather...</header>
        <HeaderNav/>
        {this.props.loading === true 
          ? null
          : <NewQuestion /> }        
      </div>
    );
  }
}

function mapStateToProps({ authedUser }){
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
