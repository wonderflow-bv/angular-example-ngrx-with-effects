import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Todo } from '../../models/todo.model';
import { ADD_TODO } from '../../reducers/todos';

@Component({
  selector: 'app-todos-container',
  templateUrl: './todos-container.component.html',
  styleUrls: ['./todos-container.component.css']
})
export class TodosContainerComponent implements OnInit {

  public todos: Observable<any>;

  constructor(private store: Store<any>) {

    this.todos = store.select("todos");

  }

  ngOnInit() {
  }

  addTodo(newTodo: Todo) {
    this.store.dispatch({
      type: ADD_TODO,
      payload: newTodo,
    });
  }

}
