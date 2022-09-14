import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';
export interface ProductSkeletonProps {}

export default function ProductSkeleton(props: ProductSkeletonProps) {
  return (
    <Box>
      <Skeleton animation="wave" variant="rectangular" width={228} height={300} />
      <Skeleton animation="wave" variant="text" sx={{ fontSize: '1rem' }} width={228} />
      <Skeleton animation="wave" variant="rectangular" width={228} height={80} />
      <Skeleton animation="wave" variant="text" sx={{ fontSize: '2rem' }} width={33} />
      <Skeleton animation="wave" variant="rectangular" width={126} height={40} />
    </Box>
  );
}
