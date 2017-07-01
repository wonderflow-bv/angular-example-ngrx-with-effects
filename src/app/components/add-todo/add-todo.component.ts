import { Component, OnInit, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo.model';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTodoComponent implements OnInit {

  public newTodo: Todo;

  constructor() {
    this.newTodo = new Todo();
  }

  ngOnInit() {
  }

  @Output() addTodo = new EventEmitter();

}
