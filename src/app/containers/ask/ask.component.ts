import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Title } from "@angular/platform-browser";

import {
  AbstractBaseListComponent,
  BaseListServiceMethod,
} from "../../components/abstract-base-list/abstract-base-list.component";
import { ApiService } from "../../services/api.service";

@Component({
  selector: "app-ask",
  templateUrl:
    "../../components/abstract-base-list/abstract-base-list.component.html",
  styleUrls: [
    "../../components/abstract-base-list/abstract-base-list.component.scss",
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AskComponent extends AbstractBaseListComponent {
  maxPages = 2;
  routeName = "ask";
  routeTitle = "Ask";
  serviceMethod = "getAskItems" as const;

  constructor(
    titleService: Title,
    apiService: ApiService,
    router: Router,
    route: ActivatedRoute
  ) {
    super(titleService, apiService, router, route);
  }
}
