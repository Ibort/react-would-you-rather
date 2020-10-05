import React from 'react';
import { connect } from 'react-redux';

class QuestionsHome extends React.Component {

  toQuestion = (e, id) => {
    e.preventDefault()
    // direct to the question
  }

  render(){
    const { question, avatar } = this.props;

    if(question === null) {
      return <p>This question dosent exits</p>
    }
    
    const {
      author, optionOne
    } = question
    const nameCapitalized = author.charAt(0).toUpperCase() + author.slice(1)

    return (
      <div className='question'> 
        <header className='question-header'>{nameCapitalized}</header>
        <div className='question-cont'>
            <div className='question-cont-avatar'>
                <img src={avatar} alt='avatar' width='120px' />
            </div>
            <div className='question-cont-text'>
                <span className='question-cont-text-header'>Would you Rather</span>
                <p>...{optionOne.text}...</p>
                <span className='question-cont-text-btn' onClick={(e) => this.toQuestion(e, this.props.id)}>View Poll</span>
            </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, users}, { id }){
  const question = questions[id];
  const avatar = users[question.author].avatarURL
  return {
    authedUser,
    avatar: avatar,
    question : question
      ? question
      : null
  }
}

export default connect(mapStateToProps)(QuestionsHome);