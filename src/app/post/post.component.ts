import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from '../../models/PostModel';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input()
  post: PostModel[];
  constructor() { }

}
