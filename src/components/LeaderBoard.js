import React from 'react';
import Contestant from './Contestant';

class LeaderBoard extends React.Component {
  render(){
    return (
      <div className='leaderBoard'>
          <Contestant />
          <Contestant />
      </div>
    );
  }
}

export default LeaderBoard;