import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  storedPosts = [];

  onPostAdded(post) {
    this.storedPosts.push(post);
  }
}
