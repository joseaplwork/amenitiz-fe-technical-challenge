export interface ChessMasterDTO {
  '@id': string;
  avatar: string;
  player_id: number;
  url: string;
  username: string;
  name: string;
  title: string;
  followers: number;
  country: string;
  last_online: number;
  joined: number;
  location: string;
  status: string;
  is_streamer: boolean;
  verified: boolean;
  league: string;
}

export class ChessMaster {
  public id: string = '';

  public avatar: string = '';

  public playerId: number = 0;

  public url: string = '';

  public name: string = '';

  public userName: string = '';

  public title: string = '';

  public country: string = '';

  public lastOnline: Date;

  public location: string;

  public followers: number;

  public joined: Date;

  public status: string = '';

  public isStreamer: boolean = false;

  public verified: boolean = false;

  public league: string = '';

  constructor(_dto: ChessMasterDTO) {
    this.id = _dto['@id'];
    this.avatar = _dto.avatar;
    this.playerId = _dto.player_id;
    this.url = _dto.url;
    this.userName = _dto.username;
    this.title = _dto.title;
    this.country = _dto.country;
    this.followers = _dto.followers;
    this.lastOnline = new Date(_dto.last_online * 1000);
    this.joined = new Date(_dto.joined * 1000);
    this.status = _dto.status;
    this.isStreamer = _dto.is_streamer;
    this.verified = _dto.verified;
    this.league = _dto.league;
    this.name = _dto.name;
    this.location = _dto.location;
  }
}
