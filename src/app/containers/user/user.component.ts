import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { MatCardModule } from "@angular/material/card";
import { AsyncPipe, DatePipe } from "@angular/common";

import { Config } from "../../config";
import { User } from "../../interfaces/user";
import { ApiService } from "../../services/api.service";
import { Observable, switchMap, tap } from "rxjs";

@Component({
    selector: "app-user",
    templateUrl: "./user.component.html",
    styleUrls: ["./user.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatCardModule, AsyncPipe, DatePipe]
})
export class UserComponent {
  private titleService = inject(Title);
  private apiService = inject(ApiService);
  private route = inject(ActivatedRoute);

  readonly user$: Observable<User>;
  readonly dateFormat = Config.dateFormat;

  constructor() {
    this.user$ = this.route.paramMap.pipe(
      switchMap((paramMap) => {
        const name = paramMap.get("name") ?? "";
        return this.apiService.getUserNew(name);
      }),
      tap((data) => this.titleService.setTitle(Config.getTitle(data.id))),
    );
  }
}
