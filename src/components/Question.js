import React from 'react';
import QResult from './QResult';
import { connect } from 'react-redux';
import { handleAnswerQuestion } from '../actions/questions';
import { handleUserAnswerQuestion } from  '../actions/users';


class Question extends React.Component {
  state = {
    selected: ''
  }

  handleChange = (e) => {
    this.setState({
      selected: e.target.value
  })

  }

  handleSubmit = (e) => {
      e.preventDefault();
      
      const { dispatch } = this.props;
      const data = {
        authedUser: this.props.authedUser, 
        qid: this.props.question.id, 
        answer: this.state.selected
      }
      dispatch(handleAnswerQuestion(data))
      .then(() => dispatch(handleUserAnswerQuestion(data)))
      

      this.setState({
          selected: ''
      })
  }

  render(){

    const { author, question, id, authedUserData } = this.props;
    const { selected } = this.state;
    const isAnswered = Object.keys(authedUserData.answers).filter(qid => qid === id).length;
    const votesA = question.optionOne.votes.length;
    const votesB = question.optionTwo.votes.length;
    const votesAll = votesA + votesB;
    const userAnswer = authedUserData.answers[id]

    return (
      <div className='question question-big'> 
        <header className='question-header'>{author.name}</header>
        <div className='question-cont'>
            <div className='question-cont-avatar'>
                <img src={author.avatarURL} alt='avatar' width='120px' />
            </div>
            {isAnswered === 0 && (
            <div className='question-cont-text'>
                <h2>Would you Rather ...</h2><br/>
                <form className='question-from'>
                    <input type="radio" id="optOne" name="gender" value="optionOne" onChange={this.handleChange}/>
                    <label >{question.optionOne.text}</label><br/><br/>
                    <input type="radio" id="optTwo" name="gender" value="optionTwo" onChange={this.handleChange}/>
                    <label >{question.optionTwo.text}</label><br/><br/>
                    <input className='question-submitBtn' type='submit' value='Submit' disabled={selected === ''} onClick={this.handleSubmit}/>
                </form>
            </div>
            )}
            {isAnswered === 1 && (
            <div className='question-cont-text'>
                <h2>Results...</h2>
                <QResult id={'optionOne'} votes={votesA} votesAll={votesAll} userAnswer={userAnswer}/>
                <QResult id={'optionTwo'} votes={votesB} votesAll={votesAll} userAnswer={userAnswer}/>
            </div>
            )}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser, users }, props){
  const { id } = props.match.params;
  const question = questions[id];
  const author = users[question.author];
  const authedUserData = users[authedUser]
  return {
    id,
    authedUser,
    author: author,
    question: question, 
    authedUserData
  }
}



export default connect(mapStateToProps)(Question);