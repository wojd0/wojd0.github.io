import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit, inject } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { ProjectInfo } from '../shared/types';
import { ProjectComponent } from './project/project.component';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    animations: [
        trigger('open', [
            transition(':enter', [style({ opacity: 0 }), animate('{{ duration }}s {{ delay }}ms')], {
                params: {
                    duration: 0.7,
                    delay: 0,
                },
            }),
        ]),
    ],
    imports: [ProjectComponent]
})
export class ProjectList implements OnInit {
  private projectsService = inject(ProjectsService);

  projects?: ProjectInfo[];
  @Input() type: string = 'projects';

  ngOnInit(): void {
    this.projects = this.projectsService.getProjectsInfo(this.type);
  }
}
