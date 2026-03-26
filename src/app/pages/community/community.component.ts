import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-[60vh] bg-bg-subtle dark:bg-dark-bg transition-colors duration-300">
      <main class="max-w-5xl mx-auto px-6 py-10">
        <div class="flex flex-col items-center justify-center py-20 text-center">
          <div class="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
            <span class="text-3xl">👥</span>
          </div>
          <h1 class="text-2xl font-bold text-text-primary dark:text-dark-text-primary mb-2">Społeczność</h1>
          <p class="text-sm text-text-secondary dark:text-dark-text-secondary max-w-md">
            Dołącz do społeczności WeTeach — dziel się wiedzą, zadawaj pytania i poznawaj innych uczestników.
            Ta sekcja jest w przygotowaniu.
          </p>
          <span class="mt-6 inline-flex items-center gap-2 bg-warning/10 text-warning text-xs font-medium px-4 py-2 rounded-full">
            🚧 Wkrótce dostępne
          </span>
        </div>
      </main>
    </div>
  `,
})
export class CommunityComponent {}
