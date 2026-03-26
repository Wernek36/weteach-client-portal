import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

interface NavLink {
  label: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  readonly theme = inject(ThemeService);

  readonly navLinks: NavLink[] = [
    { label: 'Newsy!', route: '/news', icon: 'news' },
    { label: 'Społeczność', route: '/community', icon: 'community' },
    { label: 'Sala szkoleniowa', route: '/dashboard', icon: 'training' },
    { label: 'Tablice wyników', route: '/leaderboard', icon: 'leaderboard' },
    { label: 'Professional Twin', route: '/twin', icon: 'twin' },
  ];

  messagesCount = 3;
  notificationsCount = 7;
  mobileMenuOpen = false;

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
