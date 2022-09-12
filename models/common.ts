import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { EmotionCache } from '@emotion/react';
import { Product } from './product';

export interface LayoutProps {
  children?: ReactNode;
}

export type NextPageWithLayout = NextPage & {
  Layout?: (props: LayoutProps) => ReactElement;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  emotionCache?: EmotionCache;
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

export type CartItemType = {
  product: Product | null;
  quantity: number;
};

export type OrderItemType = {
  product: Product | null;
  quantity: number;
  priceAtBuyTime: number;
  promotion: [];
};

export type OrderInputType = {
  product_list: { product: string; quantity: number; promorion?: [] }[];
  promotion_list: [];
};
