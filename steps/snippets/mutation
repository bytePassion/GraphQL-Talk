import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';
import { Post } from '../../models/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MutationService {

  constructor(private apollo: Apollo) { }

  private readonly createPostMutation = gql`
    mutation CreatePost($post: PostInput!) {
      createPost(post: $post) {
        id,
        title,
        content
      }
    }
  `;

  createPost(title: string, content: string, authorId: number): Observable<Post> {
    const newPost = {
      title: title,
      content: content,
      authorId: authorId
    };

    return this.apollo.mutate({
      mutation: this.createPostMutation,
      variables: {post: newPost}
    }).pipe(
      map(response => response.data.createPost)
    );
  }

}
