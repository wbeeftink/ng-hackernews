import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { AsyncPipe } from "@angular/common";

import { AbstractBaseListComponent } from "../../components/abstract-base-list/abstract-base-list.component";
import { ApiService } from "../../services/api.service";
import { FeedItemComponent } from "../../components/feed-item/feed-item.component";
import { PaginationComponent } from "../../components/pagination/pagination.component";

@Component({
  selector: "app-new",
  templateUrl:
    "../../components/abstract-base-list/abstract-base-list.component.html",
  styleUrls: [
    "../../components/abstract-base-list/abstract-base-list.component.scss",
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [PaginationComponent, FeedItemComponent, AsyncPipe],
})
export class NewComponent extends AbstractBaseListComponent {
  maxPages = 10;
  routeName = "new";
  routeTitle = "New";
  serviceMethod = "getNewItems" as const;

  constructor(
    titleService: Title,
    apiService: ApiService,
    router: Router,
    route: ActivatedRoute,
  ) {
    super(titleService, apiService, router, route);
  }
}
