import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { NgIf, NgFor, DatePipe } from "@angular/common";
import { RouterLink } from "@angular/router";

import { Config } from "../../config";
import { Item } from "../../interfaces/item";

@Component({
  selector: "app-comment",
  templateUrl: "./comment.component.html",
  styleUrls: ["./comment.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterLink, NgIf, NgFor, DatePipe],
})
export class CommentComponent {
  @Input()
  comment!: Item;

  readonly dateFormat = Config.dateFormat;
}
