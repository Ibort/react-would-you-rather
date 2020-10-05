import React from 'react';
import av1 from '../img/avatar/boy.png'

class QuestionsHome extends React.Component {
  render(){
    return (
      <div className='question'> 
        <header className='question-header'>Name Asks</header>
        <div className='question-cont'>
            <div className='question-cont-avatar'>
                <img src={av1} alt='avatar' width='120px' />
            </div>
            <div className='question-cont-text'>
                <span className='question-cont-text-header'>Would you Rather</span>
                <p>...question from the man...</p>
                <span className='question-cont-text-btn' >View Poll</span>
            </div>
        </div>
      </div>
    );
  }
}

export default QuestionsHome;