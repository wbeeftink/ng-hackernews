import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

import { Config } from "../../config";
import { FeedItem } from "../../interfaces/feed-item";

@Component({
  selector: "app-feed-item",
  templateUrl: "./feed-item.component.html",
  styleUrls: ["./feed-item.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedItemComponent {
  @Input()
  item!: FeedItem;

  readonly dateFormat = Config.dateFormat;
  readonly commentsMapping = Config.commentsMapping;
  readonly pointsMapping = Config.pointsMapping;
}
