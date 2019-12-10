import { Todo } from './todos.service';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name:'formFilter'})
export class TodosFilterPipe implements PipeTransform{
  transform(arrayTodo:Todo[], search = '') :Todo[] {

    if (!search.trim())   return arrayTodo

    return arrayTodo.filter(
      todo => {
        return todo.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
      }
    )
  }
 
  
}