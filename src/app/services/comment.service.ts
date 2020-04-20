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
    return this.http.get<CommentModel[]>('https://gorest.co.in/public-api/cooments?access-token=1pUcQ94pe2v6CM5CFAivo49bxUaS90BiOQ1C');
  }

  getComment(id: number): Observable<CommentModel[]> {
    return this.http.get<CommentModel[]>(`https://gorest.co.in/public-api/comments/${id}?access-token=1pUcQ94pe2v6CM5CFAivo49bxUaS90BiOQ1C`);
  }
}
