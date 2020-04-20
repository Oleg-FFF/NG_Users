import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';
import {RouterModule, Routes} from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { HeaderComponent } from './header/header.component';
import {UserResolverService} from './services/user-resolver.service';
import { CommentComponent } from './comment/comment.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { AllCommentsComponent } from './all-comments/all-comments.component';
import {PostResolverService} from './services/post-resolver.service';
import {CommentResolverService} from './services/comment-resolver.service';

const routes: Routes = [
  {path: 'users', component: AllUsersComponent, resolve: {allUsers: UserResolverService}},
  {path: 'posts', component: AllPostsComponent, resolve: {allPosts: PostResolverService}},
  {path: 'comments', component: AllCommentsComponent, resolve: {allComments: CommentResolverService}},
  {path: 'hello', component: HelloComponent},
  {path: 'home', component: AppComponent}
];

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
