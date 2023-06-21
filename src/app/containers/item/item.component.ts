import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Title } from "@angular/platform-browser";

import { Config } from "../../config";
import { Item } from "../../interfaces/item";
import { ApiService } from "../../services/api.service";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"],
})
export class ItemComponent implements OnInit {
  item: Item;
  dateFormat = Config.dateFormat;
  pointsMapping = Config.pointsMapping;
  commentsMapping = Config.commentsMapping;

  constructor(
    private titleService: Title,
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      const id = Number.parseInt(paramMap.get("id"));
      this.apiService.getItem(id).subscribe((data: Item) => {
        this.item = data;
        this.titleService.setTitle(Config.getTitle(data.title));
      });
    });
  }
}
