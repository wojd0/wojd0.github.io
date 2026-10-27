import { ChangeDetectionStrategy, Component } from '@angular/core';
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
	buttons = contactButtons.filter((button) => button.name !== 'about.email');
}
