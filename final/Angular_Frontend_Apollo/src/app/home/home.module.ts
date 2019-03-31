import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FrameComponent } from './frame/frame.component';
import {RouterModule} from '@angular/router';
import {PagesModule} from '../pages/pages.module';
import { PostSubscriptionComponent } from '../pages/post-subscription/post-subscription.component';
import { PostMutationComponent } from '../pages/post-mutation/post-mutation.component';
import { PostQueryComponent } from '../pages/post-query/post-query.component';

const routes = [
  {
    path: '',
    redirectTo: 'query',
    pathMatch: 'full'
  },
  {
    path: 'query',
    component: PostQueryComponent
  },
  {
    path: 'mutation',
    component: PostMutationComponent
  },
  {
    path: 'subscription',
    component: PostSubscriptionComponent
  }
  ];

@NgModule({
  declarations: [HomeComponent, FrameComponent],
  imports: [
    CommonModule,
    PagesModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ HomeComponent]
})
export class HomeModule { }
