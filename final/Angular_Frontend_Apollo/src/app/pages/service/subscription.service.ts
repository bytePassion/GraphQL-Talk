import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private apollo: Apollo) { }

  private readonly postAddedSubscription = gql`
  subscription postAdded{
    postAdded{
      id
      content,
      title
      tags
    }
  }
  `;

  postAdded() {
    return this.apollo.subscribe({
      query: this.postAddedSubscription
    }).pipe(map(response => response.data['postAdded']));
  }

}
