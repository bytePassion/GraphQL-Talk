import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { PostQueryComponent } from './post-query/post-query.component';
import { PostSubscriptionComponent } from './post-subscription/post-subscription.component';
import { PostMutationComponent } from './post-mutation/post-mutation.component';

@NgModule({
  declarations: [
    PostQueryComponent,
    PostSubscriptionComponent,
    PostMutationComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PagesModule { }
