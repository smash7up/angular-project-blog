import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostFormComponent } from './components/post-form/post-form/post-form.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGaurdService } from './services/authGaurd/auth-gaurd.service';
import { LogoutComponent } from './components/logout/logout/logout.component';

const routes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'addposts', component: PostFormComponent },
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent, canActivate:[AuthGaurdService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
