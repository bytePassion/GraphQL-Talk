import { Component, OnInit } from '@angular/core';
import {Author} from '../../models/author';
import { MutationService } from '../service/mutation.service';
import { Post } from 'src/app/models/post';
import { QueryService } from '../service/query.service';

@Component({
  selector: 'app-post-mutation',
  templateUrl: './post-mutation.component.html',
  styleUrls: ['./post-mutation.component.scss']
})
export class PostMutationComponent implements OnInit {

  content: string;
  title: string;
  authors: Author[] = [];
  selectedAuthorId: number;

  createdTitle: string;
  showMessage: boolean;

  constructor(private mutationService: MutationService,
              private queryService: QueryService) { }

  ngOnInit() {
    this.queryService.getAllAuthors().subscribe((authors: Author[]) => {
      this.authors = authors;
    });
  }

  savePost() {
    this.mutationService.createPost(this.title, this.content, this.selectedAuthorId)
                        .subscribe((newPost: Post) => {
      this.createdTitle = newPost.title;
      this.showMessage = true;
    });
  }

  hideMessage() {
    this.showMessage = false;
  }

}
