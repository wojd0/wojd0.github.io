import { inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export const localizedArray = () => {
	const translationService = inject(TranslateService);

	return (key: string): string[] => {
		const rawArray = translationService.instant(key);

		return Array.isArray(rawArray) ? rawArray : [rawArray];
	};
};
