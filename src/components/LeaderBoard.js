import React from 'react';
import Contestant from './Contestant';
import { connect } from 'react-redux';

class LeaderBoard extends React.Component {
  render(){
    const { users, usersOrder } = this.props;
    console.log('test');
    return (
      <div className='leaderBoard'>
          {usersOrder.map((user, index) => (
            <Contestant user={users[user]} place={index} key={user}/>
          ))}
          
      </div>
    );
  }
}

function mapStateToProps({ users, authedUser }){
  return {
    usersOrder: Object.keys(users)
            .sort((a,b) => (Object.keys(users[b].answers).length+users[b].questions.length) - (Object.keys(users[a].answers).length+users[a].questions.length)),
    users,
    authedUser
  }
}

export default connect(mapStateToProps)(LeaderBoard);