import { Component, Input } from '@angular/core';

import { FeedItem } from '../../interfaces/feed-item';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.css']
})
export class FeedItemComponent {
  @Input() item: FeedItem;
}
