import { RECIVE_QUESTIONS, ADD_QUESTION, ANSWER_QUESTION } from '../actions/questions';

export default function questions(state = {}, action) {
    switch(action.type) {
        case RECIVE_QUESTIONS: 
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question,
            }
        case ANSWER_QUESTION: 
            const votes = {[action.qid]: {
                            ...state[action.qid], 
                            [action.answer]: {
                                ...state[action.qid][action.answer],
                                votes: state[action.qid][action.answer].votes.concat(action.authedUser)
                            }    
                                                  
            }}
            return {
                ...state,
                ...votes
            }
        default:
            return state
    }
}