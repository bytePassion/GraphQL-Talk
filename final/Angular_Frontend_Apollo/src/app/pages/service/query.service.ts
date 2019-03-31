import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';
import { Post } from '../../models/post';
import { Observable } from 'rxjs';
import { Author } from 'src/app/models/author';

interface PostResponse {
  posts: Post[];
}

interface AuthorResponse {
  authors: Author[];
}

@Injectable({
  providedIn: 'root',
})
export class QueryService {

  constructor(private apollo: Apollo) { }

  private readonly postsQuery = gql`
    query AllPosts {
      posts {
        title
        content
        tags
      }
    }
  `;

  getPosts(): Observable<Post[]> {
    return this.apollo.query<PostResponse>({
      query: this.postsQuery,
      fetchPolicy: 'network-only'
    }).pipe(map(response => response.data.posts));
  }

  private readonly gPostsQuery = gql`
    query Posts($tag: String, $authorId: Int) {
      posts(tag: $tag, authorId: $authorId) {
        id
        title
        content
        author {
          name
        }
        tags
      }
    }
    `;

  getPostsForTag(tag: string): Observable<Post[]> {
    return this.apollo.query<PostResponse>({
      query: this.gPostsQuery,
      fetchPolicy: 'network-only',
      variables: { tag: tag }
    }).pipe(map(response => response.data.posts));
  }

  getPostsForAuthor(authorId: number): Observable<Post[]> {
    console.log(authorId);
    return this.apollo.query<PostResponse>({
      query: this.gPostsQuery,
      fetchPolicy: 'network-only',
      variables: { authorId: +authorId }
    }).pipe(map(response => response.data.posts));
  }

  private readonly postsWithAuthorsQuery = gql`
    query AllPostsWithAuthors {
      posts {
        title
        content
        author {
          name
        }
        tags
      }
    }
  `;

  getPostsWithAuthors(): Observable<Post[]> {
    return this.apollo.query<PostResponse>({
      query: this.postsWithAuthorsQuery,
      fetchPolicy: 'network-only'
    })
    .pipe(
        map(response => response.data.posts)
      );
  }

  private readonly authorsQuery = gql`
  {
    authors {
      id,
      name
    }
  }
  `;

  getAllAuthors(): Observable<Author[]> {
    return this.apollo.query<AuthorResponse>({
      query: this.authorsQuery,
      fetchPolicy: 'network-only'
    })
    .pipe(
      map(response => response.data.authors)
    );
  }
}
