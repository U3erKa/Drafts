export interface PostsEntries {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface CommentsEntries {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface AlbumsEntries {
  userId: number;
  id: number;
  title: string;
}

export interface PhotosEntries {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface TodoEntries {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface UsersEntries {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: { lat: string; lng: string };
}
export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}