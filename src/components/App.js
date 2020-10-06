import React from 'react';
import HeaderNav from './HeaderNav';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import LeaderBoard from './LeaderBoard';
import Question from './Question';
import SignIn from './SignIn';
import NewQuestion from './NewQuestion';
import Home from './Home';
import LoadingBar from 'react-redux-loading';
import { BrowserRouter, Route } from 'react-router-dom'


class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  //data={{name:users[authedUser].name, avatar:users[authedUser].avatarURL}}
  render(){
    return (
      <BrowserRouter>
        <div>
          <LoadingBar />
          <header className='appHeader'>Would you Rather...</header>
          <HeaderNav />
          {this.props.loading === true 
            ? <div>
                <Route path='/' component={SignIn} />
              </div>
            : <div>
                <Route path='/' exact component={Home} />
                <Route path='/new' component={NewQuestion} />
                <Route path='/question/:id' component={Question} />
                <Route path='/leaderboard' component={LeaderBoard} />
              </div>}        
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ authedUser }){
  return {
    loading: authedUser === null,
  }
}

export default connect(mapStateToProps)(App);
