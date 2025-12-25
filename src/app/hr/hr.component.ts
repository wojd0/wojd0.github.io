import { Component, type ElementRef, Input, ViewChild } from '@angular/core';

@Component({
	selector: 'app-hr',
	templateUrl: './hr.component.html',
	styleUrls: ['./hr.component.css'],
})
export class HrComponent {
	margin: string = '';
	@ViewChild('gt') gradient!: ElementRef<SVGElement>;

	@Input('colors') colors: { start: string; end: string } = {
		start: '#00d084',
		end: '#7bdcb5',
	};
	// {topStart: '#00d084', topEnd: '#7bdcb5', bottomStart: '#00d084', bottomEnd: '#00d084'}
}
