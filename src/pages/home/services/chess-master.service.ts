const api = 'https://api.chess.com';

export async function fetchAllChessMasters(): Promise<string[]> {
  const response = await fetch(`${api}/pub/titled/GM`);

  const data = await response.json();

  return data.players;
}
