import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { Config } from '../../config';
import { User } from '../../interfaces/user';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user: User;
  dateFormat = Config.dateFormat;

  constructor(
    private titleService: Title,
    private apiService: ApiService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.apiService
        .getUser(params.name)
        .subscribe((data: User) => {
          this.user = data;
          this.titleService.setTitle(Config.getTitle(data.id));
        });
    });
  }
}
