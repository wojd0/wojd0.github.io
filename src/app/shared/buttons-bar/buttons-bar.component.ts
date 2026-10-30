import {
	ChangeDetectionStrategy,
	Component,
	computed,
	Input,
	input,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import type { InteractionButton } from '../types';

@Component({
	selector: 'app-buttons-bar',
	templateUrl: './buttons-bar.component.html',
	styleUrls: ['./buttons-bar.component.sass'],
	changeDetection: ChangeDetectionStrategy.Eager,
	imports: [TranslateModule],
})
export class ButtonsBarComponent {
	@Input() btnClass = '';
	@Input() buttons?: InteractionButton[];
	expanded = input(false);

	expandClasses = computed(() =>
		this.expanded()
			? 'xl:max-w-prose xl:ml-1 xl:pr-3'
			: 'xl:group-hover:pr-3 xl:group-hover:ml-1 xl:group-hover:max-w-prose',
	);
}
