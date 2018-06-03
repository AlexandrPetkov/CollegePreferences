import {Component, Input} from '@angular/core';

@Component({
  selector: 'help-button',
  templateUrl:'./help-button.component.html',
  styleUrls:['./help-button.component.css']
})

export class HelpButtomComponent {
  @Input() message: string;
  tooltipVisible: false;

  onClick(event: MouseEvent) {
    this.tooltipVisible = !this.tooltipVisible;+
  }
}
