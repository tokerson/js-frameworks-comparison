import { Component } from '@angular/core';
import { getPosts } from 'src/shared/api';
// @ts-ignore
import SearchIcon from 'src/shared/icons/search.svg';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../shared/styles/posts.css', '../shared/styles/search.css'],
})
export class AppComponent {
  searchTerm = '';
  searchIcon = SearchIcon;
  posts = getPosts();

  onSubmit() {
    console.log('submit', this.searchTerm);
    this.posts = getPosts({ searchTerm: this.searchTerm });
  }
}
