import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostPageComponent } from './postPage/postPage.component';
import { PostsPageComponent } from './postsPage/postsPage.component';

const routes: Routes = [
  {
    path: 'posts/:id',
    component: PostPageComponent,
  },
  {
    path: '',
    component: PostsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
