import {Component, Input, OnInit} from '@angular/core';
import {TodoModel} from '../../models/TodoModel';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  @Input()
  todo: TodoModel[];
  constructor() { }

}
