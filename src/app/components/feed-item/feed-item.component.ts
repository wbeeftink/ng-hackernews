import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { NgIf, DatePipe, I18nPluralPipe } from "@angular/common";
import { MatCardModule } from "@angular/material/card";

import { Config } from "../../config";
import { FeedItem } from "../../interfaces/feed-item";

@Component({
  selector: "app-feed-item",
  templateUrl: "./feed-item.component.html",
  styleUrls: ["./feed-item.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatCardModule, NgIf, RouterLink, DatePipe, I18nPluralPipe],
})
export class FeedItemComponent {
  @Input()
  item!: FeedItem;

  readonly dateFormat = Config.dateFormat;
  readonly commentsMapping = Config.commentsMapping;
  readonly pointsMapping = Config.pointsMapping;
}
