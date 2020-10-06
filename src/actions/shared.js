import { getInitialData } from '../utils/api'
import { reciveUsers } from './users'
import { reciveQuestions } from './questions'
import { showLoading, hideLoading } from 'react-redux-loading';
import { setAuthedUser } from '../actions/authedUser';


export function handleInitialData (){
    return(dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({users, questions}) => {
                dispatch(reciveUsers(users))
                dispatch(reciveQuestions(questions))
                dispatch(setAuthedUser(null))
                dispatch(hideLoading())
            })
    }
}