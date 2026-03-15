import { Component, input, output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HideNotLoadedDirective } from '../shared/hideNotLoaded.directive';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	imports: [TranslateModule, HideNotLoadedDirective],
})
export class ToolbarComponent {
	darkMode = input.required<boolean>();
	flag = input.required<string>();

	toggleDarkMode = output();
	toggleLanguage = output();
	reset = output();
}
