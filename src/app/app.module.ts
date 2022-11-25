import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostService } from './services/post/post-service.service';
import { PostFormComponent } from './components/post-form/post-form/post-form.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostFormComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
