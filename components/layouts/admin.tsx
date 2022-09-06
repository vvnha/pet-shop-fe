import { LayoutProps } from '@/models';
import Link from 'next/link';
import * as React from 'react';

export function App({ children }: LayoutProps) {
  return (
    <div>
      <h1>Admin Layout</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/">
        <a>About</a>
      </Link>

      <div>{children}</div>
    </div>
  );
}
