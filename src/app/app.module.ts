import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';
import { TodoComponent } from './todo/todo.component';
import {RouterModule, Routes} from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { HeaderComponent } from './header/header.component';
import {UserResolverService} from './services/user-resolver.service';
import { CommentComponent } from './comment/comment.component';
import { AllPostsComponent } from './all-users/all-posts/all-posts.component';
import { AllCommentsComponent } from './all-comments/all-comments.component';

const routes: Routes = [
  {path: 'users', component: AllUsersComponent, resolve: {allUsers: UserResolverService}},
  {path: 'hello', component: HelloComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    // UserComponent,
    // PostComponent,
    // TodoComponent,
    HelloComponent,
    AllUsersComponent,
    HeaderComponent,
    CommentComponent,
    AllPostsComponent,
    AllCommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
