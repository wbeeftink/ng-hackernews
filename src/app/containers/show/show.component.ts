import { Component, OnInit } from '@angular/core';

import { FeedItem } from '../../interfaces/feed-item';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  items: FeedItem[];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getShowItems()
      .subscribe((data: FeedItem[]) => this.items = data);
  }
}
