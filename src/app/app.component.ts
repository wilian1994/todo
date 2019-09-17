import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public todos: Todo[] = [];
  public name: String = 'Minhas Tarefas'
  public form: FormGroup;

  //always call this method
  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      name: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    })

    this.todos.push(new Todo(1, 'Jogar futebol', true))
    this.todos.push(new Todo(3, 'Jogar Poker', false))
    
  }

  remove(todo: Todo){
    const index = this.todos.indexOf(todo)
    if(index !== -1){
      this.todos.splice(index, 1);
    }
  }

  add(){
    const name = this.form.controls['name'].value;
    const id = this.todos.length + 1;
    this.todos.push(new Todo(id, name, false))
    this.save()
    this.clear()
  }

  clear(){
    this.form.reset();
  }

  maskAsDone(todo: Todo){
    todo.done = true;
  }

  markAsUndone(todo: Todo){
    todo.done = false;
  }

  save(){
    const data = JSON.stringify(this.todos);
    localStorage.setItem('item', data);
  }
}
