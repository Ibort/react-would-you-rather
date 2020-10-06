import { saveQuestion,  saveQuestionAnswer} from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const RECIVE_QUESTIONS = 'RECIVE_QUESTION';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

export function reciveQuestions (questions) {
  return {
    type: RECIVE_QUESTIONS,
    questions,
  }
}

function addQuestion(question) {
  return {
    type:ADD_QUESTION,
    question
  }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading())

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    })
    .then((question) => dispatch(addQuestion(question)))
    .then(() => dispatch(hideLoading()))
    .catch((e) => {
      console.warn('Error with saving new question',e)
    })
  }
}

function answerQuestion( {authedUser, qid, answer }) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer
  }
}

export function handleAnswerQuestion(info) {
  return (dispatch) => {
    dispatch(answerQuestion(info));

    return saveQuestionAnswer(info)
      .catch((e) => {
        console.warn('Error with question saving',e);
        dispatch(answerQuestion(info));
        alert('There was an error try again');
      })
  }
}