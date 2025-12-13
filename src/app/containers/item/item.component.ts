import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { MatCardModule } from "@angular/material/card";
import { AsyncPipe, DatePipe, I18nPluralPipe } from "@angular/common";

import { Config } from "../../config";
import { Item } from "../../interfaces/item";
import { ApiService } from "../../services/api.service";
import { map, filter, switchMap, Observable, tap } from "rxjs";
import { CommentComponent } from "../../components/comment/comment.component";

@Component({
    selector: "app-item",
    templateUrl: "./item.component.html",
    styleUrls: ["./item.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatCardModule,
        RouterLink,
        CommentComponent,
        AsyncPipe,
        DatePipe,
        I18nPluralPipe,
    ]
})
export class ItemComponent {
  private titleService = inject(Title);
  private apiService = inject(ApiService);
  private route = inject(ActivatedRoute);

  readonly item$: Observable<Item>;
  readonly dateFormat = Config.dateFormat;
  readonly pointsMapping = Config.pointsMapping;
  readonly commentsMapping = Config.commentsMapping;

  constructor() {
    this.item$ = this.route.paramMap.pipe(
      map((paramMap) => Number(paramMap.get("id"))),
      filter((id) => !Number.isNaN(id)),
      switchMap((id) => this.apiService.getItem(id)),
      tap((data) => this.titleService.setTitle(Config.getTitle(data.title))),
    );
  }
}
