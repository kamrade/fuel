export function getDefaultPropertyValue(property) {
  switch (property) {
    case 'translateX':
      return 0;
    case 'translateY':
      return 0;
    case 'scale':
      return 1;
    case 'rotate':
      return 0;
    case 'opacity':
      return 1;
    default:
      return null;
  }
}
