import { saveQuestionAnswer, saveQuestion} from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

export const RECIVE_USERS = 'RECIVE_USERS';
export const USER_ANSWER_QUESTION = 'USER_ANSWER_QUESTION';
export const USER_ADD_QUESTION = 'USER_ADD_QUESTION';

export function reciveUsers(users) {
    return {
        type:RECIVE_USERS,
        users
    }
}

function userAnswerQuestion( {authedUser, qid, answer }) {
    return {
      type: USER_ANSWER_QUESTION,
      authedUser,
      qid,
      answer
    }
  }
  
  export function handleUserAnswerQuestion(info) {
    return (dispatch) => {
      dispatch(userAnswerQuestion(info));
  
      return saveQuestionAnswer(info)
        .catch((e) => {
          console.warn('Error with question saving',e);
          dispatch(userAnswerQuestion(info));
          alert('There was an error try again');
        })
    }
  }

  function userAddQuestion(question) {
    return {
      type:USER_ADD_QUESTION,
      question
    }
  }
  
  export function userHandleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
      const { authedUser } = getState();
      dispatch(showLoading())
  
      return saveQuestion({
        optionOneText,
        optionTwoText,
        author: authedUser
      })
      .then((question) => dispatch(userAddQuestion(question)))
      .then(() => dispatch(hideLoading()))
      .catch((e) => {
        console.warn('Error with saving new question',e)
      })
    }
  }