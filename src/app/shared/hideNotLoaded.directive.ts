import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
	standalone: true,
	selector: '[a-hideNotLoaded]',
})
export class HideNotLoadedDirective {
	el = inject(ElementRef<HTMLElement>).nativeElement as HTMLElement;
	constructor() {
		this.el.style.opacity = '0';
		this.el.addEventListener('load', () => {
			this.el.style.opacity = '100';
		});
	}
}
