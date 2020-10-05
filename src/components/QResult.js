import React from 'react';

class QResult extends React.Component {
  render(){
    return (
      <div className='question-result'>
          <h3>Woud you rather qestion?</h3>
          <div className='question-result-pol'>
              <div id='resPolRes'>50%</div>
          </div>
          <span>1 of 2 Votes</span>
      </div>
    );
  }
}

export default QResult;