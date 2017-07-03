import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Todo } from '../models/todo.model';

@Injectable()
export class TodosService {

  constructor() { }

  getTodos() {
    const todos = [new Todo('todo 1' + Math.random()), new Todo('todo 2'), new Todo('todo 3')];
    return Observable.timer(1000).mapTo(todos);
  }

}
