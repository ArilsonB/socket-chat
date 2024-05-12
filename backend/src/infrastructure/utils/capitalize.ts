function capitalize(input: string): string {
  return input
    .trim()
    .toLowerCase()
    .split(' ')
    .map((t) => t[0].toUpperCase() + t.slice(1))
    .join(' ');
}
