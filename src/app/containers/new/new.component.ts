import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { BaseListComponent } from '../../components/base-list/base-list.component';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-new',
  templateUrl: '../../components/base-list/base-list.component.html',
  styleUrls: ['../../components/base-list/base-list.component.scss']
})
export class NewComponent extends BaseListComponent {
  maxPages: number = 10;
  routeName: string = 'new';
  routeTitle: string = 'New';
  serviceMethod: string = 'getNewItems';

  constructor(
    titleService: Title,
    apiService: ApiService,
    router: Router,
    route: ActivatedRoute
  ) {
    super(titleService, apiService, router, route);
  }
}
