import { Injectable } from '@angular/core';
import {CommentModel} from "../../models/CommentModel";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {
  }

  getComments(): Observable<CommentModel[]>{
    return this.http.get<CommentModel[]>('https://jsonplaceholder.typicode.com/comments');
  }

  getCommentNyPostId(id: number): Observable<CommentModel[]> {
    return this.http.get<CommentModel[]>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
  }
}
