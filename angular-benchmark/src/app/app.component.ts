import { Component } from '@angular/core';
import { getPosts } from 'src/shared/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../shared/styles/posts.css']
})
export class AppComponent {
  posts = getPosts();
}
