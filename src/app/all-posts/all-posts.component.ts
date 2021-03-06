import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostModel} from "../../models/PostModel";

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})

export class AllPostsComponent implements OnInit {

  posts: PostModel[];

  constructor(private activatedRoute: ActivatedRoute) {
    console.log(this.activatedRoute.snapshot.data);
    this.posts = this.activatedRoute.snapshot.data.allPosts.result;
  }

  ngOnInit(): void {
  }

}
