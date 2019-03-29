import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/model/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  isAuthDev: boolean;
  todos: Observable<Todo[]>;
  simpleTodos: Todo[];

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getTodos();
    this.todoService.getTodos().subscribe(resp => {
      this.simpleTodos = resp;
    });
  }

  ngOnInit() {
  }

}
