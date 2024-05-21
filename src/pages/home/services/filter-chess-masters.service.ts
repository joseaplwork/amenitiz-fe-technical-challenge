export function filterChessMasters(
  chessMasters: string[] | null,
  word: string | null,
): string[] | null {
  if (!chessMasters) {
    return null;
  }

  if (!word) {
    return chessMasters;
  }

  return chessMasters.filter((chessMaster) => chessMaster.match(word));
}
