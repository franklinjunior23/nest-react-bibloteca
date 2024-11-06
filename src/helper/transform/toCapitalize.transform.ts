import { Transform } from 'class-transformer';

export function ToCapitalized() {
  return Transform(({ value }) => {
    if (typeof value === 'string') {
      return value
        .split(' ')
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
        )
        .join(' ');
    }
    return value;
  });
}
