import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import experiences from '../../assets/experience.json';
import { localizedArray } from '../shared/localizedArray';
import { TagBarComponent } from '../shared/tag-bar/tag-bar.component';

@Component({
	selector: 'app-experience-timeline',
	imports: [TranslateModule, TagBarComponent],
	templateUrl: './experience-timeline.component.html',
})
export class ExperienceTimelineComponent {
	protected readonly localizedArray = localizedArray();
	experiences = experiences;
}
