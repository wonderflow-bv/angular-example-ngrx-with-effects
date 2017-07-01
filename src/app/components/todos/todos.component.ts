import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosComponent implements OnInit {
  @Input() todos: Array<Todo>;

  constructor() { }

  ngOnInit() {
  }

}
