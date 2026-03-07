import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
	selector: 'app-tag-bar',
	imports: [TranslateModule],
	template: `
		<div class="flex flex-wrap gap-1.5 justify-center">
			@for (tag of tags; track tag) {
				<span class="px-2.5 py-0.5 text-sm rounded-full bg-primary-500/10 dark:bg-primary-500/15 text-primary-600 dark:text-primary-300 font-medium border border-primary-500/20 transition-colors duration-300">
					{{ ('skills.' + tag) | translate }}
				</span>
			}
		</div>
	`,
})
export class TagBarComponent {
	@Input() tags: string[] = [];
}
