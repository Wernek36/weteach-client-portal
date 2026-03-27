import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { ThemeService } from '../../shared/services/theme.service';

interface Module {
  title: string;
  slug: string;
  duration: string;
  status: 'done' | 'active' | 'locked';
  locked: boolean;
}

interface PlaybookData {
  role: string;
  title: string;
  description: string;
  icon: string;
  progress: number;
  completedCount: number;
  modules: Module[];
  userRating: number;
  savedHours: number;
}

const PLAYBOOKS: Record<string, PlaybookData> = {
  '1': {
    role: 'Developer',
    title: 'AI Playbook dla Developera',
    description:
      'Buduj aplikacje wykorzystujące AI w codziennej pracy programisty. Naucz się integrować modele AI w swoich projektach.',
    icon: '💻',
    progress: 65,
    completedCount: 5,
    userRating: 4,
    savedHours: 6,
    modules: [
      { title: 'Prompt engineering w praktyce — pisanie skutecznych promptów', slug: 'prompt-engineering',   duration: '20 min', status: 'done', locked: false },
      { title: 'Integracja API OpenAI / Anthropic w aplikacji webowej',       slug: 'api-integration',      duration: '35 min', status: 'done', locked: false },
      { title: 'RAG — budowanie systemu Q&A na własnych dokumentach',         slug: 'rag-qa',               duration: '40 min', status: 'done', locked: false },
      { title: 'AI Code Review — automatyczna analiza pull requestów',        slug: 'ai-code-review',       duration: '25 min', status: 'done', locked: false },
      { title: 'Generowanie i walidacja testów jednostkowych z AI',           slug: 'ai-testing',           duration: '30 min', status: 'done', locked: false },
      { title: 'Budowanie Custom Skills w Claude Code',                       slug: 'custom-skills',        duration: '45 min', status: 'active', locked: false },
      { title: 'Bezpieczeństwo aplikacji AI — prompt injection i guardrails', slug: 'ai-security',          duration: '30 min', status: 'locked', locked: true },
      { title: 'Wdrażanie modeli AI na produkcję — monitoring i koszty',      slug: 'ai-deployment',        duration: '35 min', status: 'locked', locked: true },
    ],
  },
  '2': {
    role: 'Product Manager',
    title: 'AI Playbook dla Product Managera',
    description:
      'Buduj i dostarczaj produkty oparte o AI, które generują realną wartość biznesową. Naucz się zarządzać cyklem życia produktu AI.',
    icon: '🎯',
    progress: 30,
    completedCount: 2,
    userRating: 3,
    savedHours: 3,
    modules: [
      { title: 'Definiowanie wizji produktu z uwzględnieniem AI',             slug: 'product-vision',       duration: '20 min', status: 'done', locked: false },
      { title: 'Walidacja hipotez z użyciem AI prototypów',                   slug: 'hypothesis-validation', duration: '25 min', status: 'done', locked: false },
      { title: 'Roadmapa produktu AI — od MVP do skali',                      slug: 'ai-roadmap',           duration: '30 min', status: 'active', locked: false },
      { title: 'Metryki sukcesu i OKR-y dla produktów AI',                    slug: 'ai-okrs',              duration: '25 min', status: 'locked', locked: true },
      { title: 'Zarządzanie backlogiem AI — priorytetyzacja eksperymentów',   slug: 'ai-backlog',           duration: '30 min', status: 'locked', locked: true },
      { title: 'Współpraca z zespołem technicznym — specyfikacja AI features', slug: 'ai-specs',            duration: '35 min', status: 'locked', locked: true },
      { title: 'Etyka i compliance w produktach AI',                          slug: 'ai-ethics',            duration: '20 min', status: 'locked', locked: true },
      { title: 'Go-to-market strategy dla produktów AI',                      slug: 'ai-gtm',               duration: '40 min', status: 'locked', locked: true },
    ],
  },
};

@Component({
  selector: 'app-playbook-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './playbook-detail.component.html',
})
export class PlaybookDetailComponent implements OnInit {
  readonly theme = inject(ThemeService);
  playbook: PlaybookData = PLAYBOOKS['1'];
  playbookId = '1';

  constructor(private readonly route: ActivatedRoute) {}

  hoverRating = 0;
  ratingSaved = false;
  hoursSaved = false;

  readonly stars = [1, 2, 3, 4, 5];

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '1';
    this.playbookId = id;
    this.playbook = PLAYBOOKS[id] ?? PLAYBOOKS['1'];
  }

  setRating(value: number): void {
    this.playbook = { ...this.playbook, userRating: value };
    this.ratingSaved = true;
    setTimeout(() => (this.ratingSaved = false), 2000);
  }

  setHoverRating(value: number): void {
    this.hoverRating = value;
  }

  saveSavedHours(): void {
    this.hoursSaved = true;
    setTimeout(() => (this.hoursSaved = false), 2000);
  }

  getDisplayRating(): number {
    return this.hoverRating || this.playbook.userRating;
  }
}
