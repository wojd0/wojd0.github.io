import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
	selector: 'app-tag-bar',
	imports: [TranslateModule],
	changeDetection: ChangeDetectionStrategy.Eager,
	template: `
		<div class="flex flex-wrap gap-1.5 justify-center">
			@if (year) {
				<span class="px-2.5 py-0.5 text-sm rounded-full text-page-foreground/70 border border-page-border font-medium transition-colors duration-300">
					<i class="ph ph-clock-counter-clockwise" aria-hidden="true"></i>
					{{ year }}
				</span>
			}
			@for (tag of tags; track tag) {
				<span class="px-2.5 py-0.5 text-sm rounded-full bg-primary-500/10 dark:bg-primary-500/15 text-primary-700 dark:text-primary-300 font-medium border border-primary-500/20 transition-colors duration-300">
					{{ ('skills.' + tag) | translate }}
				</span>
			}
		</div>
	`,
})
export class TagBarComponent {
	@Input() tags: string[] = [];
	@Input() year?: number;
}
