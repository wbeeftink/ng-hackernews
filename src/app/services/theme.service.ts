import { Injectable, Signal, effect, signal } from "@angular/core";

export enum Theme {
  Light,
  Dark,
}

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private readonly theme = signal<Theme>(Theme.Light);
  private readonly className = "dark-theme";
  private readonly storageToken = "dark-theme";

  constructor() {
    const storedSetting = window.localStorage.getItem(this.storageToken);
    if (storedSetting !== null) {
      if (Number.parseInt(storedSetting) === Theme.Dark) {
        this.theme.set(Theme.Dark);
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)")) {
      this.theme.set(Theme.Dark);
    }

    effect(() => {
      if (this.theme() === Theme.Dark) {
        document.querySelector("body")?.classList.add(this.className);
        window.localStorage.setItem(this.storageToken, String(Theme.Dark));
      } else {
        document.querySelector("body")?.classList.remove(this.className);
        window.localStorage.setItem(this.storageToken, String(Theme.Light));
      }
    });
  }

  setTheme(theme: Theme): void {
    this.theme.set(theme);
  }

  getTheme(): Signal<Theme> {
    return this.theme.asReadonly();
  }
}
