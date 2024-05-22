import { Link } from 'react-router-dom';

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
      <Link to="/" className="block text-primary-800 py-2 mb-5">
        {'< back to home'}
      </Link>
      <Header chessMaster={chessMaster} />
      <Content chessMaster={chessMaster} />
    </>
  );
}
