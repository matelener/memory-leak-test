import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showCmp = false;

  onClick() {
    for (let count = 529; count--; count < 0) {
      setTimeout(() => {
        this.showCmp = !this.showCmp;
      }, 1);
    }
  }
}
