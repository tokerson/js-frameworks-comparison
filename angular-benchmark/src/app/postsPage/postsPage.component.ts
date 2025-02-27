import { Component } from '@angular/core';
import { getPosts } from 'src/shared/api';
// @ts-ignore
import SearchIcon from 'src/shared/icons/search.svg';
// @ts-ignore
import { SORT_OPTIONS, SORT_FILTERS } from 'src/shared/helpers/sortOptions';

@Component({
  selector: 'postPage',
  templateUrl: './postsPage.component.html',
  styleUrls: ['../../shared/styles/posts.css', '../../shared/styles/search.css'],
})
export class PostsPageComponent {
  searchTerm = '';
  chosenSortOption = SORT_FILTERS.NONE;
  searchIcon = SearchIcon;
  posts = getPosts();

  get sortOptions() {
    return SORT_OPTIONS;
  }

  onSubmit() {
    this.posts = getPosts({
      searchTerm: this.searchTerm,
      sortOption: this.chosenSortOption,
    });
  }
}
