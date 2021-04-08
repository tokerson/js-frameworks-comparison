/// <reference types="node" />

declare module 'src/shared/api' {
  export interface Post {
    id: number;
    user: {
      avatar: string;
      name: string;
    };
    content: string;
    createdAt: string;
  }

  export interface GetPostsOptions {
    searchTerm?: string;
    sortOption?: string;
  }

  export function getPosts(options?: GetPostsOptions): Post[];

  export function searchPosts(searchString: string): Post[];

  export function getPost(id: string): Post;
}
