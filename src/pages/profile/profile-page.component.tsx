import { ErrorView } from '@app/shared/components';
import { ChessMaster } from '@app/shared/models';

import { Content } from './components/content.component';
import { Header } from './components/header.component';
import { SkeletonView } from './components/skeleton-view.component';

interface Props {
  loading: boolean;
  error: boolean;
  chessMaster: ChessMaster | null;
}

export function ProfilePage({ loading, error, chessMaster }: Props) {
  if (error) {
    return <ErrorView />;
  }

  if (loading || chessMaster === null) {
    return <SkeletonView />;
  }

  return (
    <>
      <Header chessMaster={chessMaster} />
      <Content chessMaster={chessMaster} />
    </>
  );
}
