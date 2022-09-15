import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';
export interface ProductDetailSkeletonProps {}

export default function ProductDetailSkeleton(props: ProductDetailSkeletonProps) {
  return (
    <Box>
      <Stack direction="row">
        <Stack direction="column">
          <Stack>
            <Skeleton animation="wave" variant="rectangular" width={392} height={392} />
          </Stack>
          <Stack direction="row" spacing={1} justifyContent="space-between">
            <Skeleton animation="wave" variant="rectangular" width={62} height={62} />
            <Skeleton animation="wave" variant="rectangular" width={62} height={62} />
            <Skeleton animation="wave" variant="rectangular" width={62} height={62} />
            <Skeleton animation="wave" variant="rectangular" width={62} height={62} />
            <Skeleton animation="wave" variant="rectangular" width={62} height={62} />
          </Stack>
        </Stack>
        <Stack direction="column" ml={1}>
          <Stack direction="column">
            <Skeleton animation="wave" variant="rectangular" width={720} height={49} />
            <Skeleton
              animation="wave"
              variant="rectangular"
              width={40}
              height={20}
              sx={{
                mt: 1,
              }}
            />
            <Skeleton animation="wave" variant="text" sx={{ fontSize: '1rem' }} width={720} />
            <Skeleton animation="wave" variant="text" sx={{ fontSize: '1rem' }} width={720} />
            <Skeleton animation="wave" variant="text" sx={{ fontSize: '1rem' }} width={720} />
            <Skeleton animation="wave" variant="text" sx={{ fontSize: '1rem' }} width={720} />
            <Skeleton animation="wave" variant="rectangular" width={720} height={200} />
            <Skeleton
              animation="wave"
              variant="rectangular"
              width={153}
              height={50}
              sx={{ mt: 1 }}
            />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
