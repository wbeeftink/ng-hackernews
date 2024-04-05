import {
  Injectable,
  RendererFactory2,
  effect,
  inject,
  signal,
} from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DarkModeService {
  private readonly enabled = signal(false);
  private readonly className = "dark-theme";
  private readonly storageKey = "dark-mode-enabled";
  private readonly storageValueDark = "1";
  private readonly storageValueLight = "0";

  readonly isEnabled = this.enabled.asReadonly();

  constructor() {
    const rendererFactory = inject(RendererFactory2);
    const renderer = rendererFactory.createRenderer(null, null);

    const storedValue = localStorage.getItem(this.storageKey);
    const userPrefersDark = matchMedia("(prefers-color-scheme: dark)").matches;
    if (
      (storedValue !== null && storedValue === this.storageValueDark) ||
      (storedValue === null && userPrefersDark)
    ) {
      this.enable();
    }

    effect(() => {
      if (this.enabled()) {
        renderer.addClass(document.body, this.className);
        localStorage.setItem(this.storageKey, this.storageValueDark);
      } else {
        renderer.removeClass(document.body, this.className);
        localStorage.setItem(this.storageKey, this.storageValueLight);
      }
    });
  }

  enable(): void {
    this.enabled.set(true);
  }

  disable(): void {
    this.enabled.set(false);
  }
}
