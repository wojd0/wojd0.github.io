import type { ApplicationConfig } from '@angular/core';
import { provideZoneChangeDetection } from '@angular/core';
import {
	provideClientHydration,
	withIncrementalHydration,
} from '@angular/platform-browser';
import { provideTranslateService, TranslateLoader } from '@ngx-translate/core';
import { provideAppRoutes } from '../routes';
import { JsonTranslateLoader } from './shared/json-translate.loader';

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection(),
		provideClientHydration(withIncrementalHydration()),
		provideAppRoutes(),
		provideTranslateService({
			fallbackLang: 'en',
			lang: 'en',
			loader: { provide: TranslateLoader, useClass: JsonTranslateLoader },
		}),
	],
};
