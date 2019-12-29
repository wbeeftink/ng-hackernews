import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { AbstractBaseListComponent } from '../../components/abstract-base-list/abstract-base-list.component';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-top',
  templateUrl: '../../components/abstract-base-list/abstract-base-list.component.html',
  styleUrls: ['../../components/abstract-base-list/abstract-base-list.component.scss'],
})
export class TopComponent extends AbstractBaseListComponent {
  maxPages = 10;
  routeName = 'top';
  routeTitle = 'Top';
  serviceMethod = 'getTopItems';

  constructor(
    titleService: Title,
    apiService: ApiService,
    router: Router,
    route: ActivatedRoute,
  ) {
    super(titleService, apiService, router, route);
  }
}
