import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { NgFor } from "@angular/common";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";

import { NavItem } from "../../interfaces/nav-item";
import { Theme, ThemeService } from "src/app/services/theme.service";

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
  readonly navItems: NavItem[] = [
    { title: "Top", link: "top" },
    { title: "New", link: "new" },
    { title: "Show", link: "show" },
    { title: "Ask", link: "ask" },
    { title: "Jobs", link: "jobs" },
  ];

  private readonly theme = inject(ThemeService);
  readonly currentTheme = this.theme.getTheme();
  readonly Theme = Theme;

  enableDarkMode(): void {
    this.theme.setTheme(Theme.Dark);
  }

  enableLightMode(): void {
    this.theme.setTheme(Theme.Light);
  }
}
