import { Component } from "@angular/core";
import { AsyncPipe } from "@angular/common";

import { AbstractBaseListComponent } from "../../components/abstract-base-list/abstract-base-list.component";
import { FeedItemComponent } from "../../components/feed-item/feed-item.component";
import { PaginationComponent } from "../../components/pagination/pagination.component";

@Component({
  selector: "app-new",
  templateUrl:
    "../../components/abstract-base-list/abstract-base-list.component.html",
  styleUrls: [
    "../../components/abstract-base-list/abstract-base-list.component.scss",
  ],
  imports: [PaginationComponent, FeedItemComponent, AsyncPipe],
})
export class NewComponent extends AbstractBaseListComponent {
  maxPages = 10;
  routeName = "new";
  routeTitle = "New";
  serviceMethod = "getNewItems" as const;
}
