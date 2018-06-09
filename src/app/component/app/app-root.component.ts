import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app-root.component.html',
  styleUrls: ['./app-root.component.scss']
})
export class AppRootComponent {
  title = 'counter:';
  counter = 0;

  constructor() {
    this.render();
  }

  render() {
    setInterval(() => {
      this.counter++;
    }, 2000);
  }

  onClick() {
    this.counter++;
    console.log(this.counter);
  }
}
