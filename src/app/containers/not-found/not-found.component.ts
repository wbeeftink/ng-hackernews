import { ChangeDetectionStrategy, Component, OnInit, inject } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { MatCardModule } from "@angular/material/card";

import { Config } from "../../config";

@Component({
    selector: "app-not-found",
    templateUrl: "./not-found.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatCardModule]
})
export class NotFoundComponent implements OnInit {
  private titleService = inject(Title);


  ngOnInit() {
    this.titleService.setTitle(Config.getTitle("Not found"));
  }
}
