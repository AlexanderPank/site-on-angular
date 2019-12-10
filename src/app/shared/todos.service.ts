import { Todo } from './todos.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


import { HttpClient } from '@angular/common/http';

export interface Todo{
  id:number
  title: string
  completed: boolean
  date?: any
}


@Injectable({providedIn:'root'})
export class TodoService {

  constructor(private http:HttpClient){}

  fetchTodos(): Observable<Todo[]>
  {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
    .pipe(tap(todos=> this.todosArray = todos))
  }

  public todosArray: Todo[] = [
    {id:1, title: 'Купить хлеб', completed: false, date: new Date()},
    {id:2, title: 'Выучить angular', completed: false, date: new Date()},
    {id:3, title: 'Выучить node.js', completed: false, date: new Date()},
    {id:4, title: 'Проверить знания по SQL', completed: true, date: new Date()},
    {id:5, title: 'Додедлать PHP проект', completed: false, date: new Date()},
    {id:6, title: 'Определить что нужно еще', completed: false, date: new Date()}
  ]

  onCahngeChecked(id:number){
    const idx = this.todosArray.findIndex( t => t.id === id )

    this.todosArray[idx].completed = ! this.todosArray[idx].completed;
  }

  
  onDelete(id:number){
    
   /* const idx = this.todosArray.findIndex( t => t.id === id )
    this.todosArray.splice(idx,1) */

    this.todosArray = this.todosArray.filter( t => t.id !== id)
    
  } 

  addTodo(element:Todo){
    this.todosArray.push(element)
  }

  

}