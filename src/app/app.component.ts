import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
	ChangeDetectionStrategy,
	Component,
	computed,
	effect,
	inject,
	PLATFORM_ID,
	signal,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AboutComponent } from './about/about.component';
import { EducationTimelineComponent } from './education/education-timeline/education-timeline.component';
import { ExperienceTimelineComponent } from './experience/experience-timeline.component';
import { HrComponent } from './hr/hr.component';
import { ProjectList } from './projectList/list.component';
import { ButtonsBarComponent } from './shared/buttons-bar/buttons-bar.component';
import { contactButtons } from './shared/contactButtons';
import { HeadingComponent } from './shared/heading/heading.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass'],
	changeDetection: ChangeDetectionStrategy.Eager,
	imports: [
		ToolbarComponent,
		AboutComponent,
		HeadingComponent,
		ProjectList,
		HrComponent,
		EducationTimelineComponent,
		ExperienceTimelineComponent,
		ButtonsBarComponent,
	],
})
export class AppComponent {
	private translateService = inject(TranslateService);
	private document = inject(DOCUMENT);
	private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
	private supportedLanguages = ['en', 'pl'];

	language = signal('en');
	nextLanguage = computed(() => (this.language() === 'pl' ? 'en' : 'pl'));
	flag = computed(() => `./assets/${this.nextLanguage()}.svg`);
	translated = computed(() => this.language() !== 'en');

	darkMode = signal(false);
	contactButtons = contactButtons;

	constructor() {
		if (!this.isBrowser) return;

		const browserLanguage = navigator.language.split('-')[0];
		const lsLang = localStorage.getItem('lang');

		const language = [lsLang, browserLanguage].find(
			(lang) => !!lang && this.supportedLanguages.includes(lang),
		);

		if (language && language !== this.language()) {
			this.translateService.use(language);
			this.language.set(language);
		}

		this.document.documentElement.lang = this.language();

		const lsDark = localStorage.getItem('darkMode');
		const sysDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

		if (lsDark) {
			this.darkMode.set(lsDark === 'true');
		} else {
			this.darkMode.set(sysDark);
		}

		effect(() => {
			if (this.darkMode()) {
				this.document.documentElement.classList.add('dark');
				localStorage.setItem('darkMode', 'true');
			} else {
				this.document.documentElement.classList.remove('dark');
				localStorage.setItem('darkMode', 'false');
			}
		});
	}

	toggleDarkMode() {
		this.darkMode.update((v) => !v);
	}

	toggleLanguage() {
		localStorage.setItem('lang', this.nextLanguage());
		this.document.documentElement.lang = this.nextLanguage();
		this.secret();
	}

	secret() {
		localStorage.removeItem('visited');
		location.reload();
	}
}
