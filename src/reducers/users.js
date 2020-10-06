import { RECIVE_USERS,  USER_ANSWER_QUESTION, USER_ADD_QUESTION } from '../actions/users';

export default function users(state = {}, action) {
    switch(action.type) {
        case RECIVE_USERS: 
            return {
                ...state,
                ...action.users
            }
        case USER_ANSWER_QUESTION:
            const userVote = {[action.authedUser]: {
                                ...state[action.authedUser],
                                answers: {
                                    ...state[action.authedUser].answers,
                                    [action.qid]: action.answer
                                }
                            }            
            }
            return {
                ...state,
                ...userVote
            }
        case USER_ADD_QUESTION:
            const userQuestion = {[action.question.author]: {
                                    ...state[action.question.author],
                                    questions: state[action.question.author].questions.concat(action.question.id)                                                                            
                                }            
            }       
            return{
                ...state,
                ...userQuestion
            }
        default:
            return state
    }
}