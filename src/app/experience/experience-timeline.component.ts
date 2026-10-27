import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import experiences from '../../assets/experience.json';
import { localizedArray } from '../shared/localizedArray';

@Component({
	selector: 'app-experience-timeline',
	imports: [TranslateModule],
	changeDetection: ChangeDetectionStrategy.Eager,
	templateUrl: './experience-timeline.component.html',
})
export class ExperienceTimelineComponent {
	protected readonly localizedArray = localizedArray();
	experiences = experiences;
}
