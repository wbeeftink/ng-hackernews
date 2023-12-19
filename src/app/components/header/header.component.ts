import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";

import { RouterLink, RouterLinkActive } from "@angular/router";
import { MatToolbarModule } from "@angular/material/toolbar";

import { NavItem } from "../../interfaces/nav-item";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatButtonModule, MatToolbarModule, RouterLink, RouterLinkActive],
})
export class HeaderComponent {
  readonly navItems: NavItem[] = [
    { title: "Top", link: "top" },
    { title: "New", link: "new" },
    { title: "Show", link: "show" },
    { title: "Ask", link: "ask" },
    { title: "Jobs", link: "jobs" },
  ];
}
