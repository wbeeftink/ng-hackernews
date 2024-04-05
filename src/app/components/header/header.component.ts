import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { NgFor } from "@angular/common";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";

import { NavItem } from "../../interfaces/nav-item";
import { DarkModeService } from "../../services/dark-mode.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    NgFor,
    RouterLink,
    RouterLinkActive,
  ],
})
export class HeaderComponent {
  readonly darkMode = inject(DarkModeService);

  readonly navItems: NavItem[] = [
    { title: "Top", link: "top" },
    { title: "New", link: "new" },
    { title: "Show", link: "show" },
    { title: "Ask", link: "ask" },
    { title: "Jobs", link: "jobs" },
  ];
}
