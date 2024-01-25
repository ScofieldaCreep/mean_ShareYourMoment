import { AuthService } from './auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Post } from './posts/post.model';
import { HeaderComponent } from './header/header.component';
import { Auth } from 'mongodb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  // storedPosts: Post[] = [];

  // onPostAdded(post) {
  //   this.storedPosts.push(post);
  // }
  constructor(private authService : AuthService) {}
  ngOnInit() {
    this.authService.autoAuthUser();
  }
}
