import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../shared/services/theme.service';

interface Playbook {
  id: number;
  role: string;
  title: string;
  description: string;
  icon: string;
  iconBg: string;
  progress: number;
  savedHours: number;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  readonly theme = inject(ThemeService);

  playbooks: Playbook[] = [
    {
      id: 1,
      role: 'Developer',
      title: 'AI Playbook dla Developera',
      description:
        'Buduj aplikacje wykorzystujące AI w codziennej pracy programisty. Naucz się integrować modele AI w swoich projektach.',
      icon: '💻',
      iconBg: 'bg-primary/10',
      progress: 65,
      savedHours: 6,
    },
    {
      id: 2,
      role: 'Product Manager',
      title: 'AI Playbook dla Product Managera',
      description:
        'Buduj i dostarczaj produkty oparte o AI, które generują realną wartość biznesową. Naucz się zarządzać cyklem życia produktu AI.',
      icon: '🎯',
      iconBg: 'bg-green/10',
      progress: 30,
      savedHours: 3,
    },
  ];

  get totalSavedHoursWeekly(): number {
    return this.playbooks.reduce((sum, p) => sum + p.savedHours, 0);
  }

  get totalSavedHoursMonthly(): number {
    return this.totalSavedHoursWeekly * 4;
  }

  get totalSavedHoursYearly(): number {
    return this.totalSavedHoursWeekly * 48;
  }
}
