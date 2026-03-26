import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../shared/services/theme.service';

interface UserProfile {
  firstName: string;
  lastName: string;
  nickname: string;
  email: string;
  company: string;
  role: string;
  experience: string;
  interests: string[];
  bio: string;
}

const INTEREST_OPTIONS = [
  'AI / Machine Learning',
  'Product Management',
  'Software Development',
  'Data Science',
  'UX / Design',
  'Marketing',
  'Sprzedaż',
  'Leadership',
];

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  readonly theme = inject(ThemeService);
  readonly interestOptions = INTEREST_OPTIONS;

  saved = false;

  profile: UserProfile = {
    firstName: 'Jan',
    lastName: 'Kowalski',
    nickname: 'jkowalski',
    email: 'jan@firma.pl',
    company: '',
    role: '',
    experience: '',
    interests: [],
    bio: '',
  };

  toggleInterest(interest: string): void {
    const idx = this.profile.interests.indexOf(interest);
    if (idx === -1) {
      this.profile = {
        ...this.profile,
        interests: [...this.profile.interests, interest],
      };
    } else {
      this.profile = {
        ...this.profile,
        interests: this.profile.interests.filter((i) => i !== interest),
      };
    }
  }

  hasInterest(interest: string): boolean {
    return this.profile.interests.includes(interest);
  }

  save(): void {
    this.saved = true;
    setTimeout(() => (this.saved = false), 3000);
  }

  get initials(): string {
    return (
      (this.profile.firstName?.[0] ?? '') + (this.profile.lastName?.[0] ?? '')
    ).toUpperCase();
  }
}
