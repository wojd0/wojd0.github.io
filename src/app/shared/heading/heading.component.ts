import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
	selector: 'app-heading',
	styles: [
		`.heading{
    text-shadow: 3px 3px rgb(30 64 175)
  }
  `,
	],
	template: `
    <h2
      class="heading relative text-[min(3.4rem,13.5vw)] leading-[1.1] lg:text-7xl lg:leading-none text-center text-balance text-primary-500 dark:text-primary-400 pb-2 px-2 font-josefin font-semibold mx-auto w-fit max-w-full
      after:h-px after:content-[''] after:bg-secondary-800 dark:after:bg-secondary-600 after:w-full after:left-0 after:absolute after:bottom-0"
    >
      {{ this.text | translate }}
    </h2>
  `,
	changeDetection: ChangeDetectionStrategy.Eager,
	imports: [TranslateModule],
})
export class HeadingComponent {
	@Input() text: string = '';
}
