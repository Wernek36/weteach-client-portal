import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature {
  icon: string;
  title: string;
  benefit: string;
  description: string;
}

@Component({
  selector: 'app-twin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './twin.component.html',
})
export class TwinComponent {
  readonly features: Feature[] = [
    {
      icon: 'communication',
      title: 'Styl komunikacji',
      benefit: 'Twój ton, Twoje słowa — bez Twojego udziału',
      description:
        'Twin analizuje Twój styl pisania i odtwarza go w każdej wiadomości. Odpowiada tak, jak Ty byś odpowiedział — profesjonalnie, ale po ludzku.',
    },
    {
      icon: 'meetings',
      title: 'Automatyzacja spotkań',
      benefit: 'Odzyskaj 5 godzin tygodniowo',
      description:
        'Notatki ze spotkań, podsumowania, action items i follow-upy — Twin robi to za Ciebie w czasie rzeczywistym, abyś mógł skupić się na rozmowie.',
    },
    {
      icon: 'emails',
      title: 'Pisanie e-maili i dokumentów',
      benefit: 'Skrzynka zero, bez wysiłku',
      description:
        'Drafty maili, raporty, propozycje — Twin generuje je w Twoim stylu. Ty tylko zatwierdzasz. Nikt nie zauważy różnicy.',
    },
    {
      icon: 'calendar',
      title: 'Zarządzanie kalendarzem',
      benefit: 'Inteligentna selekcja priorytetów',
      description:
        'Twin wie, które spotkania są kluczowe, a które można przesunąć. Automatycznie blokuje czas na deep work i proponuje optymalne sloty.',
    },
    {
      icon: 'analytics',
      title: 'Analiza produktywności',
      benefit: 'Dane zamiast przeczuć',
      description:
        'Tygodniowe raporty pokazują, na co naprawdę idzie Twój czas. Twin identyfikuje wzorce i sugeruje konkretne zmiany.',
    },
  ];

  activeFeature: number | null = null;

  setActive(index: number): void {
    this.activeFeature = this.activeFeature === index ? null : index;
  }
}
