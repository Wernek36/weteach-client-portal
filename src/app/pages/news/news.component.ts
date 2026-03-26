import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface PlaybookUpdate {
  playbook: string;
  change: string;
  route: string;
}

interface NewsItem {
  id: number;
  date: string;
  category: 'model-release' | 'tool-update' | 'industry' | 'policy';
  categoryLabel: string;
  title: string;
  summary: string;
  source: string;
  sourceUrl: string;
  playbookUpdates: PlaybookUpdate[];
}

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './news.component.html',
})
export class NewsComponent {
  readonly categoryColors: Record<string, string> = {
    'model-release': 'bg-primary/10 text-primary',
    'tool-update': 'bg-green/10 text-green',
    'industry': 'bg-warning/10 text-warning',
    'policy': 'bg-error/10 text-error',
  };

  readonly news: NewsItem[] = [
    {
      id: 1,
      date: '25 marca 2026',
      category: 'model-release',
      categoryLabel: 'Nowy model',
      title: 'Claude Code z Opus 4.6 i oknem kontekstu 1M tokenów',
      summary:
        'Anthropic udostępnił Claude Code z domyślnym modelem Opus 4.6 oraz oknem kontekstu powiększonym do 1 miliona tokenów. Nowa wersja wprowadza komendę /loop do cyklicznego monitorowania oraz tryb głosowy aktywowany przez /voice z obsługą języka polskiego. MCP (Model Context Protocol) osiągnął 97 milionów instalacji i stał się standardem branżowym.',
      source: 'Anthropic / TechCrunch',
      sourceUrl: 'https://techcrunch.com/2026/03/24/anthropic-hands-claude-code-more-control-but-keeps-it-on-a-leash/',
      playbookUpdates: [
        {
          playbook: 'Developer',
          change: 'Nowy moduł: "Budowanie Custom Skills w Claude Code" — wykorzystuje najnowsze API Opus 4.6 i MCP hooks',
          route: '/playbook/1',
        },
        {
          playbook: 'Developer',
          change: 'Zaktualizowano moduł integracji API — dodano przykłady z oknem 1M tokenów i strumieniowaniem',
          route: '/playbook/1',
        },
      ],
    },
    {
      id: 2,
      date: '24 marca 2026',
      category: 'tool-update',
      categoryLabel: 'Narzędzia',
      title: 'GitHub Copilot z Gemini 3.1 Pro i agentami w Jira',
      summary:
        'GitHub dodał Gemini 3.1 Pro jako opcję w Copilot Enterprise i Pro+. Nowa integracja z Jira pozwala uruchamiać Copilot coding agenta bezpośrednio z ticketów — agent automatycznie tworzy branch, PR i linkuje do zadania. W benchmarkach SWE-bench Copilot rozwiązuje już 56% zadań.',
      source: 'GitHub Changelog',
      sourceUrl: 'https://github.blog/changelog/2026-03-25-github-copilot-for-jira-public-preview-enhancements/',
      playbookUpdates: [
        {
          playbook: 'Developer',
          change: 'Moduł "AI Code Review" rozszerzony o workflow z Copilot coding agentem i automatyczne PR review',
          route: '/playbook/1',
        },
        {
          playbook: 'Product Manager',
          change: 'Nowy case study w module "Współpraca z zespołem technicznym" — specyfikacja zadań AI w Jira z agentem Copilot',
          route: '/playbook/2',
        },
      ],
    },
    {
      id: 3,
      date: '20 marca 2026',
      category: 'model-release',
      categoryLabel: 'Nowy model',
      title: 'GPT-5.4 od OpenAI — trzy warianty dla profesjonalistów',
      summary:
        'OpenAI wypuścił GPT-5.4 w trzech wariantach zoptymalizowanych pod kątem zadań profesjonalnych. Model wykazuje znaczącą poprawę w złożonych, wieloetapowych projektach. W tym samym miesiącu premierę miały również Gemini 3.1 Ultra, Grok 4.20 i Mistral Small 4 — łącznie 4 modele frontier w 23 dni.',
      source: 'OpenAI / Digital Applied',
      sourceUrl: 'https://www.digitalapplied.com/blog/march-2026-ai-roundup-month-that-changed-everything',
      playbookUpdates: [
        {
          playbook: 'Developer',
          change: 'Moduł "Prompt engineering" zaktualizowany o techniki chain-of-thought dla GPT-5.4 i porównanie z Opus 4.6',
          route: '/playbook/1',
        },
        {
          playbook: 'Product Manager',
          change: 'Dodano nowe benchmarki do modułu "Walidacja hipotez" — jak testować prototypy na różnych modelach frontier',
          route: '/playbook/2',
        },
      ],
    },
    {
      id: 4,
      date: '18 marca 2026',
      category: 'industry',
      categoryLabel: 'Branża',
      title: 'NVIDIA Agent Toolkit — framework do budowy autonomicznych agentów',
      summary:
        'NVIDIA zaprezentowała Agent Toolkit, otwarty framework do tworzenia autonomicznych agentów AI zdolnych do rozumowania, planowania i wykonywania złożonych zadań enterprise. Toolkit integruje się z MCP i obsługuje orkiestrację wielu agentów. Alibaba odpowiedziało platformą Wukong do zarządzania agentami w workflow dokumentowym.',
      source: 'NVIDIA / Risk Info AI',
      sourceUrl: 'https://www.riskinfo.ai/post/ai-insights-key-global-developments-in-march-2026',
      playbookUpdates: [
        {
          playbook: 'Developer',
          change: 'Nowy moduł "Wdrażanie modeli AI na produkcję" wzbogacony o architekturę multi-agent z NVIDIA Toolkit',
          route: '/playbook/1',
        },
      ],
    },
    {
      id: 5,
      date: '15 marca 2026',
      category: 'policy',
      categoryLabel: 'Regulacje',
      title: 'AI Accountability Act — USA wymaga audytów bias w AI',
      summary:
        'Stany Zjednoczone przyjęły AI Accountability Act, który nakłada na firmy obowiązek przeprowadzania i publikowania regularnych audytów bias w systemach AI wykorzystywanych w rekrutacji, kredytach, opiece zdrowotnej i wymiarze sprawiedliwości. To pierwszy federalny akt prawny regulujący odpowiedzialność algorytmiczną.',
      source: 'AI and News',
      sourceUrl: 'https://www.aiandnews.com/blog/latest-ai-news-march-2026-4/',
      playbookUpdates: [
        {
          playbook: 'Product Manager',
          change: 'Moduł "Etyka i compliance w produktach AI" zaktualizowany o wymogi AI Accountability Act i checklistę audytu',
          route: '/playbook/2',
        },
        {
          playbook: 'Developer',
          change: 'Moduł "Bezpieczeństwo aplikacji AI" rozszerzony o guardrails zgodne z nowym prawem federalnym USA',
          route: '/playbook/1',
        },
      ],
    },
  ];

  expandedNews: number | null = null;

  toggleExpand(id: number): void {
    this.expandedNews = this.expandedNews === id ? null : id;
  }
}
