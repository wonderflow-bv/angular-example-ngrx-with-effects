import { ActionReducer, Action, State } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Todo } from "../models/todo.model";

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const CHANGE_STATE = 'CHANGE_STATE';
export const GET_TODOS = 'GET_TODOS';
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
export const GET_TODOS_FAILURE = 'GET_TODOS_FAILURE';


// const initialState = [];



const initialState = {
    pending: false,
    data: [],
    error: null,
};


export const todos = (state = initialState, action: Action): any => {
    switch (action.type) {
        case ADD_TODO: {
            let newTodo = action.payload;
            return Object.assign({}, state, {
                data: [...state.data, Object.assign({}, newTodo)]
            })
        }
        case REMOVE_TODO: {
            let todoId = action.payload.id;
            return Object.assign({}, state, {
                data: state.data.filter(e => { return e.id !== todoId }),
            });
        }
        case CHANGE_STATE: {
            let newState: boolean = action.payload.state;
            let todoId = action.payload.id;

            Object.assign({}, state, {
                data: state.data.map(t => {
                    if (t.id === todoId) {
                        t.state = newState;
                    }
                    return t;
                })
            });
            return state;
        }
        case GET_TODOS: {
            return Object.assign({}, {
                pending: true
            });
        }
        case GET_TODOS_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload,
                pending: false,
            });
        }
        case GET_TODOS_FAILURE: {
            return Object.assign({}, state, {
                error: action.payload,
                pending: false
            })
        }
        default:
            return state;
    }
}


