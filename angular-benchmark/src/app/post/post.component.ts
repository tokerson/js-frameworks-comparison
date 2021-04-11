import { Component, Input } from '@angular/core';
import { Post } from 'src/shared/api';
import { shortenPostContent } from 'src/shared/helpers/formatters';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['../../shared/styles/posts.css'],
})
export class PostComponent {
  @Input() post!: Post;
  @Input() isOpen: boolean = false;

  get postContent() {
    return this.isOpen
      ? this.post.content
      : shortenPostContent(this.post.content);
  }
}
