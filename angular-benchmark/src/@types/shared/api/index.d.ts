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

  export function getPosts(): Post[];

  export function searchPosts(searchString: string): Post[];

  export function getPost(): Post;
}
