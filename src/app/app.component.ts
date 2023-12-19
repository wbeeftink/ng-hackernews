import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
})
export class AppComponent {}
