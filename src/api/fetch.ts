export enum JSONPLACEHOLDER_RESOURCES {
  POSTS = "posts",
  COMMENTS = "comments",
  ALBUMS = "albums",
  PHOTOS = "photos",
  TODOS = "todos",
  USERS = "users",
}

export async function getFromJsonPlaceholder(resource: JSONPLACEHOLDER_RESOURCES) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/${resource}`);
  const data = await res.json();
  return data;
}