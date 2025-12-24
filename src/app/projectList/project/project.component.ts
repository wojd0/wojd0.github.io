import { Component, Input } from '@angular/core';
import { ProjectInfo } from '../../shared/types';
import { BehaviorSubject } from 'rxjs';
import { ButtonsBarComponent } from '../../shared/buttons-bar/buttons-bar.component';
import { AsyncPipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.sass'],
    imports: [ButtonsBarComponent, AsyncPipe, TranslateModule]
})
export class ProjectComponent {

  open = new BehaviorSubject(false);

  @Input() project!: ProjectInfo;
}
