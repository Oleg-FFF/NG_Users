import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PostModel} from '../../models/PostModel';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }
  getPosts(): Observable<PostModel[]>{
    return this.http.get<PostModel[]>('https://gorest.co.in/public-api/posts?access-token=1pUcQ94pe2v6CM5CFAivo49bxUaS90BiOQ1C');
  }

  getPost(id: number): Observable<PostModel[]>{
    return this.http.get<PostModel[]>(`https://gorest.co.in/public-api/posts/${id}?access-token=1pUcQ94pe2v6CM5CFAivo49bxUaS90BiOQ1C`);
  }
}
