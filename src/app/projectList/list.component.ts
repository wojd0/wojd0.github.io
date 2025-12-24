import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { ProjectInfo } from '../shared/types';

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
    standalone: false
})
export class ProjectList implements OnInit {
  projects?: ProjectInfo[];
  @Input() type: string = 'projects';
  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projects = this.projectsService.getProjectsInfo(this.type);
  }
}
