import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Config } from "../../config";

import { Item } from "../../interfaces/item";

@Component({
  selector: "app-comment",
  templateUrl: "./comment.component.html",
  styleUrls: ["./comment.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentComponent {
  @Input()
  comment!: Item;

  readonly dateFormat = Config.dateFormat;
}
