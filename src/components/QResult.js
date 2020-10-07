import React from 'react';

class QResult extends React.Component {
  render(){
    const { votes, votesAll, userAnswer, id } = this.props    
    const votePercent = votes/votesAll*100;

     const format = (userAnswer === id) 
      ? 'question-result question-result-yourAnswer' 
      : 'question-result';

    return (
      <div className={format}>
          {userAnswer === id && (<div className='question-result-mark'>Your Answer</div>)}
          <h3>Woud you rather qestion?</h3>
          <div className='question-result-pol'>
            <div id='resPolRes' style={{width:`${votePercent}%`}}> {Math.round(votePercent)}%</div>
          </div>
          <span>{votes} of {votesAll} Votes</span>
      </div>
    );
  }
}

export default QResult;