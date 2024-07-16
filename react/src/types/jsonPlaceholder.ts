import type { JSONPLACEHOLDER_RESOURCES } from 'const';

export type JSONPlaceholderData = {
  [JSONPLACEHOLDER_RESOURCES.ALBUMS]: Album[];
  [JSONPLACEHOLDER_RESOURCES.COMMENTS]: Comment[];
  [JSONPLACEHOLDER_RESOURCES.PHOTOS]: Photo[];
  [JSONPLACEHOLDER_RESOURCES.POSTS]: Post[];
  [JSONPLACEHOLDER_RESOURCES.TODOS]: Todo[];
  [JSONPLACEHOLDER_RESOURCES.USERS]: User[];
};

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type Album = {
  userId: number;
  id: number;
  title: string;
};

export type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

export type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: { lat: string; lng: string };
};

export type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};
