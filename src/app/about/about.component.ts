import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
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
	imports: [ButtonsBarComponent, TranslateModule],
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
			name: 'about.email',
			icon: 'ph-envelope',
			url: 'mailto:contact@wojciech-duda.com',
		},
		{
			name: 'about.linkedin',
			icon: 'ph-linkedin-logo',
			url: 'https://www.linkedin.com/in/wojciechduda3/',
		},
		{
			name: 'about.github',
			icon: 'ph-github-logo',
			url: 'https://github.com/wojd0',
		},
	];
}
