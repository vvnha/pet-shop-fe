import { AdminLayout } from '@/components/layouts';
import { Box, Typography } from '@mui/material';
import * as React from 'react';

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  return (
    <Box>
      <Typography component="h1" variant="h3" color="red">
        About
      </Typography>
    </Box>
  );
}

AboutPage.Layout = AdminLayout;
