import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { getPost, Post } from 'src/shared/api';

@Component({
  selector: 'postPage',
  templateUrl: './postPage.component.html',
  styleUrls: ['../../shared/styles/layout.css'],
})
export class PostPageComponent {
  // @ts-ignore
  post: Post;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.post = getPost(params.id);
    });
  }
}
