import { saveQuestionAnswer} from '../utils/api';

export const RECIVE_USERS = 'RECIVE_USERS';
export const USER_ANSWER_QUESTION = 'USER_ANSWER_QUESTION';

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