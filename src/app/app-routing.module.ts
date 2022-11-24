import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostFormComponent } from './components/post-form/post-form/post-form.component';

const routes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'addposts', component: PostFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
