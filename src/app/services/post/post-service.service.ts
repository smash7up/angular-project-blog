import { Injectable } from '@angular/core';
import { Post } from 'src/app/post';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostService {

  private postUrl: string;

  constructor(private http: HttpClient) {
    this.postUrl = 'http://localhost:8080/posts';
  }

  public findAll(): Observable<Post[]> {
    let base64encodedData = Buffer.from("Dylan" + ':' + "123456789").toString('base64');
    return this.http.get<Post[]>(this.postUrl, {
      headers: {
        'Authorization': 'Basic ' + base64encodedData
      },
    })
  }

  public save(post: Post) {
    let base64encodedData = Buffer.from("Dylan" + ':' + "123456789").toString('base64');
    return this.http.post<Post>(this.postUrl, post, {
      headers: {
        'Authorization': 'Basic ' + base64encodedData
      },
    });
  }
}

