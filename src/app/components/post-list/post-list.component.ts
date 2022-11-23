import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post';
import { PostService } from 'src/app/services/post/post-service.service';



@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[] | undefined;

  constructor(private postService: PostService) {
  }

  ngOnInit() {
      this.postService.findAll().subscribe(data => {
        this.posts = data;
      });
  }

}