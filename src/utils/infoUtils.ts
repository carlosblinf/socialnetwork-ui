import { Author } from './types';

export const fullName = (author: Author) =>
  `${author.firstName} ${author.lastName}`;

export const getImageUrl = (gender: string): string =>
  gender === 'male'
    ? 'https://randomuser.me/api/portraits/men/78.jpg'
    : 'https://randomuser.me/api/portraits/women/79.jpg';
