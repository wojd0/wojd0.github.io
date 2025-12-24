
import { HttpClient } from '@angular/common/http';
import { Component, Input, inject } from '@angular/core';
import { InteractionButton } from '../types';

@Component({
    selector: 'app-buttons-bar',
    templateUrl: './buttons-bar.component.html',
    styleUrls: ['./buttons-bar.component.sass'],
    imports: []
})
export class ButtonsBarComponent  {
  private httpClient = inject(HttpClient);

  @Input() btnClass = '';
  preventLink(event: Event){
    event.preventDefault();
  }

  @Input() buttons?: InteractionButton[]

}
