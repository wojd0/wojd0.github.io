import {
	ChangeDetectionStrategy,
	Component,
	Input,
	inject,
	type OnInit,
} from '@angular/core';
import { ProjectsService } from '../projects.service';
import type { ProjectInfo } from '../shared/types';
import { ProjectComponent } from './project/project.component';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	changeDetection: ChangeDetectionStrategy.Eager,
	imports: [ProjectComponent],
})
export class ProjectList implements OnInit {
	private projectsService = inject(ProjectsService);

	projects?: ProjectInfo[];
	@Input() type: string = 'projects';

	ngOnInit(): void {
		this.projects = this.projectsService.getProjectsInfo(this.type);
	}
}
