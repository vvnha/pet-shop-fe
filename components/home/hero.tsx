import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';
import heroImg from '@/public/herocat.png';
import { useTrans } from '@/hooks';

export interface HeroProps {}

export default function Hero(props: HeroProps) {
  const trans = useTrans();
  return (
    <Box
      component="section"
      pt={{ xs: 4, md: 5, lg: 5 }}
      pb={{ xs: 4, md: 5, lg: 5 }}
      mt={1.5}
      bgcolor="rgba(255, 242, 179, 0.75)"
    >
      <Container>
        <Stack direction="row" justifyContent="center">
          <Stack
            direction={{
              xs: 'column-reverse',
              sm: 'row',
              md: 'row',
              lg: 'row',
            }}
            alignItems={{
              lg: 'flex-start',
              md: 'flex-start',
              xs: 'center',
            }}
            textAlign={{
              lg: 'left',
              md: 'left',
              xs: 'center',
            }}
            spacing={4}
          >
            <Box maxWidth="500px">
              <Typography
                component="h1"
                variant="h3"
                mb={5}
                sx={{
                  fontFamily: 'Pangolin',
                  fontWeight: 400,
                }}
              >
                {trans.home.slogan}
              </Typography>
              <Typography
                mb={{ xs: 3.5, md: 5 }}
                sx={{
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '19px',
                  lineHeight: '26px',
                  letterSpacing: '0.05em',
                  color: '#181817',
                }}
              >
                {trans.home.sloganDesc}
              </Typography>
              <Button variant="contained" size="large">
                Download Resume
              </Button>
            </Box>
            <Box
              sx={{
                minWidth: '300px',
                color: 'secondary.light',
              }}
            >
              <Image src={heroImg} layout="responsive" alt="avatar" />
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
