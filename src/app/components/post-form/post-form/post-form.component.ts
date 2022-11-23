import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/post';
import { PostService } from 'src/app/services/post/post-service.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {

  post: Post;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService) {
      this.post = new Post();
    }

    onSubmit() {
      this.postService.save(this.post).subscribe(result => this.gotoPostList());
    }

    gotoPostList() {
      this.router.navigate(['/posts']);
    }

}
