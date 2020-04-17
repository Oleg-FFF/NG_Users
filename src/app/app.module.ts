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

const routes: Routes = [
  {path: 'users', component: AllUsersComponent, resolve: {allUsers: UserResolverService}},
  {path: 'hello', component: HelloComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent,
    TodoComponent,
    HelloComponent,
    AllUsersComponent,
    HeaderComponent
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
