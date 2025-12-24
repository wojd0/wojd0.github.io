import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { InteractionButton } from '../types';

@Component({
    selector: 'app-buttons-bar',
    templateUrl: './buttons-bar.component.html',
    styleUrls: ['./buttons-bar.component.sass'],
    imports: [CommonModule]
})
export class ButtonsBarComponent  {
  constructor(private httpClient: HttpClient) { }
  @Input() btnClass = '';
  preventLink(event: Event){
    event.preventDefault();
  }

  @Input() buttons?: InteractionButton[]

}
