export interface PostEntry extends WithId, WithTitle {
  userId: number;
  body: string;
}

export interface CommentEntry extends WithId, WithName {
  postId: number;
  email: string;
  body: string;
}

export interface AlbumEntry extends WithId, WithTitle {
  userId: number;
}

export interface PhotoEntry extends WithId, WithTitle {
  albumId: number;
  url: string;
  thumbnailUrl: string;
}

export interface TodoEntry extends WithId, WithTitle {
  userId: number;
  completed: boolean;
}

export interface UserEntry extends WithId, WithName {
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

export interface WithId {
  id: number;
}

export interface WithTitle {
  title: string;
}

export interface WithName {
  name: string;
}