import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Title } from "@angular/platform-browser";

import { Config } from "../../config";
import { Item } from "../../interfaces/item";
import { ApiService } from "../../services/api.service";
import { map, filter, switchMap, Observable, tap } from "rxjs";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemComponent {
  readonly item$: Observable<Item>;
  readonly dateFormat = Config.dateFormat;
  readonly pointsMapping = Config.pointsMapping;
  readonly commentsMapping = Config.commentsMapping;

  constructor(
    private titleService: Title,
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {
    this.item$ = this.route.paramMap.pipe(
      map((paramMap) => Number(paramMap.get("id"))),
      filter((id) => !Number.isNaN(id)),
      switchMap((id) => this.apiService.getItem(id)),
      tap((data) => this.titleService.setTitle(Config.getTitle(data.title)))
    );
  }
}
