import {ADD_TODO, REMOVE_TODO, SETCH_FILTER, SETCH_VALUE} from '../contants/actionTypes'

export function addTodo(text){
    return {
        type: ADD_TODO,
        text: text
    }
}

export function removeTodo(id){
    return {
        type: REMOVE_TODO,
        id: id
    }
}

export function searchTodo(text){
    return {
        type: SETCH_FILTER,
        text: text
    }
}

export function searchValue(text){
    return {
        type: SETCH_VALUE,
        text: text
    }
}

// export const getList = (text) => {
//     return dispatch => {
//         dispatch({
//             type: 'GET_LIST'
//         });

//         return fetch('http://www.baidu.com', {
//             body: {text: text},
//             method: 'post'
//         }).then(result => {
//             return {
//                 data: result
//             };
//         });
//     };
// };

