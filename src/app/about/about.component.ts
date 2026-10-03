import { isPlatformBrowser } from '@angular/common';
import {
	ChangeDetectionStrategy,
	Component,
	inject,
	PLATFORM_ID,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonsBarComponent } from '../shared/buttons-bar/buttons-bar.component';
import { contactButtons } from '../shared/contactButtons';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.sass'],
	changeDetection: ChangeDetectionStrategy.Eager,
	imports: [ButtonsBarComponent, TranslateModule],
})
export class AboutComponent {
	visited = 1;
	constructor() {
		if (!isPlatformBrowser(inject(PLATFORM_ID))) return;

		if (localStorage.getItem('visited')) this.visited = 5;
		localStorage.setItem('visited', 'true');
	}

	show = false;

	buttons = contactButtons;
}
