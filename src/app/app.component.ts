import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../models/UserModel';
import {UserService} from './services/user.service';
import {PostService} from './services/post.service';
import {PostModel} from '../models/PostModel';
import {TodoModel} from '../models/TodoModel';
import {TodoService} from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app-component.html',
  styleUrls: ['./app-component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-dream-app';
  msg: string;
    constructor(private userService: UserService ) {

    this.msg = 'user';
  }
ngOnInit(): void {
      this.userService.getUsers().subscribe(value => console.log(value));
}
}
