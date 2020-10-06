import React from 'react';
import Question from './QuestionsHome';
import { connect } from 'react-redux';

class Home extends React.Component {

  state = {
    activeTab: 'unanswered',
  }

  unanQ = (e) => {
    e.preventDefault()
    const unanQ = document.getElementById('unanQ');
    const anQ = document.getElementById('anQ');
    if(e.target === unanQ){
      this.setState({activeTab: 'unanswered'})
      unanQ.classList.add("homeScreen-btn-active")
      anQ.classList.remove("homeScreen-btn-active") 
    }
    if(e.target === anQ){
      this.setState({activeTab: ''})
      anQ.classList.add("homeScreen-btn-active")
      unanQ.classList.remove("homeScreen-btn-active") 
    }
       
  }


  render(){
    const anQ = this.props.questionIds.filter(id => !Object.keys(this.props.userQ).includes(id))
    const unanQ = this.props.questionIds.filter(id => Object.keys(this.props.userQ).includes(id))

    return (
      <div>
        <div className='homeScreen'>
            <div className='homeScreen-btn'>     
              <span id='unanQ' className='homeScreen-btn-active' onClick={this.unanQ} >Unanswered Questions</span>
              <span id='anQ' onClick={this.unanQ} >Answered Questions</span>
          </div>
          {anQ.length === 0 && (
            <h1>There are no New Qestions</h1>
          )}
          {this.state.activeTab === 'unanswered' && (anQ.map((id) => (
            <Question 
              key={id}
              id={id}      
            />
          )))}
          {this.state.activeTab !== 'unanswered' && (unanQ.map((id) => (
            <Question 
              key={id}
              id={id}      
            />
          )))}            
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser, users }){
  const userQ = users[authedUser].answers
  return {
    questionIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
      userQ
  }
}

export default connect(mapStateToProps)(Home);
