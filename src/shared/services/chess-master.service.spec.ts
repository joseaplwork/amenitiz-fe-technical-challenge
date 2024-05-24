import { ChessMaster, ChessMasterDTO } from '../models';

import { fetchAllChessMasters, fetchChessMaster } from './chess-master.service';

describe('ChessMasterService', () => {
  describe('fetchAllChessMasters', () => {
    it('should return an array of chess masters', async () => {
      const expectedChessMasters = [
        'Magnus Carlsen',
        'Garry Kasparov',
        'Viswanathan Anand',
      ];

      const spy = jest.spyOn(global, 'fetch').mockResolvedValue({
        json: jest.fn().mockResolvedValue({ players: expectedChessMasters }),
      } as any);

      const result = await fetchAllChessMasters();

      expect(spy).toHaveBeenCalledWith('https://api.chess.com/pub/titled/GM');
      expect(result).toEqual(expectedChessMasters);
    });
  });

  describe('fetchChessMaster', () => {
    it('should return a chess master by id', async () => {
      // Mock the API response
      const mockChessMasterDTO: ChessMasterDTO = {
        '@id': '1',
        avatar: 'avatar.jpg',
        player_id: 123,
        url: 'https://example.com',
        username: 'chessplayer',
        name: 'Chess Player',
        title: 'Grandmaster',
        followers: 1000,
        country: 'United States',
        last_online: 1634567890,
        joined: 1630000000,
        location: 'New York',
        status: 'Active',
        is_streamer: true,
        verified: true,
        league: 'World Chess Championship',
      };
      const spy = jest.spyOn(global, 'fetch').mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockChessMasterDTO),
      } as any);

      const result = await fetchChessMaster('1');

      expect(spy).toHaveBeenCalledWith('https://api.chess.com/pub/player/1');
      expect(result).toEqual(new ChessMaster(mockChessMasterDTO));
    });
  });
});
