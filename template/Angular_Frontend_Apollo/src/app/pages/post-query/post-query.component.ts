import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { QueryService } from '../service/query.service';
import { Author } from 'src/app/models/author';

@Component({
  selector: 'app-post-query',
  templateUrl: './post-query.component.html',
  styleUrls: ['./post-query.component.scss']
})
export class PostQueryComponent implements OnInit {

  posts: Post[] = [];
  searchTag = '';
  authors: Author[];
  selectedAuthorId: number = undefined;

  constructor(private queryService: QueryService) {
  }

  ngOnInit(): void {
    this.queryService.getAllAuthors().subscribe((authors: Author[]) => {
      this.authors = authors;
    })
  }

  loadPosts() {
    this.queryService.getPosts()
      .subscribe((posts: [Post]) => {
        this.posts = posts;
      });
  }

  loadPostsWithAuthors() {
    this.queryService
      .getPostsWithAuthors()
      .subscribe((posts: [Post]) => {
        this.posts = posts;
      });
  }

  loadPostsForTag() {
    this.queryService.getPostsForTag(this.searchTag)
      .subscribe((posts: [Post]) => {
        this.posts = posts;
      });
  }

  loadPostsForAuthor() {
    this.queryService.getPostsForAuthor(this.selectedAuthorId)
      .subscribe((posts: [Post]) => {
        this.posts = posts;
      });
  }
}
