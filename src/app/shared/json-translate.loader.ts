import type { TranslateLoader, TranslationObject } from '@ngx-translate/core';
import { from, type Observable, of } from 'rxjs';
import en from '../../assets/i18n/en.json';

export class JsonTranslateLoader implements TranslateLoader {
	getTranslation(lang: string): Observable<TranslationObject> {
		if (lang === 'pl')
			return from(
				import('../../assets/i18n/pl.json').then(
					(m) => m.default as TranslationObject,
				),
			);

		return of(en as TranslationObject);
	}
}
