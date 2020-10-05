import { getInitialData } from '../utils/api'
import { reciveUsers } from './users'
import { reciveQuestions } from './questions'
import { setAuthedUser } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading';

const AUTHED_ID = 'sarahedo';

export function handleInitialData (){
    return(dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({users, questions}) => {
                dispatch(reciveUsers(users))
                dispatch(reciveQuestions(questions))
                dispatch(setAuthedUser(AUTHED_ID))
                dispatch(hideLoading())
            })
    }
}