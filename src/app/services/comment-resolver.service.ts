import { Injectable } from '@angular/core';
import {PostService} from "./post.service";
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {PostModel} from "../../models/PostModel";
import {CommentService} from "./comment.service";
import {CommentModel} from "../../models/CommentModel";

@Injectable({
  providedIn: 'root'
})
export class CommentResolverService {

  constructor(private commentService: CommentService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CommentModel[]> | Promise<CommentModel[]> | CommentModel[] {
    return this.commentService.getComments();
  }
}
