import { getInitialData } from '../utils/api'
import { reciveUsers } from './users'
import { reciveQuestions } from './questions'
import { setAuthedUser } from './authedUser'

const AUTHED_ID = 'sarahedo';

export function handleInitialData (){
    return(dispatch) => {
        return getInitialData()
            .then(({users, questions}) => {
                dispatch(reciveUsers(users))
                dispatch(reciveQuestions(questions))
                dispatch(setAuthedUser(AUTHED_ID))
            })
    }
}