import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Actions, Effect } from '@ngrx/effects';
import { TodosService } from '../services/todos.service';
import { GET_TODOS, GET_TODOS_SUCCESS, GET_TODOS_FAILURE } from '../reducers/todos';

@Injectable()
export class TodosEffects {


  @Effect() getTodos$ = this.actions$
    .ofType(GET_TODOS)
    .switchMap((action, index) => {
      return this.todosService.getTodos()
        .map(todos => ({
          type: GET_TODOS_SUCCESS,
          payload: todos
        }))
        .catch((err) => Observable.of({
          type: GET_TODOS_FAILURE,
          payload: err
        }))
    });

  constructor(private actions$: Actions, private todosService: TodosService) { }
}
