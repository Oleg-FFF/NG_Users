import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../../models/UserModel';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }
  getUsers(): Observable<UserModel[]>{
    return this.http.get<UserModel[]>('https://gorest.co.in/public-api/users?access-token=1pUcQ94pe2v6CM5CFAivo49bxUaS90BiOQ1C');
  }

  getUser(id: number): Observable<UserModel[]>{
    return this.http.get<UserModel[]>(`https://gorest.co.in/public-api/users/${id}/?access-token=1pUcQ94pe2v6CM5CFAivo49bxUaS90BiOQ1C`);
  }
}
