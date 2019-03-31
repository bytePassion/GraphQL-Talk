import { Injectable } from '@angular/core';
import { Post } from '../../models/post';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MutationService {

  createPost(title: string, content: string, authorId: number): Observable<Post> {

    const examplePost: Post = {
      id: 1,
      title: 'demoTitle',
      content: 'demoContent'
    };

    return of(examplePost);
  }

}
