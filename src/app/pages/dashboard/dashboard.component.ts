import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Playbook {
  id: number;
  title: string;
  description: string;
  category: string;
  icon: string;
  iconBg: string;
  progress: number;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  playbooks: Playbook[] = [
    {
      id: 1,
      title: 'Playbook Sprzedaży B2B',
      description: 'Strategie, skrypty i techniki zamykania sprzedaży w środowisku B2B.',
      category: 'Sprzedaż',
      icon: '🎯',
      iconBg: 'bg-primary/10',
      progress: 65,
    },
    {
      id: 2,
      title: 'AI w Marketingu',
      description: 'Jak wykorzystać narzędzia AI do tworzenia treści i kampanii.',
      category: 'Marketing',
      icon: '🤖',
      iconBg: 'bg-green/10',
      progress: 30,
    },
    {
      id: 3,
      title: 'Skuteczne Negocjacje',
      description: 'Techniki negocjacyjne dla managerów i liderów sprzedaży.',
      category: 'Umiejętności',
      icon: '🤝',
      iconBg: 'bg-warning/10',
      progress: 0,
    },
  ];
}
