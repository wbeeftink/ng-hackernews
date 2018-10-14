import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { FeedItem } from '../../interfaces/feed-item';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.scss']
})
export class AskComponent implements OnInit {
  items: FeedItem[];
  startPage: number;
  maxPages: number = 2;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: ParamMap) => {
      this.startPage = params['page'] ? Number(params['page']) : 1;
      this.apiService.getAskItems(this.startPage)
        .subscribe((data: FeedItem[]) => this.items = data);
    });
  }

  goToPage(page: number) {
    this.router.navigate(['ask', page]);
  }
}
