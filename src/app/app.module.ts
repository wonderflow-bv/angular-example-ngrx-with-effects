import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodosContainerComponent } from './components/todos-container/todos-container.component';

import { StoreModule } from '@ngrx/store';
import { todos } from './reducers/todos';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    AddTodoComponent,
    TodoComponent,
    TodosContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.provideStore({ todos, }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
