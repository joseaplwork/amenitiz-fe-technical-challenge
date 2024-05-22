import { ErrorView } from '@app/shared/components';

import { EmptyView } from './components/empty-view.component';
import { List } from './components/list.component';
import { SkeletonView } from './components/skeleton-view.component';

interface Props {
  chessMasters: string[] | null;
  error: boolean;
  loading: boolean;
}

export function HomePage({ chessMasters, loading, error }: Props) {
  if (error) {
    return <ErrorView />;
  }

  if (loading || chessMasters === null) {
    return <SkeletonView />;
  }

  if (chessMasters?.length === 0) {
    return <EmptyView />;
  }

  return <List chessMasters={chessMasters} />;
}
