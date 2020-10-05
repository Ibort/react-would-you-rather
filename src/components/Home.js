import React from 'react';
import Question from './QuestionsHome';

class Home extends React.Component {
  render(){
    return (
      <div className='homeScreen'>
          <div className='homeScreen-btn'>     
            <span className='homeScreen-btn-active' >Unanswered Questions</span>
            <span>Answered Questions</span>
        </div>        
        <Question />
        <Question />
      </div>
    );
  }
}

export default Home;
