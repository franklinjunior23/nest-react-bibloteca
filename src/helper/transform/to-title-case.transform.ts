import { Transform } from 'class-transformer';

export function ToTitleCase() {
  return Transform(({ value }) => {
    if (typeof value !== 'string') {
      return value;
    }
    return value
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  });
}
