import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LightboxComponent } from '../../shared/lightbox/lightbox.component';
import { TagBarComponent } from '../../shared/tag-bar/tag-bar.component';
import type { ProjectInfo } from '../../shared/types';

@Component({
	selector: 'app-project',
	templateUrl: './project.component.html',
	styleUrls: ['./project.component.sass'],
	changeDetection: ChangeDetectionStrategy.Eager,
	imports: [
		TagBarComponent,
		TranslateModule,
		LightboxComponent,
		NgOptimizedImage,
	],
})
export class ProjectComponent {
	@Input() project!: ProjectInfo;

	get tags(): string[] {
		return this.project.interactions?.map((i) => i.name) ?? [];
	}
}
