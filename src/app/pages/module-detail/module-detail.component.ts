import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { ThemeService } from '../../shared/services/theme.service';
import { SafeUrlPipe } from '../../shared/pipes/safe-url.pipe';

interface Step {
  title: string;
  description: string;
  code?: string;
}

interface ModuleContent {
  title: string;
  duration: string;
  videoUrl: string;
  intro: string;
  steps: Step[];
}

const MODULE_CONTENT: Record<string, ModuleContent> = {
  'custom-skills': {
    title: 'Budowanie Custom Skills w Claude Code',
    duration: '45 min',
    videoUrl: 'https://www.youtube.com/embed/TZUTe7s11-I',
    intro:
      'Custom Skills pozwalają rozszerzyć Claude Code o własne polecenia dopasowane do Twojego workflow. W tym module nauczysz się tworzyć skille od podstaw — od prostych szablonów po zaawansowane automatyzacje.',
    steps: [
      {
        title: '1. Utwórz katalog na skille',
        description:
          'Claude Code przechowuje skille w katalogu .claude/skills w Twoim projekcie. Każdy skill to osobny folder z plikiem SKILL.md.',
        code: 'mkdir -p .claude/skills/my-first-skill',
      },
      {
        title: '2. Stwórz plik SKILL.md',
        description:
          'Plik SKILL.md to serce skilla. Zawiera frontmatter YAML (metadane) oraz treść markdown z instrukcjami, które Claude wykona po wywołaniu komendy.',
        code: `cat > .claude/skills/my-first-skill/SKILL.md << 'EOF'
---
name: my-first-skill
description: Generates a component with tests
invoke: /my-first-skill
---

# My First Skill

When invoked, do the following:
1. Ask the user for a component name
2. Create the component file with boilerplate
3. Create a matching test file
4. Run the tests to verify everything works
EOF`,
      },
      {
        title: '3. Zdefiniuj frontmatter (metadane)',
        description:
          'Frontmatter określa nazwę skilla, opis widoczny w podpowiedziach oraz komendę slash do jego wywołania. Pola name i description są wymagane.',
        code: `---
name: component-generator
description: Scaffolds Angular component with template and tests
invoke: /generate-component
---`,
      },
      {
        title: '4. Napisz instrukcje w markdown',
        description:
          'Pod frontmatterem umieść szczegółowe instrukcje w markdown. Claude wykona je krok po kroku. Możesz używać list, bloków kodu, warunków i odwołań do plików projektu.',
        code: `# Component Generator

## Steps
1. Read the project's component structure from src/app/components/
2. Ask the user for:
   - Component name (kebab-case)
   - Whether it needs a service
3. Generate files following the existing patterns
4. Add the component to the nearest module
5. Create a spec file with basic tests
6. Run \`ng test --watch=false\` to verify`,
      },
      {
        title: '5. Przetestuj skill w Claude Code',
        description:
          'Otwórz terminal w VS Code, uruchom Claude Code i wywołaj swój skill za pomocą komendy slash. Claude załaduje instrukcje z SKILL.md i zacznie je wykonywać.',
        code: `# W terminalu VS Code:
claude

# Następnie wpisz komendę:
/my-first-skill`,
      },
      {
        title: '6. Dodaj warunki i kontekst projektu',
        description:
          'Skill może odwoływać się do plików projektu, sprawdzać konwencje i dostosowywać się do kontekstu. Użyj sekcji warunkowych, aby skill działał różnie w zależności od sytuacji.',
        code: `# Smart Component Generator

## Context
- Read tsconfig.json to determine path aliases
- Check if project uses standalone components or modules
- Detect the CSS framework (Tailwind, SCSS, etc.)

## Behavior
- If standalone: create component with \`standalone: true\`
- If module-based: add to the nearest NgModule
- Match existing naming conventions in the project`,
      },
      {
        title: '7. Stwórz skill z wieloma plikami',
        description:
          'Bardziej zaawansowane skille mogą zawierać dodatkowe pliki — szablony, przykłady, lub skrypty pomocnicze. Claude ma dostęp do całego katalogu skilla.',
        code: `# Struktura katalogu:
.claude/skills/api-endpoint/
├── SKILL.md              # Główne instrukcje
├── template.controller.ts # Szablon kontrolera
├── template.service.ts    # Szablon serwisu
└── template.spec.ts       # Szablon testów`,
      },
      {
        title: '8. Opublikuj i udostępnij skill zespołowi',
        description:
          'Skille zapisane w .claude/skills/ w repozytorium są dostępne dla całego zespołu. Commituj je razem z kodem projektu, aby każdy mógł z nich korzystać.',
        code: `git add .claude/skills/
git commit -m "feat: add custom Claude Code skills for team workflow"
git push`,
      },
    ],
  },
};

@Component({
  selector: 'app-module-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, SafeUrlPipe],
  templateUrl: './module-detail.component.html',
})
export class ModuleDetailComponent implements OnInit {
  readonly theme = inject(ThemeService);
  module: ModuleContent | null = null;
  playbookId = '1';
  completedSteps: Set<number> = new Set();

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.playbookId = this.route.snapshot.paramMap.get('id') ?? '1';
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.module = MODULE_CONTENT[slug] ?? null;
  }

  toggleStep(index: number): void {
    const next = new Set(this.completedSteps);
    if (next.has(index)) {
      next.delete(index);
    } else {
      next.add(index);
    }
    this.completedSteps = next;
  }

  isStepCompleted(index: number): boolean {
    return this.completedSteps.has(index);
  }

  get progressPercent(): number {
    if (!this.module) return 0;
    return Math.round((this.completedSteps.size / this.module.steps.length) * 100);
  }
}
