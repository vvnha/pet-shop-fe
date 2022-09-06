import { MainLayout } from '@/components/layouts';
import * as React from 'react';

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
}

AboutPage.Layout = MainLayout;
