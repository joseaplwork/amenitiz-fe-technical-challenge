import { useEffect, useState } from 'react';

import { TextInformation } from './text-information.component';

interface Props {
  date: Date;
}

export function LastConnectedClock({ date }: Props) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const timeDifference = Math.abs(currentTime.getTime() - date.getTime());
  const seconds = Math.floor(timeDifference / 1000);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return (
    <TextInformation
      label="Last online"
      value={
        hours > 24
          ? 'more than a day ago'
          : `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
      }
    />
  );
}
