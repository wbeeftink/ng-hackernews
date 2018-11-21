import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { Config } from '../../config';
import { FeedItem } from '../../interfaces/feed-item';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-base-list',
  templateUrl: './base-list.component.html',
  styleUrls: ['./base-list.component.scss']
})
export class BaseListComponent implements OnInit {
  items: FeedItem[];
  currentPage: number;
  maxPages: number;
  routeName: string;
  routeTitle: string;
  serviceMethod: string;

  constructor(
    private titleService: Title,
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    // Update the title
    this.titleService.setTitle(Config.getTitle(this.routeTitle));

    this.route.params.subscribe((params: ParamMap) => {

      // Grab page number from the parameters, otherwise show the first page by default
      this.currentPage = params['page'] ? Number(params['page']) : 1;

      // Get the current feed items by passing the service method (top, new, .etc)
      this.apiService[this.serviceMethod](this.currentPage)
        .subscribe((data: FeedItem[]) => {
          this.items = data;
        });
    });
  }

  goToPage(page: number) {
    this.router.navigate([this.routeName, page]);
  }
}
