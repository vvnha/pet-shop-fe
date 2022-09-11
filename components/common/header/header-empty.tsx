import GroupIcon from '@/public/Group.svg';
import { Box, Container, Stack, SvgIcon, Typography } from '@mui/material';
import * as React from 'react';

export interface HeaderEmptyLayoutProps {}

export function HeaderEmptyLayout(props: HeaderEmptyLayoutProps) {
  return (
    <Box px={2} py={2}>
      <Container>
        <Stack alignItems="center" direction="row" justifyContent="space-between">
          <Stack direction="row" alignItems="center" textAlign="center" mr={2}>
            <SvgIcon
              component={GroupIcon}
              sx={{
                width: '50px',
                height: '47px',
              }}
              inheritViewBox
            />
            <Typography
              sx={{
                fontFamily: 'Pangolin',
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '32px',
                lineHeight: '37px',
                color: '#FFAA00',
              }}
            >
              Pethub
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
