import { LayoutProps } from '@/models';
import Link from 'next/link';
import * as React from 'react';

export function EmptyLayout({ children }: LayoutProps) {
  return (
    <>
      <h1>Empty Layout</h1>

      <div>{children}</div>
    </>
  );
}
