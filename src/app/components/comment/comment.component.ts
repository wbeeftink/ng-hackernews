import { Component, Input } from '@angular/core';

import { Item } from '../../interfaces/item';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input() comment: Item;
}
