import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private api: ApiService) { }

  getTodos(): Observable<Todo[]> {
    return this.api.get('/todos');
  }

}
