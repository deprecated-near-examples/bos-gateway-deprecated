import type { ReactNode } from 'react';

import { MainHeader } from '../MainHeader';

interface Props {
  children: ReactNode;
}

export function DefaultLayout({ children }: Props) {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
}
