import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { ProjectInfo } from '../shared/types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
  animations: [
    trigger('open', [
      transition(':enter', [
        style({opacity: 0}),
        animate('{{ duration }}s {{ delay }}ms')
      ], {
        params: {
          duration: .7,
          delay: 0
        }
      })
    ]),
    trigger('underline', [
      transition(':enter', [
        style({width: 0}),
        animate('{{ duration }}s {{ delay }}ms ease-in-out')
      ], {
        params: {
          duration: 2,
          delay: 0
        }
      })
    ]),
  ]
})
export class ProjectList implements OnInit {
  projects?: ProjectInfo[];

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.projects = this.projectsService.getProjectsInfo();
  }

}
