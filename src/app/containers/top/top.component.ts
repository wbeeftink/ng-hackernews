import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { FeedItem } from '../../interfaces/feed-item';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
  items: FeedItem[];
  startPage: number;
  maxPages: number = 10;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: ParamMap) => {
      this.startPage = params['page'] ? Number(params['page']) : 1;
      this.apiService.getTopItems(this.startPage)
        .subscribe((data: FeedItem[]) => this.items = data);
    });
  }

  goToPage(page: number) {
    this.router.navigate(['top', page]);
  }
}
