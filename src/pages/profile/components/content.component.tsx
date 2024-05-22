import { ChessMaster } from '@app/shared/models';

import { LastConnectedClock } from './last-connected-clock.component';
import { TextInformation } from './text-information.component';

interface Props {
  chessMaster: ChessMaster;
}

export function Content({ chessMaster }: Props) {
  const {
    playerId,
    followers,
    userName,
    joined,
    league,
    location,
    lastOnline,
  } = chessMaster;

  return (
    <div className="mt-5">
      <TextInformation label="Player ID" value={playerId} />
      <TextInformation label="Username" value={userName} />
      <TextInformation label="Followers" value={followers} />
      <TextInformation label="Joined" value={joined.toLocaleDateString()} />
      <TextInformation label="League" value={league} />
      <TextInformation label="Location" value={location} />
      <LastConnectedClock date={lastOnline} />
    </div>
  );
}
