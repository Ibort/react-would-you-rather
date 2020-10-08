import React from 'react';
import { connect } from 'react-redux';
import {NavLink, withRouter } from 'react-router-dom';

class QuestionsHome extends React.Component {

  toQuestion = (e, id) => {
    e.preventDefault()
    this.props.history.push(`/question/${id}`)
  }

  render(){
    const { question, avatar, id } = this.props;

    if(question === null) {
      return <p>This question dosent exits</p>
    }
    
    const { optionOne } = question;
    const { name } = this.props;

    return (
      <div className='question'> 
        <header className='question-header'>{name}</header>
        <div className='question-cont'>
            <div className='question-cont-avatar'>
                <img src={avatar} alt='avatar' width='120px' />
            </div>
            <div className='question-cont-text'>
                <span className='question-cont-text-header'>Would you Rather</span>
                <p>...{optionOne.text}...</p>
                <NavLink to={`/question/${id}`} className='question-cont-text-btn' onClick={(e) => this.toQuestion(e, this.props.id)}>View Poll</NavLink>
            </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, users}, { id }){
  const question = questions[id];
  const avatar = users[question.author].avatarURL
  const name =  `${users[question.author].name} asks:`
  return {
    authedUser,
    avatar: avatar,
    question : question
      ? question
      : null,
    name
  }
}

export default withRouter(connect(mapStateToProps)(QuestionsHome));