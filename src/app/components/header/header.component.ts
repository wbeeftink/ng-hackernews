import { Component } from '@angular/core';

import { NavItem } from '../../interfaces/nav-item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  navItems: NavItem[] = [
    { title: 'Top', link: 'top' },
    { title: 'New', link: 'new' },
    { title: 'Show', link: 'show' },
    { title: 'Ask', link: 'ask' },
    { title: 'Jobs', link: 'jobs' },
  ];
}
