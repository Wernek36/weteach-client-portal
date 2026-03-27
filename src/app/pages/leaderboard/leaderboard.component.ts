import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface RankedUser {
  rank: number;
  nickname: string;
  avatar: string;
  progress: number;
  completedModules: number;
  totalModules: number;
  isCurrentUser: boolean;
}

interface PlaybookRanking {
  id: string;
  title: string;
  icon: string;
  role: string;
  totalModules: number;
  users: RankedUser[];
}

interface PlaybookProgress {
  id: string;
  title: string;
  icon: string;
  role: string;
  progress: number;
  completedModules: number;
  totalModules: number;
  route: string;
}

interface OutdatedModule {
  playbookTitle: string;
  playbookIcon: string;
  moduleTitle: string;
  changeDescription: string;
  changedDate: string;
  route: string;
}

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './leaderboard.component.html',
})
export class LeaderboardComponent {
  // Current user role from profile — "developer"
  readonly currentUserRole = 'developer';

  readonly rankings: PlaybookRanking[] = [
    {
      id: '1',
      title: 'AI Playbook dla Developera',
      icon: '💻',
      role: 'Developer',
      totalModules: 8,
      users: [
        { rank: 1,  nickname: 'mwojcik',       avatar: 'MW', progress: 100, completedModules: 8, totalModules: 8, isCurrentUser: false },
        { rank: 2,  nickname: 'anowak_dev',    avatar: 'AN', progress: 88,  completedModules: 7, totalModules: 8, isCurrentUser: false },
        { rank: 3,  nickname: 'kasia.zielona', avatar: 'KZ', progress: 75,  completedModules: 6, totalModules: 8, isCurrentUser: false },
        { rank: 4,  nickname: 'dev_ola',       avatar: 'OW', progress: 75,  completedModules: 6, totalModules: 8, isCurrentUser: false },
        { rank: 5,  nickname: 'piotr.code',    avatar: 'PB', progress: 63,  completedModules: 5, totalModules: 8, isCurrentUser: false },
        { rank: 6,  nickname: 'jkowalski',     avatar: 'JK', progress: 63,  completedModules: 5, totalModules: 8, isCurrentUser: true },
        { rank: 7,  nickname: 'bartek.ml',     avatar: 'BN', progress: 50,  completedModules: 4, totalModules: 8, isCurrentUser: false },
        { rank: 8,  nickname: 'marcin.dev',    avatar: 'MD', progress: 38,  completedModules: 3, totalModules: 8, isCurrentUser: false },
        { rank: 9,  nickname: 'arek_fullstack', avatar: 'AR', progress: 25, completedModules: 2, totalModules: 8, isCurrentUser: false },
        { rank: 10, nickname: 'kamil_ops',     avatar: 'KO', progress: 13,  completedModules: 1, totalModules: 8, isCurrentUser: false },
      ],
    },
    {
      id: '2',
      title: 'AI Playbook dla Product Managera',
      icon: '🎯',
      role: 'Product Manager',
      totalModules: 8,
      users: [
        { rank: 1,  nickname: 'tomek_pm',      avatar: 'TK', progress: 88,  completedModules: 7, totalModules: 8, isCurrentUser: false },
        { rank: 2,  nickname: 'magda_ai',      avatar: 'MK', progress: 75,  completedModules: 6, totalModules: 8, isCurrentUser: false },
        { rank: 3,  nickname: 'ewa_product',   avatar: 'ES', progress: 63,  completedModules: 5, totalModules: 8, isCurrentUser: false },
        { rank: 4,  nickname: 'natalia.pm',    avatar: 'NL', progress: 50,  completedModules: 4, totalModules: 8, isCurrentUser: false },
        { rank: 5,  nickname: 'asia_ux',       avatar: 'AJ', progress: 38,  completedModules: 3, totalModules: 8, isCurrentUser: false },
        { rank: 6,  nickname: 'jkowalski',     avatar: 'JK', progress: 25,  completedModules: 2, totalModules: 8, isCurrentUser: true },
        { rank: 7,  nickname: 'gosia.data',    avatar: 'GD', progress: 25,  completedModules: 2, totalModules: 8, isCurrentUser: false },
        { rank: 8,  nickname: 'zuzia_ml',      avatar: 'ZW', progress: 13,  completedModules: 1, totalModules: 8, isCurrentUser: false },
        { rank: 9,  nickname: 'robert.js',     avatar: 'RJ', progress: 13,  completedModules: 1, totalModules: 8, isCurrentUser: false },
        { rank: 10, nickname: 'marta_new',     avatar: 'MN', progress: 0,   completedModules: 0, totalModules: 8, isCurrentUser: false },
      ],
    },
  ];

  activeTab: string = '1';

  readonly myPlaybooks: PlaybookProgress[] = [
    {
      id: '1',
      title: 'AI Playbook dla Developera',
      icon: '💻',
      role: 'Developer',
      progress: 63,
      completedModules: 5,
      totalModules: 8,
      route: '/playbook/1',
    },
    {
      id: '2',
      title: 'AI Playbook dla Product Managera',
      icon: '🎯',
      role: 'Product Manager',
      progress: 25,
      completedModules: 2,
      totalModules: 8,
      route: '/playbook/2',
    },
  ];

  readonly outdatedModules: OutdatedModule[] = [
    {
      playbookTitle: 'AI Playbook dla Developera',
      playbookIcon: '💻',
      moduleTitle: 'Prompt engineering w praktyce — pisanie skutecznych promptów',
      changeDescription: 'Dodano techniki chain-of-thought dla GPT-5.4 oraz porównanie z Opus 4.6',
      changedDate: '20 marca 2026',
      route: '/playbook/1/module/prompt-engineering',
    },
    {
      playbookTitle: 'AI Playbook dla Developera',
      playbookIcon: '💻',
      moduleTitle: 'Integracja API OpenAI / Anthropic w aplikacji webowej',
      changeDescription: 'Zaktualizowano przykłady o okno kontekstu 1M tokenów i strumieniowanie Opus 4.6',
      changedDate: '25 marca 2026',
      route: '/playbook/1/module/api-integration',
    },
    {
      playbookTitle: 'AI Playbook dla Developera',
      playbookIcon: '💻',
      moduleTitle: 'AI Code Review — automatyczna analiza pull requestów',
      changeDescription: 'Rozszerzono o workflow z GitHub Copilot coding agentem i automatyczne PR review z Jira',
      changedDate: '24 marca 2026',
      route: '/playbook/1/module/ai-code-review',
    },
    {
      playbookTitle: 'AI Playbook dla Product Managera',
      playbookIcon: '🎯',
      moduleTitle: 'Walidacja hipotez z użyciem AI prototypów',
      changeDescription: 'Dodano benchmarki porównawcze modeli frontier — jak testować prototypy na GPT-5.4, Opus 4.6 i Gemini 3.1',
      changedDate: '20 marca 2026',
      route: '/playbook/2/module/hypothesis-validation',
    },
  ];

  get activeRanking(): PlaybookRanking {
    return this.rankings.find((r) => r.id === this.activeTab) ?? this.rankings[0];
  }

  get currentUserInActiveRanking(): RankedUser | undefined {
    return this.activeRanking.users.find((u) => u.isCurrentUser);
  }

  get overallProgress(): number {
    const total = this.myPlaybooks.reduce((sum, p) => sum + p.totalModules, 0);
    const completed = this.myPlaybooks.reduce((sum, p) => sum + p.completedModules, 0);
    return total > 0 ? Math.round((completed / total) * 100) : 0;
  }

  setActiveTab(id: string): void {
    this.activeTab = id;
  }

  getRankBadge(rank: number): string {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return `${rank}`;
  }

  getProgressColor(progress: number): string {
    if (progress >= 80) return 'bg-green';
    if (progress >= 50) return 'bg-primary';
    if (progress >= 25) return 'bg-warning';
    return 'bg-error';
  }
}
