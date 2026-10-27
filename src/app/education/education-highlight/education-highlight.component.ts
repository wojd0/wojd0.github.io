import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type HighlightPosition = 'top' | 'bottom';

@Component({
	selector: 'app-education-highlight',
	imports: [],
	templateUrl: './education-highlight.component.html',
	changeDetection: ChangeDetectionStrategy.Eager,
	styleUrl: './education-highlight.component.sass',
})
export class EducationHighlightComponent {
	position = input<HighlightPosition>('bottom');

	get stemClasses(): string {
		return this.position() === 'top'
			? 'bottom-5 top-auto'
			: 'top-5 bottom-auto';
	}

	get tooltipClasses(): string {
		return this.position() === 'top'
			? 'bottom-full mb-17 md:mb-6'
			: 'top-full mt-19 md:mt-5';
	}
}
