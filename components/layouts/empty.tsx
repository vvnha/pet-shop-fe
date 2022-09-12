import { LayoutProps } from '@/models';
import Link from 'next/link';
import * as React from 'react';
import { Footer, HeaderEmptyLayout } from '@/components/common';
import { Box, Stack } from '@mui/material';

export function EmptyLayout({ children }: LayoutProps) {
  return (
    <Stack minHeight="100vh">
      <HeaderEmptyLayout />
      <Box component="main" flexGrow={1}>
        {children}
      </Box>

      <Footer />
    </Stack>
  );
}
