import { DOCUMENT } from '@angular/common';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AboutComponent } from './about/about.component';
import { EducationTimelineComponent } from './education/education-timeline/education-timeline.component';
import { ExperienceTimelineComponent } from './experience/experience-timeline.component';
import { HrComponent } from './hr/hr.component';
import { ProjectList } from './projectList/list.component';
import { HeadingComponent } from './shared/heading/heading.component';
import { HideNotLoadedDirective } from './shared/hideNotLoaded.directive';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass'],
	imports: [
		HideNotLoadedDirective,
		AboutComponent,
		HeadingComponent,
		ProjectList,
		HrComponent,
		EducationTimelineComponent,
		ExperienceTimelineComponent,
	],
})
export class AppComponent {
	private translateService = inject(TranslateService);
	private document = inject(DOCUMENT);

	language = signal('en');
	nextLanguage = computed(() => (this.language() === 'pl' ? 'en' : 'pl'));
	flag = computed(() => `./assets/${this.nextLanguage()}.svg`);

	darkMode = signal(false);

	constructor() {
		const browserLanguage = navigator.language;
		const lsLang = localStorage.getItem('lang');

		if (lsLang) this.translateService.use(lsLang);
		else if (browserLanguage in this.translateService.langs)
			this.translateService.use(browserLanguage);

		this.language.set(this.translateService.currentLang);
		this.document.documentElement.lang =
			this.translateService.currentLang || 'en';

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
