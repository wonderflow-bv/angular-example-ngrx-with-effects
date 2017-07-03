import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodosContainerComponent } from './components/todos-container/todos-container.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { todos } from './reducers/todos';
import { TodosEffects } from './effects/todos';
import { TodosService } from './services/todos.service';
import { AtomicComponentComponent } from './higher-order-components/atomic-component/atomic-component.component';
import { HigherOrderComponentComponent } from './higher-order-components/higher-order-component/higher-order-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    AddTodoComponent,
    TodoComponent,
    TodosContainerComponent,
    AtomicComponentComponent,
    HigherOrderComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.provideStore({ todos, }),
    EffectsModule.run(TodosEffects),
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
