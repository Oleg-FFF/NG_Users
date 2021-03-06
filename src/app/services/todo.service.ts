import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TodoModel} from '../../models/TodoModel';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {
  }
  getTodos(): Observable<TodoModel[]>{
      return this.http.get<TodoModel[]>('https://jsonplaceholder.typicode.com/todos');
    }
  getTodo(id: number): Observable<TodoModel[]>{
      return this.http.get<TodoModel[]>(`https://jsonplaceholder.typicode.com/todos/${id}`);
    }
}
