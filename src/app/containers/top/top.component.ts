import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { BaseListComponent } from '../../components/base-list/base-list.component';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-top',
  templateUrl: '../../components/base-list/base-list.component.html',
  styleUrls: ['../../components/base-list/base-list.component.scss']
})
export class TopComponent extends BaseListComponent {
  maxPages: number = 10;
  routeName: string = 'top';
  routeTitle: string = 'Top';
  serviceMethod: string = 'getTopItems';

  constructor(
    titleService: Title,
    apiService: ApiService,
    router: Router,
    route: ActivatedRoute
  ) {
    super(titleService, apiService, router, route);
  }
}
