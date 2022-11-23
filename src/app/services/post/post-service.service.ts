import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/app/post';
import { Observable } from 'rxjs';

@Injectable()
export class PostService {

  private postUrl: string;

  constructor(private http: HttpClient) {
    this.postUrl = 'http://localhost:8080/posts';
  }

  public findAll(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postUrl);
  }

  public save(post: Post) {
    return this.http.post<Post>(this.postUrl, post);
  }
}
