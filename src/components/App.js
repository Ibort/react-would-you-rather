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
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import NotFound from './NotFound';


class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

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
                <Switch>
                  <Route path='/' exact component={Home} />
                  <Route path='/add' component={NewQuestion} />
                  <Route path='/question/:id' component={Question} />
                  <Route path='/leaderboard' component={LeaderBoard} />
                  <Route component={NotFound} />
                </Switch>
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
