import { ChessMaster, ChessMasterDTO } from '@app/shared/models';

const api = 'https://api.chess.com';

export async function fetchAllChessMasters(): Promise<string[]> {
  const response = await fetch(`${api}/pub/titled/GM`);

  const data = await response.json();

  return data.players;
}

export async function fetchChessMaster(id: string): Promise<ChessMaster> {
  const response = await fetch(`${api}/pub/player/${id}`);

  const data: ChessMasterDTO = await response.json();

  return new ChessMaster(data);
}
