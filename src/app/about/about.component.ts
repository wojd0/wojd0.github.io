import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HrComponent } from '../hr/hr.component';
import { ButtonsBarComponent } from '../shared/buttons-bar/buttons-bar.component';
import type { InteractionButton } from '../shared/types';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.sass'],
	animations: [
		trigger('load', [
			transition(
				':enter',
				[style({ opacity: 0 }), animate('{{ duration }}s {{ delay }}ms')],
				{
					params: {
						duration: 0.4,
						delay: 0,
					},
				},
			),
		]),
		trigger('underline', [
			transition(
				':enter',
				[
					style({ width: 0 }),
					animate('{{ duration }}s {{ delay }}ms ease-in-out'),
				],
				{
					params: {
						duration: 2,
						delay: 0,
					},
				},
			),
		]),
	],
	imports: [ButtonsBarComponent, HrComponent, TranslateModule],
})
export class AboutComponent {
	visited = 1;
	constructor() {
		if (localStorage.getItem('visited')) this.visited = 5;
		localStorage.setItem('visited', 'true');
	}

	show = false;

	buttons: InteractionButton[] = [
		{
			name: 'E-Mail me',
			icon: 'ph-envelope',
			url: 'mailto:wojciechduda03@gmail.com',
		},
		{
			name: 'GitHub',
			icon: 'ph-github-logo',
			url: 'https://github.com/wojd0',
		},
		{
			name: 'Upwork',
			icon: 'upwork.svg',
			url: 'https://www.upwork.com/freelancers/~016bbdbafee3f36314',
		},
	];
}
