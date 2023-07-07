import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

import { Config } from "../../config";

@Component({
  selector: "app-not-found",
  templateUrl: "./not-found.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent implements OnInit {
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(Config.getTitle("Not found"));
  }
}
