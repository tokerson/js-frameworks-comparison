/// <reference types="node" />

declare module 'src/shared/helpers/sortOptions' {
  interface SortOption {
    value: string;
    label: string;
  }
  export const SORT_OPTIONS: [SortOption];
  export const SORT_FILTERS: { [key: string]: string };
}
