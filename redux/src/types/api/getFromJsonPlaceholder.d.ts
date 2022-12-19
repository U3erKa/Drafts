export type PostEntry = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type CommentEntry = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type AlbumEntry = {
  userId: number;
  id: number;
  title: string;
};

export type PhotoEntry = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type TodoEntry = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type UserEntry = {
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
