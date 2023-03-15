import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = {
    title: 'Learning Angular'
  };

  changeTitle() {
    this.data.title = 'lol jk';
  };

  onKeyUp(newTitle: string) {
    this.data.title = newTitle;
  };
}
