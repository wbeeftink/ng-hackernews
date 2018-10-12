import { Component, OnInit } from '@angular/core';

import { FeedItem } from '../../interfaces/feed-item';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent implements OnInit {
  items: FeedItem[];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getAskItems()
      .subscribe((data: FeedItem[]) => this.items = data);
  }
}
