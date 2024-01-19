import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
  //   posts = [
  //     { title: 'First Post', content: "1st post's content" },
  //     { title: 'Second Post', content: "2nd post's content" },
  //     { title: 'Third Post', content: "3rd post's content" },
  //   ];
  @Input() posts = [];
  
}
