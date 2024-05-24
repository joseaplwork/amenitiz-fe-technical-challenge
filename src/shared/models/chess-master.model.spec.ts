import { ChessMaster, ChessMasterDTO } from './chess-master.model';

describe('ChessMaster', () => {
  const chessMasterDTO: ChessMasterDTO = {
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

  it('should create a ChessMaster instance with provided values', () => {
    const chessMaster = new ChessMaster(chessMasterDTO);

    expect(chessMaster.id).toBe(chessMasterDTO['@id']);
    expect(chessMaster.avatar).toBe(chessMasterDTO.avatar);
    expect(chessMaster.playerId).toBe(chessMasterDTO.player_id);
    expect(chessMaster.url).toBe(chessMasterDTO.url);
    expect(chessMaster.name).toBe(chessMasterDTO.name);
    expect(chessMaster.userName).toBe(chessMasterDTO.username);
    expect(chessMaster.title).toBe(chessMasterDTO.title);
    expect(chessMaster.country).toBe(chessMasterDTO.country);
    expect(chessMaster.lastOnline).toEqual(
      new Date(chessMasterDTO.last_online * 1000),
    );
    expect(chessMaster.location).toBe(chessMasterDTO.location);
    expect(chessMaster.followers).toBe(chessMasterDTO.followers);
    expect(chessMaster.joined).toEqual(new Date(chessMasterDTO.joined * 1000));
    expect(chessMaster.status).toBe(chessMasterDTO.status);
    expect(chessMaster.isStreamer).toBe(chessMasterDTO.is_streamer);
    expect(chessMaster.verified).toBe(chessMasterDTO.verified);
    expect(chessMaster.league).toBe(chessMasterDTO.league);
  });
});
