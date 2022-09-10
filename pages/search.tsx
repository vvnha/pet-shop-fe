import { MainLayout } from '@/components/layouts';
import Filter from '@/components/search/filter';
import { Box, Container } from '@mui/material';
import * as React from 'react';

export interface SearchPageProps {}

export default function SearchPage(props: SearchPageProps) {
  return (
    <Box>
      <Container>
        <Filter />
      </Container>
    </Box>
  );
}

SearchPage.Layout = MainLayout;
