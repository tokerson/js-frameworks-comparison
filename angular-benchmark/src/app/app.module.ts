import { FormsModule } from '@angular/forms';
import { PostComponent } from './post/post.component';
import { PostsPageComponent } from './postsPage/postsPage.component';
import { PostPageComponent } from './postPage/postPage.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  declarations: [
    AppComponent,
    PostPageComponent,
    PostsPageComponent,
    PostComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
