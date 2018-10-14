import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { FeedItem } from '../../interfaces/feed-item';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  items: FeedItem[];
  startPage: number;
  maxPages: number = 1;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: ParamMap) => {
      this.startPage = params['page'] ? Number(params['page']) : 1;
      this.apiService.getJobsItems(this.startPage)
        .subscribe((data: FeedItem[]) => this.items = data);
    });
  }

  goToPage(page: number) {
    this.router.navigate(['jobs', page]);
  }
}
