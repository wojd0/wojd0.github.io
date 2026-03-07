import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { EducationHighlightComponent } from '../education-highlight/education-highlight.component';

@Component({
	selector: 'app-education-timeline',
	imports: [EducationHighlightComponent, TranslateModule],
	templateUrl: './education-timeline.component.html',
	styleUrl: './education-timeline.component.sass',
})
export class EducationTimelineComponent {
	years = [
		{ label: 2023, left: 12.5 },
		{ label: 2024, left: 37.5 },
		{ label: 2025, left: 62.5 },
		{ label: 2026, left: 87.5 },
	];
}
