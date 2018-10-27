import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { Item } from '../../interfaces/item';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  item: Item;

  constructor(
    private titleService: Title,
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: ParamMap) => {
      this.apiService
        .getItem(params['id'])
        .subscribe((data: Item) => {
          this.item = data;
          this.titleService.setTitle(`NgHackerNews | ${data.title}`);
        });
    });
  }
}
