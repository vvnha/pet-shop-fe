import { Box, Icon, Stack, SvgIcon, Typography } from '@mui/material';
import * as React from 'react';
import GroupIcon from '@/public/Group.svg';
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';

export function Footer() {
  const socialLinks = [
    { icon: Facebook, url: 'https://google.com' },
    { icon: Instagram, url: 'https://google.com' },
    { icon: Twitter, url: 'https://google.com' },
    { icon: LinkedIn, url: 'https://google.com' },
  ];
  return (
    <Box component="footer" py={2} textAlign="center">
      <Stack direction="row" alignItems="center" justifyContent="center" textAlign="center" mr={2}>
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
          Puphub
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="center">
        {socialLinks.map((item, index) => (
          <Box
            key={index}
            component="a"
            p={2}
            href={item.url}
            target="_blank" // open link a new tab
            rel="noopener noreferrer" // must set when use _blank
          >
            <Icon
              component={item.icon}
              sx={{
                fontSize: '32px',
              }}
            />
          </Box>
        ))}
      </Stack>
      <Typography
        sx={{
          fontFamily: 'Pangolin',
          fontStyle: 'normal',
        }}
      >
        Copyright ©{new Date().getFullYear()} All rights reserved
      </Typography>
    </Box>
  );
}
