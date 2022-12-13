export interface Post {
  id: string;
  author: Author;
  date: string;
  text: string;
  images?: Image[];
}

export interface Author {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string;
}

export interface Image {
  id: number;
  url: string;
}

export interface Comment {
  id: string;
  text: string;
  userId: string;
  author: {
    id: string;
    firstName: string;
    lastName: string;
    avatar: string;
  };
  date: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  role: string;
  avatar: string;
  coverImage: string;
  email: string;
  username: string;
  password?: string;
  gender: string;
}

export type NewUserFrom = {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  confirmPassword?: string;
  gender: string;
};

export type UserCredential = {
  username: string;
  password: string;
};
