import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public todos: Todo[] = [];
  public title: String = 'Minhas Tarefas'

  //always call this method
  constructor() {
    this.todos.push(new Todo(1, 'Jogar futebol', true))
    this.todos.push(new Todo(3, 'Jogar Poker', false))
    
  }

  remove(todo: Todo){
    const index = this.todos.indexOf(todo)
    if(index !== -1){
      this.todos.splice(index, 1);
    }
  }

  maskAsDone(){

  }

  markAsUndone(){

  }
}
