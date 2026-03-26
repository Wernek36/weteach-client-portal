import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly darkMode = signal(this.loadPreference());

  toggle(): void {
    const next = !this.darkMode();
    this.darkMode.set(next);
    this.apply(next);
    localStorage.setItem('weteach-dark-mode', JSON.stringify(next));
  }

  init(): void {
    this.apply(this.darkMode());
  }

  private apply(dark: boolean): void {
    document.documentElement.classList.toggle('dark', dark);
  }

  private loadPreference(): boolean {
    const stored = localStorage.getItem('weteach-dark-mode');
    if (stored !== null) {
      return JSON.parse(stored) as boolean;
    }
    return false;
  }
}
