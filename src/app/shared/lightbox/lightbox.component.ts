import {
	ChangeDetectionStrategy,
	Component,
	computed,
	input,
	signal,
} from '@angular/core';
import type { Image } from '../types';

@Component({
	selector: 'app-lightbox',
	imports: [],
	templateUrl: './lightbox.component.html',
	styleUrl: './lightbox.component.sass',
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		'(document:keydown.escape)': 'close()',
		'(document:keydown.arrowleft)': 'prev()',
		'(document:keydown.arrowright)': 'next()',
	},
})
export class LightboxComponent {
	images = input.required<Image[]>();
	alt = input<string>('');

	open = signal(false);
	index = signal(0);
	loaded = signal(false);
	closing = signal(false);

	thumbnailSrc = computed(() => this.images()[0]?.src);

	currentSrc = computed(() => {
		const img = this.images()[this.index()];
		return img.full || img.src;
	});

	hasMultiple = computed(() => this.images().length > 1);

	openLightbox(): void {
		this.index.set(0);
		this.loaded.set(false);
		this.closing.set(false);
		this.open.set(true);
	}

	close(): void {
		if (!this.open()) return;
		if (this.closing()) return;
		this.closing.set(true);
	}

	onAnimationDone(): void {
		if (this.closing()) {
			this.open.set(false);
			this.closing.set(false);
		}
	}

	next(): void {
		if (!this.open() || !this.hasMultiple()) return;
		this.loaded.set(false);
		this.index.update((i) => (i + 1) % this.images().length);
	}

	prev(): void {
		if (!this.open() || !this.hasMultiple()) return;
		this.loaded.set(false);
		const len = this.images().length;
		this.index.update((i) => (i - 1 + len) % len);
	}

	onLoad(): void {
		this.loaded.set(true);
	}
}
