import { Component, OnInit } from '@angular/core';

import { FeedItem } from '../../interfaces/feed-item';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  items: FeedItem[];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getTopItems()
      .subscribe((data: FeedItem[]) => this.items = data);
  }
}
