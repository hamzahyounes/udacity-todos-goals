import API from 'todos-goals-api';

export const ADD_GOAL = 'ADD_GOAL';
export const REMOVE_GOAL = 'REMOVE_GOAL';
export const TOGGLE_GOAL = 'TOGGLE_TODO';

function addGoal(goal) {
    return {
        type: ADD_GOAL,
        goal,
    }
}
function removeGoal(id) {
    return {
        type: REMOVE_GOAL,
        id,
    }
}
function toggleGoal(id) {
    return {
        type: TOGGLE_GOAL,
        id,
    }
}

export function handleAddGoal(name, callbackFunc) {
    console.log("handleAddGoal has been reached.")
    return dispatch => {
        return API.saveGoal(name)
        .then(goal => {
            dispatch(addGoal(goal))
            callbackFunc();
        })
        .catch(() => alert('There was an error occured. Try again.'))
    }
}

export function handleDeleteGoal(goal) {
    return dispatch => {
        dispatch(removeGoal(goal.id))

        return API.deleteGoal(goal.id)
            .catch(() => {
                dispatch(addGoal(goal.id))
                alert("An error occured. Try again.")
            })
    }
}