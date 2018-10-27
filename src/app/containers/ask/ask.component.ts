import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { BaseListComponent } from '../../components/base-list/base-list.component';
import { FeedItem } from '../../interfaces/feed-item';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-ask',
  templateUrl: '../../components/base-list/base-list.component.html',
  styleUrls: ['../../components/base-list/base-list.component.scss']
})
export class AskComponent extends BaseListComponent {
  maxPages: number = 2;
  routeName: string = 'ask';
  routeTitle: string = 'Ask';
  serviceMethod: string = 'getAskItems';

  constructor(
    titleService: Title,
    apiService: ApiService,
    router: Router,
    route: ActivatedRoute
  ) {
    super(titleService, apiService, router, route);
  }
}
