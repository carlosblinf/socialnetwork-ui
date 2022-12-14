import { Author, User } from './types';

export const fullName = (author: Author | User) =>
  `${author.firstName} ${author.lastName}`;

export const toRelativeTime = (dateString: string, locale = 'en') => {
  const date = new Date(dateString);

  // Calculate the elapsed time in milliseconds
  const elapsedMilliseconds = Date.now() - date.getTime();

  // Calculate the number of seconds elapsed
  const elapsedSeconds = Math.round(elapsedMilliseconds / 1000);

  // If less than 60 seconds have elapsed, show "just now"
  if (elapsedSeconds < 60) {
    return locale === 'en' ? 'just now' : 'justo ahora';
  }

  // less than 60 minutes, show minutes
  if (elapsedSeconds < 3600) {
    const elapsedMinutes = Math.round(elapsedSeconds / 60);
    return locale === 'en'
      ? `${elapsedMinutes} minutes ago`
      : ` Hace ${elapsedMinutes} minutos`;
  }

  // less than 24 hours, show hours
  if (elapsedSeconds < 86400) {
    const elapsedHours = Math.round(elapsedSeconds / 3600);
    return locale === 'en'
      ? `${elapsedHours} hours ago`
      : ` Hace ${elapsedHours} horas`;
  }

  // more than 24 hours, show days
  const elapsedDays = Math.round(elapsedSeconds / 86400);
  return locale === 'en'
    ? `${elapsedDays} days ago`
    : ` Hace ${elapsedDays} días`;
};

export const getImageUrl = (gender: string): string =>
  gender === 'male' ? '/user_m.jpg' : '/user_f.jpg';
