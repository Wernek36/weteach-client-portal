import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { ThemeService } from '../../shared/services/theme.service';

interface Module {
  title: string;
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
    modules: [
      { title: 'Prompt engineering w praktyce — pisanie skutecznych promptów', duration: '20 min', status: 'done', locked: false },
      { title: 'Integracja API OpenAI / Anthropic w aplikacji webowej',       duration: '35 min', status: 'done', locked: false },
      { title: 'RAG — budowanie systemu Q&A na własnych dokumentach',         duration: '40 min', status: 'done', locked: false },
      { title: 'AI Code Review — automatyczna analiza pull requestów',        duration: '25 min', status: 'done', locked: false },
      { title: 'Generowanie i walidacja testów jednostkowych z AI',           duration: '30 min', status: 'done', locked: false },
      { title: 'Agenci AI — orkiestracja wielokrokowych zadań',               duration: '45 min', status: 'active', locked: false },
      { title: 'Bezpieczeństwo aplikacji AI — prompt injection i guardrails', duration: '30 min', status: 'locked', locked: true },
      { title: 'Wdrażanie modeli AI na produkcję — monitoring i koszty',      duration: '35 min', status: 'locked', locked: true },
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
    modules: [
      { title: 'Definiowanie wizji produktu z uwzględnieniem AI',             duration: '20 min', status: 'done', locked: false },
      { title: 'Walidacja hipotez z użyciem AI prototypów',                   duration: '25 min', status: 'done', locked: false },
      { title: 'Roadmapa produktu AI — od MVP do skali',                      duration: '30 min', status: 'active', locked: false },
      { title: 'Metryki sukcesu i OKR-y dla produktów AI',                    duration: '25 min', status: 'locked', locked: true },
      { title: 'Zarządzanie backlogiem AI — priorytetyzacja eksperymentów',   duration: '30 min', status: 'locked', locked: true },
      { title: 'Współpraca z zespołem technicznym — specyfikacja AI features', duration: '35 min', status: 'locked', locked: true },
      { title: 'Etyka i compliance w produktach AI',                          duration: '20 min', status: 'locked', locked: true },
      { title: 'Go-to-market strategy dla produktów AI',                      duration: '40 min', status: 'locked', locked: true },
    ],
  },
};

@Component({
  selector: 'app-playbook-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './playbook-detail.component.html',
})
export class PlaybookDetailComponent implements OnInit {
  readonly theme = inject(ThemeService);
  playbook: PlaybookData = PLAYBOOKS['1'];

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '1';
    this.playbook = PLAYBOOKS[id] ?? PLAYBOOKS['1'];
  }
}
