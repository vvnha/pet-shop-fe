import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

export interface LayoutProps {
  children?: ReactNode;
}

export type NextPageWithLayout = NextPage & {
  Layout?: (props: LayoutProps) => ReactElement;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export type ApiResponseData<T> = {
  value: T;
  values: T[];
  total: number;
  success: boolean;
  message: string;
  pagination: {
    _page: number;
    _limit: number;
    _totalRows: number;
  };
  created_date: string;
};
