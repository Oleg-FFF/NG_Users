import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {PostService} from "./post.service";
import {PostModel} from "../../models/PostModel";

@Injectable({
  providedIn: 'root'
})
export class PostResolverService {

  constructor(private postService: PostService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostModel[]> | Promise<PostModel[]> | PostModel[] {
    return this.postService.getPosts();
  }
}
