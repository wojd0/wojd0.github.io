import { Component, Input } from '@angular/core';

import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { animate, query, style, transition, trigger } from '@angular/animations';

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
      class="heading relative text-[3.4rem] lg:text-7xl text-center text-emerald-500 mb-8 pb-2 px-2 font-josefin font-black mx-auto w-min whitespace-nowrap
      after:h-[1px] after:content-[''] after:bg-blue-800 after:w-full after:left-0 after:absolute after:bottom-0"
    >
      {{ this.text | translate }}
    </h2>
  `,
    imports: [TranslateModule]
})
export class HeadingComponent {
  @Input() text: string = '';
}
