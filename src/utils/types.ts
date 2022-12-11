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
