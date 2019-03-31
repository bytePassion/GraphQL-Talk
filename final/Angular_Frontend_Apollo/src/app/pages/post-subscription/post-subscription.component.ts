import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../service/subscription.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-subscription',
  templateUrl: './post-subscription.component.html',
  styleUrls: ['./post-subscription.component.scss']
})
export class PostSubscriptionComponent implements OnInit {

  newPosts: Post[] = [];

  constructor(private subscriptionService: SubscriptionService) { }

  ngOnInit() {
    this.subscriptionService.postAdded()
        .subscribe((newPost) => this.newPosts.push(newPost));
  }
}
