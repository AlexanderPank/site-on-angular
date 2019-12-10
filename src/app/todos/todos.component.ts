import { TodoService } from './../shared/todos.service';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators'


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

 private loading : boolean = true

 private searchString: string = ''

  constructor(private totodService:TodoService) { }

  ngOnInit() {
    /*this.totodService.fetchTodos()
    .pipe(delay(1500))
    .subscribe(() =>{
        this.loading = false;
    });*/
    this.loading = false;
  }
/*
  onChange(id: number) {
    console.log('TodosComponent '+id)
    this.totodService.onToggleApp(id)
  }

  onDelete(id: number) {
    
    this.totodService.onDelete(id)
  } */

}
