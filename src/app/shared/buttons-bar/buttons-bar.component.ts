import { Component, Input } from '@angular/core';
import type { InteractionButton } from '../types';

@Component({
	selector: 'app-buttons-bar',
	templateUrl: './buttons-bar.component.html',
	styleUrls: ['./buttons-bar.component.sass'],
	imports: [],
})
export class ButtonsBarComponent {
	@Input() btnClass = '';
	preventLink(event: Event) {
		event.preventDefault();
	}

	@Input() buttons?: InteractionButton[];
}
