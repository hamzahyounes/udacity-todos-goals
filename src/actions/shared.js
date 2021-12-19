import API from 'todos-goals-api';

export const RECEIVE_DATA = 'RECEIVE_DATA';

function receiveDataAction(todos, goals) {
    return{
        type: RECEIVE_DATA,
        todos,
        goals
    }
}

export default function handleReceivingData() {
    return dispatch => {
        return Promise.all([
            API.fetchTodos(),
            API.fetchGoals()
        ]). then(([todos, goals]) => {
            dispatch(receiveDataAction(todos, goals))
        })
    }
}
