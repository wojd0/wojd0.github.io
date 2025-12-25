import { Injectable } from '@angular/core';
import projects from '../assets/projects.json';
import work from '../assets/work.json';
import type { ProjectInfo } from './shared/types';

@Injectable({
	providedIn: 'root',
})
export class ProjectsService {
	cardInfo: Record<string, ProjectInfo[]> = { projects, work };

	getProjectsInfo(type: string) {
		return this.cardInfo[type] as ProjectInfo[];
	}
}
