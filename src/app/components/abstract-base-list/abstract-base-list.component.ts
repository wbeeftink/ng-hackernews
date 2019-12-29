import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';

import { Config } from '../../config';
import { FeedItem } from '../../interfaces/feed-item';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-abstract--base-list',
  templateUrl: './abstract-base-list.component.html',
  styleUrls: ['./abstract-base-list.component.scss'],
})
export class AbstractBaseListComponent implements OnInit {
  items$: Observable<FeedItem[]>;
  currentPage: number;
  maxPages: number;
  routeName: string;
  routeTitle: string;
  serviceMethod: string;

  constructor(
    private titleService: Title,
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

    // Update the title
    this.titleService.setTitle(Config.getTitle(this.routeTitle));

    this.route.params.subscribe(params => {

      // Grab page number from the parameters, otherwise show the first page by default
      this.currentPage = params['page'] ? Number(params['page']) : 1;

      // Get the current feed items by passing the service method (top, new, .etc)
      this.items$ = this.apiService[this.serviceMethod](this.currentPage);
    });
  }

  goToPage(page: number) {
    this.router.navigate([this.routeName, page]);
  }
}
