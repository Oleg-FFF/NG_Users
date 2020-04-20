import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CommentModel} from "../../models/CommentModel";

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.scss']
})
export class AllCommentsComponent implements OnInit {

  comments: CommentModel[];

  constructor(private activatedRoute: ActivatedRoute) {
    console.log(this.activatedRoute.snapshot.data);
    this.comments = this.activatedRoute.snapshot.data.allComments.result;
  }

  ngOnInit(): void {
  }

}
