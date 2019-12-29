import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';
import { routes } from './routes';
import { SentryErrorHandler } from './sentry';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

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
import { AbstractBaseListComponent } from './components/abstract-base-list/abstract-base-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FeedItemComponent } from './components/feed-item/feed-item.component';
import { CommentComponent } from './components/comment/comment.component';
import { PaginationComponent } from './components/pagination/pagination.component';

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
    PaginationComponent,
    AbstractBaseListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    Title,
    {
      provide: ErrorHandler,
      useClass: environment.production ? SentryErrorHandler : ErrorHandler,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
