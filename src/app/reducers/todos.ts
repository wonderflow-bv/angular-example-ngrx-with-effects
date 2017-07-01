import { ActionReducer, Action, State } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Todo } from "../models/todo.model";

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const CHANGE_STATE = 'CHANGE_STATE';

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
        default:
            return state;
    }
}


