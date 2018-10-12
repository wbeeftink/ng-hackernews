import { Component, OnInit } from '@angular/core';

import { FeedItem } from '../../interfaces/feed-item';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  items: FeedItem[];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getJobsItems()
      .subscribe((data: FeedItem[]) => this.items = data);
  }
}
