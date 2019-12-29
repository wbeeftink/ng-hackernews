import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { AbstractBaseListComponent } from '../../components/abstract-base-list/abstract-base-list.component';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-jobs',
  templateUrl: '../../components/abstract-base-list/abstract-base-list.component.html',
  styleUrls: ['../../components/abstract-base-list/abstract-base-list.component.scss'],
})
export class JobsComponent extends AbstractBaseListComponent {
  maxPages = 1;
  routeName = 'jobs';
  routeTitle = 'Jobs';
  serviceMethod = 'getNewItems';

  constructor(
    titleService: Title,
    apiService: ApiService,
    router: Router,
    route: ActivatedRoute,
  ) {
    super(titleService, apiService, router, route);
  }
}
