import { Injectable } from '@angular/core';
import { Post } from 'src/app/models/post';
import { Author } from 'src/app/models/author';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  private readonly exampleAuthor: Author = {
    id: 1,
    name: 'exampleAuthor'
  };

  private readonly examplePost: Post = {
    id: 2,
    title: 'title',
    content: 'content',
    author: this.exampleAuthor,
    tags: ['tag']
  };

  postAdded(): Observable<Post> {
    return of(this.examplePost);
  }
}
