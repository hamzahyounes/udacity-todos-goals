import API from 'todos-goals-api';

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

function addTodo(todo) {
    return {
        type: ADD_TODO,
        todo,
    }
}
function removeTodo(id) {
    return {
        type: REMOVE_TODO,
        id
    }
}
function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id,
    }
}

export function handleAddTodo(name, callbackFunc) {
    return dispatch => {
        return API.saveTodo(name)
                .then((todo) => {
                    dispatch(addTodo(todo))
                    callbackFunc();
                })
                .catch(() => alert("There was an error. Try again."))
    }
}

export function handleDeleteTodo(todo) {
    return dispatch => {
        dispatch(removeTodo(todo.id));
        return API.deleteTodo(todo.id)
            .catch(() => {
                dispatch(addTodo(todo))
                alert("An error occured. Try again.")
            })
    }
}

export function handleToggleTodo(item) {
    return dispatch => {
        dispatch(toggleTodo(item.id))
        return API.saveTodoToggle(item.id)
            .catch(() => {
                dispatch(toggleTodo(item.id))
                alert("An error occured. Try again.")
            })
    }
}