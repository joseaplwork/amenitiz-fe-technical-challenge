import { ChessMaster } from '@app/shared/models';

import { Avatar } from './avatar.component';
import { VerifiedIcon } from './verified-icon.component';

interface Props {
  chessMaster: ChessMaster;
}

export function Header({ chessMaster }: Props) {
  const { avatar, name, userName, verified, url } = chessMaster;

  return (
    <div className="flex items-center">
      <Avatar source={avatar} title={name || userName} />
      <a target="_blank" href={url} rel="noreferrer">
        <h1 className="ml-5 mr-1 font-bold text-2xl">{name || userName}</h1>
      </a>
      {verified && <VerifiedIcon />}
    </div>
  );
}
