import { Todo, TodoService } from './../shared/todos.service';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  title: string = ''
  constructor(private serviceTodo:TodoService) { }

  ngOnInit() {
  }

  makeTodo(){
    if (this.title=='') { 
      return 
    }

     const todo: Todo ={
        title:this.title,
        id: Date.now(),
        completed: false,
        date: new Date()
     }
     this.serviceTodo.addTodo(todo)
     this.title = ''
  }

}
