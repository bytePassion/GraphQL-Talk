import { Injectable } from '@angular/core';
import { Post } from '../../models/post';
import { Observable, of } from 'rxjs';
import { Author } from 'src/app/models/author';


@Injectable({
  providedIn: 'root',
})
export class QueryService {

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

  getPosts(): Observable<Post[]> {
    return of([this.examplePost]);
  }

  getPostsForTag(tag: string): Observable<Post[]> {
    return of([this.examplePost]);
  }

  getPostsForAuthor(authorId: number): Observable<Post[]> {
    return of([this.examplePost]);
  }


  getPostsWithAuthors(): Observable<Post[]> {
    return of([this.examplePost]);
  }

  getAllAuthors(): Observable<Author[]> {
    return of([this.exampleAuthor]);
  }
}
