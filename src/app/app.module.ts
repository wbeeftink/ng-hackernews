import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Container components
import { TopComponent } from './containers/top/top.component';
import { NewComponent } from './containers/new/new.component';
import { ShowComponent } from './containers/show/show.component';
import { ItemComponent } from './containers/item/item.component';
import { AskComponent } from './containers/ask/ask.component';
import { JobsComponent } from './containers/jobs/jobs.component';
import { UserComponent } from './containers/user/user.component';
import { NotFoundComponent } from './containers/not-found/not-found.component';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components//header/header.component';
import { FeedItemComponent } from './components/feed-item/feed-item.component';
import { CommentComponent } from './components/comment/comment.component';
import { PaginationComponent } from './components/pagination/pagination.component';

// Routes
const routes: Routes = [
  { path: '', redirectTo: 'top', pathMatch: 'full' },

  // List views
  { path: 'top', component: TopComponent },
  { path: 'top/:page', component: TopComponent },
  { path: 'new', component: NewComponent },
  { path: 'new/:page', component: NewComponent },
  { path: 'show', component: ShowComponent },
  { path: 'show/:page', component: ShowComponent },
  { path: 'ask', component: AskComponent },
  { path: 'ask/:page', component: AskComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'jobs/:page', component: JobsComponent },

  // Detail views
  { path: 'item/:id', component: ItemComponent },
  { path: 'user/:name', component: UserComponent },

  // Not found
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FeedItemComponent,
    HeaderComponent,
    NewComponent,
    TopComponent,
    ShowComponent,
    NotFoundComponent,
    ItemComponent,
    JobsComponent,
    AskComponent,
    UserComponent,
    CommentComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
