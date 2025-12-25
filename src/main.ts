import { NgOptimizedImage } from '@angular/common';
import {
	provideHttpClient,
	withInterceptorsFromDi,
} from '@angular/common/http';
import {
	enableProdMode,
	importProvidersFrom,
	provideZoneChangeDetection,
} from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { provideAppRoutes } from './routes';

if (environment.production) {
	enableProdMode();
}

bootstrapApplication(AppComponent, {
	providers: [
		provideZoneChangeDetection(),
		importProvidersFrom(BrowserModule, NgOptimizedImage),
		provideHttpClient(withInterceptorsFromDi()),
		provideAnimations(),
		provideAppRoutes(),
		provideTranslateHttpLoader(),
		provideTranslateService({
			fallbackLang: 'en',
			loader: provideTranslateHttpLoader(),
		}),
	],
}).catch((err) => console.error(err));
