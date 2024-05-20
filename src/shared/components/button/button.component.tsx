import React from 'react';

interface Props {
  children: React.ReactNode;
}

export function Button({ children }: Props) {
  return <button type="button">{children}</button>;
}
