import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { AsyncPipe } from "@angular/common";
import { EMPTY, map, Observable, switchMap } from "rxjs";

import { Config } from "../../config";
import { FeedItem } from "../../interfaces/feed-item";
import { ApiService } from "../../services/api.service";
import { FeedItemComponent } from "../feed-item/feed-item.component";
import { PaginationComponent } from "../pagination/pagination.component";

export type BaseListServiceMethod =
  | "getTopItems"
  | "getNewItems"
  | "getShowItems"
  | "getAskItems"
  | "getJobsItems";

@Component({
  selector: "app-abstract--base-list",
  templateUrl: "./abstract-base-list.component.html",
  styleUrls: ["./abstract-base-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [PaginationComponent, FeedItemComponent, AsyncPipe],
})
export class AbstractBaseListComponent {
  readonly items$: Observable<FeedItem[]>;
  readonly currentPage$: Observable<number>;
  maxPages!: number;
  routeName!: string;
  routeTitle!: string;
  serviceMethod!: BaseListServiceMethod;

  constructor(
    private titleService: Title,
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    // Update the title
    if (this.routeTitle) {
      this.titleService.setTitle(Config.getTitle(this.routeTitle));
    }

    // Grab page number from the parameters, otherwise show the first page by default
    this.currentPage$ = this.route.paramMap.pipe(
      map((paramMap) => {
        return paramMap.has("page") ? Number(paramMap.get("page")) : 1;
      }),
    );

    // Make the API call based on the current page
    this.items$ = this.currentPage$.pipe(
      switchMap((currentPage) => {
        if (
          this.serviceMethod !== undefined &&
          typeof this.apiService[this.serviceMethod] === "function"
        ) {
          return this.apiService[this.serviceMethod](currentPage);
        }
        return EMPTY;
      }),
    );
  }

  goToPage(page: number) {
    this.router.navigate([this.routeName, page]).then();
  }
}
