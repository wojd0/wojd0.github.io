import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, inject, PLATFORM_ID } from '@angular/core';

@Directive({
	selector: '[a-hideNotLoaded]',
})
export class HideNotLoadedDirective {
	el = inject(ElementRef<HTMLImageElement>).nativeElement as HTMLImageElement;
	constructor() {
		if (!isPlatformBrowser(inject(PLATFORM_ID)) || this.el.complete) return;

		this.el.style.opacity = '0';
		this.el.addEventListener('load', () => {
			this.el.style.opacity = '100';
		});
	}
}
