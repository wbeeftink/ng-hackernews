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
    this.route.params.subscribe((params: ParamMap) => {
      this.currentPage = params['page'] ? Number(params['page']) : 1;
      this.apiService[this.serviceMethod](this.currentPage)
        .subscribe((data: FeedItem[]) => {
          this.items = data;
          this.titleService.setTitle(Config.getTitle(this.routeTitle));
        });
    });
  }

  goToPage(page: number) {
    this.router.navigate([this.routeName, page]);
  }
}
