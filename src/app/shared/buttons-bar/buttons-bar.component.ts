import { Component, computed, Input, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import type { InteractionButton } from '../types';

@Component({
	selector: 'app-buttons-bar',
	templateUrl: './buttons-bar.component.html',
	styleUrls: ['./buttons-bar.component.sass'],
	imports: [TranslateModule],
})
export class ButtonsBarComponent {
	private sanitizer = inject(DomSanitizer);

	@Input() btnClass = '';
	@Input() buttons?: InteractionButton[];
	expanded = input(false);

	expandClasses = computed(() =>
		this.expanded()
			? 'xl:max-w-prose xl:ml-1 xl:pr-3'
			: 'xl:group-hover:pr-3 xl:group-hover:ml-1 xl:group-hover:max-w-prose',
	);

	safeUrl(url: string) {
		return this.sanitizer.bypassSecurityTrustUrl(url);
	}

	preventLink(event: Event) {
		event.preventDefault();
	}
}
