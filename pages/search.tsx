import { MainLayout } from '@/components/layouts';
import { Box } from '@mui/material';
import * as React from 'react';

export interface SearchPageProps {}

export default function SearchPage(props: SearchPageProps) {
  return <Box>Search Page</Box>;
}

SearchPage.Layout = MainLayout;
