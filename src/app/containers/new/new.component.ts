import { Component, OnInit } from '@angular/core';

import { FeedItem } from '../../interfaces/feed-item';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  items: FeedItem[];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getNewItems()
      .subscribe((data: FeedItem[]) => this.items = data);
  }
}
