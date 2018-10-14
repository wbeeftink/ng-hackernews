import { Component, Input } from '@angular/core';

import { Item } from '../../interfaces/item';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  @Input() comment: Item;
}
