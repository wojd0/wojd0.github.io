import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TagBarComponent } from '../shared/tag-bar/tag-bar.component';

interface ExperienceEntry {
	key: string;
	tags: string[];
}

@Component({
	selector: 'app-experience-timeline',
	imports: [TranslateModule, TagBarComponent],
	templateUrl: './experience-timeline.component.html',
})
export class ExperienceTimelineComponent {
	experiences: ExperienceEntry[] = [
		{
			key: 'hyland',
			tags: [
				'angular',
				'typescript',
				'javascript',
				'saas',
				'git',
				'cicd',
				'cloud',
				'sysarch',
			],
		},
		{
			key: 'eternals',
			tags: [
				'javascript',
				'typescript',
				'react',
				'angular',
				'nodejs',
				'sass',
				'webflow',
				'nocode',
				'saas',
			],
		},
		{
			key: 'freelance',
			tags: [
				'wordpress',
				'joomla',
				'javascript',
				'seo',
				'gcp',
				'bootstrap',
				'jquery',
				'ecommerce',
			],
		},
	];
}
