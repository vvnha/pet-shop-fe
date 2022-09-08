import { LayoutProps } from '@/models';
import { Box, Stack } from '@mui/material';
// import Link from 'next/link';
import * as React from 'react';
import { Header, Footer } from '@/components/common';

export function MainLayout({ children }: LayoutProps) {
  return (
    <Stack minHeight="100vh">
      <Header />

      {/* <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link> */}
      <Box component="main" flexGrow={1}>
        {children}
      </Box>

      <Footer />
    </Stack>
  );
}
