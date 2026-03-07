import { AsyncPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { TagBarComponent } from '../../shared/tag-bar/tag-bar.component';
import type { ProjectInfo } from '../../shared/types';

@Component({
	selector: 'app-project',
	templateUrl: './project.component.html',
	styleUrls: ['./project.component.sass'],
	imports: [TagBarComponent, AsyncPipe, TranslateModule],
})
export class ProjectComponent {
	open = new BehaviorSubject(false);

	@Input() project!: ProjectInfo;

	get tags(): string[] {
		return this.project.interactions?.map((i) => i.name) ?? [];
	}
}
