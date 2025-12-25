import { AsyncPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { ButtonsBarComponent } from '../../shared/buttons-bar/buttons-bar.component';
import type { ProjectInfo } from '../../shared/types';

@Component({
	selector: 'app-project',
	templateUrl: './project.component.html',
	styleUrls: ['./project.component.sass'],
	imports: [ButtonsBarComponent, AsyncPipe, TranslateModule],
})
export class ProjectComponent {
	open = new BehaviorSubject(false);

	@Input() project!: ProjectInfo;
}
