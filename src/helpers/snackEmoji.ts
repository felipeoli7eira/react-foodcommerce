export default function snackEmoji(name: string) {
  switch (name) {
    case 'burger':
      return '🍔';

    case 'pizza':
      return '🍕';

    case 'drinks':
      return '🍸';

    case 'ice-cream':
      return '🍧';

    default:
      return '🍩';
  }
};
