import { cache } from 'react';

export enum JSONPLACEHOLDER_RESOURCES {
  POSTS = 'posts',
  COMMENTS = 'comments',
  ALBUMS = 'albums',
  PHOTOS = 'photos',
  TODOS = 'todos',
  USERS = 'users',
}

export const getFromJsonPlaceholder = cache(_getFromJsonPlaceholder);

export async function _getFromJsonPlaceholder<T>(resource: JSONPLACEHOLDER_RESOURCES): Promise<T> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/${resource}`);
  return await res.json();
}
