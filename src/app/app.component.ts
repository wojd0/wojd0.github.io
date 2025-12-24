import { Component, computed, signal, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HideNotLoadedDirective } from './shared/hideNotLoaded.directive';
import { AboutComponent } from './about/about.component';
import { HeadingComponent } from './shared/heading/heading.component';
import { ProjectList } from './projectList/list.component';
import { HrComponent } from './hr/hr.component';
import { provideAppRoutes } from '../routes';

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
  ],
})
export class AppComponent {
  private translateService = inject(TranslateService);

  language = signal('en');
  nextLanguage = computed(() => (this.language() === 'pl' ? 'en' : 'pl'));
  flag = computed(() => `./assets/${this.nextLanguage()}.svg`);

  constructor() {
    const browserLanguage = navigator.language;
    const lsLang = localStorage.getItem('lang');

    if (lsLang) this.translateService.use(lsLang);
    else if (browserLanguage in this.translateService.langs)
      this.translateService.use(browserLanguage);

    this.language.set(this.translateService.currentLang);
  }

  toggleLanguage() {
    localStorage.setItem('lang', this.nextLanguage());
    this.secret();
  }

  secret() {
    localStorage.removeItem('visited');
    location.reload();
  }
}
