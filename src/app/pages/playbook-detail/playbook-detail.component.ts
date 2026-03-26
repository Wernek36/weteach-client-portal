import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Module {
  title: string;
  duration: string;
  status: 'done' | 'active' | 'locked';
  locked: boolean;
}

@Component({
  selector: 'app-playbook-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './playbook-detail.component.html',
})
export class PlaybookDetailComponent {
  modules: Module[] = [
    { title: 'Wprowadzenie do sprzedaży B2B',     duration: '15 min', status: 'done',   locked: false },
    { title: 'Budowanie relacji z klientem',       duration: '20 min', status: 'done',   locked: false },
    { title: 'Odkrywanie potrzeb — techniki pytań', duration: '25 min', status: 'done',   locked: false },
    { title: 'Prezentacja wartości (Value Pitch)', duration: '30 min', status: 'done',   locked: false },
    { title: 'Radzenie sobie z obiekcjami',        duration: '35 min', status: 'done',   locked: false },
    { title: 'Techniki zamykania sprzedaży',       duration: '30 min', status: 'active', locked: false },
    { title: 'Follow-up i utrzymanie klienta',     duration: '20 min', status: 'locked', locked: true  },
    { title: 'Analiza wyników i skalowanie',       duration: '25 min', status: 'locked', locked: true  },
  ];
}
