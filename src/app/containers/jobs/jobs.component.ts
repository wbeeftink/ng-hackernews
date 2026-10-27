import { Component } from "@angular/core";
import { AsyncPipe } from "@angular/common";

import { AbstractBaseListComponent } from "../../components/abstract-base-list/abstract-base-list.component";
import { FeedItemComponent } from "../../components/feed-item/feed-item.component";
import { PaginationComponent } from "../../components/pagination/pagination.component";

@Component({
  selector: "app-jobs",
  templateUrl:
    "../../components/abstract-base-list/abstract-base-list.component.html",
  styleUrls: [
    "../../components/abstract-base-list/abstract-base-list.component.scss",
  ],
  imports: [PaginationComponent, FeedItemComponent, AsyncPipe],
})
export class JobsComponent extends AbstractBaseListComponent {
  maxPages = 1;
  routeName = "jobs";
  routeTitle = "Jobs";
  serviceMethod = "getJobsItems" as const;
}
