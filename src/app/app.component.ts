import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../models/UserModel';
import {UserService} from './services/user.service';
import {PostService} from './services/post.service';
import {PostModel} from '../models/PostModel';
import {TodoModel} from '../models/TodoModel';
import {TodoService} from './services/todo.service';

@Component({
  selector: 'app-root',
  template: `<h1>Hello {{msg}}!</h1>
            <app-user *ngFor="let u of users" [user]="u"></app-user>
            <app-post *ngFor="let p of posts" [post]="p"></app-post>
            <app-todo *ngFor="let t of todos" [todo]="t"></app-todo>
`,
  styles: ['h1{background:silver}']
})
export class AppComponent {
  title = 'my-dream-app';
  msg: string;
  users: UserModel[];
  posts: PostModel[];
  todos: TodoModel[];

  constructor(private userService: UserService, private postService: PostService, private todoService: TodoService) {
    this.userService.getUsers().subscribe(value => this.users = value);
    this.postService.getPosts().subscribe(value => this.posts = value);
    this.todoService.getTodos().subscribe(value => this.todos = value);
    this.greeteng();
    this.msg = 'user';
  }

  greeteng() {
    console.log('Hello from here');
  }
}
